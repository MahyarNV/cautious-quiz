let elements = {
    startButton: document.querySelector("#startButton"),
    nextButton: document.querySelector("#nextButton"),
    scoreBoard: document.querySelector("#score"),
    quizElem: document.querySelector(".test-show"),
    timerInner: document.querySelector(".timer-inner"),
    tests: [document.querySelector("#test1"), document.querySelector("#test2"), document.querySelector("#test3"), document.querySelector("#test4")],
    answer: null,
    notAnsers: null,
}

let vars = {
    testTime: 5,
    score: 0,
    fpram: 0,
    spram: 0,
    quiz: null,
    char: null,
    chars: ['+', '-'],
    answer: null,
    timerWidth: 0,
}
let timerWidthIncreaser = 200 / vars.testTime

elements.startButton.disabled = false
elements.nextButton.disabled = true

function choose(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function random(from, to) {
    return Math.floor(Math.random() * to) + from
}

function submitAnswer(buttonId) {
    if (buttonId == elements.answer.id) {
        vars.score += 5
        elements.scoreBoard.innerHTML = vars.score
    }
}

function startTimer() {
    vars.timerWidth = 0
    elements.timerInner.style.width = vars.timerWidth.toString() + "px"
    var timer = setInterval(function() {
        vars.timerWidth += timerWidthIncreaser
        elements.timerInner.style.width = vars.timerWidth.toString() + "px"
        if (vars.timerWidth >= 200) {
            vars.timerWidth = 0
            start()
        }
    }, 1000)
}

function start() {
    startTimer()
    elements.startButton.disabled = true
    // elements.nextButton.disabled = false

    vars.char = choose(vars.chars)
    vars.fpram = random(0, 20)
    vars.spram = random(0, 20)
    vars.quiz = vars.fpram.toString() + vars.char + vars.spram.toString()
    elements.quizElem.innerHTML = vars.quiz
    vars.answer = (vars.char == '+') ? (vars.fpram + vars.spram) : (vars.fpram - vars.spram)
    elements.answer = choose(elements.tests)
    elements.answer.innerHTML = vars.answer

    elements.notAnsers = document.querySelectorAll(".testButton:not(#"+elements.answer.id.toString()+")")
    elements.notAnsers.forEach((element, index) => {
        element.innerHTML = random(-20, 30)
    });
}
