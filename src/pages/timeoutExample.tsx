import { useState } from "react";
import useTimeout from "./useTimeout";

const TimeoutExample = () => {
  const [count, setCount] = useState(0);
  useTimeout(() => setCount(5), 3000);

  return <div>count: {count}</div>;
};

export default TimeoutExample;
