// 水平垂直居中有哪几种方式

import "./index.css";

const Center = () => {
  return (
    <div className="box">
      {/* 宽高未知 */}
      <div className="flex">
        <div className="child">flex</div>
      </div>
      <div className="flex-margin">
        <div className="child">flex+margin</div>f
      </div>
      <div className="grid">
        <div className="child">grid</div>
      </div>
      <div className="grid-parent">
        <div className="child"> 父grid+子单独</div>
      </div>
      <div className="position-transform">
        <div className="child">子绝父相+平移</div>
        {/* 占位元素  height: 200px;  高度必须与子元素高度相同 不让子元素脱离文档流的定位影响到父元素的高度*/}
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default Center;
