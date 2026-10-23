import { _decorator, Component, Sprite, SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bubble')
export class Bubble extends Component {

    @property(Sprite)
    private sprite: Sprite | null = null;

    @property([SpriteFrame])
    private bubbleSprite: SpriteFrame[] = [];

    changeSprite(type: number) {
        if (this.sprite && this.bubbleSprite[type]) {
            this.sprite.spriteFrame = this.bubbleSprite[type];
        }
    }
}