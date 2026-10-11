import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';
import { MemeData } from './logic/MemeData';
import { MemeState } from './logic/MemeState';

@ccclass('Meme')
export class Meme extends Component {
    private __data: MemeData;

    spawn() {
        const position = this.node.position;
        // 楕円の内側にランダムに配置する
        const angle = Math.random() * Math.PI * 2;
        const radiusX = 500;
        const radiusY = 250;
        const x = position.x + Math.cos(angle) * radiusX;
        const y = position.y + Math.sin(angle) * radiusY;
        this.node.setPosition(x, y);
    }

    load(data: MemeData) {
        this.__data = data;
    }

    start() {

    }

    update(deltaTime: number) {
        if (this.__data.state === MemeState.DEATH 
            || this.__data.state === MemeState.LEAVE
        ) {
            this.node.destroy();
        }
    }    
}


