// @ts-nocheck
import React, { memo, useState, useCallback, useMemo } from "react";
import { useWhyDidYouUpdate } from "ahooks";
const newUserObject = { name: "用户" };

// 组件1：接收对象props（每次父组件渲染都会创建新对象）
const Child = React.memo(({ user }) => {
  useWhyDidYouUpdate("哈哈哈哈哈", { user });
  console.log("Child 渲染", user.name);
  return <div>用户名: {user.name}</div>;
});
Child.whyDidYouRender = true;

const Parent = () => {
  const [count, setCount] = useState(0);

  // 每次都会创建新对象 - 导致无效重渲染
  //   const newUserObject = { name: "用户" };

  return (
    <div style={{ padding: 20 }}>
      <Child user={newUserObject} />

      <button onClick={() => setCount((c) => c + 1)}>只更新计数</button>
    </div>
  );
};

Parent.whyDidYouRender = true;

export default Parent;
