import { _decorator, Component } from 'cc';
const { property, ccclass } = _decorator;
import { AnimationAsync } from './utils/AnimationAsync';
import { Manager } from './Manager';
import { EventType } from './logic/CommandType';
import { syncRanking } from './utils/Ranking';

@ccclass('Sky')
export class Sky extends Component {
    @property(AnimationAsync)
    private animation: AnimationAsync;

    start() {
        Manager.on(EventType.NEXT_DAY_EFFECT, async () => {
            await this.animation.playAsync('つぎのひ');
            Manager.completeNextDay();
            syncRanking();               // await しない（演出を止めない）
        });
    }
}