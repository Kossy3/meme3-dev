import { _decorator, Component } from 'cc';
const { property, ccclass } = _decorator;
import { AnimationAsync } from './utils/AnimationAsync';
import { MemeData } from './logic/MemeData';
import { Meme } from './Meme';
import { Manager } from './Manager';

@ccclass('MigrateManager')
export class MigrateManager extends Component {
    @property(AnimationAsync)
    private animation: AnimationAsync;

    @property(AnimationAsync)
    private 移動看板: AnimationAsync;

    @property(AnimationAsync)
    private 通常操作看板: AnimationAsync;

    async go() {
        Manager.go();
        await Promise.all([
            this.移動看板.playAsync("看板引っ込み"), 
            this.通常操作看板.playAsync("看板引っ込み")
        ]);
        await this.animation.playAsync("すすむ");
        await Promise.all([
            this.移動看板.playAsync("看板出現"), 
            this.通常操作看板.playAsync("看板出現")
        ]);
        Manager.stop();
        Manager.nextDay();
    }

    async back() {
        Manager.back();
        await Promise.all([
            this.移動看板.playAsync("看板引っ込み"), 
            this.通常操作看板.playAsync("看板引っ込み")
        ]);
        await this.animation.playAsync("もどる");
        await Promise.all([
            this.移動看板.playAsync("看板出現"), 
            this.通常操作看板.playAsync("看板出現")
        ]);
        Manager.stop();
        Manager.nextDay();
    }
}