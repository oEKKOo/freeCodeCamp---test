// 1. 声明 num 变量，赋值 1-20 之间的数字
let num = 5;

// 2. 创建阶乘计算函数
function factorialCalculator(number) {
  // 声明 result 变量，初始值为 1
  let result = 1;

  // 使用 for 循环从 1 乘到输入数字
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  // 返回阶乘结果
  return result;
}

// 3. 调用函数并把结果保存到 factorial 变量
let factorial = factorialCalculator(num);

// 4. 创建输出消息
let resultMsg = `Factorial of ${num} is ${factorial}`;

// 5. 输出到控制台
console.log(resultMsg);