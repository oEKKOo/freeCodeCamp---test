function sumPrimes(num) {
  // 小于2直接返回0
  if (num < 2) return 0;

  let sum = 0;

  // 判断是否为素数
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 遍历 2 ~ num，累加素数
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}