import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';
import {TreatmentManager} from '../TreatmentManager';

@ccclass('TreatButton')
export class TreatButton extends Component {

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
        eventHandler.component = 'TreatButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async wait (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async onClick() {
        Manager.treat();
        await this.wait(1000);
        Manager.nextDay();
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = Manager.scrapieCount > 0;
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


