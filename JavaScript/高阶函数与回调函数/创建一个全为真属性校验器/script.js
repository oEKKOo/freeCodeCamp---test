function truthCheck(collection, pre) {
  // 检查每一个对象的指定属性是否都为真值
  return collection.every(item => item[pre]);
}