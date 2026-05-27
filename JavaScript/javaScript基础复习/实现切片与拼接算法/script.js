function frankenSplice(arr1, arr2, n) {
  // 1. 复制 arr2，避免修改原数组（核心要求）
  let newArr = arr2.slice();
  
  // 2. 在索引 n 位置插入 arr1 的所有元素（保持顺序）
  newArr.splice(n, 0, ...arr1);
  
  // 3. 返回结果
  return newArr;
}