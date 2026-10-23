import { _decorator, Component, Sprite} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bubble')
export class Bubble extends Component {
    @property(Sprite)
    private bubbleSprite: Sprite;
    @property(Sprite)
    private wataSprite: Sprite;

    bubble() {
        this.bubbleSprite.node.active = true;
        this.wataSprite.node.active = false;
    }

    wata() {
        this.bubbleSprite.node.active = false;
        this.wataSprite.node.active = true;
    }
}