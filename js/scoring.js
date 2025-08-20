// Scoring Module
// Handles personality calculation and results generation

function calculateMaxPossibleScores() {
    const maxScores = {};
    
    // Initialize all punctuation marks with 0 max scores
    const allPunctuation = [".", "!", "?", ",", ";", ":", "-", "|", "/", "\\", "()", "[]", "{}", "\"", "'", "_", "^", "`", "+", "=", "<", ">", "*", "%", "#", "&", "@", "~", "…"];
    allPunctuation.forEach(punct => maxScores[punct] = 0);

    // Calculate maximum possible score for each punctuation mark in current quiz
    // Based on the user's actual engagement level per question
    currentQuizQuestions.forEach(question => {
        const questionId = question.id;
        const userAnswers = quizAnswers[questionId];
        
        // Determine how many answers the user actually selected for this question
        const hasSecondary = userAnswers && userAnswers.secondary !== undefined;
        
        // For each punctuation mark, find the optimal score for this question
        allPunctuation.forEach(punct => {
            // Collect all point values for this punctuation mark in this question
            const pointValues = [];
            question.answers.forEach(answer => {
                if (answer.scores[punct]) {
                    pointValues.push(answer.scores[punct]);
                }
            });
            
            // Calculate optimal maximum based on user's engagement level
            if (pointValues.length === 0) {
                // No points available for this punctuation mark in this question
                maxScores[punct] += 0;
            } else if (!hasSecondary || pointValues.length === 1) {
                // User only selected one answer OR only one answer offers points
                // Max is just the highest single value
                maxScores[punct] += Math.max(...pointValues);
            } else {
                // User selected two answers AND multiple answers offer points
                // Max is optimal combination of primary + secondary
                pointValues.sort((a, b) => b - a); // Sort descending
                const highest = pointValues[0];
                const secondHighest = pointValues[1];
                maxScores[punct] += highest + (secondHighest * 0.5);
            }
        });
    });

    return maxScores;
}

function calculateScores() {
    const rawScores = {};
    const maxPossibleScores = calculateMaxPossibleScores();
    
    // Initialize all punctuation marks with 0 scores
    const allPunctuation = [".", "!", "?", ",", ";", ":", "-", "|", "/", "\\", "()", "[]", "{}", "\"", "'", "_", "^", "`", "+", "=", "<", ">", "*", "%", "#", "&", "@", "~", "…"];
    allPunctuation.forEach(punct => rawScores[punct] = 0);

    // Calculate raw scores based on answers
    Object.keys(quizAnswers).forEach(questionId => {
        const questionNum = parseInt(questionId);
        const question = currentQuizQuestions.find(q => q.id === questionNum);
        const answers = quizAnswers[questionId];

        // Primary answer gets full points
        if (answers.primary !== undefined) {
            const primaryAnswer = question.answers[answers.primary];
            Object.keys(primaryAnswer.scores).forEach(punct => {
                rawScores[punct] += primaryAnswer.scores[punct];
            });
        }

        // Secondary answer gets half points
        if (answers.secondary !== undefined) {
            const secondaryAnswer = question.answers[answers.secondary];
            Object.keys(secondaryAnswer.scores).forEach(punct => {
                rawScores[punct] += secondaryAnswer.scores[punct] * 0.5;
            });
        }
    });

    // Calculate weighted scores (percentage of maximum possible)
    const weightedScores = {};
    allPunctuation.forEach(punct => {
        if (maxPossibleScores[punct] > 0) {
            weightedScores[punct] = (rawScores[punct] / maxPossibleScores[punct]) * 100;
        } else {
            weightedScores[punct] = 0;
        }
    });

    return weightedScores;
}

function getTopPunctuationMarks(scores, count = 6) {
    // Convert scores object to array and sort by score descending
    const sortedScores = Object.keys(scores)
        .map(punct => ({
            punctuation: punct,
            score: scores[punct]
        }))
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0);

    return sortedScores.slice(0, count);
}

function generatePunctuationProfile(topMarks) {
    // Create profile string from top marks
    let profile = '';
    
    topMarks.forEach((mark, index) => {
        if (index > 0) {
            if (mark.punctuation === '…') {
                profile += '…';
            } else {
                profile += mark.punctuation;
            }
        } else {
            profile += mark.punctuation;
        }
    });
    
    return profile;
}