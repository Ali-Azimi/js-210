// dom nodes
const root = document.getElementById("root");
let current = 0;
let points = 0;

// functions
function render(question) {
  let template = `
    <div class='question'>
        <h2>${question.title}</h2>
        <div class='options'>
            ${question.options
              .map((option) => {
                return `<button class='option' onclick='chooseAnswer(${option.key})'>${option.title}</button>`;
              })
              .join("")}
        </div>
    </div>`;

  root.innerHTML = template;
}

function chooseAnswer(userAnswerKey) {
  if (userAnswerKey === QUESTIONS[current].answerKey) {
    // correct answer
    points += QUESTIONS[current].score;
  } else {
    // incorrect answer
    points -= 10;
  }

  if (current < QUESTIONS.length-1) {
    current++;
    render(QUESTIONS[current]);
  } else {
    renderResult();
  }
}



function renderResult() {
    const template = `<h1>YOUR POINT IS: ${points}</h1>`;
    root.innerHTML = template;
}

// events
window.addEventListener("load", () => {
  render(QUESTIONS[current]);
});
