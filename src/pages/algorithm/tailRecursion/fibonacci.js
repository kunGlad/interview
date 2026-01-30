// 计算斐波那契数列第N项的值
const fibonacci2 = (n, cur = 1, total = 1) => {
  console.log(`fibonacci2 :: enter, n = ${n}, cur = ${cur}, total = ${total}`);
  if (n < 3) {
    return total;
  }
  return fibonacci2(n - 1, total, total + cur);
};

console.log(fibonacci2(5));

/**
 * fibonacci2 :: enter, n = 5, cur = 1, total = 1
fibonacci2 :: enter, n = 4, cur = 1, total = 2
fibonacci2 :: enter, n = 3, cur = 2, total = 3
fibonacci2 :: enter, n = 2, cur = 3, total = 5
5

*/
