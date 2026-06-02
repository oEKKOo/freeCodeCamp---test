function dfs(graph, root) {
  const stack = [root];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    // 栈顶出栈
    const current = stack.pop();
    if (visited.has(current)) continue;

    visited.add(current);
    result.push(current);

    // 找出当前节点所有邻接节点(值为1)，逆序入栈保证顺序和示例一致
    const neighbors = [];
    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === 1 && !visited.has(i)) {
        neighbors.push(i);
      }
    }
    // 反转，后进先出实现DFS顺序
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
  return result;
}