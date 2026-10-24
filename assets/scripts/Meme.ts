import { _decorator, Component, Node, Vec3, math, log, Button, tween, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { MemeData } from './logic/MemeData';
import { MemeState } from './logic/MemeState';
import { TreatmentManager } from './TreatmentManager';
import {EatButton} from './ui/EatButton';
import { WolfEvent } from './WolfEvent';
import { BubbleManager } from './BubbleManager';

@ccclass('Meme')
export class Meme extends Component {
    private __data: MemeData | null = null;

    @property(EatButton)
    private eatUI: EatButton;
    @property(Button)
    private button: Button;

    // 楕円の範囲設定
    private radiusX: number = 500;
    private radiusY: number = 180;
    private center: Vec3 = new Vec3(0, -90, 0); // 楕円の中心座標

    // ランダムウォーク用変数
    private targetPos: Vec3 = new Vec3();
    private moveSpeed: number = 80;      // 移動速度
    private isWaiting: boolean = false;  // 立ち止まり中か
    private waitTimer: number = 0;       // 立ち止まりタイマー
    private isMigration: boolean = false;    // 移動中かどうかのフラグ
    private stopWork: boolean = false; // 作業中かどうかのフラグ

    @property(Node)
    private spriteNode: Node;
    @property(Node)
    private metNode: Node;
    @property(Node)
    private virusNode: Node;
    @property(Node)
    private festivalNode: Node;
    @property(Sprite)
    private memeSprite: Sprite;
    @property([SpriteFrame])
    private spriteFrames: SpriteFrame[] = [];

    spawn() {
        // 初期位置を楕円内のランダムな位置に設定
        const startPos = this.getRandomPointInEllipse(this.radiusX, this.radiusY);
        this.node.setPosition(startPos);
        // 最初の目的地を設定
        this.setNewTarget();
        this.eatUI.onClick(async () => {
            this.eatUI.hide();
            this.isMigration = true;
            this.dead();
            await Promise.all([
                WolfEvent.dropMeet(this.node, true),
                WolfEvent.dropCult(this.node)
            ]);
            if (Manager.memesCount > 2) {
                Manager.killMeme(this.__data);
            }
            this.isMigration = false;
            this.button.interactable = true;
        });
        Manager.onEvent(() => {
            if (!this.button) return;
            this.button.interactable = false;
            this.radiusX = 250;
            this.center = new Vec3(-320, -90, 0);
            this.isWaiting = false;
            this.setNewTarget();
            this.moveSpeed = 200;
        });
        Manager.onFinEvent(() => {
            if (!this.button) return;
            this.button.interactable = true;
            this.radiusX = 500;
            this.center = new Vec3(0, -90, 0);
            this.stopWork = false;
        });
        this.button.clickEvents.push(this.createHandler());
        this.__data.onBattleStart(()=> {
            this.stopWork = true;
            tween(this.node)
                .to(0.2, new Vec3(-50, -90, 0))
                .start();
        })
        this.__data.onHorner(() => {
            WolfEvent.dropCult(this.node);
        });
        this.__data.onLeave(() => {
        });
        this.__data.onDead(() => {
        });
        if (this.__data.growth == 0) {
            BubbleManager.bubbling(this.node.worldPosition, 5, 2, "up");
        }
    }

    async dead() {
        // yを縮小
        const beforeScale = this.node.scale.clone();
        tween(this.node)
            .to(0.2, { scale: new Vec3(beforeScale.x, 0, 1) })
            .start();
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'Meme';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async onClick() {
        if (Manager.memesCount > 2) {
            this.button.interactable = false;
            this.eatUI.show();
            await this.eatUI.wait(3000);
            if (this.eatUI && !this.button.interactable) {
                this.eatUI.hide();
                this.button.interactable = true;
            }
            
        }
        
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

        if (this.isMigration) {
            return; // 移動中は他の処理をスキップ
        }

        this.metNode.active = this.__data.state === MemeState.BUILDING;
        this.virusNode.active = this.__data.state === MemeState.SCRAPIE;
        this.festivalNode.active = this.__data.state === MemeState.FESTIVAL;
        this.memeSprite.spriteFrame = this.spriteFrames[Math.min(5, this.__data.growth)];
        this.updateRandomWalk(deltaTime);
    }
    /**
     * 自然なランダムウォーク処理
     */
    private updateRandomWalk(dt: number) {
        if (this.stopWork) {
            return; // 作業中はランダムウォークを停止
        }
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