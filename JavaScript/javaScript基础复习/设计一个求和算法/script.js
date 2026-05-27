function sumAll(arr) {
  // 找出最小值和最大值
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let sum = 0;

  // 从 min 加到 max
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}