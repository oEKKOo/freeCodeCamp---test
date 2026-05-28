// 完全符合测试要求：独立函数 + 无参数 + 直接读取 #markdown-input
function convertMarkdown() {
  let text = document.getElementById('markdown-input').value;

  // 标题 h1/h2/h3（必须行首，允许空格，非行首不转换）
  text = text.replace(/^\s*###\s(.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^\s*##\s(.+)$/gm, '<h2>$1</h2>');
  text = text.replace(/^\s*#\s(.+)$/gm, '<h1>$1</h1>');

  // 加粗 ** ** 或 __ __
  text = text.replace(/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>');

  // 斜体 * * 或 _ _
  text = text.replace(/(\*|_)(.+?)\1/g, '<em>$2</em>');

  // 图片
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // 链接
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // 引用（必须行首，允许空格）
  text = text.replace(/^\s*>\s(.+)$/gm, '<blockquote>$1</blockquote>');

  return text;
}

// 实时更新：input 事件 + 更新两个输出区域
document.getElementById('markdown-input').addEventListener('input', function () {
  const html = convertMarkdown();
  document.getElementById('html-output').textContent = html;
  document.getElementById('preview').innerHTML = html;
});