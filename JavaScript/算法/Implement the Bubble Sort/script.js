function bubbleSort(arr) {
    // 拷贝原数组，不修改入参
    let array = [...arr];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            // 前>后则交换
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped); // 本轮无交换=有序，退出循环
    return array;
}