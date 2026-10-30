import { _decorator, Component, Node, Button, log, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';
import { EventType } from '../logic/CommandType';
import { AudioManager } from '../AudioManager';

@ccclass('CleanButton')
export class CleanButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;
    @property(Node)
    private wiper: Node;
    private wiperAnimation: AnimationAsync;

    private __available: boolean = false;
    start() {
        this.button = this.getComponent(Button);
        log('Button');
        this.button.clickEvents.push(this.createHandler());
        Manager.on(EventType.CLEAN, async () => {
            await this.clean();
            Manager.nextDay();
        });
        this.wiperAnimation = this.wiper.getComponent(AnimationAsync);
        this.wiper.active = false;
    }

    async clean() {
        this.wiper.active = true;
        this.wiper.setPosition(700, 0, 0);
        AudioManager.play('ほうきで掃く1');
        await new Promise<void>((resolve) => {
            tween(this.wiper)
                .to(2, { position: new Vec3(-700, 0, 0) })
                .call(() => {
                    resolve();
                })
                .start();
        });
        this.wiper.active = false;
    }


    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'CleanButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('おそうじ');
        Manager.clean();
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = Manager.terrain.dirt > 0;
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


