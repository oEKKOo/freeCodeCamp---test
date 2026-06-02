function addTogether() {
  // 校验是否为有效数字
  const checkNum = n => typeof n === 'number';
  const [arg1, arg2] = arguments;

  // 第一个参数不是数字直接undefined
  if (!checkNum(arg1)) return undefined;

  // 传了第二个参数
  if (arguments.length === 2) {
    return checkNum(arg2) ? arg1 + arg2 : undefined;
  }

  // 只传一个参数，返回接收第二个数的函数
  return function(num) {
    return checkNum(num) ? arg1 + num : undefined;
  };
}