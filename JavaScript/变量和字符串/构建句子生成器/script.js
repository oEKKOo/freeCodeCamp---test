// 1. 使用 let 声明所有需要的变量
let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

// 2. 为第一个故事赋值变量
adjective = "magic";
noun = "dragon";
verb = "happy";
place = "mountain cave";
adjective2 = "sparkling";
noun2 = "golden apples";

// 3. 创建并输出第一个故事
let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
console.log(`First story: ${firstStory}`);

// 4. 重新赋值所有变量（用于第二个故事）
adjective = "brave";
noun = "unicorn";
verb = "excited";
place = "rainbow forest";
adjective2 = "shiny";
noun2 = "colorful flowers";

// 5. 创建并输出第二个故事
let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
console.log(`Second story: ${secondStory}`);