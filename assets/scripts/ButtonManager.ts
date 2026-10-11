import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { FoodButton } from './FoodButton';
import { FestivalButton } from './FestivalButton';

@ccclass('ButtonManager')
export class ButtonManager extends Component {
    @property(FoodButton) 
    private memeButton: FoodButton;
    @property(FestivalButton)
    private festivalButton: FestivalButton;
    start() {
    }

    update(deltaTime: number) {
        this.festivalButton.isAvailable();
    }
}