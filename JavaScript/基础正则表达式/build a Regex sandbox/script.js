// 1. 获取所有必需元素（满足测试 1-6）
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

// 2. 获取正则标志函数（满足测试 7-11）
function getFlags() {
  let flags = '';
  if (caseInsensitiveFlag.checked) flags += 'i';
  if (globalFlag.checked) flags += 'g';
  return flags;
}

// 3. 点击测试按钮事件
testButton.addEventListener('click', () => {
  // 清空之前的高亮
  const originalText = stringToTest.textContent;
  const patternText = regexPattern.value.trim();

  // 无模式输入时重置
  if (!patternText) {
    stringToTest.innerHTML = originalText;
    testResult.textContent = 'no match';
    return;
  }

  try {
    const flags = getFlags();
    const regex = new RegExp(patternText, flags);
    const matches = originalText.match(regex) || [];

    if (matches.length > 0) {
      // 高亮匹配文本（满足测试 12-16）
      const highlightedText = originalText.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });
      stringToTest.innerHTML = highlightedText;

      // 显示匹配结果（满足测试 17-19）
      testResult.textContent = matches.join(', ');
    } else {
      // 无匹配（满足测试 20）
      stringToTest.innerHTML = originalText;
      testResult.textContent = 'no match';
    }
  } catch (err) {
    // 正则无效时处理
    stringToTest.innerHTML = originalText;
    testResult.textContent = 'no match';
  }
});