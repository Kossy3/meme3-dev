import { _decorator, Component, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
import { Manager } from '../../Manager';
import { SacrificeButton } from './SacrificeButton';

@ccclass('WolfMenu')
export class WolfMenu extends Component {
    @property(SacrificeButton) 
    private sacrificeButton: SacrificeButton;
    @property(SacrificeButton)
    private battleButton: SacrificeButton;
    @property(SacrificeButton)
    private godhandButton: SacrificeButton;
    private event = new EventTarget();

    start() {
        this.sacrificeButton.onSelect(() => {
            this.hideBuildingMenu();
            this.event.emit('sacrifice');
        });
        this.battleButton.onSelect(() => {
            this.hideBuildingMenu();
            this.event.emit('battle');
        });
        this.godhandButton.onSelect(() => {
            this.hideBuildingMenu();
            this.event.emit('godhand');
        });
    }

    onBattle(callback: (event: any) => void) {
        this.event.on('battle', callback);
    }

    onSacrifice(callback: (event: any) => void) {
        this.event.on('sacrifice', callback);
    }

    onGodhand(callback: (event: any) => void) {
        this.event.on('godhand', callback);
    }

    showWolfMenu(wolfnum: number) {
        this.sacrificeButton.show();
        this.battleButton.show();
        if (wolfnum + 2 <= Manager.cult) {
            this.godhandButton.show();
        }
    }
    
    hideBuildingMenu() {    
        this.sacrificeButton.hide();
        this.battleButton.hide();
        this.godhandButton.hide();
    }
}