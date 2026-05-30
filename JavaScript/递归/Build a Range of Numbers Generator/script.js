function rangeOfNumbers(startNum, endNum) {
  // 基线条件：起始和结束数字相等，返回仅包含该数字的数组
  if (startNum === endNum) {
    return [startNum];
  }
  // 递归：当前数字拼接后续递归结果
  return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}