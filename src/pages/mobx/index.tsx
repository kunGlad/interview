// @ts-nocheck

import { observer } from "mobx-react-lite";
import cartStoreBad from "./CartStoreBad";
import cartStoreGood from "./CardStoreGood";

const MobxShopingCart = observer(() => {
  console.log("购物车组件渲染");

  const handleAddItem = () => {
    cartStoreGood.addItem({ id: +new Date(), name: "iPhone", price: 9999, quantity: 1 });
  };

  return (
    <div>
      <h3>购物车</h3>
      <ul>
        {cartStoreGood.items?.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => cartStoreGood.removeItem(item.id)}>删除</button>
          </li>
        ))}
      </ul>
      <div>总价: ${cartStoreGood.totalPrice}</div>
      <div>折后价: ${cartStoreGood.discountPrice}</div>

      <button onClick={handleAddItem}>添加 iPhone</button>
    </div>
  );
});

export default MobxShopingCart;
