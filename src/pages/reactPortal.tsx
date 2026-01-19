import React, { ReactNode } from "react";
import ReactDOM, { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    children,
    // 渲染目标的DOM元素
    document.getElementById("modal-root") as Element
  );
};

export default Portal;
