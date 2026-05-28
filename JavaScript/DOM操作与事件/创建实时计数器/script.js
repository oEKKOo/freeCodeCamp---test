    // 获取元素
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
// 最大字符限制
const MAX_LENGTH = 50;

// 监听输入事件（实时更新）
textInput.addEventListener('input', () => {
  // 获取输入的文本
  let text = textInput.value;
  
  // 如果超过50字符，裁剪到50个（实验要求：仅用JS实现）
  if (text.length > MAX_LENGTH) {
    text = text.slice(0, MAX_LENGTH);
    textInput.value = text;
  }

  // 更新计数文本
  charCount.textContent = `Character Count: ${text.length}/${MAX_LENGTH}`;

  // 达到50字符时添加红色样式，否则移除
  if (text.length >= MAX_LENGTH) {
    charCount.classList.add('red');
  } else {
    charCount.classList.remove('red');
  }
});