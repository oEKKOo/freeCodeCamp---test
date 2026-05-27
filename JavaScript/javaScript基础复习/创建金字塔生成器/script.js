function pyramid(char, rows, isReverse) {
  let result = '\n';
  const maxChars = 2 * rows - 1;

  if (!isReverse) {
    // 正向金字塔（顶点朝上）
    for (let i = 0; i < rows; i++) {
      const currentChars = 2 * i + 1;
      const spaces = (maxChars - currentChars) / 2;
      result += ' '.repeat(spaces) + char.repeat(currentChars) + '\n';
    }
  } else {
    // 反向金字塔（顶点朝下）
    for (let i = 0; i < rows; i++) {
      const currentChars = maxChars - 2 * i;
      const spaces = i;
      result += ' '.repeat(spaces) + char.repeat(currentChars) + '\n';
    }
  }

  return result;
}