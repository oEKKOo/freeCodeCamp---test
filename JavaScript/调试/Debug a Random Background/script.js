const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C", // 修复：缺少逗号
  "#616A6B", // 修复：缺少逗号
  "#4A235A", // 修复：缺少逗号
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020"
];

function getRandomIndex() {
  // 修复：math → Math，添加 Math.floor 取整
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// 修复：queryselector → querySelector
const body = document.querySelector("body");
// 修复：缺少 # 号
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  // 修复：调用函数 getRandomIndex()
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// 修复：id 错误 #click-btn → #btn
const btn = document.querySelector("#btn");

// 修复：不要执行函数，传递引用 changeBackgroundColor
btn.addEventListener("click", changeBackgroundColor);