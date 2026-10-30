import { _decorator, Component, resources, Prefab, director, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadAssets')
export class LoadAssets extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    async onLoad() {
        try {
            // resources/prefab フォルダ以下の全Prefabを一括で事前ロード
            await this.loadFolder('prefab', Prefab);

            // ロード完了したらゲーム本編へ遷移
            director.loadScene('title');
        } catch (err) {
            console.error('アセットのロードに失敗しました', err);
        }
    }

    // Promise化して async/await で扱えるようにするヘルパー関数
    private loadFolder(path: string, type: any): Promise<void> {
        return new Promise((resolve, reject) => {
            resources.loadDir(path, type, 
                // 進捗コールバック（プログレスバー更新）
                (completedCount, totalCount) => {
                    if (this.progressBar) {
                        this.progressBar.progress = completedCount / totalCount;
                    }
                },
                // 完了コールバック
                (err, assets) => {
                    if (err) return reject(err);
                    resolve();
                }
            );
        });
    }
}