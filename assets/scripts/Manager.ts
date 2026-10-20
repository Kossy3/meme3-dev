import { _decorator, EventTarget, log } from 'cc';
const { ccclass, property } = _decorator;
import { GameData } from './logic/GameData';
import { TerrainData } from './logic/TerrainData';
import { MemeData , MAX_HUNGER, DANGER_HUNGER} from './logic/MemeData';
import { MemeState } from './logic/MemeState';

export class Manager {
    private static __data: GameData = new GameData();
    private static __eventTarget: EventTarget = new EventTarget();

    private static __lock: boolean = false;

    public static onMemeCreated(callback: (memeData: MemeData) => void) {
        this.__eventTarget.on('memeCreated', callback);
        this.__eventTarget.on('memeCreated', ()=>{log('onMemeCreated called')});
    }

    public static onCommand(callback: () => void) {
        this.__eventTarget.on('command', callback);
    }

    public static onNextDay(callback: () => void) {
        this.__eventTarget.on('nextDay', callback);
    }

    public static go() {
        this.__eventTarget.emit('command');
        this.__data.steps += 1;
        if (this.__data.steps >= this.__data.terrain.length) {
            this.__data.terrain.push(new TerrainData());
        }
        for (let meme of this.__activeMemes) {
            meme.go();
        }
    }

    public static stop() {
        for (let meme of this.__activeMemes) {
            meme.stop();
        }
    }

    public static back() {
        this.__eventTarget.emit('command');
        if (this.__data.steps <= 0) {
            return;
        }
        this.__data.steps = this.__data.steps - 1;
        for (let meme of this.__activeMemes) {
            meme.back();
        }
    }

    public static load(json?: string) {
        if (json) {
            this.__data.load(json);
        }
    }

    public static get food(): number {
        return this.__data.food;
    }

    public static get cult(): number {
        return this.__data.cult;
    }

    public static get steps(): number {
        return this.__data.steps;
    }

    public static addFood() {
        this.__eventTarget.emit('command');
        const memeCount = this.memesCount;
        const workP = Math.sqrt(this.__data.cult*10)/memeCount;
        for (let i = 0; i < this.workersCount; i++) {
            if (Math.random() < workP) {
                this.__data.food += 2;
            }
        }
    }

    public static clean() {
        this.__eventTarget.emit('command');
        this.__data.terrain[this.__data.steps].dirt = 0;
    }

    public static addRottenFood(amount: number) {
        this.__data.rottenFood += amount;
    }

    public static get workersCount(): number {
        return this.__data.memes.filter(m => m.state === MemeState.WORKER).length;
    }

    public static get memesCount(): number {
        return this.__data.memes.filter(m => m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE).length;
    }

    public static get memes(): MemeData[] {
        return this.__data.memes;
    }

    public static get terrain(): TerrainData {
        return this.__data.terrain[this.__data.steps];
    }

    private static get __activeMemes() {
        return this.__data.memes.filter(m => m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE);
    }

    private static __resetPriority() {
        this.__data.memes.map(m => m.resetPriority());
    }

    public static festival() {
        this.__eventTarget.emit('command');
        this.__resetPriority();
        // 余剰の食料を消費し、はたらくめぇめぇ一定数を一時的に労働不能にすることでおまつり（繁殖）できる※2
        // 余剰食糧の量に応じて繁殖に参加するめぇめぇの数が増えるmin(はたらくめぇめぇ数,（余剰食糧 - 群れの絶対数))/2頭)。こまめに繁殖するより一括で繁殖させた方が効率が良い。
        // 繁殖に参加するめぇめぇは3-5ターン（繁殖コマンドを使用した土地依存）労働不能状態になり、ターン経過後参加しためぇめぇ数/2*1.3の子供が生まれる。親は労働不能状態が解除される。
        let festMemeCount = Math.min(this.workersCount, Math.floor((this.__data.food - this.memesCount)/2));
        const festPeriod = 3 + Math.floor(Math.random()*3);
        log(`祭りに参加するめぇめぇ数:${festMemeCount}、祭り期間:${festPeriod}ターン`);
        const sortedMemes =  this.__data.memes.sort((memeA, memeB) => memeA.priority - memeB.priority);
        for (let meme of sortedMemes) {
            if (meme.state === MemeState.WORKER && festMemeCount > 0) {
                meme.state = MemeState.FESTIVAL;
                meme.festLimit = festPeriod;
                festMemeCount--;
            }
        }
    }

