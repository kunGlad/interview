// store/cartStore-good.js
// @ts-nocheck
import { makeAutoObservable } from 'mobx';

class CartStoreGood {
    items = [];
    discount = 0.8;  // 8折

    constructor() {
        // ✅ 关键：转换成 MobX 可观察对象
        makeAutoObservable(this);
    }

    // ✅ 自动标记为 action
    addItem(product) {
        this.items.push(product);
        runInAction(() => { })
    }

    // ✅ 自动标记为 action
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    // ✅ 自动标记为 computed（因为 getter）
    get totalPrice() {
        console.log('计算总价');  // 依赖变化时才执行
        return this.items.reduce((sum, item) =>
            sum + item.price * item.quantity, 0);
    }

    // ✅ 自动标记为 computed
    get discountPrice() {
        console.log('计算折后价');
        return this.totalPrice * this.discount;
    }

    // ✅ 自动标记为 action
    applyCoupon(code) {
        if (code === 'SAVE20') {
            this.discount = 0.8;
        }
    }
}

export default new CartStoreGood()


// 使用时：
// cartStore.addItem({ id: 1, name: "iPhone", price: 9999, quantity: 1 });
// ✅ 控制台输出："购物车组件渲染"
// ✅ UI 立即更新显示商品
// ✅ 用户看到购物车内容变了！