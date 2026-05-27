function smallestCommons(arr) {
  // 找出区间上下限
  let [min, max] = arr.sort((a, b) => a - b);
  
  // 求最大公约数 GCD
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  
  // 求两数最小公倍数 LCM
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // 迭代求区间所有数的最小公倍数
  let result = min;
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }
  return result;
}