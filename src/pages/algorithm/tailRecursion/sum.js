// 数组求和--尾递归
// total 默认为arr[0]
const sumArray = (arr, total) => {
  if (arr.length === 1) {
    return total;
  }

  return sumArray(arr, total + arr.pop());
};

console.log(sumArray([5, 4, 3, 2, 1], 5));
