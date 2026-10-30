// ui/NameDialog.ts
import { _decorator, Component, EditBox, Button } from 'cc';
const { ccclass, property } = _decorator;
import { MAX_NAME, PlayerProfile } from '../utils/PlayerProfile';

@ccclass('NameDialog')
export class NameDialog extends Component {
    @property(EditBox) editBox: EditBox = null!;
    @property(Button) okButton: Button = null!;
    @property(Button) skipButton: Button = null!;

    private _resolve: ((name: string | null) => void) | null = null;

    start() {
        this.editBox.maxLength = MAX_NAME;
        this.okButton.node.on(Button.EventType.CLICK, () => this.done(this.editBox.string == '' ? null : this.editBox.string));
        this.skipButton.node.on(Button.EventType.CLICK, () => this.done(null));
    }

    /** 入力された名前を返す */
    ask(): Promise<string | null> {
        console.log(PlayerProfile.playerName);
        this.editBox.string = PlayerProfile.playerName ?? '';   // 前回の名前を初期値に
        this.node.active = true;
        return new Promise((resolve) => { this._resolve = resolve; });
    }

    private done(name: string | null) {
        this.node.active = false;
        this._resolve?.(name);
        this._resolve = null;
    }
}