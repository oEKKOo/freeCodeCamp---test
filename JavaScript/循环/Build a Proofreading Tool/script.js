/**
 * 1. 判断一个单词是否是回文（不区分大小写）
 * @param {string} word - 要检查的单词
 * @returns {boolean} 是回文返回true，否则false
 */
function isPalindrome(word) {
  // 空字符串视为回文
  if (word.length === 0) return true;
  // 统一转为小写，反转后对比
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split('').reverse().join('');
  return lowerWord === reversedWord;
}

/**
 * 2. 查找数组中非回文单词的索引
 * @param {string[]} words - 单词数组
 * @returns {number[]} 非回文单词的索引数组
 */
function findPalindromeBreaks(words) {
  const breaks = [];
  // 遍历数组，检查每个单词
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

/**
 * 3. 查找重复短语的起始索引
 * @param {string[]} words - 单词数组
 * @param {number} phraseLength - 短语长度（连续单词个数）
 * @returns {number[]} 重复短语的所有起始索引
 */
function findRepeatedPhrases(words, phraseLength) {
  // 边界条件：短语长度 >= 数组长度，直接返回空数组
  if (phraseLength >= words.length || phraseLength < 1) {
    return [];
  }

  const phraseMap = {}; // 存储短语和对应的起始索引
  const result = [];

  // 遍历所有可能的起始位置
  for (let i = 0; i <= words.length - phraseLength; i++) {
    // 截取连续的短语
    const phrase = words.slice(i, i + phraseLength).join(' ');
    // 如果短语已存在，记录索引
    if (phraseMap[phrase]) {
      phraseMap[phrase].push(i);
    } else {
      phraseMap[phrase] = [i];
    }
  }

  // 收集所有出现多次的短语的索引
  for (const key in phraseMap) {
    if (phraseMap[key].length >= 2) {
      result.push(...phraseMap[key]);
    }
  }

  return result;
}

/**
 * 4. 分析文本数组，汇总回文和重复短语结果
 * @param {string[][]} texts - 二维单词数组
 * @param {number} phraseLength - 短语长度
 * @returns {Object[]} 结果数组，每个元素包含repeatedPhrases和palindromeBreaks
 */
function analyzeTexts(texts, phraseLength) {
  const results = [];
  // 处理每个文本
  for (const words of texts) {
    const palindromeBreaks = findPalindromeBreaks(words);
    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);
    results.push({
      repeatedPhrases,
      palindromeBreaks
    });
  }
  return results;
}

// ------------------------------
// 测试示例（可自行运行验证）
// ------------------------------
const sampleTexts = [
  ["racecar", "hello", "level", "world"],
  ["the", "cat", "sat", "the", "cat"]
];

// 分析短语长度为2的重复项
const analysis = analyzeTexts(sampleTexts, 2);
console.log(analysis);