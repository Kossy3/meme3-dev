import { _decorator, Component, Node, Button, log } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';

@ccclass('CleanButton')
export class CleanButton extends Component {
    start() {
        const button = this.getComponent(Button);
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'CleanButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log('おそうじ');
        Manager.clean();
        Manager.nextDay();
    }
}


