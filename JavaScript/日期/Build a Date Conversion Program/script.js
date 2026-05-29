// 1. 创建保存当前日期时间的变量
const currentDate = new Date();

// 2. 拼接指定格式字符串
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. 打印到控制台
console.log(currentDateFormat);

// 4. 实现 MM/DD/YYYY 格式化函数
function formatDateMMDDYYYY(dateObj) {
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

// 5. 实现英文长日期格式函数（en-US 区域）
function formatDateLong(dateObj) {
  const longDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return `Formatted Date (Month Day, Year): ${longDate}`;
}