import { _decorator, Component, Label, Color, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RankItem')
export class RankItem extends Component {
    @property(Label) rankLabel: Label = null!;
    @property(Label) nameLabel: Label = null!;
    @property(Label) stepsLabel: Label = null!;
    @property(Label) dayLabel: Label = null!;
    @property(Node) assentionIcon: Node = null!;

    setData(rank: number, name: string, steps: number, day: number,assention: boolean, isMe: boolean) {
        this.rankLabel.string = `${rank}👑`;
        this.nameLabel.string = this.trimName(name);
        this.stepsLabel.string = `${steps}めぇとる`;
        this.dayLabel.string = `${day}にちめぇ`;
        this.assentionIcon.active = assention;

        if (isMe) {
            const c = new Color(255, 220, 80, 255);
            this.nameLabel.color = c;
            this.stepsLabel.color = c;
        }
    }

    trimName(name: string | null): string {
        if (!name) {
            return 'ななしのめぇめぇ';
        }
        const maxLength = 8;
        if (name.length > maxLength) {
            return name.substring(0, maxLength) + '...';
        }
        return name;
    }
}