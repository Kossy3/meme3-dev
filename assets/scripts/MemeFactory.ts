import { _decorator, Component, sys, resources, instantiate, Prefab } from 'cc';
const { ccclass } = _decorator;
import { MemeData } from './logic/MemeData';
import { Meme } from './Meme';
import { Manager } from './Manager';

@ccclass('MemeFactory')
export class MemeFactory extends Component {
    private memePrefab: Prefab | null = null;
    onLoad() {
        this.memePrefab = resources.get('prefab/meme6', Prefab);
        Manager.onMemeCreated(this.createMeme.bind(this));
    }

    createMeme(memeData: MemeData){
        const child = instantiate(this.memePrefab);
        this.node.addChild(child);

        const meme = child.getComponent(Meme);
        if (!meme) {
            console.error('Memeコンポーネントがありません');
            return;
        }
        meme.load(memeData);
        meme.spawn();
    }

    update() {
    }
}