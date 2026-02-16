// store/cartStore-bad.js
// @ts-nocheck
class CartStoreBad {
  items = []; // 购物车商品列表
  totalPrice = 0; // 总价
  discount = 0; // 折扣

  constructor() {
    // ❌ 忘记写 makeAutoObservable(this)
  }

  addItem(product) {
    this.items.push(product);
    this.calculateTotal(); // 手动触发计算
  }

  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.calculateTotal(); // 手动触发计算
    }
  }

  calculateTotal() {
    // 手动计算总价
    this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get discountPrice() {
    return this.totalPrice * 0.8; // 8折
  }
}

export default new CartStoreBad()

// 使用时的问题：
// cartStore.addItem({ id: 1, name: "iPhone", price: 9999, quantity: 1 });
// ❌ 控制台没有 "购物车组件渲染"
// ❌ UI 不会更新，还是显示空的购物车
// ❌ 用户点了"添加商品"，但页面没反应！
