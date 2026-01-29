const obj = {
  value: 1,
};

// 必须用普通函数，因为箭头函数的this 继承自外层作用域，也就是window，不可更改
function bar(name, age) {
  console.log(this.value);
  console.log("name==>", name, "age===>", age);
}

Function.prototype.call2 = function (context) {
  // 这里是为了考虑到context为空的情况，为空则设置为Window对象
  context = context || window;
  // 这一步是取出arguments类数组对象除要绑定的对象外的参数，在本🌰中为  "努力", 18
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

bar.call2(obj, "努力", 18);
