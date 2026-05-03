// 定义掩码函数
function maskEmail(email) {
  // 找到 @ 的位置
  let atIndex = email.indexOf('@');
  // 用户名部分：@ 前面的所有内容
  let username = email.slice(0, atIndex);
  // 域名部分：@ 及后面的内容
  let domain = email.slice(atIndex);

  // 拼接规则：首字符 + 星号 * (长度-2) + 尾字符 + 域名
  let masked = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1] + domain;

  return masked;
}

// 函数外部声明 email 变量（有效邮箱）
let email = "example@test.com";

// 调用并输出结果
console.log(maskEmail(email));