// 1. 创建空数组存储午餐
let lunches = [];

// 2. 添加午餐到末尾
function addLunchToEnd(arr, lunchItem) {
  // 添加到数组末尾
  arr.push(lunchItem);
  // 控制台输出
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  // 返回更新后的数组
  return arr;
}

// 3. 添加午餐到开头
function addLunchToStart(arr, lunchItem) {
  // 添加到数组开头
  arr.unshift(lunchItem);
  // 控制台输出
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  // 返回更新后的数组
  return arr;
}

// 4. 删除最后一个午餐
function removeLastLunch(arr) {
  // 判断数组是否为空
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  // 删除最后一个元素并保存
  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return arr;
}

// 5. 删除第一个午餐
function removeFirstLunch(arr) {
  // 判断数组是否为空
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  // 删除第一个元素并保存
  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return arr;
}

// 6. 随机选择午餐
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  // 生成随机索引
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomLunch = arr[randomIndex];
  console.log(`Randomly selected lunch: ${randomLunch}`);
}

// 7. 显示午餐菜单
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  // 拼接菜单字符串
  console.log(`Menu items: ${arr.join(', ')}`);
}