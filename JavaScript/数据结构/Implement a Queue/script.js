function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

// 入队：加到数组尾部
function enqueue(queue, element) {
  queue.collection.push(element);
}

// 出队：删除并返回队首，空返回undefined
function dequeue(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.collection.shift();
}

// 获取队首元素，不删除
function front(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.collection[0];
}

// 返回元素个数
function size(queue) {
  return queue.collection.length;
}

// 判断是否空队列
function isEmpty(queue) {
  return queue.collection.length === 0;
}