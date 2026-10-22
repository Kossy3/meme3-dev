import { _decorator, Component, Node, Prefab, NodePool, instantiate, Vec3, v3, tween, Tween, UIOpacity } from 'cc';
import { BubbleManager } from './BubbleManager'; // 前回作成した BubbleManager

const { ccclass, property } = _decorator;

@ccclass('TreatmentManager')
export class TreatmentManager extends Component {
    private static _instance: TreatmentManager | null = null;

    @property({ type: Prefab, tooltip: '注射器のPrefab' })
    public syringePrefab: Prefab = null!;

    @property({ tooltip: '右斜め上方の出現オフセット位置 (X, Y, Z)' })
    public spawnOffset: Vec3 = v3(80, 80, 0);

    @property({ tooltip: '飛来にかかる時間（秒）' })
    public flyDuration: number = 0.2;

    @property({ tooltip: '初期プールサイズ' })
    public initialPoolSize: number = 5;

    private pool: NodePool = new NodePool();

    onLoad() {
        if (TreatmentManager._instance && TreatmentManager._instance !== this) {
            this.node.destroy();
            return;
        }
        TreatmentManager._instance = this;

        this.initPool();
    }

    onDestroy() {
        if (TreatmentManager._instance === this) {
            TreatmentManager._instance = null;
        }
        this.pool.clear();
    }

    private initPool() {
        if (!this.syringePrefab) return;
        for (let i = 0; i < this.initialPoolSize; i++) {
            const node = instantiate(this.syringePrefab);
            this.pool.put(node);
        }
    }

    private getSyringeNode(): Node {
        let node = this.pool.get();
        if (!node) {
            node = instantiate(this.syringePrefab);
        }
        return node;
    }

    public recycle(node: Node) {
        if (node && node.isValid) {
            node.removeFromParent();
            this.pool.put(node);
        }
    }

    // ------------------------------------------------------------
    // Tween を Promise 化するヘルパー
    // ------------------------------------------------------------

    /**
     * Tween を開始し、完了時に resolve する Promise を返す。
     * ※ Tween の対象ノードが破棄されると Tween は停止し、Promise は解決されないまま残る。
     *   そのため await 後は isValid チェックを行うこと。
     */
    private playTween<T extends object>(t: Tween<T>): Promise<void> {
        return new Promise<void>((resolve) => {
            t.call(() => resolve()).start();
        });
    }

    /** 指定秒数待機する（this.node の Tween を利用するので、ゲーム内時間・一時停止に追従する） */
    private wait(seconds: number): Promise<void> {
        if (seconds <= 0) return Promise.resolve();
        return this.playTween(tween(this.node).delay(seconds));
    }

    // ------------------------------------------------------------
    // 治療処理
    // ------------------------------------------------------------

    /**
     * 指定したターゲットに対して治療（注射器着弾＆バブル発生）を行う。
     * 演出がすべて完了した時点で resolve される。
     * @param target 治療対象のノード
     */
    public async treatment(target: Node): Promise<void> {
        if (!this.syringePrefab || !target || !target.isValid) {
            console.error('[TreatmentManager] 無効なターゲットまたは Prefab 未設定です。');
            return;
        }

        const syringeNode = this.getSyringeNode();
        // 座標ズレを防ぐため、TreatmentManager の子要素として追加
        syringeNode.setParent(this.node);

        try {
            // --- 1. 位置と初期状態のセットアップ（ワールド座標基準） ---
            const targetWorldPos = target.worldPosition.clone();
            const spawnWorldPos = targetWorldPos.clone().add(this.spawnOffset);
            syringeNode.setWorldPosition(spawnWorldPos);
            syringeNode.setScale(v3(1, 1, 1));

            let opacity = syringeNode.getComponent(UIOpacity);
            if (!opacity) {
                opacity = syringeNode.addComponent(UIOpacity);
            }
            opacity.opacity = 0; // 出現直前まで隠す

            // --- 2. ランダム遅延（0 ～ 0.3秒） ---
            await this.wait(Math.random() * 0.1);
            if (!this.isValid || !syringeNode.isValid) return;

            // --- 3. フェードインしつつ、右斜め上方からターゲットへ急降下 ---
            const fadeIn = this.playTween(tween(opacity).to(0.05, { opacity: 255 }));
            const fly = this.playTween(
                tween(syringeNode).to(this.flyDuration, { worldPosition: targetWorldPos }, { easing: 'cubicIn' })
            );
            await Promise.all([fadeIn, fly]);
            if (!this.isValid || !syringeNode.isValid) return;

            // --- 4. 着弾の瞬間 ---
            // ① バブルをターゲット位置で発生
            BubbleManager.bubbling(targetWorldPos);

            // ② ターゲットのヒット演出と、注射器の押し込み演出を並行して実行
            await Promise.all([
                this.playTargetHitReaction(target),
                this.playTween(tween(syringeNode).to(0.08, { scale: v3(0.8, 0.8, 1) })),
            ]);
        } finally {
            // 正常終了・中断・例外のいずれでもプールへ回収
            if (syringeNode.isValid) {
                syringeNode.setScale(v3(1, 1, 1));
                this.recycle(syringeNode);
            }
        }
    }

    /**
     * 着弾時にターゲットノードを一瞬縮ませて弾ませるリアクション
     */
    private async playTargetHitReaction(target: Node): Promise<void> {
        if (!target || !target.isValid) return;

        const originalScale = target.scale.clone();
        await this.playTween(
            tween(target)
                .to(0.05, { scale: v3(originalScale.x * 0.9, originalScale.y * 0.9, 1) })
                .to(0.1, { scale: originalScale }, { easing: 'backOut' })
        );
    }

    /**
     * 複数ターゲットを同時に治療し、すべて完了したら resolve する。
     */
    public async treatmentAll(targets: Node[]): Promise<void> {
        await Promise.all(targets.map((t) => this.treatment(t)));
    }

    /**
     * 静的ショートカット（1行呼び出し用）
     * 使用例: await TreatmentManager.treatment(node);
     */
    public static async treatment(target: Node): Promise<void> {
        if (this._instance) {
            await this._instance.treatment(target);
        } else {
            console.warn('[TreatmentManager] シーン内に TreatmentManager が配置されていません。');
        }
    }
}