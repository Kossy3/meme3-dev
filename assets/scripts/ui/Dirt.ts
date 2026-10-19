import { _decorator, Component, Node, Label} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';

@ccclass('Dirt')
export class Dirt extends Component {
    private __label: Label;
    start() {
        this.__label = this.getComponentInChildren(Label);
    }

    update(deltaTime: number) {
        this.__label.string = Manager.terrain.dirt.toString();
    }
}


