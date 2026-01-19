import { useState } from "react";
// 在任何地方使用它
import Portal from "./reactPortal";

export default function Counter() {
  const [age, setAge] = useState(42);
  const [open, setOpen] = useState(false);

  const increment = () => {
    // setAge(age + 1);
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button onClick={() => setOpen(true)}>显示模态框</button>

      {open && (
        <Portal>
          <div className="modal">
            <div className="modal-content">
              <h2>我是一个模态框!</h2>
              <button onClick={() => setOpen(false)}>关闭</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
