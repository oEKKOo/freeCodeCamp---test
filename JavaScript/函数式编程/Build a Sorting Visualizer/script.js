//1.生成1~100随机整数
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

//2.生成5个随机数数组
function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

//3.创建空div
function generateContainer() {
  return document.createElement('div');
}

//4.容器填充5个span
function fillArrContainer(container, arr) {
  container.innerHTML = '';
  arr.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    container.appendChild(span);
  });
}

//5.判断升序 a<=b返回true
function isOrdered(a, b) {
  return a <= b;
}

//6.交换数组index与index+1元素，无序才交换
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
}

//7.高亮指定索引和下一个span边框：红色虚线3px
function highlightCurrentEls(container, index) {
  const spans = container.querySelectorAll('span');
  const width = '3px';
  spans[index].style.border = `${width} dashed red`;
  spans[index + 1].style.border = `${width} dashed red`;
}

//DOM
const startArrDom = document.querySelector('#starting-array');
const arrContainer = document.querySelector('#array-container');
const generateBtn = document.querySelector('#generate-btn');
const sortBtn = document.querySelector('#sort-btn');
let sourceArr = [];

//生成数组按钮
generateBtn.addEventListener('click', () => {
  //清空除starting-array以外所有div
  [...arrContainer.children].forEach(el => {
    if (el.id !== 'starting-array') el.remove();
  });
  sourceArr = generateArray();
  fillArrContainer(startArrDom, sourceArr);
});

//排序按钮
sortBtn.addEventListener('click', () => {
  //删除之前排序生成的所有div，只保留原生starting-array
  [...arrContainer.children].forEach(el => {
    if (el.id !== 'starting-array') el.remove();
  });

  //初始数组高亮前两位（需求21）
  highlightCurrentEls(startArrDom, 0);

  let arr = [...sourceArr];
  const stepArrList = []; // 存放每一步数组，一个数组对应一个div

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //交换
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
      //每次比较完成存入快照，一步一个
      stepArrList.push({ data: [...arr], compareIdx: i });
    }
  } while (swapped);

  //遍历所有步骤，逐个创建div，每个div固定5个span
  stepArrList.forEach(item => {
    const newDiv = generateContainer();
    fillArrContainer(newDiv, item.data); //自动生成5个span，满足19
    highlightCurrentEls(newDiv, item.compareIdx);
    arrContainer.appendChild(newDiv); //全部放进array-container，div数量=步骤数，满足18
  });
});