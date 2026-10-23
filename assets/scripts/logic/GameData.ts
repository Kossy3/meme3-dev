import { MemeData } from "./MemeData";
import { TerrainData } from "./TerrainData";
import { MemeState } from "./MemeState";
import { BuildingType } from "./BuildingType";

export class GameData {
    day: number = 0;
    food: number = 0;
    rottenFood: number = 0;
    memes: MemeData[] = [
        new MemeData(true),
        new MemeData(true),
        new MemeData(true),
    ];
    steps: number= 0;
    cult: number = 10;
    terrain: TerrainData[] = [
        new TerrainData(),
    ];
    building: BuildingType = BuildingType.NONE;
    buildingCost: number = 0;

    json(): string {
        return JSON.stringify({
            day: this.day,
            food: this.food,
            rottenFood: this.rottenFood,
            terrain: this.terrain.map(t => t.json()),
            memes: this.memes.filter(m => m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE).map(m => m.json()),
            cult: this.cult,
            building: this.building,
            buildingCost: this.buildingCost,
            steps: this.steps
        });
    }

    load(json: string) {
        const data = JSON.parse(json);
        this.day = data.day;
        this.food = data.food;
        this.rottenFood = data.rottenFood;
        this.terrain = data.terrain.map(t => new TerrainData().load(t));
        this.memes = data.memes.map(m => new MemeData().load(m));
        this.cult = data.cult;
        this.building = data.building;
        this.buildingCost = data.buildingCost;
        this.steps = data.steps;
    }
}