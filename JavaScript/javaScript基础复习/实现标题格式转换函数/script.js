function titleCase(str) {
  // 把字符串转成小写，再按空格分割成单词数组
  const words = str.toLowerCase().split(" ");
  
  // 遍历每个单词，首字母大写，其余小写
  const titleCasedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // 重新拼接成字符串并返回
  return titleCasedWords.join(" ");
}