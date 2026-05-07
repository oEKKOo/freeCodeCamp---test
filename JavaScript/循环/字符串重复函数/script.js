function repeatStringNumTimes(str, num) {
  // 定义空字符串存储结果
  let result = "";

  // 如果次数 ≤0，直接返回空字符串
  if (num <= 0) {
    return "";
  }

  // 循环 num 次，拼接字符串
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}