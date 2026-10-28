import { _decorator, Component, Node, instantiate, resources, Prefab, Vec3, tween, log } from 'cc';
const { ccclass, property } = _decorator;
import { FoodType } from './logic/FoodType';
import { Manager } from './Manager';
import { EventType } from './logic/CommandType';
import { MemeData, MemeEvent } from './logic/MemeData';

@ccclass('FoodParticle')
export class FoodParticle extends Component {
    private static _instance: FoodParticle | null = null;
    @property(Node)
    private foodLabel: Node = null!;
    private foodMap: Map<FoodType, Prefab> = new Map();

    start() {
        FoodParticle._instance = this;
        const meet = resources.get('prefab/肉', Prefab);
        const rotten = resources.get('prefab/腐った肉', Prefab);
        const cabbage = resources.get('prefab/キャベツ', Prefab);
        const banana = resources.get('prefab/バナナ', Prefab);
        this.foodMap.set(FoodType.MEAT, meet);
        this.foodMap.set(FoodType.ROTTEN, rotten);
        this.foodMap.set(FoodType.CABBAGE, cabbage);
        this.foodMap.set(FoodType.BANANA, banana);
        Manager.on(EventType.EAT, (eatedFoods: {meme: MemeData, food: FoodType}[]) => {
            log("EAT EVENT: " + eatedFoods.length);
            for (const {meme, food} of eatedFoods) {
                if (food) {
                    meme.emit(MemeEvent.EAT, food);
                }
            }
        });
    }

    static async findFood(target: Node, foodType: FoodType): Promise<void> {
        const instance = FoodParticle._instance;
        if (!target || !target.isValid) return;
    
        // target は後で destroy するので、位置は先に控えておく（ワールド座標で統一）
        const origin = target.worldPosition.clone();
        const food = instantiate(instance.foodMap.get(foodType));
        instance.node.addChild(food);
        food.setWorldPosition(origin);
        food.setWorldPosition(origin);
        await this.moveArc(food, instance.foodLabel, 1);
        food.destroy();
    }

    static async getFood(target: Node, foodType: FoodType): Promise<void> {
        const instance = FoodParticle._instance;
        if (!target || !target.isValid) return;
    
        // target は後で destroy するので、位置は先に控えておく（ワールド座標で統一）
        const origin = instance.foodLabel.worldPosition.clone();
        const food = instantiate(instance.foodMap.get(foodType));
        instance.node.addChild(food);
        food.setWorldPosition(origin);
        food.setWorldPosition(origin);
        await this.moveArc(food, target, 1);
        food.destroy();
    }

    private static moveArc(node: Node, to: Node, duration: number, arcHeight: number = 150): Promise<void> {
        return new Promise<void>((resolve) => {
            const from = node.worldPosition.clone();
            // 制御点：中点の上方
            const ctrl = new Vec3((from.x + to.worldPosition.x) / 2, Math.max(from.y, to.worldPosition.y) + arcHeight, from.z);
    
            const state = { t: 0 };
            tween(state)
                .to(duration, { t: 1 }, {
                    easing: 'sineIn',
                    onUpdate: () => {
                        if (!to.isValid) return;
                        const t = state.t;
                        const u = 1 - t;
                        node.setWorldPosition(
                            u * u * from.x + 2 * u * t * ctrl.x + t * t * to.worldPosition.x,
                            u * u * from.y + 2 * u * t * ctrl.y + t * t * to.worldPosition.y,
                            u * u * from.z + 2 * u * t * ctrl.z + t * t * to.worldPosition.z,
                        );
                    },
                })
                .call(() => resolve())
                .start();
        });
    }
}