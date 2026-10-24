import { _decorator, Component, Node, Button, log, director } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('AssensionButton')
export class AssensionButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;

    private __available: boolean = false;
    start() {
        this.button = this.getComponent(Button);
        log('Button');
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'AssensionButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async wait(seconds: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

    async onClick() {
        log('笑点');
        Manager.assension();
        await this.wait(1);
        director.loadScene('clear');
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = Manager.canMagic();
        if (beforeState !== afterState) {
            this.__available = afterState;
            if (afterState) {
                this.animation.playAsync("看板出現");
            } else {
                this.animation.playAsync("看板引っ込み");
            }
        } 
    }

    hide() {
        const beforeState = this.__available;
        const afterState = false;
        if (beforeState !== afterState) {
            this.__available = afterState;
            this.animation.playAsync("看板引っ込み");
        } 
    }
}


