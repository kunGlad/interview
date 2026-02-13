var name = "时间跳跃";
var obj1 = {
  name: "听风是风",
};

// 必须用普通函数，因为箭头函数的this 继承自外层作用域，也就是window，不可更改
function bar(a, b, c) {
  console.log(a + b + c + this.name);
}

Function.prototype.call2 = function (context) {
  // 这里是为了考虑到context为空的情况，为空则设置为Window对象
  context = context || window;
  // 这一步是取出arguments类数组对象除要绑定的对象外的参数，在本🌰中为  "我的" "名字" "是"
  const arg = [...arguments].slice(1);
  // 这里的this是调用call2的对象，也就是bar
  context.fn = this;
  // 执行bar函数
  const res = context.fn(...arg);
  // 删除bar，避免对obj产生影响
  delete context.fn;
  // 返回函数的返回值
  return res;
};

bar.call2(obj1, "我的", "名字", "是");
// 这里在 nodejs中取不到Window 对象，所以这里的context会报错，如果需要验证，放到call.html中
// bar.call2(null, "我的", "名字", "是");
