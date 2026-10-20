import { _decorator, Animation, AnimationState } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationAsync')
export class AnimationAsync extends Animation {
    public async playAsync(
        clipName?: string,
    ): Promise<void> {
        return new Promise((resolve) => {
            const state = this.getState(clipName);

            const onFinished = (
                type: Animation.EventType,
                finishedState: AnimationState,
            ) => {
                if (finishedState !== state) return;

                this.off(
                    Animation.EventType.FINISHED,
                    onFinished,
                    this,
                );

                resolve();
            };

            this.on(
                Animation.EventType.FINISHED,
                onFinished,
                this,
            );

            this.play(clipName);
        });
    }

}
