// Keyboard Navigation Module
// Handles all keyboard shortcuts and navigation for the quiz interface

// Global variables for keyboard state
let currentlySelectedAnswer = 0; // For quiz question navigation
let currentlySelectedQuizOption = 1; // For quiz selection navigation (0=quick, 1=standard, 2=indepth)

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // Handle quiz selection screen
        if (currentView === 'quiz' && document.getElementById('quiz-selection').style.display !== 'none') {
            handleQuizSelectionKeys(event);
            return;
        }

        // Only handle keyboard navigation when in quiz mode
        if (currentView !== 'quiz' || document.getElementById('quiz-content').style.display === 'none') {
            return;
        }

        const question = currentQuizQuestions[currentQuestion];
        if (!question) return;

        const answerElements = document.querySelectorAll('.answer-option');
        const numAnswers = answerElements.length;

        switch(event.key) {
            case 'ArrowUp':
            case 'k':
                event.preventDefault();
                currentlySelectedAnswer = Math.max(0, currentlySelectedAnswer - 1);
                updateAnswerHighlight();
                break;
            
            case 'ArrowDown':
            case 'j':
                event.preventDefault();
                currentlySelectedAnswer = Math.min(numAnswers - 1, currentlySelectedAnswer + 1);
                updateAnswerHighlight();
                break;
            
            case ' ':
            case 'Enter':
            case 'x':
                event.preventDefault();
                if (answerElements[currentlySelectedAnswer]) {
                    const answerElement = answerElements[currentlySelectedAnswer];
                    const questionId = parseInt(answerElement.getAttribute('data-question-id'));
                    const answerIndex = parseInt(answerElement.getAttribute('data-answer-index'));
                    selectAnswer(questionId, answerIndex);
                    // Keep the selector on the current row after selection
                    setTimeout(() => updateAnswerHighlight(), 50);
                }
                break;
            
            case 'ArrowRight':
            case 'l':
                event.preventDefault();
                const nextBtn = document.getElementById('nextBtn');
                const finishBtn = document.getElementById('finishBtn');
                const keepGoingBtn = document.getElementById('keepGoingBtn');
                if (nextBtn && nextBtn.style.display !== 'none' && !nextBtn.disabled) {
                    nextQuestion();
                } else if (finishBtn && finishBtn.style.display !== 'none') {
                    finishQuiz();
                } else if (keepGoingBtn && keepGoingBtn.style.display !== 'none') {
                    keepGoing();
                }
                break;
            
            case 'ArrowLeft':
            case 'h':
                event.preventDefault();
                const prevBtn = document.getElementById('prevBtn');
                if (prevBtn && !prevBtn.disabled) {
                    previousQuestion();
                }
                break;
        }
    });
}

function handleQuizSelectionKeys(event) {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const numOptions = quizOptions.length;

    switch(event.key) {
        case 'ArrowUp':
        case 'k':
            event.preventDefault();
            currentlySelectedQuizOption = Math.max(0, currentlySelectedQuizOption - 1);
            updateQuizSelectionHighlight();
            break;
        
        case 'ArrowDown':
        case 'j':
            event.preventDefault();
            currentlySelectedQuizOption = Math.min(numOptions - 1, currentlySelectedQuizOption + 1);
            updateQuizSelectionHighlight();
            break;
        
        case ' ':
        case 'Enter':
        case 'x':
            event.preventDefault();
            const modes = ['quick', 'standard', 'indepth'];
            if (currentlySelectedQuizOption < modes.length) {
                startQuiz(modes[currentlySelectedQuizOption]);
            }
            break;
    }
}

function updateQuizSelectionHighlight() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach((element, index) => {
        if (index === currentlySelectedQuizOption) {
            element.classList.add('keyboard-highlighted');
        } else {
            element.classList.remove('keyboard-highlighted');
        }
    });
}

function updateAnswerHighlight() {
    const answerElements = document.querySelectorAll('.answer-option');
    answerElements.forEach((element, index) => {
        if (index === currentlySelectedAnswer) {
            element.classList.add('keyboard-highlighted');
        } else {
            element.classList.remove('keyboard-highlighted');
        }
    });
}