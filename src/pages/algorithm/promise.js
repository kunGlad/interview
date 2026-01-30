const fn = (s) =>
  new Promise((resolve, reject) => {
    if (typeof s === "number") {
      resolve();
    } else {
      reject();
    }
  })
    .then((res) => console.log("参数是一个number"))
    .catch((err) => console.log("参数是一个字符串"));
fn("1");
fn(1);
