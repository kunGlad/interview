import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import router from "./router/";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // 请查看你的项目入口文件（如 src/index.js或 main.jsx）。如果你的组件被 <React.StrictMode>包裹，这通常是导致开发环境下效果执行两次的主要原因。---原生事件addEventListener会执行两次-详见react18.tsx
  <>
    {/* <App /> */}
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
