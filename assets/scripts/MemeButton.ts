import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';


@ccclass('MemeButton')
export class MemeButton extends Component {
    start() {
        const button = this.getComponent(Button);
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'MemeButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('えさをさがす');
        const workers = Manager.workersCount;
        Manager.addFood(workers);
    }

    update(deltaTime: number) {
        
    }
}


