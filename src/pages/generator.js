function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y + 3;
  return x + y + z;
}

var a = foo(5);
a.next(); // {value:6, done: false}  函数在 yield处暂停，此时 y还没有被赋值
a.next(); // {value:NAN, done: false}  这次 next()没有传入参数，所以第一个 yield表达式的返回值是 undefined  var y = 2 * undefined，所以 y = NaN
a.next(); // {value:NAN, done: true}

var b = foo(5);
b.next(); // {value: 6, done: false} - 启动，获得 x+1=6
b.next(12); // {value: 8, done: false} - 传入12给第一个yield，y=2 * 12=24，获得y/3=8
b.next(13); // {value: 42, done: true}  - 传入13给第二个yield，z=13，返回5+24+13=42
