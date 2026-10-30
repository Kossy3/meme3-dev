// utils/Ranking.ts
import { Manager } from '../Manager';
import { saveScore } from './firebase';
import { PlayerProfile } from './PlayerProfile';

type Run = { steps: number; day: number; assention: boolean };

/** RankingScene の並びと同じ基準：昇天済みは day 少ない順、未昇天は steps 多い順→day 少ない順 */
function isBetter(a: Run, b: Run | null): boolean {
    if (!b) return true;
    if (a.assention !== b.assention) return a.assention;
    if (a.assention) return a.day < b.day;
    return a.steps > b.steps || (a.steps === b.steps && a.day < b.day);
}

export async function registerName(name: string | null): Promise<void> {
    PlayerProfile.playerName = name;

    // 解放日に送った昇天記録があれば、その day を保つ
    const best = PlayerProfile.best;
    const run: Run = best?.assention
        ? best
        : { steps: Manager.steps, day: Manager.day + 1, assention: true };

    await saveScore({ ...run, name: PlayerProfile.playerName });
    PlayerProfile.best = run;
}

let inflight = false;
/** nextDay 完了ごとに呼ぶ。更新条件を満たすときだけ送信する */
export async function syncRanking(): Promise<void> {
    if (inflight) return;
    const run: Run = { steps: Manager.steps, day: Manager.day + 1, assention: Manager.canMagic() };
    if (!isBetter(run, PlayerProfile.best)) return;
    inflight = true;

    try {
        await saveScore({ ...run, name: PlayerProfile.playerName });
        PlayerProfile.best = run;
    } catch (e) {
        console.warn('[Ranking] 送信失敗。次回再試行', e);
    } finally {
        inflight = false;
    }

    
}