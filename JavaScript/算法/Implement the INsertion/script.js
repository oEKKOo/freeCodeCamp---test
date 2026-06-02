function insertionSort(arr) {
  // 拷贝原数组，不修改原参数
  const arrCopy = [...arr];
  const len = arrCopy.length;

  // 从第二个元素开始向前插入
  for (let i = 1; i < len; i++) {
    let current = arrCopy[i];
    let j = i - 1;
    // 往前遍历有序区，大于current就后移
    while (j >= 0 && arrCopy[j] > current) {
      arrCopy[j + 1] = arrCopy[j];
      j--;
    }
    // 插入到正确空位
    arrCopy[j + 1] = current;
  }

  return arrCopy;
}