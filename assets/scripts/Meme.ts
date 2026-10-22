import { _decorator, Component, Node, Vec3, math, log, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { MemeData } from './logic/MemeData';
import { MemeState } from './logic/MemeState';
import { TreatmentManager } from './TreatmentManager';

@ccclass('Meme')
export class Meme extends Component {
    private __data: MemeData | null = null;

    // 楕円の範囲設定
    private readonly radiusX: number = 500;
    private readonly radiusY: number = 180;
    private readonly center: Vec3 = new Vec3(0, -90, 0); // 楕円の中心座標

    // ランダムウォーク用変数
    private targetPos: Vec3 = new Vec3();
    private moveSpeed: number = 80;      // 移動速度
    private isWaiting: boolean = false;  // 立ち止まり中か
    private waitTimer: number = 0;       // 立ち止まりタイマー
    private isMigration: boolean = false;    // 移動中かどうかのフラグ

    @property(Node)
    private spriteNode: Node;

    spawn() {
        // 初期位置を楕円内のランダムな位置に設定
        const startPos = this.getRandomPointInEllipse(this.radiusX, this.radiusY);
        this.node.setPosition(startPos);
        // 最初の目的地を設定
        this.setNewTarget();
    }

    load(data: MemeData) {
        this.__data = data;
        this.__data.onGo(() => this.__go());
        this.__data.onStop(() => this.__stop());
        this.__data.onBack(() => this.__back());
        this.__data.onTreat(() => this.__treat());
    }

    start() {
        // spawnが呼ばれなかった場合の保険処理
        if (this.targetPos.equals(Vec3.ZERO)) {
            this.spawn();
        }
    }

    update(deltaTime: number) {
        if (!this.__data) return;

        // 死亡・離脱処理
        if (this.__data.state === MemeState.DEATH || this.__data.state === MemeState.LEAVE) {
            this.node.destroy();
            log("めぇめぇが死亡または離脱しました");
            return;
        }

        if (this.isMigration) {
            return; // 移動中は他の処理をスキップ
        }

        // 状態ごとの回転・動作（2Dの場合は node.angle を使用）
        if (this.__data.state === MemeState.WORKER) {
            this.node.angle = 0;
            this.updateRandomWalk(deltaTime);
        } else if (this.__data.state === MemeState.FESTIVAL) {
            this.node.angle = 90;
            this.updateRandomWalk(deltaTime);
        } else if (this.__data.state === MemeState.SCRAPIE) {
            this.node.angle = 270;
            this.updateRandomWalk(deltaTime);
        } else {
            this.node.angle = 180;
            this.updateRandomWalk(deltaTime);
        }
    }

    /**
     * 自然なランダムウォーク処理
     */
    private updateRandomWalk(dt: number) {
        // 立ち止まり（休憩）中の処理
        if (this.isWaiting) {
            this.waitTimer -= dt;
            if (this.waitTimer <= 0) {
                this.isWaiting = false;
                this.setNewTarget();
            }
            return;
        }

        // 現在地から目的地へ移動
        const currentPos = this.node.position;
        const distance = Vec3.distance(currentPos, this.targetPos);

        // 目的地に到達した場合（誤差5px以内）
        if (distance < 5) {
            this.isWaiting = true;
            this.waitTimer = math.randomRange(1.0, 3.0); // 1〜3秒間その場でたたずむ
        } else {
            // 目標に向かって滑らかに移動
            const newPos = new Vec3();
            Vec3.moveTowards(newPos, currentPos, this.targetPos, this.moveSpeed * dt);
            this.node.setPosition(newPos);
        }


            // 移動方向に応じて画像を反転させる
            if (this.targetPos.x < this.node.position.x) {
                this.spriteNode.setScale(1, 1, 1);
            } else {
                this.spriteNode.setScale(-1, 1, 1);
            }
    }

    /**
     * 楕円の内側に均等に分散するランダムな座標を取得
     */
    private getRandomPointInEllipse(rx: number, ry: number): Vec3 {
        // Math.sqrt を使うことで中心に偏らず均等に散らばる
        const r = Math.sqrt(Math.random());
        const angle = Math.random() * Math.PI * 2;
        
        const x = Math.cos(angle) * rx * r;
        const y = Math.sin(angle) * ry * r;
        // 中心座標を加算して楕円の中心を基準にする
        return new Vec3(x + this.center.x, y + this.center.y, 0);
    }

    private __go() {
        this.spriteNode.setScale(-1, 1, 1);
        this.isMigration = true;
    }
    private __stop() {
        this.isMigration = false;
    }

    private __back() {
        this.spriteNode.setScale(1, 1, 1);
        this.isMigration = true;
    }

    private async __treat() {
        await TreatmentManager.treatment(this.node);
    }

    /**
     * 次の目的地と移動速度をランダムに設定
     */
    private setNewTarget() {
        this.targetPos = this.getRandomPointInEllipse(this.radiusX, this.radiusY);
        // 個体差や歩幅感を出すために速度も少しバラつかせる（40〜100px/s）
        this.moveSpeed = math.randomRange(40, 100);
    }
}