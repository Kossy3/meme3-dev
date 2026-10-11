import { _decorator, Component, sys, resources, instantiate, Prefab } from 'cc';
const { ccclass } = _decorator;

import { Manager } from './Manager';
import { Meme } from './Meme';

@ccclass('Load')
export class Load extends Component {
    start() {
        const gameData = sys.localStorage.getItem('gameData');

        if (gameData) {
            Manager.load(gameData);
        }

        resources.load('prefab/meme6', Prefab, (err, prefab) => {
            if (err) {
                console.error('Prefabの読み込みに失敗:', err);
                return;
            }

            Manager.memes.forEach((m) => {
                const child = instantiate(prefab);
                this.node.addChild(child);

                const meme = child.getComponent(Meme);
                if (!meme) {
                    console.error('Memeコンポーネントがありません');
                    return;
                }

                meme.load(m);
                meme.spawn();
                
            });
        });
    }
}