import { _decorator, Component, Node, Button, log, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';

@ccclass('GoButton')
export class GoButton extends Component {
    start() {
        const button = this.getComponent(Button);
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'GoButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        log("進む");
    }

    update(deltaTime: number) {
        
    }
}


