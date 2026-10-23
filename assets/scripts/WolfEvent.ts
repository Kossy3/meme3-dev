import { _decorator, Component, Vec3, resources, instantiate, Prefab, tween, Node, log, Sprite, Color,} from 'cc';
const { ccclass, property } = _decorator;
import { MemeData } from './logic/MemeData';
import { Manager } from './Manager';
import { AnimationAsync } from './utils/AnimationAsync';
import { WolfMenu } from './ui/wolf/WolfMenu';

@ccclass('WolfEvent')
export class WolfEvent extends Component {
    private static _instance: WolfEvent | null = null;
    private wolfPrefab: Prefab | null = null;
    private meet: Prefab | null = null;
    private rotten: Prefab | null = null;
    private cult: Prefab | null = null;
    private devineSord: Prefab | null = null;
    private radiusX: number = 250;
    private radiusY: number = 180;
    private center: Vec3 = new Vec3(320, -90, 0); // 楕円の中心座標
    @property(WolfMenu)
    private wolfmenu: WolfMenu;
    private wolfs: Node[] = [];
    @property(Node)
    private foodLabel: Node;
    @property(Node)
    private cultLabel: Node;

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
        WolfEvent._instance = this;
        this.meet = resources.get('prefab/肉', Prefab);
        this.cult = resources.get('prefab/神秘', Prefab);
        this.wolfPrefab = resources.get('prefab/おおかみ', Prefab);
        this.rotten = resources.get('prefab/腐った肉', Prefab);
        this.devineSord = resources.get('prefab/剣', Prefab);
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
                .to(0.2, { position })
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
    
    static async dropMeet(wolf: Node, rotten: boolean = false): Promise<void> {
        const instance = WolfEvent._instance;
        if (!wolf || !wolf.isValid) return;
        // wolf は後で destroy するので、位置は先に控えておく（ワールド座標で統一）
        const origin = wolf.worldPosition.clone();
    
        // --- ドロップアイテム生成（狼のいた位置） ---
        const meat = instantiate(rotten ? instance.rotten : instance.meet);
        instance.node.addChild(meat);
        meat.setWorldPosition(origin);
        await this.dropTo(meat, origin, 0.3);
        await this.moveArc(meat, instance.foodLabel.worldPosition, 0.5);
        meat.destroy();
    }

    static async dropCult(wolf: Node): Promise<void> {
        const instance = WolfEvent._instance;
        if (!wolf || !wolf.isValid) return;
    
        // wolf は後で destroy するので、位置は先に控えておく（ワールド座標で統一）
        const origin = wolf.worldPosition.clone();
    
        // --- ドロップアイテム生成（狼のいた位置） ---
    
        const cult = instantiate(instance.cult);
        instance.node.addChild(cult);
        cult.setWorldPosition(origin);
        await this.moveArc(cult, instance.cultLabel.worldPosition, 1);
        cult.destroy();
    }

        /** Sprite の color を透明にしてフェードアウト */
    private fadeOutSprite(node: Node, duration: number): Promise<void> {
        return new Promise<void>((resolve) => {
            // Color は 0〜255 の範囲（0〜1 ではない）
            tween(node)
                .to(duration, { scale: new Vec3(1, 0, 1) })
                .call(() => resolve())
                .start();
        });
    }
    
    /** 出現位置から少し下（左右にランダムにばらつき）へ落ちる */
    private static dropTo(node: Node, origin: Vec3, duration: number): Promise<void> {
        return new Promise<void>((resolve) => {
            const end = origin.clone().add(new Vec3(Math.random() * 40 - 20, -50, 0));
            tween(node)
                .to(duration, { worldPosition: end }, { easing: 'bounceOut' }) // 落ちて軽く弾む
                .call(() => resolve())
                .start();
        });
    }
    
    /**
     * 現在位置から to（ワールド座標）まで、上に膨らむ弧（2次ベジェ）を描いて移動
     */
    private static moveArc(node: Node, to: Vec3, duration: number, arcHeight: number = 150): Promise<void> {
        return new Promise<void>((resolve) => {
            const from = node.worldPosition.clone();
            // 制御点：中点の上方
            const ctrl = new Vec3((from.x + to.x) / 2, Math.max(from.y, to.y) + arcHeight, from.z);
    
            const state = { t: 0 };
            tween(state)
                .to(duration, { t: 1 }, {
                    easing: 'sineIn',
                    onUpdate: () => {
                        if (!node.isValid) return;
                        const t = state.t;
                        const u = 1 - t;
                        node.setWorldPosition(
                            u * u * from.x + 2 * u * t * ctrl.x + t * t * to.x,
                            u * u * from.y + 2 * u * t * ctrl.y + t * t * to.y,
                            u * u * from.z + 2 * u * t * ctrl.z + t * t * to.z,
                        );
                    },
                })
                .call(() => resolve())
                .start();
        });
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
                    await this.wait(200);
                    break;
                case "memeAttack":
                    this.punch(50);
                    await this.wait(40);
                    break;
                case "wolfAttack":
                    this.punch(-50);
                    await this.wait(40);
                    break;
                case "memeDead":
                    result.meme.dead();
                    result.meme.horner();
                    await this.wait(500);
                    Manager.harnessMeme(result.meme);
                    break;
                case "wolfDead":
                    await Promise.all([
                        this.fadeOutSprite(this.wolfs[result.wolf], 0.2),
                        WolfEvent.dropCult(this.wolfs[result.wolf]),
                        WolfEvent.dropMeet(this.wolfs[result.wolf])
                    ]);
                    Manager.killWolf();
                    break;
                case "escape":
                    break;
                case "win":
                    break;
            }
        }
        Manager.finEvent();
    }

    async sacrifice() {
    }

    async godhand() {
        // オオカミの数だけ剣を生成し、
        Manager.devineSord(this.wolfs.length);
        await Promise.all(this.wolfs.map(async (wolf) => {
            const sord = instantiate(this.devineSord);
            this.node.addChild(sord);
            const sordPosition = wolf.position.clone().add(new Vec3(0, 400, 0));
            sord.setPosition(sordPosition);
            await new Promise<void>((resolve) => {
                tween(sord)
                    .to(0.3, { position: wolf.position.clone() })
                .call(() => {
                    WolfEvent.dropMeet(wolf);
                    wolf.destroy();
                    sord.destroy();
                    resolve();
                })
                .start();
            });
        }));
        Manager.finEvent();

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