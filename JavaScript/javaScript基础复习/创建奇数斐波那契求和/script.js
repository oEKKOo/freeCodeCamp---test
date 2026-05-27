function sumFibs(num) {
  // 初始化斐波那契数列前两个数
  let prev = 0;
  let curr = 1;
  let sum = 0;

  // 循环生成所有 <= num 的斐波那契数
  while (curr <= num) {
    // 如果是奇数，加入总和
    if (curr % 2 !== 0) {
      sum += curr;
    }
    // 计算下一个斐波那契数
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}