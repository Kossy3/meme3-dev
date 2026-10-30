import { _decorator, Component, Node, Button, log, EventTarget, AudioSource } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';
import { AudioManager } from '../AudioManager';

@ccclass('EatButton')
export class EatButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;

    private eventTarget: EventTarget = new EventTarget();

    private __available: boolean = false;
    start() {
        log('Button');
        this.button.clickEvents.push(this.createHandler());
    }

    onClick(callback: (event: any) => void) {
        AudioManager.play('弓矢が刺さる');
        this.eventTarget.on('select', callback);
    }

    handler() {
        this.eventTarget.emit('select');
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'EatButton';
        eventHandler.handler = 'handler';
        return eventHandler;
    }

    async wait (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    show() {
        this.button.interactable = true;
        this.animation.playAsync("看板出現");
    }

    hide() {
        this.button.interactable = false;
        this.animation.playAsync("看板引っ込み");
    }
}


