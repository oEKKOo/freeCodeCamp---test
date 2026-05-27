function convertHTML(str) {
  // 定义字符与实体的对应关系
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  // 替换所有匹配的字符
  return str.replace(/[&<>"']/g, match => entities[match]);
}