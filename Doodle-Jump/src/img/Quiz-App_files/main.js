const quizData = [
    {
        question: 'How old is this page?',
        a: '10 Years',
        b: '11 Years',
        c: '1 Year',
        d: '2 Years',
        correct: 'c'
    }, {
        question: 'what is the best programming language?',
        a: 'JavaScript',
        b: 'Java',
        c: 'C#',
        d: 'flutter',
        correct: 'a'
    }, {
        question: 'what du you think is the best Way to learn coding?',
        a: 'Study',
        b: 'self-made',
        c: 'lerning by doing',
        d: 'onlie course',
        correct: 'd'
    }, {
        question: 'What is the best place to learn coding?',
        a: 'Udemy',
        b: 'YouTube',
        c: 'college',
        d: 'other options',
        correct: 'a'
    }, {
        question: 'What is the next Project?',
        a: 'nothing',
        b: 'Recipe-App',
        c: 'ToDo-App',
        d: 'Weather-App',
        correct: 'b'
    }, {
        question: 'how you can present our code to a Company?',
        a: 'GitHub?',
        b: 'sending Portfolio-Screenshots?',
        c: 'sending the Document?',
        d: 'but all your project online?',
        correct: 'a'
    }
];
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuit() {
    const currentQuestion = quizData[currentQuiz]
    questionEl.innerHTML = quizData[currentQuiz];

    currentQuestion();
}   