import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { MemeData } from './Manager';
import { Manager } from './Manager';

@ccclass('Meme')
export class Meme extends Component {
    private __data: MemeData;

    load(data: MemeData) {
        this.__data = data;
    }

    start() {

    }

    update(deltaTime: number) {
        if (this.__data.death) {
            this.node.destroy();
        }
        if (this.__data.leave) {
            this.node.destroy();
        }
    }    
}


