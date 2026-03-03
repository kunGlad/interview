// 圣杯布局变体
// css实现一个布局，第一个元素在左侧，第二个元素在右侧，第三个元素在高度最低的元素后边
// @ts-nocheck
import { useEffect } from "react";
const HolyGrailLayout = () => {
  return (
    <div className="wrap">
      <div className="item a">
        <h2>左侧元素</h2>
        <p>高度较低的内容区域</p>
      </div>
      <div className="item b">
        <h2>右侧元素</h2>
        <p>高度较高的内容区域</p>
        <p>额外的行内容...</p>
        <p>使这个元素更高</p>
      </div>
      <div className="item c">
        <h2>底部元素</h2>
        <p>总是在两列元素的下方显示</p>
      </div>
    </div>
  );
};

export default HolyGrailLayout;
