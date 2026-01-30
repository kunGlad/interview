// 实现阶乘--普通实现
function pow(n) {
  if (n <= 1) {
    return 1;
  }
  return n * pow(n - 1);
}

// 实现阶乘--尾递归
function factorial(n, total = 1) {
  if (n <= 1) {
    return total;
  }
  return factorial(n - 1, n * total);
}

console.log(pow(5), factorial(5));
