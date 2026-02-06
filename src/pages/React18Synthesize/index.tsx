// react18 合成事件执行顺序
//@ts-nocheck
import React, { useEffect } from "react";
// 具体过程看解析： https://ccnik6yksk2e.feishu.cn/docx/XpaSdDwRho7fp0xRgIMcm6E0nNb#share-DeaRdLLs5oSR3exUmghcAlUanqe

const Demosy = () => {
  useEffect(() => {
    // 组件挂载后添加原生事件监听器
    document.addEventListener(
      "click",
      () => {
        console.log("document捕获");
      },
      true
    );
    document.addEventListener(
      "click",
      () => {
        console.log("document冒泡");
      },
      false
    );

    document.body.addEventListener(
      "click",
      () => {
        console.log("body捕获");
      },
      true
    );
    document.body.addEventListener(
      "click",
      () => {
        console.log("body冒泡");
      },
      false
    );

    let root = document.querySelector("#root");
    root.addEventListener(
      "click",
      () => {
        console.log("root捕获");
      },
      true
    );
    root.addEventListener(
      "click",
      () => {
        console.log("root冒泡");
      },
      false
    );

    let outer = document.querySelector(".outer");
    outer.addEventListener(
      "click",
      () => {
        console.log("outer捕获(原生)");
      },
      true
    );
    outer.addEventListener(
      "click",
      () => {
        console.log("outer冒泡(原生)");
      },
      false
    );

    let inner = document.querySelector(".inner");
    inner.addEventListener(
      "click",
      () => {
        console.log("inner捕获(原生)");
      },
      true
    );
    inner.addEventListener(
      "click",
      () => {
        console.log("inner冒泡(原生)");
      },
      false
    );

    // 清理函数
    return () => {
      // 移除所有事件监听器
      document.removeEventListener("click", () => {}, true);
      document.removeEventListener("click", () => {}, false);
    };
  }, []);

  return (
    <div
      className="outer"
      style={{
        width: 200,
        height: 200,
        background: "lightgreen",
      }}
      onClick={() => {
        console.log("outer 冒泡(合成)");
      }}
      onClickCapture={() => {
        console.log("outer 捕获(合成)");
      }}
    >
      <div
        className="inner"
        style={{
          width: 100,
          height: 100,
          background: "lightcoral",
        }}
        onClick={() => {
          console.log("inner 冒泡(合成)");
        }}
        onClickCapture={() => {
          console.log("inner 捕获(合成)");
        }}
      >
        888888
      </div>
    </div>
  );
};

export default Demosy;

/****
 * document捕获
 * body捕获
 * outer 捕获(合成)
 * inner 捕获(合成)
 * root捕获
 * outer捕获(原生)
 * inner捕获(原生)
 *
 * inner冒泡(原生)
 * outer冒泡(原生)
 * inner 冒泡(合成)
 * outer 冒泡(合成)
 * root冒泡
 * body冒泡
 * document冒泡
 */
