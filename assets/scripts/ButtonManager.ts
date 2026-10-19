import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { FoodButton } from './ui/FoodButton';
import { FestivalButton } from './ui//FestivalButton';
import { GoButton } from './ui/GoButton';
import { BackButton } from './ui/BackButton';

@ccclass('ButtonManager')
export class ButtonManager extends Component {
    @property(FoodButton) 
    private memeButton: FoodButton;
    @property(FestivalButton)
    private festivalButton: FestivalButton;
    @property(GoButton)
    private goButton: GoButton
    @property(BackButton)
    private backButton: BackButton;
    start() {
    }

    update(deltaTime: number) {
        this.festivalButton.isAvailable();
    }
}