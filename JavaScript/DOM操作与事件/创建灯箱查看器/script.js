// 获取所有元素
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// 点击缩略图 → 打开灯箱
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // 获取缩略图地址
    const thumbnailSrc = item.src;
    // 去掉 -thumbnail 获取全图地址
    const fullSrc = thumbnailSrc.replace('-thumbnail', '');
    
    // 设置大图
    lightboxImage.src = fullSrc;
    // 显示灯箱
    lightbox.style.display = 'flex';
  });
});

// 关闭灯箱函数
function closeLightbox() {
  lightbox.style.display = 'none';
}

// 点击关闭按钮
closeBtn.addEventListener('click', closeLightbox);

// 点击灯箱背景关闭
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});