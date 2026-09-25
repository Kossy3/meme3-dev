import { _decorator, Component, sys } from 'cc';
const { ccclass, property } = _decorator;

const MAX_HUNGER = 3;
const WORKER_GROWTH = 5;

export enum MemeState {
    WORKER, // 労働可能
    SCRAPIE, // 感染中
    BUILDING, // 施設建設中
    FESTIVAL, // 繁殖中
    LEAVE, // 脱走
    DEATH, // 死亡
}

export class MemeData {
    growth: number = 0;
    hunger: number = MAX_HUNGER;
    state: MemeState = MemeState.WORKER;
    private __priority: number = Math.random();
    get priority() {
        return this.__priority;
    }
    json() {
        return {
            growth: this.growth,
            hunger: this.hunger,
            state: this.state
        }
    }
    load(json: any) {
        this.growth = json.growth;
        this.hunger = json.hunger;
        this.state = json.state;
    }
    resetPriority() {
        this.__priority = Math.random();
    }

    isWorker() {
        return this.state === MemeState.WORKER;
    }

    init() {
        this.growth = WORKER_GROWTH;
        this.state = MemeState.WORKER;
    }
}

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

export class Manager {
    private static __data: GameData = new GameData();

    public static load(json?: string) {
        if (json) {
            this.__data.load(json);
        }
    }

    public static get food(): number {
        return this.__data.food;
    }

    public static addFood(amount: number) {
        this.__data.food += amount;
    }

    public static addRottenFood(amount: number) {
        this.__data.rottenFood += amount;
    }

    public static get workersCount(): number {
        return this.__data.memes.filter(m => m.state === MemeState.WORKER).length;
    }

    public static get memesCount(): number {
        return this.__data.memes.filter(m => m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE).length;
    }

    public static get memes(): MemeData[] {
        return this.__data.memes;
    }

    private static __resetPriority() {
        this.__data.memes.map(m => m.resetPriority());
    }

    private static __eat() {
        const sortedMemes =  this.__data.memes.sort((memeA, memeB) => memeA.priority - memeB.priority);
        for (let meme of sortedMemes) {
            // 死亡、脱走しためぇめぇをスキップ
            if (meme.state === MemeState.DEATH || meme.state === MemeState.LEAVE) {
                continue;
            }
            // 食料がない場合は空腹度を減らす
            if (this.__data.food + this.__data.rottenFood <= 0) {
                meme.hunger = Math.max(0, meme.hunger - 1);
                continue;
            }
            // 食料がある場合は空腹度を回復させる
            meme.hunger = Math.min(MAX_HUNGER, meme.hunger + 1);
            // 汚染された食料を食べる確率を計算する
            const isRotten = Math.random() < this.__data.rottenFood / (this.__data.food + this.__data.rottenFood);

            // 汚染された食料を食べた場合はスクレイピーに感染する
            if (isRotten) {
                meme.state = MemeState.SCRAPIE;
                this.__data.rottenFood -= 1;
            } else {
                this.__data.food -= 1;
            }
        }
    }

    private static __checkDeath() {
        for (let meme of this.__data.memes) {
            if (meme.hunger/MAX_HUNGER < Math.random()) {
                meme.state = MemeState.DEATH;
            }
        }
    }

    private static __checkLeave() {
        const memeCount = this.memesCount;
        const notLeaveP = Math.sqrt(this.__data.cult*10)/memeCount;
        for (let meme of this.__data.memes) {
            const leave = Math.random() > notLeaveP;
            if (leave) {
                meme.state = MemeState.LEAVE;
            }
        }
    }

    private static __growth() {
        this.__data.memes.map(m => m.growth ++);
    }

    public static nextDay() {
        this.__data.day += 1;
        this.__resetPriority();
        this.__eat();
        this.__checkDeath();
        this.__checkLeave();
        this.__growth();
    }


}


