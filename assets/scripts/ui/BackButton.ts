import { _decorator, Component, Node, Button, log, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { MigrateManager } from '../MigrateManager';
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('BackButton')
export class BackButton extends Component {

    @property(MigrateManager)
    private migrateManager: MigrateManager;

    @property(AnimationAsync)
    private animation: AnimationAsync;

    @property(Button)
    private button: Button;
    private __available: boolean = false;
    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'BackButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        this.migrateManager.back();
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = Manager.steps > 0;
        if (beforeState !== afterState) {
            this.__available = afterState;
            if (afterState) {
                this.animation.playAsync("看板出現");
            } else {
                this.animation.playAsync("看板引っ込み");
            }
        } 
    }

}


