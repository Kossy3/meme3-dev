import { _decorator, Component, sys, resources, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { Meme } from './Meme';

@ccclass('Load')
export class Load extends Component {
    start() {
        const gameData = sys.localStorage.getItem('gameData');
        if (gameData) {
            Manager.load(gameData);
        }
        resources.load("prefab/meme6.prefab", Prefab);
        const prefabs = resources.get("prefab/meme6.prefab", Prefab);
        console.log(prefabs)
        Manager.memes.forEach((m, i) => {
            const child = instantiate(prefabs);
            this.node.addChild(child);
            const meme = child.getComponent(Meme);
            meme.load(m);
            meme.spawn();
        });

    }

    update(deltaTime: number) {
    }
}


