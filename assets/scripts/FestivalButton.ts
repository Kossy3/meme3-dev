import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from './Manager';

@ccclass('FestivalButton')
export class FestivalButton extends Component {
    start() {
        const button = this.getComponent(Button);
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'FestivalButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('おまつり');
        Manager.festival();
        Manager.nextDay();
    }

    isAvailable() {
        //（余剰食糧 - 群れの絶対数))/2頭 >= 2
        const foodMergin = (Manager.food-Manager.memesCount)/2 >= 2;
        const enoughWorker = Manager.workersCount >= 2;
        this.node.active = foodMergin && enoughWorker;
    }
}


