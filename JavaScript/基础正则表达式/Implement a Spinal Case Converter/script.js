function spinalCase(str) {
  // 1. 在大写字母前添加空格
  // 2. 替换所有非字母数字为空格
  // 3. 转小写
  // 4. 按空格分割并连接成连字符格式
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+|_+/g, " ")
    .toLowerCase()
    .split(" ")
    .join("-");
}