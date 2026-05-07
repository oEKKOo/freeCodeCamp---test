const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// 创建高尔夫得分翻译函数
function golfScore(par, strokes) {
  // 1. 一杆进洞（无论par是多少，strokes=1都返回）
  if (strokes === 1) {
    return "Hole-in-one!";
  }
  // 2. 小于等于 par - 2 → Eagle
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  // 3. 等于 par - 1 → Birdie
  else if (strokes === par - 1) {
    return "Birdie";
  }
  // 4. 等于 par → Par
  else if (strokes === par) {
    return "Par";
  }
  // 5. 等于 par + 1 → Bogey
  else if (strokes === par + 1) {
    return "Bogey";
  }
  // 6. 等于 par + 2 → Double Bogey
  else if (strokes === par + 2) {
    return "Double Bogey";
  }
  // 7. 大于等于 par + 3 → Go Home!
  else if (strokes >= par + 3) {
    return "Go Home!";
  }
}