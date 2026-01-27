import { useEffect, useRef } from "react";

const BrandCastChannel = () => {
  const bcRef = useRef<any>(null);

  useEffect(() => {
    bcRef.current = new BroadcastChannel("kevin");
    console.log("A页面：BroadcastChannel 已创建");

    return () => {
      if (bcRef.current) {
        bcRef.current.close();
        console.log("A页面：BroadcastChannel 已关闭");
      }
    };
  }, []);

  const handleSend = () => {
    if (bcRef.current) {
      const message = `消息内容：${Date.now()}`;
      bcRef.current.postMessage(message);
      console.log("A页面发送消息：", message);
    }
  };

  return <div onClick={handleSend}>这里是发送消息页面</div>;
};

export default BrandCastChannel;
