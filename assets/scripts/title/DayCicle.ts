import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;
import { AnimationAsync } from '../utils/AnimationAsync';

@ccclass('DayCicle')
export class DayCicle extends Component {

    @property(AnimationAsync)
    private anime: AnimationAsync = null!;

    @property({ tooltip: '再生開始から一時停止するまでの時間（秒）' })
    private pauseAfter: number = 0.7;

    @property({ tooltip: '停止してから再開するまでの時間（秒）' })
    private interval: number = 8.3;

    private _running = false;

    start() {
        this._running = true;
        this.loop();
    }

    onDestroy() {
        this._running = false;
    }

    private async loop() {
        while (this._running) {
            // 再生開始（完了は後で待つ）
            await this.wait(this.interval);
            const done = this.anime.play();

            await this.wait(this.pauseAfter);
            if (!this._running) break;
            this.anime.pause();      // ← 途中で停止

            await this.wait(this.interval);
            if (!this._running) break;
            this.anime.resume();     // ← 続きから再開
        }
    }

    private wait(sec: number): Promise<void> {
        return new Promise(resolve => this.scheduleOnce(resolve, sec));
    }
}