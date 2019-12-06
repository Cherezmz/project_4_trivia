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
        question: "Who is copyright owner of a code?",
        answer1: "Software developer",
        answer2: "Employer",
        answer3: "It depends",
        correct: "It depends"
    },

    {
        question: "Can you use copyrighted pictures for this project?",
        answer1: "Defenetely not because this is a copyright infringement",
        answer2: "Probably yes because this is a fair use",
        answer3: "Probably not if you did not pay to a copyright owner",
        correct: "Probably yes because this is a fair use"
    },

    {
        question: "Is P2P legal?",
        answer1: "No",
        answer2: "Yes",
        answer3: "Who knows...",
        correct: "Yes"
    },

    {
        question: "How old was Jon Jonansen who cracked Content Scramble System (CSS) in 1999?",
        answer1: "18",
        answer2: "28",
        answer3: "38",
        correct: "18"
    },

    {
        question: "How many illegal viewings of US movies/episodes did occur in 2018?",
        answer1: "128k",
        answer2: "128 mill.",
        answer3: "128 bil.",
        correct: "128 bil."
    },
    {
        question: "How is called the process of checking movies on copyright violations?",
        answer1: "Copyright washing",
        answer2: "Copyright clearance",
        answer3: "Copyright purification",
        correct: "Copyright clearance"
    },

    {
        question: "Who is a copyright owner if a photo was taken by an animal?",
        answer1: "Owner of the animal",
        answer2: "Green Peace",
        answer3: "No copyright arises",
        correct: "No copyright arises"
    },
]

//questions[0].correct "A"


//last in index of the last question in the array
//const lastQuestion = questions.length - 1;
let runningQuestion = 0;


next.addEventListener("click", function () {
    let q = questions[runningQuestion];
    let newRunningQuestion = runningQuestion++;
    //how to limit numbers of clicks? When I had onclick in html it was limited
    question.innerHTML = q.question;
    answerp1.innerHTML = q.answer1
    answerp2.innerHTML = q.answer2
    answerp3.innerHTML = q.answer3

})

//how to work with user's answers
let grabAnswers = document.querySelectorAll('.answers')

for (let i = 0; i < grabAnswers.length; i++) {
    grabAnswers[i].addEventListener('click', function (evt) {
        if (evt.target.value == questions[i].correct) {
            console.log('yes')
        } else {
            console.log("no")
        }
    })

}
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