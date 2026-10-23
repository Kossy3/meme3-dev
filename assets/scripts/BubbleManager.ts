import { _decorator, Component, Node, Prefab, NodePool, instantiate, Vec3, Vec2, UIOpacity, tween, Tween, v3 } from 'cc';
const { ccclass, property } = _decorator;
import { Bubble } from './Bubble';

@ccclass('BubbleManager')
export class BubbleManager extends Component {
    private static _instance: BubbleManager | null = null;

    @property({ type: Prefab, tooltip: '泡のPrefab' })
    public bubblePrefab: Prefab = null!;

    @property({ tooltip: '事前にプールに生成しておく個数' })
    public initialPoolSize: number = 50;

    @property({ tooltip: '1回の bubbling で出す泡の数' })
    public bubbleCount: number = 5;

    @property({ tooltip: '泡の出現位置のばらつき半径（ワールド単位）' })
    public spawnRadius: number = 25;

    @property({ tooltip: '泡ごとの出現ずらし時間（秒）' })
    public staggerInterval: number = 0.05;

    private pool: NodePool = new NodePool();

    onLoad() {
        if (BubbleManager._instance && BubbleManager._instance !== this) {
            this.node.destroy();
            return;
        }
        BubbleManager._instance = this;

        this.initPool();
    }

    onDestroy() {
        if (BubbleManager._instance === this) {
            BubbleManager._instance = null;
        }
        this.pool.clear();
    }

    private initPool() {
        if (!this.bubblePrefab) return;
        for (let i = 0; i < this.initialPoolSize; i++) {
            const node = instantiate(this.bubblePrefab);
            this.pool.put(node);
        }
    }

    private getBubbleNode(): Bubble {
        let node = this.pool.get();
        if (!node) {
            node = instantiate(this.bubblePrefab);
        }
        return node.getComponent(Bubble);
    }

    public recycle(bubble: Bubble) {
        const node = bubble.node;
        if (node && node.isValid) {
            Tween.stopAllByTarget(node);
            node.removeFromParent();
            this.pool.put(node);
        }
    }

    // ------------------------------------------------------------
    // Tween を Promise 化するヘルパー
    // ------------------------------------------------------------
    private playTween<T extends object>(t: Tween<T>): Promise<void> {
        return new Promise<void>((resolve) => {
            t.call(() => resolve()).start();
        });
    }

    private wait(seconds: number): Promise<void> {
        if (seconds <= 0) return Promise.resolve();
        return this.playTween(tween(this.node).delay(seconds));
    }

    // ------------------------------------------------------------

    /**
     * 指定位置から泡を複数放出する。すべての泡の演出が終わったら resolve。
     * @param pos 発生座標【ワールド座標】 (Vec3 または Vec2)
     * @param parentNode 生成先の親ノード（省略時は BubbleManager のノード）
     * @param count 泡の数（省略時は bubbleCount）
     * @param texture バブルのテクスチャ
     * @param logic バブルの動き方
     */
    public async bubbling(pos: Vec3 | Vec2, count?: number, texture: 'bubble' | 'wata' = "bubble", logic: "up"|"circle" = "up"): Promise<void> {
        if (!this.bubblePrefab) {
            console.error('[BubbleManager] bubblePrefab がインスペクターでアサインされていません。');
            return;
        }

        const worldPos = pos instanceof Vec2 ? v3(pos.x, pos.y, 0) : pos.clone();
        const n = count ?? this.bubbleCount;

        const tasks: Promise<void>[] = [];
        for (let i = 0; i < n; i++) {
            switch (logic) {
                case "up":
                   tasks.push(this.spawnUp(worldPos, i * this.staggerInterval, texture));
                    break;
                case "circle":
                    tasks.push(this.spawnCircle(worldPos, i * this.staggerInterval, texture));
                    break;
            }
        }
        await Promise.all(tasks);
    }

