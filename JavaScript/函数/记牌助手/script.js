// 全局 count 变量，初始值 0
let count = 0;

function cardCounter(card) {
  // 根据卡牌修改 count
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count -= 1;
  }
  // 7、8、9 不做处理

  // 判断返回 Bet / Hold
  const decision = count > 0 ? "Bet" : "Hold";
  return `${count} ${decision}`;
}