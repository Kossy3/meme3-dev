import { _decorator, Component, view, ResolutionPolicy, screen } from 'cc';
const { ccclass } = _decorator;

@ccclass('ResponsiveCanvas')
export class ResponsiveCanvas extends Component {
    onLoad() {
        this.fitScreen();
    }

    fitScreen() {
        const designSize = view.getDesignResolutionSize();
        const designAspect = designSize.width / designSize.height;
        
        // 現在のウィンドウ/画面サイズを取得
        const windowSize = screen.windowSize;
        const deviceAspect = windowSize.width / windowSize.height;

        // 画面がデザイン比率より横長か縦長かでフィット方式を自動変更
        if (deviceAspect > designAspect) {
            // 横長画面：幅に合わせて上下の余白をなくす
            view.setDesignResolutionSize(designSize.width, designSize.height, ResolutionPolicy.FIXED_WIDTH);
        } else {
            // 縦長画面：高さに合わせて左右の余白をなくす
            view.setDesignResolutionSize(designSize.width, designSize.height, ResolutionPolicy.FIXED_HEIGHT);
        }
    }
}

