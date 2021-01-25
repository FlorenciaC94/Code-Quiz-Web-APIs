///var Score = 0;
///var Questions = 



///onclick="formSubmit()"

var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Inside which element do you put JavaScript?",
        choice1: "<var>",
        choice2: "<code>",
        choice3: "<script>",
        answer: 3
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "alerts",
        choice2: "booleans",
        choice3: "strings",
        answer: 1
    },
    {
        question: "If/Else statements are enclosed within:",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "square brackets",
        answer: 2
    },
    {
        question: "String values must be enclosed with:",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        answer: 3
    },
    {
        question: "How do you create an alert box?",
        choice1: "alert",
        choice2: "msgBox",
        choice3: "msg",
        answer: 1

    }
];

var correctPoints = 10;
var maxQuestions = 5;

startGame = ()=>{

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = ()=>{

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach (choice => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion ["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
})
startGame();