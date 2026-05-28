function translatePigLatin(str) {
  // 定义元音
  const vowels = /[aeiou]/;
  
  // 如果单词以元音开头 → 加 way
  if (vowels.test(str[0])) {
    return str + "way";
  }

  // 找到第一个元音的位置
  const firstVowelIndex = str.search(vowels);

  // 如果没有元音 → 加 ay
  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  // 辅音开头 → 把辅音群移到末尾 + ay
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}