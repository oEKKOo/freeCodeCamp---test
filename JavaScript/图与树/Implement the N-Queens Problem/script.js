function dfsNQueens(n) {
    const result = [];
    if (n < 1) return [];

    // path[i] = 第i行皇后所在列
    function backtrack(row, path) {
        // 全部行填满，找到一组解
        if (row === n) {
            result.push([...path]);
            return;
        }
        // 尝试每一列
        for (let col = 0; col < n; col++) {
            let valid = true;
            // 和前面已放皇后校验冲突
            for (let r = 0; r < row; r++) {
                const c = path[r];
                // 同列 或 斜线(行差=列差)
                if (c === col || Math.abs(r - row) === Math.abs(c - col)) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                path.push(col);
                backtrack(row + 1, path);
                path.pop(); // 回溯
            }
        }
    }

    backtrack(0, []);
    return result;
}