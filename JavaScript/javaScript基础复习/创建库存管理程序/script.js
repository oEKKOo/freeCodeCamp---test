// 1. 声明空库存数组
const inventory = [];

// 2. 查找产品索引（不区分大小写，找不到返回 -1）
function findProductIndex(productName) {
  const target = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === target) {
      return i;
    }
  }
  return -1;
}

// 3. 添加/更新产品
function addProduct(product) {
  const lowerName = product.name.toLowerCase();
  const idx = findProductIndex(lowerName);

  if (idx !== -1) {
    // 产品存在，更新数量
    inventory[idx].quantity += product.quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
    // 产品不存在，转为小写后加入库存
    inventory.push({
      name: lowerName,
      quantity: product.quantity
    });
    console.log(`${lowerName} added to inventory`);
  }
}

// 4. 移除产品数量
function removeProduct(productName, num) {
  const lowerName = productName.toLowerCase();
  const idx = findProductIndex(lowerName);

  // 产品不存在
  if (idx === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const item = inventory[idx];
  // 库存不足
  if (item.quantity < num) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${item.quantity}`);
    return;
  }

  // 扣减数量
  item.quantity -= num;
  // 扣完为0则删除该产品
  if (item.quantity === 0) {
    inventory.splice(idx, 1);
  }
  console.log(`Remaining ${lowerName} pieces: ${item.quantity}`);
}