//  Questions added for quiz game
const QuizData = [
    {
        "question": "Q1: What is the largest country in the world (by land area)?",
        "a": "New York",
        "b": "Russia",
        "c": "Brasil",
        "d": "Australia",
        "ans": "ans2"
    },
    {
        "question": "Q2: Which ocean is located between Europe and North America?",
        "a": "Pacific Ocean",
        "b": "Indian Ocean",
        "c": "Atlantic Ocean",
        "d": "Southern Ocean",
        "ans": "ans3"
    },
    {
        "question": "Q3: Which country is Budapest the capital of?",
        "a": "Turkey",
        "b": "Hungary",
        "c": "Syria",
        "d": "Spain",
        "ans": "ans2"

    },
    {
        "question": "Q4: What is the name of the volcano located 100km from Tokyo?",
        "a": "Mount Errigal",
        "b": "Mount Etna",
        "c": "Mount Vesuvius",
        "d": "Mount Fuji",
        "ans": "ans4"
    
    },
    {
        "question": "Q5: What is the longest river in Africa?",
        "a": "Amazon River",
        "b": "Congo River",
        "c": "Ganges River",
        "d": "Niles River",
        "ans": "ans4"
    }
    
];
// 


const startTest = document.querySelector('#startTest');
// Constants declared for DOM elements and possible choices


const quiz = document.querySelector('.quiz');
const question = document.querySelector('.question');

const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');

const answers = document.querySelectorAll('.answer');
const submit = document.querySelector('#submit');

const timer = document.getElementById("timer");
let timerInterval;
let questionCount = 0;
let score = 0;

// Add timer for all the questions


const startTimer = () => {
	console.log('running');
    clearInterval(timerInterval);
    let second = 1,
        minute = 30;

    timerInterval = setInterval(function () {
        timer.classList.toggle("odd");
        timer.innerHTML =
            (minute < 10 ? "0" + minute : minute) + ":" +
            (second < 10 ? "0" + second : second);

        if (second == 0) {
            if (minute === 0) {
                clearInterval(timerInterval);
                alert("Time is up!");
                // end the quiz
                endQuiz();
                
            }
            minute--;
            second = 60;
        }
        second--;
    }, 1000);
};


const endQuiz = () => {
     quiz.innerHTML = `
        <h1> scored ${score} / ${QuizData.length} </h1>
        <button class="btn" onclick="location.reload()"> Restart Quiz </button>
        `;
        clearInterval(timerInterval);
    }
    
const loadQuestion = () => {
    question.innerHTML = QuizData[questionCount].question;
    option1.innerHTML = QuizData[questionCount].a;
    option2.innerHTML = QuizData[questionCount].b;
    option3.innerHTML = QuizData[questionCount].c;
    option4.innerHTML = QuizData[questionCount].d;
};

// Add event listener to answer and score

startTest.addEventListener('click', () => {
    document.querySelector('.startPage').style.display = 'none';
    loadQuestion();
    startTest();
});


submit.addEventListener('click', () => {

    const CheckAnswer = () => {
        let answer;
        answers.forEach(cur => {
            if (cur.checked) {
                answer = cur.id;
            }
        });
        return answer;
    };
    if (CheckAnswer() === QuizData[questionCount].ans) {
        score++;
    }


    if(questionCount < QuizData.length - 2){
        submit.innerHTML = '<p>Next</p>';
    } else {
        submit.innerHTML = '<p style="color: rgba(255,0,0,.6);font-weight: 1000; ">Finish</p>';

    }

    questionCount++;

    answers.forEach(item => item.checked = false);


    if (questionCount < QuizData.length) {
        loadQuestion();
    } else {
        endQuiz;
    }

});