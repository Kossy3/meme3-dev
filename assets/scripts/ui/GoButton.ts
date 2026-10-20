import { _decorator, Component, Node, Button, log, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { MigrateManager } from '../MigrateManager';
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('GoButton')
export class GoButton extends Component {


    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync
    @property(MigrateManager)
    private migrateManager: MigrateManager;

    private __available: boolean = false;

    start() {
        const button = this.getComponent(Button);
        this.button = button;
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'GoButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        this.migrateManager.go();
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = true; // 常に有効
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
}


