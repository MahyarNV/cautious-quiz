let elements = {
    startButton: document.querySelector("#startButton"),
    nextButton: document.querySelector("#nextButton"),
    quizElem: document.querySelector(".test-show"),
    tests: [document.querySelector("#test1"), document.querySelector("#test2"), document.querySelector("#test3"), document.querySelector("#test4")],
    // test2: document.querySelector("#test2"),
    // test3: document.querySelector("#test3"),
    // test4: document.querySelector("#test4"),
}

let vars = {
    score: 0,
    fpram: 0,
    spram: 0,
    quiz: null,
    char: null,
    chars: ['+', '-'],
    answer: null,
}

function choose(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function random(from, to) {
    return Math.floor(Math.random() * to) + from
}

function start() {
    // elements.startButton.disabled = true
    // elements.nextButton.disabled = false
    vars.char = choose(vars.chars)
    vars.fpram = random(0, 20)
    vars.spram = random(0, 20)
    vars.quiz = vars.fpram.toString() + vars.char + vars.spram.toString()
    elements.quizElem.innerHTML = vars.quiz
    vars.answer = (vars.char == '+') ? (vars.fpram + vars.spram) : (vars.fpram - vars.spram)
    choose(elements.tests).innerHTML = vars.answer
}
