Function.prototype.apply1 = function (context, arg) {
  context = Object(context) || window;

  context.fn = this;

  let result;
  if (arg) {
    result = context.fn(...arg);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

const obj = {
  value: 1,
};

// 必须用普通函数，因为箭头函数的this 继承自外层作用域，也就是window，不可更改
function bar(name, age) {
  console.log(this.value);
  console.log("name==>", name, "age===>", age);
}

bar.apply1(obj, ["xiaoming", 18]);
