interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
    Object.setPrototypeOf(this, InvalidUserInputError.prototype);
  }
}

const currentCards: FlashCard[] = [
  {
    questionText: "TypeScript 中 interface 的作用是什么？",
    questionAnswer: "interface 可以用来定义对象的数据结构。"
  },
  {
    questionText: "数组类型 FlashCard[] 表示什么？",
    questionAnswer: "表示数组中的每一项都应符合 FlashCard 接口。"
  },
  {
    questionText: "点击闪卡后会发生什么？",
    questionAnswer: "闪卡元素会添加 flipped 类。"
  }
];

let currentCardIndex = 0;

const flashcard = document.getElementById("flashcard") as HTMLElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const entryForm = document.getElementById("entry-form") as HTMLFormElement;

const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;

const questionDisplay = document.getElementById("question-display") as HTMLElement;
const answerDisplay = document.getElementById("answer-display") as HTMLElement;

function renderCard(): void {
  flashcard.classList.remove("flipped");

  if (currentCards.length === 0) {
    questionDisplay.textContent = "No flashcards available.";
    answerDisplay.textContent = "Please add a new flashcard.";
    return;
  }

  const currentCard = currentCards[currentCardIndex];

  questionDisplay.textContent = currentCard.questionText;
  answerDisplay.textContent = currentCard.questionAnswer;
}

flashcard.addEventListener("click", () => {
  flashcard.classList.add("flipped");
});

deleteBtn.addEventListener("click", () => {
  if (currentCards.length === 0) {
    renderCard();
    return;
  }

  currentCards.splice(currentCardIndex, 1);

  if (currentCards.length === 0) {
    currentCardIndex = 0;
  } else if (currentCardIndex > 0) {
    currentCardIndex -= 1;
  } else {
    currentCardIndex = 0;
  }

  renderCard();
});

entryForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const questionText = frontText.value.trim();
  const questionAnswer = backText.value.trim();

  if (questionText.length === 0 || questionAnswer.length === 0) {
    throw new InvalidUserInputError(
      "Question text and answer cannot be empty."
    );
  }

  const newCard: FlashCard = {
    questionText: questionText,
    questionAnswer: questionAnswer
  };

  currentCards.push(newCard);
  currentCardIndex = currentCards.length - 1;

  frontText.value = "";
  backText.value = "";

  renderCard();
});

renderCard();

(window as any).currentCards = currentCards;
(window as any).InvalidUserInputError = InvalidUserInputError;