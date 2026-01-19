// react 原生事件与合成事件

import { useEffect } from "react";

function App() {
  const handleClick = () => {
    console.log("React 冒泡事件");
  };

  const handleClickCapture = (e: any) => {
    // e.stopPropagation();
    console.log("React 捕获事件");
  };

  const nativeCaptureHandler = () => {
    console.log("原生捕获事件");
  };

  const nativeBubbleHandler = (e: any) => {
    // e.stopPropagation();
    console.log("原生冒泡事件");
  };

  useEffect(() => {
    const div = document.getElementById("myDiv");
    if (div) {
      // 原生捕获
      div.addEventListener("click", nativeCaptureHandler, true);

      // 原生冒泡
      div.addEventListener("click", nativeBubbleHandler, false);

      return () => {
        if (div) {
          div.removeEventListener("click", nativeCaptureHandler, true);
          div.removeEventListener("click", nativeBubbleHandler, false);
        }
      };
    }
  }, []);

  return (
    <div id="myDiv" onClick={handleClick} onClickCapture={handleClickCapture}>
      点击我
    </div>
  );
}

export default App;

// 实际执行流程：
// 1. 组件渲染 → React 自动绑定 onClick/onClickCapture
// 2. useEffect 执行 → 你手动绑定的原生事件
// 3. 点击发生 → 事件触发

// 运行结果
// React捕获事件=> 原生捕获事件=>原生冒泡事件=> React冒泡事件
