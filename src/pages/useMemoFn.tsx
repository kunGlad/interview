// @ts-nocheck
import { useState, memo, useCallback, useMemo } from "react";

const Child = memo(({ count, info, handleClick }) => {
  console.log("child 重新渲染");
  return <div onClick={handleClick}>子组件{count}</div>;
});

// 一个模拟的复杂计算函数
const expensiveCalculation = (base) => {
  console.log("正在进行昂贵计算...");
  // 模拟耗时操作
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return { base, total };
};

const useMemoFn = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // 情况一：未使用 useMemo，任何重渲染都会导致计算重复执行
  // const info = expensiveCalculation(count);

  // 情况二：使用 useMemo 优化，仅当 count 变化时才重新计算
  const info = useMemo(() => expensiveCalculation(count), [count]);

  // 缓存函数，仅依赖 count
  const handleClick = useCallback(() => {
    console.log("click");
  }, [count]);
  // const handleClick = () => {
  //   console.log("click");
  // };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <button onClick={() => setNum(num + 1)}>num+1</button>
      <Child count={count} handleClick={handleClick} info={info} />
    </div>
  );
};

export default useMemoFn;
