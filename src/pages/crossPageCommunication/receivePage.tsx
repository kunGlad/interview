import { useEffect, useRef } from "react";

const ReceivePage = () => {
  const bcRef = useRef<any>(null);

  useEffect(() => {
    bcRef.current = new BroadcastChannel("kevin");
    console.log("B页面：BroadcastChannel 已创建");

    const handleMessage = (e: any) => {
      console.log("B页面收到消息=====>", e.data);
    };

    bcRef.current.addEventListener("message", handleMessage);

    return () => {
      if (bcRef.current) {
        bcRef.current.removeEventListener("message", handleMessage);
        bcRef.current.close();
        console.log("B页面：BroadcastChannel 已关闭");
      }
    };
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("localstorage");
    console.log("B页面：localStorage 数据为：", localData);
  }, []);

  return <>这里是接收消息页面</>;
};

export default ReceivePage;
