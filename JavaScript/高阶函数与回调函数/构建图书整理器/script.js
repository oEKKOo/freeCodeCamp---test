// 1. 创建 books 书籍数组，至少3个对象，包含 title、authorName、releaseYear
const books = [
  {
    title: "Book A",
    authorName: "Author One",
    releaseYear: 1945
  },
  {
    title: "Book B",
    authorName: "Author Two",
    releaseYear: 1960
  },
  {
    title: "Book C",
    authorName: "Author Three",
    releaseYear: 1930
  },
  {
    title: "Book D",
    authorName: "Author Four",
    releaseYear: 1950
  }
];

// 2. 定义排序回调函数 sortByYear，接收两个书籍参数
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 3. 过滤：只保留 1950 年及之前的书籍，存入 filteredBooks
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// 4. 使用 sortByYear 对 filteredBooks 升序排序
filteredBooks.sort(sortByYear);