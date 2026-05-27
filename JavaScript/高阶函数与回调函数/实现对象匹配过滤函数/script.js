function whatIsInAName(collection, source) {
  // 获取源对象的所有键
  const keys = Object.keys(source);
  
  // 过滤数组：只保留包含所有源键值对的对象
  return collection.filter(item => {
    return keys.every(key => item[key] === source[key]);
  });
}