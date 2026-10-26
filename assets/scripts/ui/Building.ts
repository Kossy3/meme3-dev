import { _decorator, Component, SpriteFrame, Sprite, log, ProgressBar, Color, NodePool, Node} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { BuildingType } from '../logic/BuildingType';
import { TerrainData, DirtData } from '../logic/TerrainData';

@ccclass('Building')
export class Building extends Component {

    private __dirtsNodePool: NodePool = new NodePool();
    private __activeDirts: Node[] = [];

    @property(Sprite)
    private tower : Sprite;
    @property(Sprite)
    private farm : Sprite;
    @property(Sprite)
    private house : Sprite;
    @property(ProgressBar)
    private progressBar : ProgressBar;
    @property([SpriteFrame])
    private dirtFrame : SpriteFrame[] = [];

    start() {
        this.updateBuilding(Manager.terrain);
        Manager.onNextDay(() => {
            this.updateBuilding(Manager.terrain);
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

    updateDirt(dirts: DirtData[]) {
        log(dirts);
        this.resetDirt()
        for(let dirt of dirts) {
            this.spawnDirt(dirt);
        }
    }

    private resetDirt() {
        for (let dirtNode of this.__activeDirts) {
            this.__dirtsNodePool.put(dirtNode);
        }
        this.__activeDirts = [];
    }

    private spawnDirt(data: DirtData) {
        let dirtNode = this.__dirtsNodePool.get();
        if (!dirtNode) {
            dirtNode = new Node();
            let sprite = dirtNode.addComponent(Sprite);
            // 半透明に
            sprite.color = new Color(255, 255, 255, 100);
        } 
        dirtNode.setPosition(data.position);
        dirtNode.setRotationFromEuler(0, 0, data.rotation);
        dirtNode.setScale(0.3, 0.3, 1);
        dirtNode.getComponent(Sprite).spriteFrame = this.dirtFrame[data.texture];
        dirtNode.layer = this.node.layer;
        dirtNode.parent = this.node;
        this.__activeDirts.push(dirtNode);
    }

    updateBuilding(TerrainData: TerrainData) {
        const type = TerrainData.building;
        this.tower.node.active = type === BuildingType.TOWER;
        this.farm.node.active = type === BuildingType.FARM;
        this.house.node.active = type === BuildingType.HOME;
        if (type !== BuildingType.NONE) {
            let buildingSprite = this.__getBuildingSprite(type);
            buildingSprite.color = new Color(255, 255, 255, 255);
        }
        this.updateDirt(TerrainData.dirts);
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
