import { _decorator, Component, Node, Prefab, NodePool, instantiate, Vec3, v3, tween, UIOpacity, Quat, math } from 'cc';
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

    /**
     * 指定したターゲットに対して治療（注射器着弾＆バブル発生）を行う
     * @param target 治療対象のノード
     */
    public treatment(target: Node) {
        if (!this.syringePrefab || !target || !target.isValid) {
            console.error('[TreatmentManager] 無効なターゲットまたは Prefab 未設定です。');
            return;
        }

        const syringeNode = this.getSyringeNode();
        // 座標ズレを防ぐため、TreatmentManager の子要素として追加
        syringeNode.setParent(this.node);

        // --- 1. 位置と角度の計算（ワールド座標基準） ---
        const targetWorldPos = target.worldPosition.clone();
        const spawnWorldPos = targetWorldPos.clone().add(this.spawnOffset);

        // 出現位置に配置＆非表示状態でセットアップ
        syringeNode.setWorldPosition(spawnWorldPos);


        // 不透明度（UIOpacity）の初期化
        let opacity = syringeNode.getComponent(UIOpacity);
        if (!opacity) {
            opacity = syringeNode.addComponent(UIOpacity);
        }
        opacity.opacity = 0; // 出現直前まで隠す

        // --- 2. ランダム遅延時間（0 ～ 0.3秒） ---
        const randomDelay = Math.random() * 0.3;

        // --- 3. アニメーション（Tween）の発火 ---
        // A. 遅延後にフェードインして飛来
        tween(opacity)
            .delay(randomDelay)
            .to(0.05, { opacity: 255 })
            .start();

        // B. 右斜め上方からターゲット位置へ急降下着弾
        tween(syringeNode)
            .delay(randomDelay)
            .to(this.flyDuration, { worldPosition: targetWorldPos }, { easing: 'cubicIn' })
            .call(() => {
                // 【着弾の瞬間】
                
                // ① バブルをターゲット位置で発生（前回のBubbleManagerを呼び出し）
                BubbleManager.bubbling(targetWorldPos);

                // ② ターゲットを一瞬「ポコッ」と揺らすヒット演出（オプショナル）
                this.playTargetHitReaction(target);
            })
            // 着弾後に少し押し込むような演出を行ってから消える
            .to(0.08, { scale: v3(0.8, 0.8, 1) })
            .call(() => {
                // スケールを元に戻してプール回収
                syringeNode.setScale(v3(1, 1, 1));
                this.recycle(syringeNode);
            })
            .start();
    }

    /**
     * 着弾時にターゲットノードを一瞬縮ませて弾ませるリアクション
     */
    private playTargetHitReaction(target: Node) {
        if (!target || !target.isValid) return;

        const originalScale = target.scale.clone();
        tween(target)
            .to(0.05, { scale: v3(originalScale.x * 0.9, originalScale.y * 0.9, 1) })
            .to(0.1, { scale: originalScale }, { easing: 'backOut' })
            .start();
    }

    /**
     * 静的ショートカット（1行呼び出し用）
     */
    public static treatment(target: Node) {
        if (this._instance) {
            this._instance.treatment(target);
        } else {
            console.warn('[TreatmentManager] シーン内に TreatmentManager が配置されていません。');
        }
    }
}