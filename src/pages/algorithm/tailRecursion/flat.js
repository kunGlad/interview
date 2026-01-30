const flat1 = (arr = [], result = []) => {
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat1(v, []));
    } else {
      result.push(v);
    }
  });

  return result;
};

var arr = [1, 2, 3, [4, 5, [6, 7]]];

console.log(flat1(arr));
