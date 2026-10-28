import { _decorator, Component, Node, Button, log, Label } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { AnimationAsync } from '../utils/AnimationAsync';
import { BuildingType } from '../logic/BuildingType';
import { MemeData, MemeEvent } from '../logic/MemeData';

@ccclass('FoodButton')
export class FoodButton extends Component {

    @property(Button)
    private button: Button;
    @property(AnimationAsync)
    private animation: AnimationAsync;
    @property(Node)
    private cabbege: Node;
    @property(Label)
    private label: Label;

    private __available: boolean = false;

    wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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

    async onClick() {
        log('えさをさがす');
        const findedFood = Manager.findFood();
        log(findedFood);
        for (const finded of findedFood) {
            finded.finder.emit(MemeEvent.FIND_FOOD, finded);
        }
        await this.wait(1500);
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
        if (Manager.terrain.building === BuildingType.FARM) {
            this.label.string = `しゅうかく`;
            this.cabbege.active = true;
        } else {
            this.label.string = `さがす`;
            this.cabbege.active = false;
        }
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


