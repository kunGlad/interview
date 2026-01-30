const keysLower = (obj) => {
  const reg = new RegExp("[A-Z]", "g");

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let temp = obj[key];

      if (reg.test(key.toString())) {
        // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换的属性
        temp = obj[key.replace(reg, (result) => result.toLowerCase())] = obj[key];
        // 将之前大写的键属性删除
        delete obj[key];
      }

      //   如果属性是对象或者数组，重新执行函数
      if (Array.isArray(temp) || typeof temp === "object") {
        keysLower(temp);
      }
    }
  }
  return obj;
};

const obj = {
  a: "1",
  b: {
    c: "2",
    D: {
      E: "3",
    },
  },
};

console.log(keysLower(obj));
// { a: '1', b: { c: '2', d: { e: '3' } } }
