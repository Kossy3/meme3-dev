import { MemeData } from "./MemeData";
import { MemeState } from "./MemeState";

export class GameData {
    day: number = 0;
    food: number = 0;
    rottenFood: number = 0;
    memes: MemeData[] = [
        new MemeData(),
        new MemeData(),
        new MemeData(),
    ];
    cult: number = 10;
    steps: number = 0;

    json(): string {
        return JSON.stringify({
            day: this.day,
            food: this.food,
            rottenFood: this.rottenFood,
            memes: this.memes.filter(m => m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE).map(m => m.json()),
            cult: this.cult,
            steps: this.steps
        });
    }

    load(json: string) {
        const data = JSON.parse(json);
        this.day = data.day;
        this.food = data.food;
        this.rottenFood = data.rottenFood;
        this.memes = data.memes.map(m => new MemeData().load(m));
        this.cult = data.cult;
        this.steps = data.steps;
    }
}