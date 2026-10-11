import { _decorator, EventTarget, log } from 'cc';
const { ccclass, property } = _decorator;
import { GameData } from './logic/GameData';
import { MemeData , MAX_HUNGER} from './logic/MemeData';
import { MemeState } from './logic/MemeState';

export class Manager {
    private static __data: GameData = new GameData();
    private static __eventTarget: EventTarget = new EventTarget();

    public static onMemeCreated(callback: (memeData: MemeData) => void) {
        this.__eventTarget.on('memeCreated', callback);
        this.__eventTarget.on('memeCreated', ()=>{log('onMemeCreated called')});
    }

    public static load(json?: string) {
        if (json) {
            this.__data.load(json);
        }
    }

    public static get food(): number {
        return this.__data.food;
    }

    public static addFood() {
        const memeCount = this.memesCount;
        const workP = Math.sqrt(this.__data.cult*10)/memeCount;
        for (let i = 0; i < this.workersCount; i++) {
            if (Math.random() < workP) {
                this.__data.food += 2;
            }
        }
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

    private static __resetPriority() {
        this.__data.memes.map(m => m.resetPriority());
    }

    public static festival() {
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
            if (meme.hunger/MAX_HUNGER < Math.random()) {
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
        let pairCount = 0;
        for (let meme of this.__data.memes.filter(m => m.state === MemeState.FESTIVAL)) {
            meme.festLimit -= 1;
            log(`祭り残り期間:${meme.festLimit}ターン`);
            if (meme.festLimit <= 0) {
                meme.state = MemeState.WORKER;
                pairCount++;
            }
            if (pairCount % 2 === 0 && meme.festLimit <= 0) {
                const childSeed = Math.random();
                let rate = 1;
                while (childSeed < rate) {
                    log(`祭り終了、子供が生まれました${rate}`);
                    const child = new MemeData();
                    this.__data.memes.push(child);
                    this.__eventTarget.emit('memeCreated', child);
                    rate /= 3;
                }
            }
        }
    }
            

    private static __growth() {
        this.__data.memes.map(m => m.growth ++);
    }

    public static nextDay() {
        this.__data.day += 1;
        this.__resetPriority();
        this.__eat();
        this.__checkDeath();
        this.__checkLeave();
        this.__checkFest();
        this.__growth();
    }


}


