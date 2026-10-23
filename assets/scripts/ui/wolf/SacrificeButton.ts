import { _decorator, Component, Label, Button, log, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../../Manager';
import { AnimationAsync } from '../../utils/AnimationAsync';
import { BuildingType } from '../../logic/BuildingType';

@ccclass('SacrificeButton')
export class SacrificeButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;
    @property(Label)
    private label: Label;
    private eventTarget: EventTarget = new EventTarget();

    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    onSelect(callback: (event: any) => void) {
        this.eventTarget.on('select', callback);
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'SacrificeButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async wait (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async onClick() {
        Manager.finEvent();
        this.eventTarget.emit('select');
    }

    show() {
        this.button.interactable = true;
        this.animation.playAsync("看板出現");
        const day = Math.floor(Manager.buildCost(BuildingType.TOWER) / Manager.workersCount);
        this.label.string = `${day}ひき`;
    }

    hide() {
        this.button.interactable = false;
        this.animation.playAsync("看板引っ込み");
    }
}


