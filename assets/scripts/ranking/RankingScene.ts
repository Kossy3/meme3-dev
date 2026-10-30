import { _decorator, Component, Node, Prefab, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

import { collection, query, orderBy, limit, where, getDocs } from '../../libs/firebase-bundle.mjs';
import { db, auth, ensureSignedIn } from '../utils/firebase';
import { RankItem } from './RankItem';

interface RankEntry {
    uid: string;
    name: string;
    steps: number;
    day: number;
    assention: boolean;
}

@ccclass('RankingScene')
export class RankingScene extends Component {

    @property(Prefab) itemPrefab: Prefab = null!;
    @property(Node) content: Node = null!;          // ScrollView の content
    @property(Label) statusLabel: Label = null!;    // 「読み込み中...」用

    @property({ tooltip: '取得件数' })
    private maxCount: number = 50;

    @property({ tooltip: 'assention が true のユーザーのみ表示' })
    private onlyAssention: boolean = false;

    start() {
        this.loadRanking();
    }

    async loadRanking() {
        this.statusLabel.string = '読み込み中...';
        this.content.removeAllChildren();

        try {
            console.log('[Ranking] 1. signIn 開始');
            await ensureSignedIn();
            console.log('[Ranking] 2. signIn 完了');

            const entries = await this.fetchRanking();
            console.log('[Ranking] 3. 取得完了', entries.length);

            if (entries.length === 0) {
                this.statusLabel.string = 'まだ記録がありません';
                return;
            }
            this.render(entries);
            this.statusLabel.string = '';
        } catch (e) {
            console.error('[Ranking] 失敗', e);
            this.statusLabel.string = '読み込みに失敗しました';
        }
    }


    private async fetchRanking(): Promise<RankEntry[]> {
        console.log('collection', typeof collection);
console.log('query', typeof query);
console.log('where', typeof where);
console.log('orderBy', typeof orderBy);
console.log('limit', typeof limit);
console.log('getDocs', typeof getDocs);
        const col = collection(db, 'meme3');

        // 1. 昇天済み：day が少ない順
        const q1 = query(
            col,
            where('assention', '==', true),
            orderBy('day', 'asc'),
            limit(this.maxCount)
        );
        // 2, 3. 未昇天：steps 多い順、同率なら day が少ない順
        const q2 = query(
            col,
            where('assention', '==', false),
            orderBy('steps', 'desc'),
            orderBy('day', 'asc'),
            limit(this.maxCount)
        );

        const [snap1, snap2] = await Promise.all([getDocs(q1), getDocs(q2)]);
        const toEntry = (d: any): RankEntry => {
            const data = d.data();
            return {
                uid: d.id,
                name: data.name,
                steps: data.steps ?? 0,
                day: data.day ?? 0,
                assention: !!data.assention,
            };
        };

        return [...snap1.docs.map(toEntry), ...snap2.docs.map(toEntry)]
            .slice(0, this.maxCount);
    }

    private dummyDocs(): RankEntry[] {
        const entries: RankEntry[] = [];
        for (let i = 0; i < this.maxCount; i++) {
            const e: RankEntry = {
                uid: `uid-${i}`,
                name: `てすとてすとてすと${i + 1}`,
                steps: Math.floor(Math.random() * 10000),
                day: Math.floor(Math.random() * 30) + 1,
                assention: Math.random() < 0.5,
            };
            entries.push(e);
        }
        return entries.sort((a, b) => b.steps - a.steps);
    }
    private render(entries: RankEntry[]) {
        const myUid = auth.currentUser?.uid;

        entries.forEach((e, i) => {
            const node = instantiate(this.itemPrefab);
            node.parent = this.content;
            node.getComponent(RankItem)!.setData(
                i + 1, e.name, e.steps, e.day, e.assention,e.uid === myUid
            );
        });
    }
}