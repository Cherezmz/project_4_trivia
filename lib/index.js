
let question = document.getElementById("question")
let answer1 = document.getElementById("answerp1")
let answer2 = document.getElementById("answerp2")
let answer3 = document.getElementById("answerp3")
let next = document.getElementById('next')
let initialScore = 0;
let newScore = document.getElementById("score").innerHTML;

let questions = [
    {
        question: "Who is a copyright owner of a code?",
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
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {

    let q = questions[runningQuestion];
    //how to limit numbers of clicks? When I had onclick in html it was limited
    question.innerHTML = q.question;
    answerp1.innerHTML = q.answer1
    answerp2.innerHTML = q.answer2
    answerp3.innerHTML = q.answer3
    document.getElementById("question").style.backgroundColor = "wheat"
    if (runningQuestion >= questions.length - 1) {
        alert("Game over")
    }
}

next.addEventListener("click", function (evt) {
    evt.preventDefault()
    runningQuestion++;
    renderQuestion()
})

//how to work with user's answers
let grabAnswers = document.querySelectorAll('.answers')

for (let i = 0; i < grabAnswers.length; i++) {
    grabAnswers[i].addEventListener('click', function (evt) {
        // questions[i].correct is correct with number, i worked strange
        //problem is with evt.target.value
        //
        //console.log(evt.target.innerHTML)
        //console.log(questions[runningQuestion].correct)
        if (evt.target.innerHTML == questions[runningQuestion].correct) {
            //console.log('yes')
            document.getElementById("question").style.backgroundColor = "green";
            //test the next 3 lines in incorrect answers part and it works 
            //except one more click on answered question add score
            //how to prevent it?
            initialScore++;
            //console.log(initialScore)
            document.getElementById("score").innerHTML = initialScore;
        } else {

            document.getElementById("question").style.backgroundColor = "red";
            //if the answer is incorrect, the question turns 
            //red and remains red durings next questions
            // evt.preventDefault() should prevent from 
            //default action and it is not our case?
        }
    })
}

//how to show that the game is over





renderQuestion()


//const lastQuestion = questions.length - 1;
//if (runningQuestion < lastQuestion) {
   // alert("Game over")
//}