function dropElements(arr, func) {
  // 循环找到第一个满足 func 的元素
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // 移除第一个元素
  }
  // 返回剩下的数组（空数组也符合要求）
  return arr;
}