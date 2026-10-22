import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('FoodButton')
export class FoodButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;

    private __available: boolean = false;

    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'FoodButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('えさをさがす');
        Manager.addFood();
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
        const afterState = Manager.workersCount > 0;
        log("引っ込み")
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


