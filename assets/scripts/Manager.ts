import { _decorator, EventTarget, log } from 'cc';
const { ccclass, property } = _decorator;
import { GameData } from './logic/GameData';
import { TerrainData } from './logic/TerrainData';
import { MemeData , MAX_HUNGER, DANGER_HUNGER} from './logic/MemeData';
import { MemeState } from './logic/MemeState';
import { BuildingType } from './logic/BuildingType';

export class Manager {
    private static __data: GameData = new GameData();
    private static __eventTarget: EventTarget = new EventTarget();

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

    public static onFinEvent(callback: () => void) {
        this.__eventTarget.on('finEvent', callback);
    }

    public static onWolf(callback: () => void) {
        this.__eventTarget.on('wolf', callback);
    }

    public static onEvent(callback: () => void) {
        this.__eventTarget.on('event', callback);
    }

    public static finEvent() {
        this.__eventTarget.emit('finEvent');
    }

    public static onBattle(callback: () => void) {
        this.__eventTarget.on('battle', callback);
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

    public static killWolf() {
        this.__data.cult += 1;
        this.__data.food += 10;
    }

    public static harnessMeme(meme: MemeData) {
        this.__data.cult += 1;
        meme.state = MemeState.DEATH;
    }

    public static clean() {
        this.__eventTarget.emit('command');
        this.__data.terrain[this.__data.steps].dirt = Math.max(0, this.__data.terrain[this.__data.steps].dirt - 5);
    }

    public static addRottenFood(amount: number) {
        this.__data.rottenFood += amount;
    }

    public static get workersCount(): number {
        return this.__data.memes.filter(m => m.state === MemeState.WORKER).length;
    }

    public static get buildersCount(): number {
        return this.__data.memes.filter(m => m.state === MemeState.BUILDING).length;
    }

    public static get scrapieCount(): number {
        return this.__data.memes.filter(m => m.state === MemeState.SCRAPIE).length;
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

    public static get isBuilding(): boolean {
        return this.__data.building !== BuildingType.NONE;
    }

    public static get buildingNow(): BuildingType {
        return this.__data.building;
    }

    public static get buildingProgress(): number {
        return this.__data.buildingCost / this.buildCost(this.__data.building);
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

    public static killMeme(meme: MemeData) {
        if (meme.state === MemeState.SCRAPIE) {
            this.addRottenFood(10);
            this.__polute(5);
        } else {
            this.addRottenFood(10);
        }
        meme.state = MemeState.DEATH;
    }

    public static battle(wolfnum: number) {
        this.__resetPriority();
        const battleMemesorted = this.__activeMemes.sort(
            (memeA, memeB) => {
                if (memeA.growth === memeB.growth) {
                    return memeA.priority - memeB.priority;
                } else {
                    return memeA.growth - memeB.growth;
                }
        });
        const memePower = this.__data.cult;
        const wolfPower = this.__data.steps;
        const battleResult = [];
        let wolfHp = 10;
        let memeHp = 10;
        let wolfIndex = 0;
        let memeIndex = 0;
        // 2匹は残して戦う
        for (let meme of battleMemesorted.slice(0, -2)) {
            memeHp = 10;
            battleResult.push({event: "start", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
            while(memeHp > 0 && wolfIndex < wolfnum) {
                if (wolfHp <= 0) {
                    wolfHp = 10;
                    battleResult.push({event: "start", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
                }
                const attack = Math.random() < memePower / (memePower + wolfPower);
                if (attack) {
                    wolfHp -= 1;
                    battleResult.push({event: "memeAttack", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
                    if (wolfHp <= 0) {
                        battleResult.push({event: "wolfDead", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
                        wolfIndex += 1;
                    }
                } else {
                    memeHp -= 1;
                    battleResult.push({event: "wolfAttack", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
                    if (memeHp <= 0) {
                        battleResult.push({event: "memeDead", meme: meme, wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
                    }
                }
            }
            memeIndex += 1;
        }
        // 2匹になったら逃走
        if (memeIndex == battleMemesorted.length-2) {
            battleResult.push({event: "escape", meme: battleMemesorted[memeIndex], wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
        }
        // オオカミが全滅した場合は勝ち
        if (wolfIndex == wolfnum) {
            battleResult.push({event: "win", meme: battleMemesorted[memeIndex], wolf:wolfIndex, memeHp: memeHp, wolfHp: wolfHp});
        }

        this.__eventTarget.emit('battle', battleResult);
    }

    public static get canFestival(): boolean {
        return Math.min(this.workersCount, Math.floor((this.__data.food - this.memesCount)/2)) >= 2;
    }

    public static treat() {
        this.__eventTarget.emit('command');
        // 治療コマンドは、すべてのスクレイピー状態のめぇめぇを治療する。
        // cult値を治療数-3消費する
        const scrapieMemes = this.__data.memes.filter(m => m.state === MemeState.SCRAPIE)
        this.__data.cult -= Math.max(0, scrapieMemes.length - 3);
        scrapieMemes.map(m => {
            m.state = MemeState.WORKER
            m.treat();
        });
    }

    public static get canBuild() : boolean {
        // 建築作業中ではない、かつ現在の土地に建物が建設されていない場合に建設可能
        return this.__data.building === BuildingType.NONE && this.__data.terrain[this.__data.steps].building === BuildingType.NONE && this.workersCount > 0;
    }

    public static build(buildingType: BuildingType) {
        this.__eventTarget.emit('command');
        if (!this.canBuild) {
            return;
        }
        this.__data.building = buildingType;
        this.__data.buildingCost = this.buildCost(buildingType);
        for (let meme of this.__data.memes.filter(m => m.state === MemeState.WORKER)) {
            meme.state = MemeState.BUILDING;
        }
    }

    public static buildCost(buildingType: BuildingType): number {
        switch (buildingType) {
            case BuildingType.FARM:
                return 20 + this.__data.steps;
            case BuildingType.TOWER:
                return 20 + this.__data.cult * 2;
            case BuildingType.HOME:
                return 20 + this.__data.steps;
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

    private static __checkBuilding() {
        if (this.__data.building !== BuildingType.NONE) {
            // 建築作業をすすめる
            const buildPoint = this.buildersCount;
            if (buildPoint > 0) {
                this.__data.buildingCost -= buildPoint;
                log(`建築作業が進みました。残り${this.__data.buildingCost}ポイント`);
            }
            // 建築作業が完了した場合は建物を建設する
            if (this.__data.buildingCost <= 0) {
                this.__data.terrain[this.__data.steps].building = this.__data.building;
                log(`建物が完成しました。建物タイプ:${this.__data.building}`);
                if (this.__data.building === BuildingType.TOWER) {
                    this.__data.cult += this.__data.steps+1;
                }
                this.__data.building = BuildingType.NONE;
                this.__data.buildingCost = 0;
                for (let meme of this.__data.memes.filter(m => m.state === MemeState.BUILDING)) {
                    meme.state = MemeState.WORKER;
                }
            }
        }
    }  

    private static __growth() {
        this.__data.memes.map(m => m.growth ++);
    }

    private static __polute(number: number = 1) {
        this.__data.terrain[this.__data.steps].dirt += number;
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

    public static get childCount () : number {
        return this.__data.memes.filter(m => m.growth < 5).length;
    }

    private static __checkEvent() {
        // オオカミイベントの発生率
        const wolfEventRate = 0.1 + (this.childCount > 0 ? 0.2 : 0);
        // 商人イベントの発生率
        const merchantEventRate = 0;
        // えさ発見イベントの発生率
        const foodEventRate = 0;
        let p = Math.random();
        if (p < wolfEventRate) {
            this.__eventTarget.emit('wolf', Math.floor(Math.random()* 5) + 1);
            this.__eventTarget.emit('event');
        }
        p -= wolfEventRate;
        if (p < merchantEventRate) {
            this.__eventTarget.emit('merchant');
            this.__eventTarget.emit('event');
        }
        p -= merchantEventRate;
        if (p < foodEventRate) {
            this.__eventTarget.emit('food');
            this.__eventTarget.emit('event');
        }
    }

    public static nextDay() {
        this.__data.food += 2;
        this.__data.day += 1;
        this.__eat();
        this.__checkDeath();
        this.__checkLeave();
        this.__resetPriority();
        this.__checkInfect();
        this.__checkFest();
        this.__checkBuilding();
        this.__growth();
        this.__polute();
        this.__eventTarget.emit('nextDay');
        this.__checkEvent();
    }


}


