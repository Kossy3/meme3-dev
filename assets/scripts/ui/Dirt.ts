import { _decorator, Component, tween, UIOpacity, SpriteFrame, Sprite} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { TerrainData, DirtData } from '../logic/TerrainData';

const MAX_OPACITY = 150;

@ccclass('Dirt')
export class Dirt extends Component {
    @property(Sprite)
    private dirt : Sprite;

    @property([SpriteFrame])
    private dirtFrame : SpriteFrame[] = [];

    @property(UIOpacity)
    private dirtOpacity : UIOpacity;

    async spawnAnimate() {
        this.dirtOpacity.opacity = 0;
        await new Promise<void>((resolve) => {
            tween(this.dirtOpacity)
                .to(0.5, { opacity: MAX_OPACITY })
                .call(() => {
                    resolve();
                })
                .start();
        });
    }

    async cleanupAnimate() {
        await new Promise<void>((resolve) => {
            tween(this.dirtOpacity)
                .to(2, { opacity: 0 })
                .call(() => {
                    resolve();
                })
                .start();
        });
    }

    setData(data: DirtData) {
        this.dirt.node.setPosition(data.position);
        // this.dirt.node.setRotationFromEuler(0, 0, data.rotation);
        this.dirt.spriteFrame = this.dirtFrame[data.texture];
        this.dirtOpacity.opacity = MAX_OPACITY;
    }

}


