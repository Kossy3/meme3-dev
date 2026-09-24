import { _decorator, Component, sys} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';

@ccclass('Load')
export class Load extends Component {
    start() {
        const gameData = sys.localStorage.getItem('gameData');
        if (gameData) {
            Manager.load(gameData);
        }
    }

    update(deltaTime: number) {
        
    }
}


