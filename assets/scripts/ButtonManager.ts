import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { FoodButton } from './ui/FoodButton';
import { FestivalButton } from './ui//FestivalButton';
import { GoButton } from './ui/GoButton';
import { BackButton } from './ui/BackButton';
import { CleanButton } from './ui/CleanButton';

@ccclass('ButtonManager')
export class ButtonManager extends Component {
    @property(FoodButton) 
    private foodButton: FoodButton;
    @property(FestivalButton)
    private festivalButton: FestivalButton;
    @property(CleanButton)
    private cleanButton: CleanButton;
    @property(GoButton)
    private goButton: GoButton
    @property(BackButton)
    private backButton: BackButton;
    start() {
        Manager.onCommand(() => {
            this.lock();
        });
        Manager.onNextDay(() => {
            this.unlock();
            this.updateAvailable();
        });
        this.unlock();
        this.updateAvailable();
    }

    lock() {
        this.foodButton.lock();
        this.festivalButton.lock();
        this.goButton.lock();
        this.backButton.lock();
        this.cleanButton.lock();
    }

    unlock() {
        this.foodButton.unlock();
        this.festivalButton.unlock();
        this.goButton.unlock();
        this.backButton.unlock();
        this.cleanButton.unlock();
    }

    updateAvailable(){
        this.festivalButton.isAvailable();
        this.backButton.isAvailable();
        this.goButton.isAvailable();
        this.cleanButton.isAvailable();
        this.foodButton.isAvailable();
    }
}