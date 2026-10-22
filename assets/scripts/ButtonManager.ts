import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { FoodButton } from './ui/FoodButton';
import { FestivalButton } from './ui//FestivalButton';
import { GoButton } from './ui/GoButton';
import { BackButton } from './ui/BackButton';
import { CleanButton } from './ui/CleanButton';
import { TreatButton } from './ui/TreatButton';
import { BuildingButton } from './ui/BuildingButton';
import { FarmButton } from './ui/building/FarmButton';
import { TowerButton } from './ui/building/TowerButton';
import { HouseButton } from './ui/building/HouseButton';
import { BuildingCancel } from './ui/building/BuildingCancel';

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
    @property(TreatButton)
    private treatButton: TreatButton;
    @property(BuildingButton)
    private buildingButton: BuildingButton;
    @property(FarmButton)
    private farmButton: FarmButton;
    @property(TowerButton)
    private towerButton: TowerButton;
    @property(HouseButton)
    private houseButton: HouseButton;
    @property(BuildingCancel)
    private buildingCancel: BuildingCancel;

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
        this.buildingButton.onSelect(() => {
            this.lock();
            this.showBuildingMenu();
            this.hide();
        });
        this.farmButton.onSelect(() => {
            this.unlock();
            this.hideBuildingMenu();
            this.updateAvailable();
        });
        this.towerButton.onSelect(() => {
            this.unlock();
            this.hideBuildingMenu();
            this.updateAvailable();
        });
        this.houseButton.onSelect(() => {
            this.unlock();
            this.hideBuildingMenu();
            this.updateAvailable();
        });
        this.buildingCancel.onSelect(() => {
            this.unlock();
            this.hideBuildingMenu();
            this.updateAvailable();
        });
    }

    showBuildingMenu() {
        this.farmButton.show();
        this.towerButton.show();
        this.houseButton.show();
        this.buildingCancel.show();
    }
    
    hideBuildingMenu() {    
        this.farmButton.hide();
        this.towerButton.hide();
        this.houseButton.hide();
        this.buildingCancel.hide();
    }

    hide() {
        this.buildingButton.hide();
        this.foodButton.hide();
        this.festivalButton.hide();
        this.cleanButton.hide();
        this.treatButton.hide();
        this.goButton.hide();
        this.backButton.hide();
    }

    lock() {
        this.foodButton.lock();
        this.festivalButton.lock();
        this.goButton.lock();
        this.backButton.lock();
        this.cleanButton.lock();
        this.treatButton.lock();
        this.buildingButton.lock();
    }

    unlock() {
        this.foodButton.unlock();
        this.festivalButton.unlock();
        this.goButton.unlock();
        this.backButton.unlock();
        this.cleanButton.unlock();
        this.treatButton.unlock();
        this.buildingButton.unlock();
    }

    updateAvailable(){
        this.festivalButton.isAvailable();
        this.backButton.isAvailable();
        this.goButton.isAvailable();
        this.cleanButton.isAvailable();
        this.foodButton.isAvailable();
        this.treatButton.isAvailable();
        this.buildingButton.isAvailable();
    }
}