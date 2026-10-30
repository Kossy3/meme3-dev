import { _decorator, Component, Node, Button, log, sys, director } from 'cc';
const { ccclass, property } = _decorator;
import { GameData } from '../logic/GameData';
import { Manager } from '../Manager';
import { syncRanking } from '../utils/Ranking';

@ccclass('NewGameButton')
export class NewGameButton extends Component {
    @property(Button)
    private button: Button;

    start() {
        this.button.clickEvents.push(this.createHandler());
    }

    createHandler() {
        const eventHandler = new Button.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'NewGameButton';
        eventHandler.handler = 'onClick';
        return eventHandler;
    }

    onClick() {
        Manager.resetEvents();
        sys.localStorage.setItem('gameData', new GameData().json());
        syncRanking();
        director.loadScene('scene');
    }
}


