function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

// 判断链表是否包含指定元素
function contains(list, element) {
  let curr = list.head;
  while (curr) {
    if (curr.element === element) return true;
    curr = curr.next;
  }
  return false;
}

// 根据索引取值，越界返回undefined
function getAt(list, index) {
  // 索引非法：小于0 或大于等于长度
  if (index < 0 || index >= list.length) return undefined;
  let curr = list.head;
  let i = 0;
  while (i < index) {
    curr = curr.next;
    i++;
  }
  return curr.element;
}

// 指定索引插入节点
function insertAt(list, index, element) {
  // 无效索引直接退出：index<0 或 index>length（不能超过尾部后一位）
  if (index < 0 || index > list.length) return;
  const newNode = { element, next: null };

  // 插头部 index=0
  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode;
  } else {
    // 找到前一个节点
    let prev = list.head;
    let i = 0;
    while (i < index - 1) {
      prev = prev.next;
      i++;
    }
    newNode.next = prev.next;
    prev.next = newNode;
  }
  list.length++;
}

// 删除指定索引节点
function removeAt(list, index) {
  // 索引越界直接返回
  if (index < 0 || index >= list.length) return;

  let delNode;
  // 删除头结点
  if (index === 0) {
    delNode = list.head;
    list.head = delNode.next;
  } else {
    // 找到待删节点的前一个
    let prev = list.head;
    let i = 0;
    while (i < index - 1) {
      prev = prev.next;
      i++;
    }
    delNode = prev.next;
    prev.next = delNode.next;
  }
  list.length--;
}

// 清空链表
function clear(list) {
  list.head = null;
  list.length = 0;
}