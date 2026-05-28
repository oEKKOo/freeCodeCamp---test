// 获取所有收藏按钮
const favoriteBtns = document.querySelectorAll('.favorite-icon');

// 遍历按钮，添加点击事件
favoriteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 判断是否包含 filled 类
    if (btn.classList.contains('filled')) {
      // 移除类 + 空心爱心
      btn.classList.remove('filled');
      btn.innerHTML = '&#9825;';
    } else {
      // 添加类 + 实心爱心
      btn.classList.add('filled');
      btn.innerHTML = '&#10084;';
    }
  });
});