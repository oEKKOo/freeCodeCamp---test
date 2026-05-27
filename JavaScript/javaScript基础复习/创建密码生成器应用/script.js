// 定义密码可用的所有字符
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// 1. 创建密码生成函数
function generatePassword(length) {
  let password = "";
  // 循环生成指定长度的密码
  for (let i = 0; i < length; i++) {
    // 生成随机索引
    const randomIndex = Math.floor(Math.random() * chars.length);
    // 取出随机字符并拼接
    password += chars[randomIndex];
  }
  return password;
}

// 2. 定义 password 变量，调用函数生成密码（长度示例：8）
const password = generatePassword(8);

// 3. 按要求输出密码
console.log("Generated password: " + password);