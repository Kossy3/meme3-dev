import { _decorator, Component, Node, Button, log, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('BuildingButton')
export class BuildingButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;
    private eventTarget: EventTarget = new EventTarget();

    private __available: boolean = false;
    start() {
        this.button = this.getComponent(Button);
        log('Button');
        this.button.clickEvents.push(this.createHandler());
    }

    onSelect(callback: (event: any) => void) {
        this.eventTarget.on('select', callback);
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'BuildingButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async wait (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async onClick() {
        this.eventTarget.emit('select');
    }

    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
    }

    isAvailable() {
        const beforeState = this.__available;
        const afterState = Manager.canBuild; // 建築中は建築不可
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


