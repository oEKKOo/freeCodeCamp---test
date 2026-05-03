// 定义闰年判断函数
function isLeapYear(year) {
  let leap;
  // 闰年规则
  if (year % 400 === 0) {
    leap = true;
  } else if (year % 100 === 0) {
    leap = false;
  } else if (year % 4 === 0) {
    leap = true;
  } else {
    leap = false;
  }

  // 返回对应字符串
  if (leap) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// 函数外声明年份变量
let year = 2024;

// 调用函数并赋值给 result
let result = isLeapYear(year);

// 控制台输出结果
console.log(result);