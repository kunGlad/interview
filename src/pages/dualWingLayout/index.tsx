import "./index.css";
const DualWingLayout = () => {
  return (
    <div>
      双飞翼布局 左右固定，中间自适应，中间部分先加载
      <div className="box">
        <div className="content"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default DualWingLayout;
