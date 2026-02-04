class MiniDB {
    private static instance: MiniDB | null = null;

    private db: IDBDatabase | null = null;
    private storeName: string = 'data';
    private initPromise: Promise<void> | null = null;

    private constructor() { }

    static getInstance(): MiniDB {
        if (!this.instance) {
            this.instance = new MiniDB();
        }
        return this.instance;
    }

    // 初始化数据库
    private async init(): Promise<void> {
        if (this.initPromise) return this.initPromise;

        this.initPromise = new Promise((resolve, reject) => {
            // 打开数据库，第一个参数为name,第二个参数为version
            const request = indexedDB.open('miniDB', 1);

            request.onerror = () => reject('数据库初始化失败');
            request.onsuccess = (e) => {
                this.db = (e.target as any).result;
                resolve();
            };

            // upgradeneeded 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件，初始数据库也会，，因为版本从无到有
            request.onupgradeneeded = (e) => {
                const db = (e.target as any).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    // 新建表   // 不自增，需要手动提供 id
                    db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: false });
                }
            };
        });

        return this.initPromise;
    }

    // 新增
    async add(data: any): Promise<number> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            // 新建事务
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            // 获取对象存储
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.add(data);

            request.onsuccess = (e) => resolve((e.target as any).result);
            request.onerror = () => reject(`添加失败: ${request.error?.message || '未知错误'}`);;
        });
    }

    // 查询全部
    async getAll(): Promise<any[]> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            const tx = this.db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            const request = store.getAll();
            request.onsuccess = (e) => resolve((e.target as any).result || []);
            request.onerror = () => reject('查询失败');
        });
    }

    // 查询单个
    async get(key: number): Promise<any[]> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            const tx = this.db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            const request = store.get(key);
            request.onsuccess = (e) => resolve((e.target as any).result || []);
            request.onerror = () => reject('查询失败');
        });
    }

    // 更新
    async update(data: any): Promise<void> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            store.put({ ...data });
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject('更新失败');
        });
    }

    // 删除
    async delete(id: number): Promise<void> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            store.delete(id);
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject('删除失败');
        });
    }

    // 清空表的数据
    async clear(): Promise<void> {
        await this.init();
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('数据库未初始化');
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            store.clear();
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject('清空失败');
        })
    }

}

export default MiniDB.getInstance()

