const graf = ["team", "2d", "new", "small", "chaos", "digital", "tasks"];
const ind = ["team", "3d", "upgrade", "big", "accuracy", "real", "tasks"];
const kost = ["alone", "3d", "new", "big", "chaos", "real", "impulse"];
const sreda = ["alone", "3d", "upgrade", "big", "accuracy", "real", "tasks"];
const aks = ["alone", "3d", "new", "small", "chaos", "real", "tasks"];
const arkh = ["team", "3d", "new", "big", "accuracy", "real", "tasks"];
const eks = ["team", "3d", "new", "big", "accuracy", "digital", "tasks"];
const prikl = ["alone", "2d", "new", "small", "accuracy", "real", "impulse"];

const answers = [];
const windowWidth = window.innerWidth;

document.querySelector("main").addEventListener("click", function (e) {
  const start = document.querySelector(".start");
  const logo = document.querySelector(".logo");
  // старт теста
  if (e.target.classList.contains("start__btn")) {
    const firstQuestion = document.querySelector('.question[data-q="1"]');
    start.classList.add("hidden");
    firstQuestion.classList.remove("hidden");
    if (windowWidth < 900) {
      logo.classList.add("inactive");
    }
  }

  // нажатие варианта
  if (e.target.classList.contains("question__btn")) {
    e.target.classList.toggle("pressed");
    const question = e.target.closest(".question");
    if (question.querySelectorAll(".pressed").length > 2) {
      question.querySelector(".question__next").classList.add("error");
      e.target.classList.remove("pressed");
    } else {
      question.querySelector(".question__next").classList.remove("error");
    }
  }

  // возвращение на шаг назад
  if (e.target.classList.contains("question__back")) {
    const question = e.target.closest(".question");
    const questionNum = question.dataset.q;
    question.classList.add("hidden");
    if (e.target.classList.contains("firstQuestion")) {
      start.classList.remove("hidden");
      logo.classList.remove("inactive");
      question.querySelectorAll(".pressed").forEach((btn) => btn.classList.remove("pressed"));
    } else {
      const questionPrev = document.querySelector(`.question[data-q="${questionNum - 1}"]`);
      console.log(questionNum);
      question.querySelectorAll(".pressed").forEach((btn) => btn.classList.remove("pressed"));
      questionPrev.querySelectorAll(".pressed").forEach((btn) => btn.classList.remove("pressed"));
      questionPrev.classList.remove("hidden");

      // добавляем классы для мобилок
      const choosing = questionPrev.querySelector(".question__mobile-think");
      const btnPrevMobile = questionPrev.querySelector(".question__mobile-next");
      if (choosing) {
        choosing.classList.remove("inactive");
        btnPrevMobile.classList.add("btn--inactive");
      }
    }
    // убираем последний ответ если мы перешли на шаг назад
    answers.pop();
    console.log(answers);
  }

  // переход на следующий вопрос

  if (e.target.classList.contains("question__next")) {
    const question = e.target.closest(".question");
    const questionNum = +question.dataset.q;
    const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
    e.target.classList.remove("error");
    question.classList.add("hidden");
    questionNext.classList.remove("hidden");
  }
  // заполнение массива с ответами
  if (e.target.classList.contains("option")) {
    const question = e.target.closest(".question");
    if (windowWidth > 900) {
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
            window.location.href = "ind.html";
            break;
          case kost.join(""):
            window.location.href = "kost.html";
            break;
          case sreda.join(""):
            window.location.href = "sreda.html";
            break;
          case aks.join(""):
            window.location.href = "kost.html";
            break;
          case arkh.join(""):
            window.location.href = "sreda.html";
            break;
          case eks.join(""):
            window.location.href = "eks.html";
            break;
          case prikl.join(""):
            window.location.href = "prik.html";
            break;
          default:
            window.location.href = "meme.html";
        }
      } else {
        const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
        question.classList.add("hidden");
        questionNext.classList.remove("hidden");
      }

      // так же убираем hover класс у соседнего option
    } else {
      if (question.querySelector(".pressed")) {
        question.querySelector(".pressed").classList.remove("pressed");
      }
      e.target.classList.add("pressed");
      question.querySelector(".question__mobile-next").classList.remove("btn--inactive");
      question.querySelector(".question__mobile-think").classList.add("inactive");
    }
  }

  // заполнение массива с ответами на мобилке
  if (e.target.classList.contains("question__mobile-next")) {
    const question = e.target.closest(".question");
    const questionNum = +question.dataset.q;
    const choosed = question.querySelector(".pressed").dataset.answer;
    answers.push(choosed);
    console.log(answers);
    if (questionNum == 9) {
      switch (answers.join("")) {
        case graf.join(""):
          window.location.href = "graf.html";
          break;
        case ind.join(""):
          window.location.href = "ind.html";
          break;
        case kost.join(""):
          window.location.href = "kost.html";
          break;
        case sreda.join(""):
          window.location.href = "sreda.html";
          break;
        case aks.join(""):
          window.location.href = "kost.html";
          break;
        case arkh.join(""):
          window.location.href = "sreda.html";
          break;
        case eks.join(""):
          window.location.href = "eks.html";
          break;
        case prikl.join(""):
          window.location.href = "prik.html";
          break;
        default:
          window.location.href = "meme.html";
      }
    } else {
      const questionNext = document.querySelector(`.question[data-q="${questionNum + 1}"]`);
      question.classList.add("hidden");
      questionNext.classList.remove("hidden");
    }
  }

  // убрать класс pressed если мы перешли нановый шаг
});

// tasks
// 1) сделать так чтобы нельзя было перейти на след вопрос если если выбрано более 2-ух направлений +
// 2) сделать все страницы с направлениями, а также странциу всех направлений
// 3) узнать как сделать отправку формы и статистики

/* document.querySelector('main').addEventListener('mousedown', function(e){
  if (e.target.classList.contains('question__btn')) {
    const question = e.target.closest('.question')
    if (question.querySelectorAll('pressed').length )
  }
}) */

// burger menu

document.querySelector(".header__burger").addEventListener("click", function (e) {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".menu");
  const html = document.querySelector("html");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  html.classList.toggle("active");
});

if (windowWidth < 900) {
  $(document).ready(function () {
    if (!document.querySelector(".noSlider")) {
      $(".more__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
      });
    }
  });
}

console.log(window.location.href);
