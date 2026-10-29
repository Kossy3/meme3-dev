import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';
import {BuildingType} from '../logic/BuildingType';

@ccclass('FestivalButton')
export class FestivalButton extends Component {
    @property(AnimationAsync)
    private animation: AnimationAsync;
    @property(Button)
    private button: Button;
    @property(Node)
    private homeNode: Node;

    private __available: boolean = false;

    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'FestivalButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('おまつり');
        Manager.festival();
        Manager.nextDay();
    }

    isAvailable() {
        const beforeState = this.__available;
        //（余剰食糧 - 群れの絶対数))/2頭 >= 2
        const afterState = Manager.canFestival;

        this.homeNode.active = Manager.terrain.building === BuildingType.HOME;
        if (beforeState !== afterState) {
            this.__available = afterState;
            if (afterState) {
                this.animation.playAsync("看板出現");
            } else {
                this.animation.playAsync("看板引っ込み");
            }
        } 
    }
    
    lock() {
        this.button.interactable = false;
    }

    unlock() {
        this.button.interactable = true;
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


