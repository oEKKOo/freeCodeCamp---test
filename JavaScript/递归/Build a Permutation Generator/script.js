function permuteString(str, prefix = "", result = []) {
  // 基线条件：剩余字符串为空，把当前前缀加入结果
  if (str.length === 0) {
    result.push(prefix);
    return result;
  }

  // 遍历每一个字符
  for (let i = 0; i < str.length; i++) {
    // 取出当前字符作为前缀一部分
    const currentChar = str[i];
    // 剩余字符串：剔除当前遍历的字符
    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    // 递归
    permuteString(remainingStr, prefix + currentChar, result);
  }

  // 去重并返回最终数组
  return [...new Set(result)];
}