// 创建最长单词长度查找函数
function findLongestWordLength(str) {
  // 1. 将字符串按空格分割成单词数组
  const words = str.split(' ');
  // 2. 记录最长长度，初始值为 0
  let maxLength = 0;

  // 3. 遍历每个单词
  for (let i = 0; i < words.length; i++) {
    // 如果当前单词长度大于记录的最大值，就更新最大值
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  // 4. 返回最长单词的长度
  return maxLength;
}