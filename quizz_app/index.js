import { questions } from "./data.js";

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const controls = document.getElementById('controls');
const resultElement = document.getElementById('result');

let currentQuestionIndex, score;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
    controls.innerHTML = `
        <button id="previous">Previous</button>
        <button id="next">Next</button>`;
    document.getElementById('previous').addEventListener('click', () => handleAnswer(false));
    document.getElementById('next').addEventListener('click', () => handleAnswer(true));
}

const showQuestion = (question) =>{
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(answer);
        answerButtonsElement.appendChild(button);
    });
}

const resetState = () => {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

const selectAnswer = (answer) => {
    let correctAnswerSelected = false;
    Array.from(answerButtonsElement.children).forEach(button => {
        const correct = button.innerText === answer.text && answer.correct;
        if (button.innerText === answer.text) {
            setStatusClass(button, correct);
            correctAnswerSelected = correct;
        }
        button.disabled = true;  // Disable all buttons
    });

    if (correctAnswerSelected) score++;
}

const setStatusClass = (element, correct) => {
    clearStatusClass(element);
    element.classList.add(correct ? 'correct' : 'wrong');
}

const clearStatusClass = (element) => {
    element.classList.remove('correct', 'wrong');
}

const handleAnswer = (isNext) => {
    if (isNext && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else if (!isNext && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
    } else if (isNext) {
        finishQuiz();
    }
}

const finishQuiz = () => {
    questionElement.innerText = `Quiz Finished! Your score: ${score}/${questions.length}`;
    resetState();
    controls.innerHTML = '<button id="redo">Redo the Test</button>';
    document.getElementById('redo').addEventListener('click', startQuiz);
    resultElement.innerText = ''; // Clear any previous result
}

startQuiz();