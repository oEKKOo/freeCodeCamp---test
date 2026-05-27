function pairElement(str) {
  // 建立碱基配对规则
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  
  // 遍历每个字符，生成配对数组
  return str.split("").map(char => [char, pairs[char]]);
}