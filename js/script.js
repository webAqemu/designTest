/* const choosed = [];
document.querySelector("main").addEventListener("click", function (e) {
  if (e.target.classList.contains("question__btn") && !e.target.classList.contains("pressed")) {
    e.target.classList.toggle("pressed");
    choosed.push(e.target);
  }
  if (choosed.length == 3) {
    choosed[0].classList.remove("pressed");
    choosed.shift();
  }
}); */

document.querySelector("main").addEventListener("click", function (e) {
  // старт теста
  if (e.target.classList.contains("start")) {
    const preview = e.target.closest(".preview");
    const firstQuestion = document.querySelector('.question[data-q="1"]');
    preview.classList.add("hidden");
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
    question.classList.add("hidden");
    questionPrev.classList.remove("hidden");
  }

  // переход на следующий вопрос

  if (e.target.classList.contains("question__next") || e.target.classList.contains("option")) {
    const question = e.target.closest(".question");
    const questionNum = +question.dataset.q;
    const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
    question.classList.add("hidden");
    questionNext.classList.remove("hidden");
  }

  // убрать класс pressed если мы перешли нановый шаг
});
