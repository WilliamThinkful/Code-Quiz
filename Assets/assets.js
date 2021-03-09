var quizTime = document.getElementById('timer');
var generateBtn = document.querySelector("#start");
//var currentQuestion = document.getElementById('questions');
var questionsLeft = 4
//Questions stored here
const store = {
    questions: [
        {
            question: 'question #1',
            answers: [
                '1',
                '2',
                '3',
                '4'
            ],
            correctAnswer: '1'
        },
        {
            question: 'question #2',
            answers: [
                '1',
                '2',
                '3',
                '4'
            ],
            correctAnswer: '1'
        },
        {
            question: 'question #3',
            answers: [
                '1',
                '2',
                '3',
                '4'
            ],
            correctAnswer: '1'
        },
        {
            question: 'question #4',
            answers: [
                '1',
                '2',
                '3',
                '4'
            ],
            correctAnswer: '1'
        }

    ]
}


function newFunction() {
    generateBtn.addEventListener("click", startQuiz);
}

//quiz timer to count down from 60 seconds. 
//****add all questions answered functionality here?
function quizCountdown() {
    var timeLeft = 60;

    var secondsInterval = setInterval(function () {
        if (timeLeft > 0) {
            quizTime.textContent = "Time Remaining: " + timeLeft;
            timeLeft--;
        }
        else if (questionsLeft === 0) {
            quizOver();
        }
        else {
            quizTime.textContent = "Time's up!";
            quizOver();
        }
    }, 1000);
}

function displayQuestions() {
    for (var i = 0; i < store.questions.length;) {
        console.log(store.questions[i].answers[0]);
        document.getElementById("questions").innerHTML = store.questions[i].question +
        "<ul>" +
         "<li><button>" + store.questions[i].answers[0] + "</button></li>" +
         "<li><button>" + store.questions[i].answers[1] + "</button></li>" +
         "<li><button>" + store.questions[i].answers[2] + "</button></li>" +
         "<li><button>" + store.questions[i].answers[3] + "</button></li></ul>";

            function answerSelect() {
                document.querySelector("#questions").addEventListener("click",answerCheck())
            }
            function answerCheck() {
                if (correctAnswer) {
                    console.log("holy shit")
                }
                else{
                    console.log("still holy shit")
                }
            }
            answerSelect();

        return(console.log("working"));
    }

}

//once timer hits zero or quiz is complete, quizOver function will display score and allow user to save score w/ initials to storage
function quizOver() {
 //initials = prompt("enter your initials");
 finalScore = timeLeft;
 localStorage.setItem(initials, finalScore);
}

//once start button is clicked, the quiz will begin
//****a loop function will be made to cycle through questions
function startQuiz() {
displayQuestions();
quizCountdown();

}

newFunction();
