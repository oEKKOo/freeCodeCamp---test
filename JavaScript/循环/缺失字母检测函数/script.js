function fearNotLetter(str) {
  // 遍历字符串，从第 1 个到最后一个
  for (let i = 0; i < str.length - 1; i++) {
    // 获取当前字符的 ASCII 码
    const current = str.charCodeAt(i);
    // 获取下一个字符的 ASCII 码
    const next = str.charCodeAt(i + 1);

    // 如果下一个字符不是当前 +1，说明中间缺了字母
    if (next !== current + 1) {
      // 返回缺失的字母
      return String.fromCharCode(current + 1);
    }
  }

  // 如果没有缺失，返回 undefined
  return undefined;
}