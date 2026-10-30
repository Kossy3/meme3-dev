import { _decorator, Component, sys} from 'cc';
const { ccclass, property } = _decorator;
import { MemeFactory } from './MemeFactory';
import { Manager } from './Manager';

@ccclass('Load')
export class Load extends Component {
    @property(MemeFactory)
    private memeFactory: MemeFactory;

    onLoad() {
        const gameData = sys.localStorage.getItem('gameData');
        if (gameData) {
            Manager.load(gameData);
        }
    }

    start() {
        Manager.memes.forEach((m) => {
            this.memeFactory.createMeme(m);        
        });
    }
}