    private static __eat() {
        this.__resetPriority();
        const sortedMemes =  this.__data.memes.sort((memeA, memeB) => memeA.priority - memeB.priority);
        for (let meme of sortedMemes) {
            // 死亡、脱走しためぇめぇをスキップ
            if (meme.state === MemeState.DEATH || meme.state === MemeState.LEAVE) {
                continue;
            }
            // 食料がない場合は空腹度を減らす
            if (this.__data.food + this.__data.rottenFood <= 0) {
                meme.hunger = Math.max(0, meme.hunger - 1);
                continue;
            }
            // 食料がある場合は空腹度を回復させる
            meme.hunger = Math.min(MAX_HUNGER, meme.hunger + 1);
            // 汚染された食料を食べる確率を計算する
            const isRotten = Math.random() < this.__data.rottenFood / (this.__data.food + this.__data.rottenFood);

            // 汚染された食料を食べた場合はスクレイピーに感染する
            if (isRotten) {
                meme.state = MemeState.SCRAPIE;
                this.__data.rottenFood -= 1;
            } else {
                this.__data.food -= 1;
            }
        }
    }

    private static __checkDeath() {
        for (let meme of this.__data.memes) {
            if (meme.hunger/DANGER_HUNGER < Math.random()) {
                meme.state = MemeState.DEATH;
            }
        }
    }

    private static __checkLeave() {
        const memeCount = this.memesCount;
        const notLeaveP = Math.sqrt(this.__data.cult*10)/memeCount;
        for (let meme of this.__data.memes.filter(m => 
            m.state == MemeState.WORKER 
            || m.state == MemeState.BUILDING
        )) {
            const leave = Math.random() > notLeaveP;
            if (leave) {
                meme.state = MemeState.LEAVE;
            }
        }
    }

    private static __checkFest() {
        let parentCount = 0;
        for (let meme of this.__data.memes.filter(m => m.state === MemeState.FESTIVAL)) {
            meme.festLimit -= 1;
            log(`祭り残り期間:${meme.festLimit}ターン`);
            if (meme.festLimit <= 0) {
                meme.state = MemeState.WORKER;
                parentCount++;
            }
        }
        for (let i = 0; i < Math.floor(parentCount/2); i++) {
            const childSeed = Math.random();
            let rate = 1;
            let childCount = 0;
            while (childSeed < rate) {
                const child = new MemeData();
                this.__data.memes.push(child);
                this.__eventTarget.emit('memeCreated', child);
                rate /= 3;
                childCount++;
            }
            log(`子供が生まれました (${childCount}つ子)`);
        }
    }
            

    private static __growth() {
        this.__data.memes.map(m => m.growth ++);
    }

    private static __polute() {
        this.__data.terrain[this.__data.steps].dirt += 1;
    }

    private static __checkInfect() {
        let infectCount = 0;
        // 土地の汚染度が5以上の場合は感染者を1人増やす
        if (this.__data.terrain[this.__data.steps].dirt > 5) {
            infectCount ++;
        }
        // 感染者は50%の確率で別の感染者を1人増やす
        this.__data.memes.map(m => {
            if (m.state === MemeState.SCRAPIE && Math.random() < 0.5) {
                infectCount++;
            }
        });
        this.__resetPriority();

        // 健康なめぇめぇをランダムに並びカエル
        const helthyMemes =  this.__data.memes
            .sort((memeA, memeB) => memeA.priority - memeB.priority)
            .filter(m => m.state !== MemeState.SCRAPIE && m.state !== MemeState.DEATH && m.state !== MemeState.LEAVE);
        // 感染者を増やす
        for (let meme of helthyMemes) {
            if (infectCount > 0) {
                meme.state = MemeState.SCRAPIE;
                infectCount--;
            }
        }

    }

    public static nextDay() {
        this.__data.food += 2;
        this.__data.day += 1;
        this.__polute();
        this.__eat();
        this.__checkDeath();
        this.__checkLeave();
        this.__resetPriority();
        this.__checkInfect();
        this.__checkFest();
        this.__growth();
        this.__eventTarget.emit('nextDay');
    }


}


