// Quiz Engine Module
// Handles quiz logic, questions, and user interactions

function initializeQuiz() {
    const container = document.getElementById('quiz-selection');
    if (container) {
        container.innerHTML = `
            <div class="quiz-selection-container">
                <h2>Choose Your Quiz Experience</h2>
                <p style="color: #666; margin-bottom: 30px;">
                    Each quiz uses the same personality model, but longer quizzes provide higher accuracy.
                </p>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="startQuiz('quick')">
                        <div class="quiz-icon">⚡</div>
                        <h3>Quick Quiz</h3>
                        <p class="quiz-stats">15 questions • ~4 minutes</p>
                        <p class="quiz-description">Fast personality snapshot for busy schedules</p>
                    </div>
                    <div class="quiz-option recommended" onclick="startQuiz('standard')">
                        <div class="quiz-icon">🎯</div>
                        <h3>Standard Test</h3>
                        <p class="quiz-stats">25 questions • ~6 minutes</p>
                        <p class="quiz-description">Balanced accuracy with reasonable time commitment</p>
                        <div class="recommended-badge">Recommended</div>
                    </div>
                    <div class="quiz-option" onclick="startQuiz('indepth')">
                        <div class="quiz-icon">🔬</div>
                        <h3>In-Depth Investigation</h3>
                        <p class="quiz-stats">40 questions • ~12 minutes</p>
                        <p class="quiz-description">Comprehensive profiling with maximum accuracy</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function startQuiz(mode) {
    selectedQuizMode = mode;
    const questionCount = quizModes[mode].questionCount;
    
    // Select and shuffle questions
    const shuffledQuestions = shuffleArray([...allQuizQuestions]);
    currentQuizQuestions = shuffledQuestions.slice(0, questionCount);
    
    // Reset quiz state
    currentQuestion = 0;
    quizAnswers = {};
    
    // Show quiz content
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    
    // Display first question
    displayQuestion();
    updateProgress();
    updateNavigationButtons();
}

function displayQuestion() {
    const container = document.getElementById('quiz-container');
    const question = currentQuizQuestions[currentQuestion];
    
    // Create shuffled answers with original indices preserved
    if (!question.shuffledAnswers) {
        question.shuffledAnswers = question.answers.map((answer, originalIndex) => ({
            ...answer,
            originalIndex: originalIndex
        }));
        question.shuffledAnswers = shuffleArray(question.shuffledAnswers);
    }
    
    let html = `
        <div class="quiz-question">
            <div class="question-number">Question ${currentQuestion + 1} of ${currentQuizQuestions.length} - ${question.category}</div>
            <div class="question-text">${question.question}</div>
            <div class="answer-options">
    `;

    question.shuffledAnswers.forEach((answer, displayIndex) => {
        const originalIndex = answer.originalIndex;
        const answerId = `q${question.id}_a${originalIndex}`;
        const isSelected = quizAnswers[question.id]?.primary === originalIndex;
        const isSecondary = quizAnswers[question.id]?.secondary === originalIndex;
        
        let badge = '';
        if (isSelected) {
            badge = '<div class="selection-badge primary">1</div>';
        } else if (isSecondary) {
            badge = '<div class="selection-badge secondary">2</div>';
        }
        
        html += `
            <div class="answer-option ${isSelected ? 'selected' : ''} ${isSecondary ? 'selected-secondary' : ''}" 
                 onclick="selectAnswer(${question.id}, ${originalIndex})"
                 data-question-id="${question.id}"
                 data-answer-index="${originalIndex}">
                ${badge}
                <span>${answer.text}</span>
            </div>
        `;
    });

    html += `
            </div>
            <div style="margin-top: 15px; font-size: 0.9rem; color: #666;">
                💡 Select your top TWO answers: <span style="color: #5a67d8; font-weight: bold;">①Primary</span> (most like you) + <span style="color: #a0aec0; font-weight: bold;">②Secondary</span> (somewhat like you)
            </div>
        </div>
    `;

    container.innerHTML = html;
    
    // Only reset keyboard navigation to first answer when moving to a new question
    // Keep current position when refreshing the same question
    const shouldResetPosition = !container.dataset.lastQuestionId || 
                              container.dataset.lastQuestionId !== question.id.toString();
    
    if (shouldResetPosition) {
        currentlySelectedAnswer = 0;
    }
    
    container.dataset.lastQuestionId = question.id;
    updateAnswerHighlight();
}

function selectAnswer(questionId, answerIndex) {
    if (!quizAnswers[questionId]) {
        quizAnswers[questionId] = {};
    }

    if (quizAnswers[questionId].primary === answerIndex) {
        // Deselect primary
        delete quizAnswers[questionId].primary;
        if (quizAnswers[questionId].secondary === undefined) {
            delete quizAnswers[questionId];
        }
    } else if (quizAnswers[questionId].secondary === answerIndex) {
        // Deselect secondary
        delete quizAnswers[questionId].secondary;
        if (quizAnswers[questionId].primary === undefined) {
            delete quizAnswers[questionId];
        }
    } else if (quizAnswers[questionId].primary === undefined) {
        // Set as primary
        quizAnswers[questionId].primary = answerIndex;
    } else if (quizAnswers[questionId].secondary === undefined) {
        // Set as secondary
        quizAnswers[questionId].secondary = answerIndex;
    } else {
        // Replace secondary
        quizAnswers[questionId].secondary = answerIndex;
    }

    displayQuestion();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestion < currentQuizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
        updateNavigationButtons();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
        updateNavigationButtons();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / currentQuizQuestions.length) * 100;
    document.querySelector('.progress-fill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestion + 1} of ${currentQuizQuestions.length}`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    const keepGoingBtn = document.getElementById('keepGoingBtn');

    prevBtn.disabled = currentQuestion === 0;
    
    const hasAnswer = quizAnswers[currentQuizQuestions[currentQuestion].id]?.primary !== undefined;
    
    if (currentQuestion === currentQuizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = hasAnswer ? 'inline-block' : 'none';
        
        // Show "Keep Going" button if we can extend the quiz
        if (hasAnswer && canExtendQuiz()) {
            keepGoingBtn.style.display = 'inline-block';
            const extensionText = getExtensionText();
            keepGoingBtn.textContent = extensionText;
        } else {
            keepGoingBtn.style.display = 'none';
        }
    } else {
        nextBtn.style.display = 'inline-block';
        nextBtn.disabled = !hasAnswer;
        finishBtn.style.display = 'none';
        keepGoingBtn.style.display = 'none';
    }
}

function canExtendQuiz() {
    const currentLength = currentQuizQuestions.length;
    const maxQuestions = allQuizQuestions.length;
    
    // Can extend if we're at 15 questions (quick->standard) or 25 questions (standard->indepth)
    return (currentLength === 15 && maxQuestions >= 25) || 
           (currentLength === 25 && maxQuestions >= 40);
}

function getExtensionText() {
    const currentLength = currentQuizQuestions.length;
    if (currentLength === 15) {
        return "Keep Going (10 more)";
    } else if (currentLength === 25) {
        return "Keep Going (15 more)";
    }
    return "Keep Going";
}

function keepGoing() {
    const currentLength = currentQuizQuestions.length;
    let newLength;
    
    if (currentLength === 15) {
        // Extend from quick (15) to standard (25)
        newLength = 25;
        selectedQuizMode = 'standard';
    } else if (currentLength === 25) {
        // Extend from standard (25) to indepth (40)
        newLength = 40;
        selectedQuizMode = 'indepth';
    } else {
        return; // Can't extend further
    }
    
    // Get additional questions from the full set
    const shuffledQuestions = shuffleArray([...allQuizQuestions]);
    const usedQuestionIds = new Set(currentQuizQuestions.map(q => q.id));
    const additionalQuestions = shuffledQuestions.filter(q => !usedQuestionIds.has(q.id));
    
    // Add the additional questions needed
    const questionsToAdd = newLength - currentLength;
    currentQuizQuestions.push(...additionalQuestions.slice(0, questionsToAdd));
    
    // Continue to next question
    nextQuestion();
}

function finishQuiz() {
    const scores = calculateScores();
    const sortedMarks = getTopPunctuationMarks(scores);
    const profile = generatePunctuationProfile(sortedMarks);
    
    // Store results globally for results page
    window.quizResults = {
        scores: scores,
        topMarks: sortedMarks,
        profile: profile
    };
    
    displayResults();
    showSection('results');
    
    // Show results button in navigation
    document.getElementById('resultsBtn').style.display = 'inline-block';
}

function retakeQuiz() {
    // Reset quiz state
    currentQuestion = 0;
    quizAnswers = {};
    
    // Show quiz selection
    document.getElementById('quiz-selection').style.display = 'block';
    document.getElementById('quiz-content').style.display = 'none';
    
    showSection('quiz');
}