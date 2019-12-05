//check if click works
//document.getElementById("answer1").addEventListener("click", function () {
//    console.log("work")
//})

//alert("Wellcome to trivia. Enjoy playing.Please click Next question button")

let question = document.getElementById("question")
let answer1 = document.getElementById("answerp1")
let answer2 = document.getElementById("answerp2")
let answer3 = document.getElementById("answerp3")
let next = document.getElementById('next')
let initialScore = 0;
let newScore = document.getElementById("score").innerHTML;

//may I use any of const, var or let to set newScore = 0? 
//Suppose that cannot do it with const
//let score = 0;

//I begin with 3 questions 
let questions = [
    {
        question: "11111 How do you think why... 11111111",
        answer1: "Because 1A",
        answer2: "Because 1B",
        answer3: "Because 1C",
        correct: "Because 1A"
    },

    {
        question: "222222 How do you think why... 222222222",
        answer1: "Because 2A",
        answer2: "Because 2B",
        answer3: "Because 2C",
        correct: "Because 2C"
    },

    {
        question: "333333 How do you think why... 33333",
        answer1: "Because 3A",
        answer2: "Because 3B",
        answer3: "Because 3C",
        correct: "Because 3B"
    },

    {
        question: "444444 How do you think why... 44444",
        answer1: "Because 4A",
        answer2: "Because 4B",
        answer3: "Because 4C",
        correct: "Because 4B"
    },

    {
        question: "5555555 How do you think why... 555555",
        answer1: "Because 5A",
        answer2: "Because 5B",
        answer3: "Because 5C",
        correct: "Because 5B"
    },
    {
        question: "666666 How do you think why... 6666666",
        answer1: "Because 6A",
        answer2: "Because 6B",
        answer3: "Because 6C",
        correct: "Because 6B"
    },

    {
        question: "77777 How do you think why... 777777",
        answer1: "Because 7A",
        answer2: "Because 7B",
        answer3: "Because 7C",
        correct: "Because 7B"
    },
]

//questions[0].correct "A"


//last in index of the last question in the array
//const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//how to make questions change?????
// let q = questions[runningQuestion];
// function renderQuestion() {


//     question.innerHTML = q.question;
//     answer1.innerHTML = q.answer1
//     answer2.innerHTML = q.answer2
//     answer3.innerHTML = q.answer3
//     //runningQuestion++ it does not work.
//     //how I may increase runningQuestion?
//     //is it ok to render questions by clicking "next questions?"
// }

//function to go to the next question with "next"
//works perfectly if there's a question starting from 2
//if there's the question 1, I need one additionl click 

next.addEventListener("click", function () {
    let q = questions[runningQuestion];
    let newRunningQuestion = runningQuestion++;
    //how to limit numbers of clicks?
    question.innerHTML = q.question;
    answerp1.innerHTML = q.answer1
    answerp2.innerHTML = q.answer2
    answerp3.innerHTML = q.answer3

})

//let grabAnswers = document.querySelectorAll('.answers')

// for (let i = 0; i < grabAnswers.length; i++) {
//     grabAnswers[i].addEventListener('click', function (evt) {
//         if (evt.target.value == ) { }
//     })
// }


// function storeAnswers() {
//     let placeStoreAnswers;
//     plasceStoreAnswers = document.getElementById("answer1")
//     consol.log(storeAnswers)
// }


//attached next question button to this function in html
//it did not work and I put eventListener in js


//how to check answer
//if (corect - show smth+change score) else (incorrect - show smth)
//need functions inside finction


//before usingit we should create answer=add eventlistener (where user click)
//we put onclick in html but without argument

//
// function checkAnswer(answer) {

//     if (answer == questions[runningQuestion].correct) {
//         initialScore++;
//         addScore();
//         correct();

//     } else {
//         incorrect();
//     }


//     //what is the questions are over?
//     if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         renderQuestion();
//     } else {
//         //stop the game. just alert for now. in future need to change for message 
//         //that shows how many correct answers
//         alert("Game over")
//         //}

//     }
// }

// //if answer is correct question cell turns greeen+add 1 point to score
// function correct() {
//     document.getElementById("question").style.backgroundColor = "green";

// }

// //if answer is incorrect question cell turns red
// function incorrect() {
//     document.getElementById("question").style.backgroundColor = "red";

// }

// //function to add score
// //newScore - string
// //initialScore - number
// function addScore() {
//     NewScore = initialScore;
// }

//how to start over