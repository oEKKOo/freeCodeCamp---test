// 创建空栈对象，collection为空数组
function initStack() {
    return {
        collection: []
    };
}

// 入栈：添加元素到数组末尾(栈顶)
function push(stack, element) {
    stack.collection.push(element);
}

// 出栈：删除并返回栈顶，空栈返回undefined
function pop(stack) {
    if (isEmpty(stack)) {
        return undefined;
    }
    return stack.collection.pop();
}

// 查看栈顶，不删除，空栈返回undefined
function peek(stack) {
    if (isEmpty(stack)) {
        return undefined;
    }
    return stack.collection[stack.collection.length - 1];
}

// 判断栈是否为空
function isEmpty(stack) {
    return stack.collection.length === 0;
}

// 清空栈所有元素
function clear(stack) {
    stack.collection = [];
}