import { _decorator, Component, resources, Sprite, log, ProgressBar, Color, NodePool, Node, Prefab, instantiate} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { BuildingType } from '../logic/BuildingType';
import { TerrainData, DirtData } from '../logic/TerrainData';
import { EventType } from '../logic/CommandType';
import { Dirt } from './Dirt';

@ccclass('Building')
export class Building extends Component {

    private __dirtsNodePool: NodePool = new NodePool();
    private __activeDirts: Map<DirtData, Node> = new Map();

    @property(Sprite)
    private tower : Sprite;
    @property(Sprite)
    private farm : Sprite;
    @property(Sprite)
    private house : Sprite;
    @property(ProgressBar)
    private progressBar : ProgressBar;

    private dirtPrefab: Prefab | null = null;

    start() {
        this.dirtPrefab = resources.get('prefab/汚れ', Prefab);
        this.updateBuilding(Manager.terrain);
        Manager.on(EventType.NEXT_DAY, () => {
            this.updateBuilding(Manager.terrain);
            if (Manager.isBuilding) {
                this.showProgress();
            } else {
                this.progressBar.node.active = false;
            }
        });
        Manager.on(EventType.POLUTE, (data: DirtData[]) => {
            for(let dirt of data) {
                this.spawnDirt(dirt, true);
            }
        });
        Manager.on(EventType.CLEAN, (data: DirtData[]) => {
            this.cleanupDirt(data);
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
        this.cleanupDirt(Array.from(this.__activeDirts.keys()), false);
        for(let dirt of dirts) {
            this.spawnDirt(dirt, false);
        }
    }

    async cleanupDirt(dirts: DirtData[], animate: boolean = true) {
        await Promise.all(dirts.map(async (data) => {
            const dirtNode = this.__activeDirts.get(data);
            if (dirtNode) {
                if (animate) {
                    await dirtNode.getComponent(Dirt).cleanupAnimate();
                }
                this.__dirtsNodePool.put(dirtNode);
                this.__activeDirts.delete(data);
            }
        }));
    }

    async spawnDirt(data: DirtData, animate: boolean = true) {
        if (this.__activeDirts.has(data)) {
            const dirtNode = this.__activeDirts.get(data);
            dirtNode.getComponent(Dirt).spawnAnimate();
            return;
        }
        let dirtNode = this.__dirtsNodePool.get();
        if (!dirtNode) {
            dirtNode = instantiate(this.dirtPrefab);
        } 
        dirtNode.setParent(this.node);
        dirtNode.getComponent(Dirt).setData(data);
        if (animate) {
            dirtNode.getComponent(Dirt).spawnAnimate();
        }
        this.__activeDirts.set(data, dirtNode);
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
