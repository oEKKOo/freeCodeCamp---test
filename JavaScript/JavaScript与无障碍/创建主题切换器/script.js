// 主题数组（包含 name 和 message）
const themes = [
  { name: "light", message: "Light theme activated — bright and clean!" },
  { name: "dark", message: "Dark theme activated — easy on the eyes!" },
  { name: "ocean", message: "Ocean theme activated — calm and blue!" }
];

// 获取元素
const switchButton = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const statusEl = document.getElementById("status");
const menuItems = document.querySelectorAll('[role="menuitem"]');

// 切换菜单显示/隐藏
switchButton.addEventListener("click", () => {
  const isExpanded = switchButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    // 关闭菜单
    dropdown.hidden = true;
    switchButton.setAttribute("aria-expanded", "false");
  } else {
    // 打开菜单
    dropdown.hidden = false;
    switchButton.setAttribute("aria-expanded", "true");
  }
});

// 点击菜单项切换主题
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // 获取主题名（从 id 中提取）
    const themeName = item.id.split("-")[1];

    // 移除所有旧主题类
    document.body.className = "";

    // 添加新主题类
    document.body.classList.add(`theme-${themeName}`);

    // 查找对应主题消息
    const theme = themes.find(t => t.name === themeName);
    statusEl.textContent = theme.message;

    // 关闭菜单
    dropdown.hidden = true;
    switchButton.setAttribute("aria-expanded", "false");
  });
});