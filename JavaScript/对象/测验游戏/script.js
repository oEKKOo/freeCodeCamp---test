// 1. 创建包含至少5个问题的数组
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who invented the telephone?",
    choices: ["Einstein", "Bell", "Edison"],
    answer: "Bell"
  },
  {
    category: "Geography",
    question: "What is the largest ocean?",
    choices: ["Atlantic", "Pacific", "Indian"],
    answer: "Pacific"
  },
  {
    category: "Math",
    question: "What is 5 + 3?",
    choices: ["7", "8", "9"],
    answer: "8"
  },
  {
    category: "Art",
    question: "Who painted the Mona Lisa?",
    choices: ["Van Gogh", "Da Vinci", "Picasso"],
    answer: "Da Vinci"
  }
];

// 2. 随机获取一个问题
function getRandomQuestion(questionsArr) {
  const randomIndex = Math.floor(Math.random() * questionsArr.length);
  return questionsArr[randomIndex];
}

// 3. 随机选择一个答案
function getRandomComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomIndex];
}

// 4. 判断结果并返回对应文本
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}