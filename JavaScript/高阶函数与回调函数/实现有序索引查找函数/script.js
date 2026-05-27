function getIndexToIns(arr, num) {
  // 1. 复制数组并按升序排序（必须升序）
  const sortedArr = [...arr].sort((a, b) => a - b);

  // 2. 用 findIndex 找到第一个 >= 目标数字的索引
  const index = sortedArr.findIndex(item => item >= num);

  // 3. 如果所有元素都更小，返回数组长度（插到最后）
  // 否则返回找到的索引
  return index === -1 ? sortedArr.length : index;
}