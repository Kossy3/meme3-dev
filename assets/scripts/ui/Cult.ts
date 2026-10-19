import { _decorator, Component, Node, Label, log} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';


@ccclass('Cult')
export class Cult extends Component {
    private __label: Label;
    start() {
        this.__label = this.getComponentInChildren(Label);
    }

    update(deltaTime: number) {
        this.__label.string = Manager.cult.toString();
    }
}


