import {TerrainType} from "./TerrainType";
import {BuildingType} from "./BuildingType";
import { Vec3 } from "cc";

export class DirtData {
    position: Vec3;
    texture: number;
    rotation: number;
    constructor(poristion: Vec3, texture: number, rotation: number) {
        this.position = poristion;
        this.texture = texture;
        this.rotation = rotation;
    }
}

export class TerrainData {
    type: TerrainType = TerrainType.GLASSLAND; // 地形
    building: BuildingType = BuildingType.NONE; // 建築の種類
    dirt: number = 0; // 汚れ度
    private __dirts: DirtData[] = [];

    // 楕円の範囲設定
    private radiusX: number = 360;
    private radiusY: number = 50;
    private center: Vec3 = new Vec3(0, 30, 0); // 楕円の中心座標

    addDirt(number) {
        this.dirt += number;
        const dirtsToAdd = Math.max(0, this.dirt - this.__dirts.length);
        for (let i = 0; i < dirtsToAdd; i++) {
            this.__dirts.push(this.getRandomDirt());
        }
    }

    get dirts(): DirtData[] {
        return this.__dirts;
    }

    private getRandomPointInEllipse(rx: number, ry: number): Vec3 {
        // Math.sqrt を使うことで中心に偏らず均等に散らばる
        const r = Math.sqrt(Math.random());
        const angle = Math.random() * Math.PI * 2;
        
        const x = Math.cos(angle) * rx * r;
        const y = Math.sin(angle) * ry * r;
        // 中心座標を加算して楕円の中心を基準にする
        return new Vec3(x + this.center.x, y + this.center.y, 0);
    }

    private getRandomDirt(): DirtData {
        return new DirtData(
            this.getRandomPointInEllipse(this.radiusX, this.radiusY),
            Math.floor(Math.random() * 3), 
            Math.random() * 360);
    }

    clean(number: number = 1) {
        this.dirt = Math.max(-1, this.dirt - number);
        this.__dirts = this.__dirts.slice(0, Math.max(0, this.__dirts.length - number));
    }

    removeDirt() {
        if (this.dirt > 0) {
            this.dirt--;
        }
    }

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
        this.addDirt(json.dirt);
    }
}