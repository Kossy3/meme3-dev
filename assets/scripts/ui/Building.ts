import { _decorator, Component, Node, Sprite, log, ProgressBar, Color} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { BuildingType } from '../logic/BuildingType';

@ccclass('Building')
export class Building extends Component {
    @property(Sprite)
    private tower : Sprite;
    @property(Sprite)
    private farm : Sprite;
    @property(Sprite)
    private house : Sprite;
    @property(ProgressBar)
    private progressBar : ProgressBar;

    start() {
        this.updateBuilding(BuildingType.NONE);
        Manager.onNextDay(() => {
            this.updateBuilding(Manager.terrain.building);
            if (Manager.isBuilding) {
                this.showProgress();
            } else {
                this.progressBar.node.active = false;
            }
        });
        this.progressBar.node.active = false;
    }

    private __getBuildingSprite(type: BuildingType): Sprite {
        switch (type) {
            case BuildingType.TOWER:
                return this.tower;
            case BuildingType.FARM:
                return this.farm;
            case BuildingType.HOME:
                return this.house;
        }
    }

    updateBuilding(type: BuildingType) {
        this.tower.node.active = type === BuildingType.TOWER;
        this.farm.node.active = type === BuildingType.FARM;
        this.house.node.active = type === BuildingType.HOME;
        if (type !== BuildingType.NONE) {
            let buildingSprite = this.__getBuildingSprite(type);
            buildingSprite.color = new Color(255, 255, 255, 255);
        }
    }

    showProgress() {
        const progressRate = Manager.buildingProgress;
        this.progressBar.node.active = true;
        this.progressBar.progress = progressRate;
        let buildingSprite = this.__getBuildingSprite(Manager.buildingNow);
        // 霧っぽく白くする
        buildingSprite.node.active = true;
        buildingSprite.color = new Color(255, 255, 255, 100 * (1 - progressRate) + 100);
    }
}
