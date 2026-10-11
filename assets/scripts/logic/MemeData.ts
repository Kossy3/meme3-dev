import { MemeState } from "./MemeState";
export const MAX_HUNGER = 3;
export const WORKER_GROWTH = 5;

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