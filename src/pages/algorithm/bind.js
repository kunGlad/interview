// 第一步 满足了this修改与函数返回
Function.prototype.bind1 = function (obj) {
  var fn = this;
  return function () {
    fn.apply(obj);
  };
};

// 第二步 支持传参
Function.prototype.bind2 = function (obj) {
  var fn = this;
  //第0位是this，所以得从第一位开始裁剪
  const args = [...arguments].slice(1);
  console.log("args", args);
  return function () {
    fn.apply(obj, args);
  };
};

// 第三步 支持科里化传参
Function.prototype.bind3 = function (obj) {
  const fn = this;
  // 从调用可以看出 第0位是obj，所以得从第一位开始裁剪 -- fn.bind3(obj, 2);
  const args = [...arguments].slice(1);
  return function () {
    // 二次调用我们也抓取arguments对象--将函数内部的 arguments对象转换成一个真正的数组
    // 第0位就是新函数调用时传入的第一个参数
    const params = [...arguments];
    //注意concat的顺序 -- args在前，因为只有这样才能让先传递的参数和fn的形参按顺序对应。
    fn.apply(obj, args.concat(params));
  };
};

// 第四步 支持构造函数调用
Function.prototype.bind4 = function (obj) {
  const fn = this;
  const args = [...arguments].slice(1);
  // 闭包
  const bound = function () {
    const params = [...arguments];
    // 我们在模拟bind方法时，返回的bound函数在调用时得考虑new调用与普通调用，毕竟两者this指向不同。
    // 如果是new调用，bound函数中的this指向实例自身，而如果是普通调用this指向obj
    // //通过constructor判断调用方式，为true this指向实例，否则为obj
    fn.apply(this.constructor === fn ? this : obj, args.concat(params));
  };

  //原型链继承
  bound.prototype = fn.prototype;

  return bound;
};

// 第五步 继承而来的构造器属性随便你怎么修改都不会影响构造函数本身
Function.prototype.bind5 = function (obj) {
  // bind方法如果被非函数调用时会抛出错误
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const fn = this;
  const args = [...arguments].slice(1);
  //创建中介函数-单纯的拷贝fn的prototype
  const fn_ = function () {};
  const bound = function () {
    const params = [...arguments];
    // https://www.yuque.com/echolun/hq7gts/mxa50x#4f9bbdb2
    // 实例可以通过__proto__找到构造函数的原型，原型的constructor属性又指向构造函数自身
    fn.apply(this.constructor === fn ? this : obj, args.concat(params));
  };
  // 拷贝fn的prototype
  fn_.prototype = fn.prototype;
  // 我们的bound方法，将其原型指向fn创建的实例
  // 达到修改自身原型不会影响fn原型的目的 -- person.__proto__.age
  bound.prototype = new fn_();
  return bound;
};

var z = 0;
var obj = {
  z: 1,
};

function fn(x, y) {
  this.name = "听风是风";
  console.log(this.z);
  console.log(x);
  console.log(y);
}
fn.prototype.age = 26;

var bound = fn.bind5(obj, 2);
var person = new bound(3); //undefined 2 3

console.log(person.name); //听风是风
console.log(person.age); //26
person.__proto__.age = 18;
var person = new fn();
console.log(person.age); //26
