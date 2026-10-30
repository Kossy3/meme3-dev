import { _decorator, Component, sys } from 'cc';
const { ccclass } = _decorator;

@ccclass('OpenLicense')
export class OpenLicense extends Component {
    onClick() {
        // Web ビルドでは新しいタブで開く。index.html からの相対パス
        sys.openURL('licenses/OFL.txt');
    }
}