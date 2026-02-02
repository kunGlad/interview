import "./index.css";
const BFC = () => {
  return (
    // <div>
    //   <div className="left">浮动元素，无固定宽度</div>
    //   <div className="right">自适应</div>
    // </div>

    // 第一种方法 BFC两个相邻的 margin会重叠 取值较大的那个
    // <div>
    //   <div className="child1"></div>
    //   <div className="child2"></div>
    // </div>

    // 第二种方案 内外BFC相隔离
    <div>
      <div className="child1"></div>
      <div className="child2Wrap">
        <div className="child2"></div>
      </div>
    </div>
  );
};

export default BFC;
