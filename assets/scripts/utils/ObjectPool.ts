// Node以外のデータオブジェクトもプールできる汎用クラス
export class ObjectPool<T> {
    private pool: T[] = [];
    private createFunc: () => T;

    constructor(createFunc: () => T, initialSize: number = 0) {
        this.createFunc = createFunc;
        for (let i = 0; i < initialSize; i++) {
            this.pool.push(this.createFunc());
        }
    }

    public get(): T {
        return this.pool.length > 0 ? this.pool.pop()! : this.createFunc();
    }

    public put(obj: T): void {
        this.pool.push(obj);
    }

    public clear(): void {
    }
}