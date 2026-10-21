import { _decorator, Component, Node, Prefab, NodePool, instantiate, Vec3, Vec2, ParticleSystem2D, UIOpacity, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BubbleManager')
export class BubbleManager extends Component {
    private static _instance: BubbleManager | null = null;

    @property({ type: Prefab, tooltip: '泡のPrefab' })
    public bubblePrefab: Prefab = null!;

    @property({ tooltip: '事前にプールに生成しておく個数' })
    public initialPoolSize: number = 50;

    private pool: NodePool = new NodePool();

    onLoad() {
        // シングルトンの登録
        if (BubbleManager._instance && BubbleManager._instance !== this) {
            this.node.destroy();
            return;
        }
        BubbleManager._instance = this;

        // 初回ラグ（スパイク）を防ぐため、事前にプールを作成しておく（ウォームアップ）
        this.initPool();
    }

    onDestroy() {
        if (BubbleManager._instance === this) {
            BubbleManager._instance = null;
        }
        // シーン破棄時にプール内のノードをクリア
        this.pool.clear();
    }

    /**
     * プールの初期化
     */
    private initPool() {
        if (!this.bubblePrefab) return;
        for (let i = 0; i < this.initialPoolSize; i++) {
            const node = instantiate(this.bubblePrefab);
            this.pool.put(node);
        }
    }

    /**
     * プールからノードを取得（足りなければ新規生成）
     */
    private getBubbleNode(): Node {
        let node = this.pool.get();
        if (!node) {
            node = instantiate(this.bubblePrefab);
        }
        return node;
    }

    /**
     * ノードをプールへ返却（回収）
     */
    public recycle(node: Node) {
        if (node && node.isValid) {
            node.removeFromParent();
            this.pool.put(node);
        }
    }

    /**
     * インスタンスメソッド: 指定位置から泡を放出する
     * @param pos 発生座標 (Vec3 または Vec2)
     * @param parentNode 生成先の親ノード（省略時は BubbleManager のノード）
     */
    public bubbling(pos: Vec3 | Vec2, parentNode?: Node) {
        if (!this.bubblePrefab) {
            console.error('[BubbleManager] bubblePrefab がインスペクターでアサインされていません。');
            return;
        }

        const bubbleNode = this.getBubbleNode();
        const targetParent = parentNode || this.node;
        bubbleNode.setParent(targetParent);

        // 座標のセット
        if (pos instanceof Vec2) {
            bubbleNode.setPosition(pos.x, pos.y, 0);
        } else {
            bubbleNode.setPosition(pos);
        }

        // --- パターン A: ParticleSystem2D がついていればパーティクル再生 ---
        const ps = bubbleNode.getComponent(ParticleSystem2D);
        if (ps) {
            ps.resetSystem();
            
            // 再生時間（Duration + Life）が過ぎたらプールに返却
            const duration = ps.duration > 0 ? ps.duration : 0.1;
            const maxLife = ps.life + ps.lifeVar;
            const totalTime = duration + maxLife;

            this.scheduleOnce(() => {
                ps.stopSystem();
                this.recycle(bubbleNode);
            }, totalTime);
            return;
        }

        // --- パターン B: 通常の画像ノードの場合（Tweenでポコッと浮かんで消える演出） ---
        bubbleNode.setScale(v3(0, 0, 1));
        
        let opacity = bubbleNode.getComponent(UIOpacity);
        if (!opacity) {
            opacity = bubbleNode.addComponent(UIOpacity);
        }
        opacity.opacity = 255;

        // ランダムに少しゆらぎながら上にポコッと浮き上がる
        const startPos = bubbleNode.position.clone();
        const targetY = startPos.y + 40 + Math.random() * 20;
        const targetX = startPos.x + (Math.random() - 0.5) * 30;

        // スケールと移動アニメーション
        tween(bubbleNode)
            .to(0.1, { scale: v3(1.2, 1.2, 1) }, { easing: 'backOut' })
            .to(0.35, { scale: v3(0.8, 0.8, 1), position: v3(targetX, targetY, 0) })
            .start();

        // フェードアウトと回収
        tween(opacity)
            .to(0.25, { opacity: 255 })
            .to(0.2, { opacity: 0 })
            .call(() => {
                this.recycle(bubbleNode);
            })
            .start();
    }

    /**
     * クラスから直接1行で呼び出せる静的ショートカット
     * @param pos 発生座標 (Vec3 または Vec2)
     * @param parentNode 生成先の親ノード（省略可）
     */
    public static bubbling(pos: Vec3 | Vec2, parentNode?: Node) {
        if (this._instance) {
            this._instance.bubbling(pos, parentNode);
        } else {
            console.warn('[BubbleManager] シーン内に BubbleManager ノードが存在しないか、初期化されていません。');
        }
    }
}