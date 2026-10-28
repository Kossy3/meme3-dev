import { MemeState } from "./MemeState";
export const MAX_HUNGER = 5;
export const DANGER_HUNGER = 3;
export const WORKER_GROWTH = 5;
import { EventTarget, Vec3 } from "cc";

export enum MemeEvent {
    GO,
    STOP,
    BACK,
    TREAT,
    BATTLE_START,
    HORNER,
    ASSENSION,
    DEAD,
    LEAVE,
    EAT,
    FIND_FOOD,
}

export class MemeData {
    growth: number = 0;
    hunger: number = MAX_HUNGER;
    state: MemeState = MemeState.WORKER;
    festLimit: number = 0;
    buildLimit: number = 0;
    private __eventTarget: EventTarget = new EventTarget();
    private __priority: number = Math.random();

    constructor(worker: boolean = false) {
        if (worker) {
            this.worker();
        }
    }

    get priority() {
        return this.__priority;
    }

    on(eventType: MemeEvent, callback: any) {
        this.__eventTarget.on(eventType, callback);
    }

    emit(eventType: MemeEvent, data?: any) {
        this.__eventTarget.emit(eventType, data);
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