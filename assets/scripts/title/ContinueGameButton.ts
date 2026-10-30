import { _decorator, Component, Node, Button, log, sys, director } from 'cc';
const { ccclass, property } = _decorator;
import { GameData } from '../logic/GameData';

@ccclass('ContinueGameButton')
export class ContinueGameButton extends Component {
    @property(Button)
    private button: Button;

    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'ContinueGameButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        director.loadScene('scene');
    }
}


