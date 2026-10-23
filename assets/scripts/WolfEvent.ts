import { _decorator, Component, Vec3, resources, instantiate, Prefab, tween, Node, log} from 'cc';
const { ccclass, property } = _decorator;
import { MemeData } from './logic/MemeData';
import { Manager } from './Manager';
import { AnimationAsync } from './utils/AnimationAsync';
import { WolfMenu } from './ui/wolf/WolfMenu';

@ccclass('WolfEvent')
export class WolfEvent extends Component {
    private wolfPrefab: Prefab | null = null;
    private radiusX: number = 250;
    private radiusY: number = 180;
    private center: Vec3 = new Vec3(320, -90, 0); // 楕円の中心座標
    @property(WolfMenu)
    private wolfmenu: WolfMenu;
    private wolfs: Node[] = [];

    private wolfpos: Vec3[] = [
        new Vec3(100, -250, 0),
        new Vec3(200, -90, 0),
        new Vec3(300, -250, 0),
        new Vec3(400, -90, 0),
        new Vec3(500, -250, 0)
    ];
    onLoad() {
        this.wolfPrefab = resources.get('prefab/おおかみ', Prefab);
        this.wolfmenu.onBattle(this.battle.bind(this));
        this.wolfmenu.onSacrifice(this.sacrifice.bind(this));
        this.wolfmenu.onGodhand(this.godhand.bind(this));
        Manager.onWolf(this.wolfevent.bind(this));
        Manager.onFinEvent(this.finEvent.bind(this));
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

    async battle() {
    }

    async sacrifice() {
    }

    async godhand() {
    }

    getRandomVec3 (value: number) {
        return new Vec3(
            Math.random() * value,
            Math.random() * value,
            0
        );
    }

    update() {
    }
}