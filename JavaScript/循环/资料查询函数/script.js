let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// 评测查找函数
function lookUpProfile(name, prop) {
  // 遍历所有联系人
  for (let i = 0; i < contacts.length; i++) {
    // 如果找到匹配的名字
    if (contacts[i].firstName === name) {
      // 检查属性是否存在
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  // 循环结束都没找到联系人
  return "No such contact";
}