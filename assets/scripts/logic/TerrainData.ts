import {TerrainType} from "./TerrainType";
import {BuildingType} from "./BuildingType";

export class TerrainData {
    type: TerrainType = TerrainType.GLASSLAND; // 地形
    building: BuildingType = BuildingType.NONE; // 建築の種類
    dirt: number = 0; // 汚れ度

    json() {
        return {
            type: this.type,
            building: this.building,
            dirt: this.dirt
        }
    }

    load(json: any) {
        this.type = json.type;
        this.building = json.building;
        this.dirt = json.dirt;
    }
}