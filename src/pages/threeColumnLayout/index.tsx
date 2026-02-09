// 实现三栏布局
import "./index.css";

const ThreeColumnLayout = () => {
  return (
    <div>
      <div className="flex">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
      {/* float会让目标元素脱离文档流，而紧挨着的元素会环绕在其左/右侧，
      因此我们可以利用这点，让left、right两栏分别浮动，
      这样middle会因为环绕特性自动填充上去。 */}

      <div className="float">
        <div className="left"></div>
        <div className="right"></div>
        {/* middle放中间 */}
        <div className="middle"></div>
      </div>

      {/* 原理与浮动有些许类似，我们可以用绝对定位让left、right两个元素
      分别定位到容器的左上右上，绝对定位与浮动不同点在于它会完全脱离文档流，
      不会影响页面布局，因此我们需要为middle添加左右margin以免被盖住： */}
      <div className="position">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>

      {/* 父元素必须设置宽度为100% 
      这里用table并不是真的用table布局，而是利用table的特性，
      因为tabel单元格的宽高如果没有明确定义，它就会跟随内容自动多少自动缩放，
      因此我们可以将left、right定义明确宽度，让容器宽度为100%，
      那么剩下的宽度自动会分配给middle。*/}
      <div className="table">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
