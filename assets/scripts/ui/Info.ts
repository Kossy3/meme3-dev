import { _decorator, Component, Node, Label, log} from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';


@ccclass('Info')
export class Info extends Component {
    @property(Label)
    private day: Label;
    @property(Label)
    private steps: Label;
    start() {
    }

    update(deltaTime: number) {
        this.day.string = (Manager.day+1).toString() + "にちめぇ";
        this.steps.string = (Manager.steps).toString() + "めぇとる";
    }
}


