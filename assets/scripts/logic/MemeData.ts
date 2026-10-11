import { MemeState } from "./MemeState";
export const MAX_HUNGER = 3;
export const WORKER_GROWTH = 5;

export class MemeData {
    growth: number = 0;
    hunger: number = MAX_HUNGER;
    state: MemeState = MemeState.WORKER;
    festLimit: number = 0;
    buildLimit: number = 0;
    private __priority: number = Math.random();
    get priority() {
        return this.__priority;
    }
    json() {
        return {
            growth: this.growth,
            hunger: this.hunger,
            state: this.state,
            fest: this.festLimit,
            build: this.buildLimit
        }
    }
    load(json: any) {
        this.growth = json.growth;
        this.hunger = json.hunger;
        this.state = json.state;
        this.festLimit = json.fest;
        this.buildLimit = json.build;
    }
    resetPriority() {
        this.__priority = Math.random();
    }

    isWorker() {
        return this.state === MemeState.WORKER;
    }

    worker() {
        this.growth = WORKER_GROWTH;
        this.state = MemeState.WORKER;
    }
}