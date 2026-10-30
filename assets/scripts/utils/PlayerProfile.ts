import { sys } from 'cc';

const NAME_KEY = 'playerName';
const BEST_KEY = 'bestRun';
export const MAX_NAME = 8;

export class PlayerProfile {
    static get playerName(): string | null {
        return sys.localStorage.getItem(NAME_KEY) ?? null;
    }
    static set playerName(v: string | null) {
        sys.localStorage.setItem(NAME_KEY, v);
    }

    static get best(): { steps: number; day: number; assention: boolean } | null {
        const s = sys.localStorage.getItem(BEST_KEY);
        return s ? JSON.parse(s) : null;
    }
    static set best(v: { steps: number; day: number; assention: boolean }) {
        sys.localStorage.setItem(BEST_KEY, JSON.stringify(v));
    }
}