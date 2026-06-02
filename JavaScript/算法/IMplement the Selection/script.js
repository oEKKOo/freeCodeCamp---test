function selectionSort(arr) {
  // 复制原数组，避免修改传入的原数组
  let arrCopy = [...arr];
  const len = arrCopy.length;

  // 依次确定每一个位置的最小值
  for (let i = 0; i < len - 1; i++) {
    // 记录当前最小值下标，初始为i
    let minIndex = i;
    // 从i+1向后找更小的值
    for (let j = i + 1; j < len; j++) {
      if (arrCopy[j] < arrCopy[minIndex]) {
        minIndex = j;
      }
    }
    // 交换当前i位置和最小值位置
    [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]];
  }
  return arrCopy;
}