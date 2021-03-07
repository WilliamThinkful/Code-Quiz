var quizTime = document.getElementById('timer');



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


//quiz timer to count down from 60 seconds. 
//****add all questions answered functionality here?
function quizCountdown() {
    var timeLeft = 60;

    var secondsInterval = setInterval(function () {
        if (timeLeft > 0) {
            quizTime.textContent = "Time Remaining: " + timeLeft;
        }
        else {
            quizTime.textContent = "Time's up!";
            quizOver()
        }
    }, 1000);
}

//once timer hits zero or quiz is complete, quizOver function will display score and allow user to save score w/ initials to storage
function quizOver() {

}

//once start button is clicked, the quiz will begin
//****a loop function will be made to cycle through questions
function startQuiz() {

}

quizCountdown();
