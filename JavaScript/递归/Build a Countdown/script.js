function countdown(n) {
  // 递归终止条件：n 小于 1，返回空数组
  if (n < 1) {
    return [];
  }
  // 递归调用，把当前数字和后续结果拼接
  return [n].concat(countdown(n - 1));
}