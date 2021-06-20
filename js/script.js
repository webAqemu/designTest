const graf = ["team", "2d", "new", "small", "chaos", "digital", "tasks"];
const ind = ["alone", "3d", "upgrade", "big", "accuracy", "real", "tasks"];
const kost = ["alone", "3d", "new", "big", "chaos", "real", "impulse"];
const sreda = ["alone", "3d", "upgrade", "big", "accuracy", "real", "tasks"];
const aks = ["alone", "3d", "new", "small", "chaos", "real", "tasks"];
const arkh = ["team", "3d", "upgrade", "big", "accuracy", "real", "tasks"];
const eks = ["team", "3d", "new", "big", "accuracy", "real", "tasks"];
const prikl = ["alone", "2d", "new", "small", "accuracy", "real", "impulse"];

const answers = [];

document.querySelector("main").addEventListener("click", function (e) {
  // старт теста
  if (e.target.classList.contains("start__btn")) {
    const start = e.target.closest(".start");
    const firstQuestion = document.querySelector('.question[data-q="1"]');
    start.classList.add("hidden");
    firstQuestion.classList.remove("hidden");
  }

  // нажатие варианта
  if (e.target.classList.contains("question__btn")) {
    e.target.classList.toggle("pressed");
  }

  // возвращение на шаг назад
  if (e.target.classList.contains("question__back")) {
    const question = e.target.closest(".question");
    const questionNum = question.dataset.q;
    const questionPrev = document.querySelector(`.question[data-q="${questionNum - 1}"]`);
    questionPrev.querySelectorAll(".pressed").forEach((btn) => btn.classList.remove("pressed"));
    question.classList.add("hidden");
    questionPrev.classList.remove("hidden");
    // убираем последний ответ если мы перешли на шаг назад
    answers.pop();
    console.log(answers);
  }

  // переход на следующий вопрос

  if (e.target.classList.contains("question__next")) {
    const question = e.target.closest(".question");
    const questionNum = +question.dataset.q;
    const choosed = question.querySelectorAll(".pressed");
    const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
    if (choosed.length > 0 && choosed.length < 3) {
      e.target.classList.remove("error");
      question.classList.add("hidden");
      questionNext.classList.remove("hidden");
    } else {
      e.target.classList.add("error");
    }
  }

  // заполнение массива с ответами
  if (e.target.classList.contains("option")) {
    const question = e.target.closest(".question");
    const questionNum = +question.dataset.q;
    const choosed = e.target.dataset.answer;
    answers.push(choosed);
    console.log(answers);
    if (questionNum == 9) {
      switch (answers.join("")) {
        case graf.join(""):
          window.location.href = "graf.html";
          break;
        case ind.join(""):
          console.log("ind");
          break;
        case kost.join(""):
          console.log("kost");
          break;
        case sreda.join(""):
          console.log("sreda");
          break;
        case aks.join(""):
          console.log("aks");
          break;
        case arkh.join(""):
          console.log("arkh");
          break;
        case eks.join(""):
          console.log("eks");
          break;
        case prikl.join(""):
          console.log("prikl");
          break;
        default:
          console.log("meme");
      }
    } else {
      const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
      question.classList.add("hidden");
      questionNext.classList.remove("hidden");
    }

    // так же убираем hover класс у соседнего option
  }

  // убрать класс pressed если мы перешли нановый шаг
});

// tasks
// 1) сделать так чтобы нельзя было перейти на след вопрос если если выбрано более 2-ух направлений +
// 2) сделать все страницы с направлениями, а также странциу всех направлений
// 3) узнать как сделать отправку формы и статистики
