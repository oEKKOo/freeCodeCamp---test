function findElement(arr, func) {
  // 遍历数组中的每一个元素
  for (let i = 0; i < arr.length; i++) {
    // 使用测试函数检查当前元素
    if (func(arr[i])) {
      // 找到第一个符合条件的元素，立即返回
      return arr[i];
    }
  }
  // 遍历结束都没找到，返回 undefined
  return undefined;
}