import { _decorator, Component, Vec3, resources, instantiate, Prefab, tween, Node, log} from 'cc';
const { ccclass, property } = _decorator;
import { MemeData } from './logic/MemeData';
import { Manager } from './Manager';
import { AnimationAsync } from './utils/AnimationAsync';
import { WolfMenu } from './ui/wolf/WolfMenu';
import { BubbleManager } from './BubbleManager';

@ccclass('WolfEvent')
export class WolfEvent extends Component {
    private wolfPrefab: Prefab | null = null;
    private radiusX: number = 250;
    private radiusY: number = 180;
    private center: Vec3 = new Vec3(320, -90, 0); // 楕円の中心座標
    @property(WolfMenu)
    private wolfmenu: WolfMenu;
    private wolfs: Node[] = [];

    @property(Node)
    private punchNode: Node;

    private wolfpos: Vec3[] = [
        new Vec3(100, -250, 0),
        new Vec3(200, -90, 0),
        new Vec3(300, -250, 0),
        new Vec3(400, -90, 0),
        new Vec3(500, -250, 0)
    ];
    onLoad() {
        this.wolfPrefab = resources.get('prefab/おおかみ', Prefab);
        this.wolfmenu.onBattle(
            () => {
                Manager.battle(this.wolfs.length);
            }
        );
        this.wolfmenu.onSacrifice(this.sacrifice.bind(this));
        this.wolfmenu.onGodhand(this.godhand.bind(this));
        Manager.onWolf(this.wolfevent.bind(this));
        Manager.onFinEvent(this.finEvent.bind(this));
        Manager.onBattle(this.battle.bind(this));
    }
    async finEvent() {
        await Promise.all(this.wolfs.map((wolf) => {
            // tweenでみぎから左に移動させる
            return new Promise<void>((resolve) => {
                const tweenInstance = tween(wolf)
                    .to(1, { position: new Vec3(800, -90, 0) })
                    .call(() => {
                        wolf.destroy();
                        resolve();
                    })
                    .start();
            });
        }));
        this.wolfs = [];
    }

    async wolfevent(wolfnum: number) {
        for (let i = 0; i < wolfnum; i++) {
            const child = instantiate(this.wolfPrefab);
            this.node.addChild(child);
            this.wolfs.push(child);
        }
        await Promise.all(this.wolfs.map((wolf, i) => {
            // tweenでみぎから左に移動させる
            wolf.setPosition(800, -90, 0);
            return new Promise<void>((resolve) => {
                log(i);
                const tweenInstance = tween(wolf)
                    .to(1, { position: this.wolfpos[i].clone().add(this.getRandomVec3(50)) })
                    .call(() => {
                        resolve();
                    })
                    .start();
            });
        }));
        this.wolfmenu.showWolfMenu();
    }

    wolfMoveTo(wolf: Node, position: Vec3) {
        tween(wolf)
                .to(1, { position })
                .start();
        
    }

    punch(x: number) {
        this.punchNode.active = true;
        this.punchNode.setPosition(new Vec3(x, -90, 0).add(this.getRandomVec3(50)));
        this.punchNode.setScale(new Vec3(0.1, 0.1, 1));
        // うかびあがるようにでかくする
        tween(this.punchNode)
            .to(0.02, { scale: new Vec3(1, 1, 1) })
            .to(0.02, { scale: new Vec3(0.5, 0.5, 1) })
            .call(() => {
                this.punchNode.active = false;
            })
            .start();
    }

    wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async battle(battleResult: {event: string, meme: MemeData, wolf: number, memeHp: number, wolfHp: number}[]) {
        for (let result of battleResult) {
            log(result.event);
            switch (result.event) {
                case "start":
                    // 戦うオオカミ、めぇめぇを中央に移動
                    result.meme.battleStart();
                    this.wolfMoveTo(this.wolfs[result.wolf], new Vec3(50, -90, 0));
                    await this.wait(1000);
                    break;
                case "memeAttack":
                    this.punch(50);
                    await this.wait(40);
                    break;
                case "wolfAttack":
                    this.punch(50);
                    await this.wait(40);
                    break;
                case "memeDead":
                    await BubbleManager.bubbling(new Vec3(640-50, 360-90, 0), 10, 'wata', 'circle');
                    break;
                case "wolfDead":
                    await BubbleManager.bubbling(new Vec3(640 + 50, 360-90, 0), 10, 'wata', 'circle');
                    break;
                case "escape":
                    break;
                case "win":
                    break;
            }
        }
    }

    async sacrifice() {
    }

    async godhand() {
    }

    getRandomVec3 (value: number) {
        return new Vec3(
            Math.random() * value - value / 2,
            Math.random() * value - value / 2,
            0
        );
    }

    update() {
    }
}