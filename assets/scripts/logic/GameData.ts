import { MemeData } from "./MemeData";
import { TerrainData } from "./TerrainData";
import { MemeState } from "./MemeState";
import { BuildingType } from "./BuildingType";
import { FoodType } from "./FoodType";
import { log } from "cc";

export class GameData {
    day: number = 0;
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
    magic: boolean = false;
    foods: {p:number, type:FoodType}[] = [];

    get foodCount(): number {
        return this.foods.length;
    }
    
    get rottenCount(): number {
        return this.foods.filter(f => f.type === FoodType.ROTTEN).length;
    }

    private sortedFoods(): {p:number, type:FoodType}[] {
        return this.foods.sort((a, b) => a.p - b.p);
    }

    addFood(type: FoodType, p: number) {
        for (let i = 0; i < p; i++) {
            this.foods.push({p: Math.random(), type: type});
        }
    }

    useFood(number: number = 1): FoodType[] {
        // numberの数かfoodsが尽きるsoreted順に消費
        // 消費したfoodを返却
        const sorted = this.sortedFoods();
        const used = sorted.slice(0, number);
        this.foods = this.foods.filter(f => used.indexOf(f) === -1);
        return used.map(f => f.type);
    }

    json(): string {
        return JSON.stringify({
            day: this.day,
            foods: this.foods.map(f => f.type),
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
        this.foods = data.foods.map((f: FoodType) => ({p: Math.random(), type: f}));
        this.terrain = data.terrain.map(t => new TerrainData().load(t));
        this.memes = data.memes.map(m => new MemeData().load(m));
        this.cult = data.cult;
        this.building = data.building;
        this.buildingCost = data.buildingCost;
        this.steps = data.steps;
    }
}