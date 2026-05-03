// 定义函数：检查字符串是否以目标字符串结尾
function confirmEnding(str, target) {
  // 获取目标字符串的长度
  let targetLength = target.length;
  
  // 从原字符串末尾截取 与目标字符串长度相同 的子串
  let ending = str.slice(-targetLength);
  
  // 比较截取的结尾 和 目标字符串是否相等
  return ending === target;
}