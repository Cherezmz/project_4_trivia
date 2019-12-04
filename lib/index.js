//check if click works
//document.getElementById("answer1").addEventListener("click", function () {
//    console.log("work")
//})

//alert("Wellcome to trivia. Enjoy playing")

let questionCell = document.getElementById("question")
let answer1Cell = document.getElementById("answer1")
let answer2Cell = document.getElementById("answer2")
let answer3Cell = document.getElementById("answer3")
let next = document.getElementById('next')




//tried constructor. it did not work and I decided to move forward manually 


//I begin with 3 questions 
let questions = [
    {
        question: "11111 How do you think why... 11111111",
        answer1: "Because ... A",
        answer2: "Because ... B",
        answer3: "Because ... C",
        correct: "A"
    },

    {
        question: "222222 How do you think why... 222222222",
        answer1: "Because ... A",
        answer2: "Because ... B",
        answer3: "Because ... C",
        correct: "C"
    },

    {
        question: "333333 How do you think why... 33333",
        answer1: "Because ... A",
        answer2: "Because ... B",
        answer3: "Because ... C",
        correct: "B"
    }
]

//questions[0].correct "A"


//check this
//let lastQuestion = questions.length - 1;
let runningQuestion = 0;

//how to reflect questions on the screen
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p";
    answer1.innerHTML = q.answer1
    answer2.innerHTML = q.answer2
    answer3.innerHTML = q.answer3
}

renderQuestion() 