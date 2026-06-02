function adjacencyListToMatrix(adjList) {
  // 获取所有节点编号并转数字
  const nodes = Object.keys(adjList).map(Number);
  const size = nodes.length;
  // 初始化全0矩阵
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  // 遍历每个起点i
  for (const i of nodes) {
    // i指向的所有j设为1
    for (const j of adjList[i]) {
      matrix[i][j] = 1;
    }
  }

  // 逐行打印
  matrix.forEach(row => console.log(row));
  return matrix;
}