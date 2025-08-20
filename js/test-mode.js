// Test Mode and URL Handling Module
// Handles test mode functionality and URL parameter processing

function checkUrlForResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const profileParam = urlParams.get('profile');
    
    if (profileParam) {
        const profile = decodeURIComponent(profileParam);
        displaySharedResults(profile);
        showSection('results');
        document.getElementById('resultsBtn').style.display = 'inline-block';
    }
}

function checkTestMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const testParam = urlParams.get('test');
    
    if (testParam) {
        const numQuestions = parseInt(testParam);
        if (!isNaN(numQuestions) && numQuestions > 0) {
            // Determine which quiz mode based on number of questions
            let mode = 'standard';
            if (numQuestions <= 15) {
                mode = 'quick';
            } else if (numQuestions <= 25) {
                mode = 'standard';
            } else {
                mode = 'indepth';
            }
            
            // Start the quiz and fill random answers
            setTimeout(() => {
                showSection('quiz');
                startQuiz(mode);
                setTimeout(() => {
                    fillRandomAnswers(numQuestions);
                }, 100);
            }, 500);
        }
    }
}

function fillRandomAnswers(numQuestions) {
    const maxQuestions = Math.min(numQuestions, currentQuizQuestions.length);
    
    for (let i = 0; i < maxQuestions; i++) {
        const question = currentQuizQuestions[i];
        const numAnswers = question.answers.length;
        
        // Pick random primary answer
        const primaryIndex = Math.floor(Math.random() * numAnswers);
        
        // 50% chance to also pick a secondary answer
        let secondaryIndex = undefined;
        if (Math.random() > 0.5) {
            do {
                secondaryIndex = Math.floor(Math.random() * numAnswers);
            } while (secondaryIndex === primaryIndex);
        }
        
        // Store the answers
        quizAnswers[question.id] = {
            primary: primaryIndex,
            secondary: secondaryIndex
        };
    }
    
    // Update display to show we've filled answers up to the specified number
    currentQuestion = Math.min(maxQuestions - 1, currentQuizQuestions.length - 1);
    displayQuestion();
    updateProgress();
    updateNavigationButtons();
    
    console.log(`Test mode: Filled ${maxQuestions} random answers`);
}