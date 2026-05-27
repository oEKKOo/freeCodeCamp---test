function uniteUnique(...arrays) {
  const result = [];
  const seen = new Set();

  // 遍历所有传入的数组
  for (const arr of arrays) {
    // 遍历每个数组里的元素
    for (const num of arr) {
      // 只添加第一次出现的值
      if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
      }
    }
  }

  return result;
}