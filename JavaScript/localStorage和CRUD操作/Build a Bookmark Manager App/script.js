// 获取页面元素
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryNameElems = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

/**
 * 读取本地存储书签，严格校验合法性
 * 规则：
 * 1. 无 bookmarks 键 → 返回空数组
 * 2. 解析失败 → 返回空数组
 * 3. 数据不是数组 → 返回空数组
 * 4. 数组内元素不是 {name, category, url} 格式对象 → 返回空数组
 */
function getBookmarks() {
  try {
    const storedData = localStorage.getItem("bookmarks");
    // 本地无数据，返回空数组
    if (!storedData) return [];

    const parsedData = JSON.parse(storedData);
    // 不是数组，直接返回空数组
    if (!Array.isArray(parsedData)) return [];

    // 校验数组内每一项是否为合法书签对象
    const isValidBookmarkArray = parsedData.every(item => {
      return typeof item === "object" &&
             item !== null &&
             "name" in item &&
             "category" in item &&
             "url" in item;
    });

    // 存在非法对象，返回空数组
    if (!isValidBookmarkArray) return [];

    // 全部合法，返回原数组
    return parsedData;
  } catch (error) {
    // JSON 解析异常，返回空数组
    return [];
  }
}

// 切换 主区域 / 表单区域 显隐
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

// 切换 主区域 / 书签列表区域 显隐
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// 统一设置分类标题文本
function setCategoryName(text) {
  categoryNameElems.forEach(elem => {
    elem.textContent = text;
  });
}

// ========== 事件监听 ==========
// 打开添加书签表单
addBookmarkBtn.addEventListener("click", () => {
  const selectedCat = categoryDropdown.value;
  setCategoryName(selectedCat);
  displayOrCloseForm();
});

// 关闭表单
closeFormBtn.addEventListener("click", displayOrCloseForm);

// 提交添加书签
addBookmarkFormBtn.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const nameVal = nameInput.value;
  const catVal = categoryDropdown.value;
  const urlVal = urlInput.value;

  const newBookmark = {
    name: nameVal,
    category: catVal,
    url: urlVal
  };
  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // 清空输入框
  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

// 查看分类下的书签
viewCategoryBtn.addEventListener("click", () => {
  const selectedCat = categoryDropdown.value;
  setCategoryName(selectedCat);

  const bookmarks = getBookmarks();
  const targetBookmarks = bookmarks.filter(item => item.category === selectedCat);
  categoryList.innerHTML = "";

  if (targetBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    targetBookmarks.forEach(book => {
      const radioHtml = `
        <input type="radio" id="${book.name}" name="bookmark-select" value="${book.name}">
        <label for="${book.name}">
          <a href="${book.url}" target="_blank">${book.name}</a>
        </label>
        <br>
      `;
      categoryList.innerHTML += radioHtml;
    });
  }

  displayOrHideCategory();
});

// 关闭书签列表
closeListBtn.addEventListener("click", displayOrHideCategory);

// 删除选中书签
deleteBookmarkBtn.addEventListener("click", () => {
  const selectedCat = categoryDropdown.value;
  const selectedRadio = document.querySelector('input[name="bookmark-select"]:checked');
  if (!selectedRadio) return;

  const delName = selectedRadio.value;
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(book => {
    return !(book.category === selectedCat && book.name === delName);
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  // 重新刷新列表
  viewCategoryBtn.click();
});