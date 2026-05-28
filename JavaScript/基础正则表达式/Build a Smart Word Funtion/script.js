function myReplace(str, before, after) {
  // 检查原单词首字母是否大写
  if (before[0] === before[0].toUpperCase()) {
    // 如果是大写，替换词首字母也大写，其余小写
    after = after[0].toUpperCase() + after.slice(1).toLowerCase();
  } else {
    // 如果原单词首字母小写，替换词全部小写
    after = after.toLowerCase();
  }

  // 执行替换并返回
  return str.replace(before, after);
}