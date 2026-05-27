function steamrollArray(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // 递归展开嵌套数组
      result = result.concat(steamrollArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}