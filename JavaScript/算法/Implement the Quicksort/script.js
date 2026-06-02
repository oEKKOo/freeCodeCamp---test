function quicksort(arr) {
    // 递归终止条件：空数组或单个元素直接返回
    if (arr.length <= 1) {
        return arr;
    }
    // 选取第一个元素作为基准pivot
    const pivot = arr[0];
    const left = [];  // 存放小于pivot
    const right = []; // 存放大于等于pivot

    // 从第二个元素开始遍历分区
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 递归排序左右子数组 + 拼接 [左有序 + 基准 + 右有序]
    return [...quicksort(left), pivot, ...quicksort(right)];
}