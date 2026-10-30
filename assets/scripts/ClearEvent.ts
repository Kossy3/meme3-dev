// ClearScene.ts
import { _decorator, Component, director } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { NameDialog } from './ui/NameDialog';
import { registerName } from './utils/Ranking';
import { AnimationAsync } from './utils/AnimationAsync';

@ccclass('ClearScene')
export class ClearScene extends Component {
    @property(NameDialog) nameDialog: NameDialog = null!;
    @property(AnimationAsync) titleButton: AnimationAsync = null!;

    async start() {
        const name = await this.nameDialog.ask();
        console.log('[Ranking] 登録する名前', name);
        try {
            await registerName(name);
            
        } catch (e) {
            console.error('[Ranking] 登録失敗', e);   // 失敗してもゲームは進める
        }
        Manager.clearSave();
        director.loadScene('title');
    }
}