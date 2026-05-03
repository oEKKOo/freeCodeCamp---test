// 定义截断字符串函数
function truncateString(str, num) {
  // 判断字符串长度是否大于指定数字
  if (str.length > num) {
    // 截断并添加 ...
    return str.slice(0, num) + "...";
  } else {
    // 长度小于等于，直接返回原字符串
    return str;
  }
}