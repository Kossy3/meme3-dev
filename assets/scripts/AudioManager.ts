import { _decorator, Component, AudioSource, AudioClip, resources, director, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends Component {
    private static _instance: AudioManager | null = null;

    @property(AudioSource)
    private seSource: AudioSource = null!;   // playOneShot用
    @property(AudioSource)
    private bgmSource: AudioSource = null!;  // ループ用（任意）

    private lastPlayed: Map<string, number> = new Map();
    private muted = false;

    onLoad() {
        if (AudioManager._instance && AudioManager._instance !== this) {
            this.node.destroy();
            return;
        }
        AudioManager._instance = this;
        director.addPersistRootNode(this.node); // title / scene / clear をまたいで使う
        this.muted = sys.localStorage.getItem('mute') === '1';
    }

    /**
     * @param name resources/sound/ 以下のファイル名（拡張子なし）
     * @param minInterval 同じ音の最短再生間隔（秒）。連打・大量発生の抑制用
     */
    public play(name: string, volume = 1, minInterval = 0.05) {
        if (this.muted) return;
        const now = performance.now() / 1000;
        if (now - (this.lastPlayed.get(name) ?? -999) < minInterval) return;
        const clip = resources.get(`sound/${name}`, AudioClip);
        if (!clip) { console.warn(`[Audio] sound/${name} が未ロード`); return; }
        this.lastPlayed.set(name, now);
        this.seSource.playOneShot(clip, volume);
    }

    public static play(name: string, volume = 1, minInterval = 0.05) {
        this._instance?.play(name, volume, minInterval);
    }

    public static setMute(m: boolean) {
        if (!this._instance) return;
        this._instance.muted = m;
        sys.localStorage.setItem('mute', m ? '1' : '0');
        if (m) this._instance.bgmSource?.pause(); else this._instance.bgmSource?.play();
    }
}