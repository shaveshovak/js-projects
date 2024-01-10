import { questions } from "./data.js";

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const controls = document.getElementById('controls');
const resultElement = document.getElementById('result');

let currentQuestionIndex, score;

// startQuiz(): This function initiates the quiz. It sets the currentQuestionIndex to 0 (starting at the first question) and score to 0. 
// It then calls showQuestion() with the first question and sets up the quiz controls (Previous and Next buttons), with event listeners attached to handle button clicks.

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

// showQuestion(question): This function displays the current question and its possible answers. It first clears any existing content in the answer area by calling resetState(). 
// It then sets the text of the questionElement to the current question and iterates through the possible answers, creating a button for each one. 
// These buttons, when clicked, will trigger the selectAnswer(answer) function.

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

// resetState(): This function clears the answer buttons from the previous question. 
// It removes all child elements of the answerButtonsElement, ensuring that only the current question's answers are displayed.

const resetState = () => {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// selectAnswer(answer): This function is triggered when an answer button is clicked. 
// It checks if the selected answer is correct, updates the UI to reflect whether the answer was correct or wrong, and disables all answer buttons. If the answer is correct, it increments the score.

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

// setStatusClass(element, correct): This function applies the 'correct' or 'wrong' CSS class to the selected answer element, providing visual feedback (like changing the color) to indicate whether the answer was correct or not.

const setStatusClass = (element, correct) => {
    clearStatusClass(element);
    element.classList.add(correct ? 'correct' : 'wrong');
}

// clearStatusClass(element): This function removes the 'correct' and 'wrong' CSS classes from an element. 
// It's used to reset the styling of the answer buttons before applying new styles based on the user's answer.

const clearStatusClass = (element) => {
    element.classList.remove('correct', 'wrong');
}

// handleAnswer(isNext): This function determines what happens when the 'Previous' or 'Next' button is clicked. 
// If 'Next' is clicked, it moves to the next question or ends the quiz if there are no more questions. 
// If 'Previous' is clicked, it goes back to the previous question. The function calls showQuestion() to update the display for the new current question.

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

// finishQuiz(): This function is called when the quiz is completed. 
// It updates the questionElement to show the final score, resets the state, and displays a button to redo the quiz. It also clears any previous results from the resultElement
const finishQuiz = () => {
    questionElement.innerText = `Quiz Finished! Your score: ${score}/${questions.length}`;
    resetState();
    controls.innerHTML = '<button id="redo">Redo the Test</button>';
    document.getElementById('redo').addEventListener('click', startQuiz);
    resultElement.innerText = ''; // Clear any previous result
}

startQuiz();