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
let initialScore = 0;
let NewScore = document.getElementById("score").innerHTML;
let score = 0;






//I begin with 3 questions 
let questions = [
    {
        question: "11111 How do you think why... 11111111",
        answer1: "Because  ... 1A",
        answer2: "Because ... 1B",
        answer3: "Because ... 1C",
        correct: "A"
    },

    {
        question: "222222 How do you think why... 222222222",
        answer1: "Because ... 2A",
        answer2: "Because ... 2B",
        answer3: "Because ... 2C",
        correct: "C"
    },

    {
        question: "333333 How do you think why... 33333",
        answer1: "Because ... 3A",
        answer2: "Because ... 3B",
        answer3: "Because ... 3C",
        correct: "B"
    }
]

//questions[0].correct "A"


//last in index of the last question in the array
const lastQuestion = questions.length - 1;
let runningQuestion = 0;



//how to reflect one question on the screen
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p";
    answer1.innerHTML = q.answer1
    answer2.innerHTML = q.answer2
    answer3.innerHTML = q.answer3


}

//how to make questions change?????
//attached next question button to this function in html
function changeQuestion() {
    for (let i = 0; i < questions.length; i++) {
        renderQuestion()
    }


}



next.addEventListener("click", renderQuestion())




//for loop?

//how to check answer
//if (corect - show smth+change score) else (incorrect - show smth)
//need functions inside finction


//before usingit we should create answer=add eventlistener (where user click)
//we put onclick in html
function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        score++;

        addScore();
        correct();


    } else {
        incorrect();

    }


    //what is the questions are over?
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        //stop the game. just alert for now. in future need to change for message 
        //that shows how many correct answers
        alert("Game over")
    }

}


//if answer is correct question cell turns greeen+add 1 point to score
function correct() {
    document.getElementById("question").style.backgroundColor = "green";

}

//if answer is incorrect question cell turns red
function incorrect() {
    document.getElementById("question").style.backgroundColor = "red";

}

//function to add score
function addScore() {
    NewScore = "score";

}

