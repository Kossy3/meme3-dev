import { _decorator, Component, Node, Button, log, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../Manager';
import { MigrateManager } from '../MigrateManager';

@ccclass('BackButton')
export class BackButton extends Component {

    @property(MigrateManager)
    private migrateManager: MigrateManager;

    start() {
        const button = this.getComponent(Button);
        log('Button');
        button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'BackButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        this.migrateManager.back();
    }

    update(deltaTime: number) {
        
    }
}


