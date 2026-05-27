function largestOfAll(arr) {
  const result = [];
  // 遍历每个子数组
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    // 查找当前子数组的最大值
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max);
  }
  return result;
}