    /**
     * 泡1個ぶんの生成〜演出〜回収（放射状に拡散）
     * @param worldPos 発生中心のワールド座標
     * @param delay 開始遅延（秒）
     * @param type 泡の種類
     * @param angle 飛翔方向の角度（ラジアン）。指定しない場合はランダム
     * @param distance 飛翔距離。指定しない場合はランダムなブレを加えて移動
     */
    private async spawnCircle(
        worldPos: Vec3,
        delay: number,
        type: 'bubble' | 'wata',
        angle?: number,
        distance: number = 60
    ): Promise<void> {
        await this.wait(delay);
        if (!this.isValid) return;

        const bubble = this.getBubbleNode();
        Tween.stopAllByTarget(bubble); // プール再利用時の前回 Tween を停止
        bubble.node.active = true;
        switch (type) {
            case 'bubble':
                bubble.bubble();
                break;
            case 'wata':
                bubble.wata();
                break;
        }
        bubble.node.setParent(this.node);

        // 出現位置：中心のワールド座標に配置
        bubble.node.setWorldPosition(worldPos.x, worldPos.y, worldPos.z);
        bubble.node.setScale(v3(0, 0, 1));

        let opacity = bubble.getComponent(UIOpacity);
        if (!opacity) {
            opacity = bubble.addComponent(UIOpacity);
        }
        opacity.opacity = 255;

        // 放射状の角度と飛翔後の目標ローカル座標を算出
        const rad = angle ?? Math.random() * Math.PI * 2;
        const moveDist = distance + (Math.random() - 0.5) * 20; // 飛ぶ距離にゆらぎを付加
        const startPos = bubble.node.position.clone();
        const targetX = startPos.x + Math.cos(rad) * moveDist;
        const targetY = startPos.y + Math.sin(rad) * moveDist;

        const peakScale = 1.0 + Math.random() * 0.3;
        const endScale = peakScale * 0.5;

        try {
            await Promise.all([
                // スケール拡大後、減速しながら外側へ移動
                this.playTween(
                    tween(bubble.node)
                        .to(0.1, { scale: v3(peakScale, peakScale, 1) }, { easing: 'backOut' })
                        .to(0.3, { scale: v3(endScale, endScale, 1), position: v3(targetX, targetY, startPos.z) }, { easing: 'quadOut' })
                ),
                // 移動後半で消え込むフェードアウト
                this.playTween(
                    tween(opacity)
                        .delay(0.15)
                        .to(0.25, { opacity: 0 })
                ),
            ]);
        } finally {
            this.recycle(bubble);
        }
    }


    /**
     * 泡1個ぶんの生成〜演出〜回収
     */
    private async spawnUp(worldPos: Vec3, delay: number, type: 'bubble' | 'wata'): Promise<void> {
        await this.wait(delay);
        if (!this.isValid ) return;

        const bubble = this.getBubbleNode();
        Tween.stopAllByTarget(bubble); // プール再利用時の前回 Tween を念のため停止
        bubble.node.active = true;
        switch (type) {
            case 'bubble':
                bubble.bubble();
                break;
            case 'wata':
                bubble.wata();
                break;
        }
        bubble.node.setParent(this.node); // BubbleManager の子として追加

        // 出現位置：ワールド座標で指定（親の位置・スケールの影響を受けない）
        const angle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * this.spawnRadius; // 円内に均等に散らす
        bubble.node.setWorldPosition(
            worldPos.x + Math.cos(angle) * r,
            worldPos.y + Math.sin(angle) * r,
            worldPos.z
        );

        bubble.node.setScale(v3(0, 0, 1));

        let opacity = bubble.getComponent(UIOpacity);
        if (!opacity) {
            opacity = bubble.addComponent(UIOpacity);
        }
        opacity.opacity = 255;

        // ローカル座標で上方向へゆらぎながら浮き上がる
        const startPos = bubble.node.position.clone();
        const targetX = startPos.x + (Math.random() - 0.5) * 30;
        const targetY = startPos.y + 40 + Math.random() * 20;
        const peakScale = 1.0 + Math.random() * 0.4;
        const endScale = peakScale * 0.7;

        try {
            await Promise.all([
                // スケールと移動
                this.playTween(
                    tween(bubble.node)
                        .to(0.1, { scale: v3(peakScale, peakScale, 1) }, { easing: 'backOut' })
                        .to(0.35, { scale: v3(endScale, endScale, 1), position: v3(targetX, targetY, startPos.z) })
                ),
                // フェードアウト
                this.playTween(
                    tween(opacity)
                        .delay(0.25)
                        .to(0.2, { opacity: 0 })
                ),
            ]);
        } finally {
            this.recycle(bubble);
        }
    }

    /**
     * 静的ショートカット
     * 使用例: BubbleManager.bubbling(worldPos);  /  await BubbleManager.bubbling(worldPos);
     * @param pos 発生座標【ワールド座標】
     * @param parentNode 親ノード
     * @param count 発生数
     * @param texture バブルの種類
     * @param logic バブルの動き方
     */
    public static async bubbling(pos: Vec3 | Vec2, count?: number, texture: 'bubble' | 'wata' = 'bubble', logic: "up"|"circle" = "up"): Promise<void> {
        if (this._instance) {
            await this._instance.bubbling(pos, count, texture, logic);
        } else {
            console.warn('[BubbleManager] シーン内に BubbleManager ノードが存在しないか、初期化されていません。');
        }
    }
}