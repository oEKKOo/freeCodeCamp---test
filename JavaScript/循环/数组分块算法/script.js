function chunkArrayInGroups(arr, size) {
  // 创建空数组存储最终结果
  const chunks = [];

  // 循环遍历原数组，每次步进 size 长度
  for (let i = 0; i < arr.length; i += size) {
    // 切割数组并添加到结果中
    chunks.push(arr.slice(i, i + size));
  }

  // 返回二维数组
  return chunks;
}