import { _decorator, Component, Label, Button, log, EventTarget, Node } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../../Manager';
import { AnimationAsync } from '../../utils/AnimationAsync';
import { BuildingType } from '../../logic/BuildingType';

@ccclass('BattleButton')
export class BattleButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;
    @property(Label)
    private label: Label;
    @property(Node)
    private homeNode: Node;

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
        eventHandler.component = 'BattleButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    async wait (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async onClick() {
        this.eventTarget.emit('select');
    }

    show() {
        this.button.interactable = true;
        this.animation.playAsync("看板出現");
        if (Manager.terrain.building === BuildingType.HOME) {
            this.homeNode.active = true;
            this.label.string = `やっつける`;
        } else {
            this.homeNode.active = false;
            this.label.string = `たたかう`;
        }
    }

    hide() {
        this.button.interactable = false;
        this.animation.playAsync("看板引っ込み");
    }
}


