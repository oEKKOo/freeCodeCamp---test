function mutation(arr) {
  // 把两个字符串都转为小写，忽略大小写
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  // 遍历第二个字符串的每一个字符
  for (let i = 0; i < second.length; i++) {
    // 如果有任何一个字符不在第一个字符串中，直接返回 false
    if (!first.includes(second[i])) {
      return false;
    }
  }

  // 所有字符都存在，返回 true
  return true;
}