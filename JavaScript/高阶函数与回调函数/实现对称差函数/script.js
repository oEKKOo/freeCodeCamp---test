function diffArray(arr1, arr2) {
  // 找出 arr1 独有的元素
  const onlyArr1 = arr1.filter(item => !arr2.includes(item));
  // 找出 arr2 独有的元素
  const onlyArr2 = arr2.filter(item => !arr1.includes(item));
  // 合并两个结果得到对称差
  return [...onlyArr1, ...onlyArr2];
}