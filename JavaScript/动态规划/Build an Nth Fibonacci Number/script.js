function sequence() {
    // 在sequence函数内定义fibonacci数组，初始[0,1]
    let fibonacci = [0, 1];

    // 定义fibonacci函数，接收一个参数n
    function fibonacciNum(n) {
        // 动态规划，非递归
        if (n === 0) return fibonacci[0];
        if (n === 1) return fibonacci[1];
        // 已有数据直接返回，没有则循环补齐
        for (let i = fibonacci.length; i <= n; i++) {
            let next = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(next);
        }
        return fibonacci[n];
    }

    // 把内部函数暴露出去，外部调用fibonacci()
    return {
        fibonacci: fibonacciNum
    }
}

// 导出全局fibonacci函数供测试调用
const { fibonacci } = sequence();