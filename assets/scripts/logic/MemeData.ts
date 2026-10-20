import { MemeState } from "./MemeState";
export const MAX_HUNGER = 5;
export const DANGER_HUNGER = 3;
export const WORKER_GROWTH = 5;
import { EventTarget } from "cc";

export class MemeData {
    growth: number = 0;
    hunger: number = MAX_HUNGER;
    state: MemeState = MemeState.WORKER;
    festLimit: number = 0;
    buildLimit: number = 0;
    private __eventTarget: EventTarget = new EventTarget();
    private __priority: number = Math.random();
    get priority() {
        return this.__priority;
    }

    onGo(callback: () => void) {
        this.__eventTarget.on('go', callback);
    }

    onStop(callback: () => void) {
        this.__eventTarget.on('stop', callback);
    }

    onBack(callback: () => void) {
        this.__eventTarget.on('back', callback);
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

    go() {
        this.__eventTarget.emit('go');
    }

    stop() {
        this.__eventTarget.emit('stop');
    }

    back() {
        this.__eventTarget.emit('back');
    }
}