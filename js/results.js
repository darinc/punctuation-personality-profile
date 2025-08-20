// Results and Sharing Module
// Handles results display, sharing, and test mode functionality

function displayResults() {
    const results = window.quizResults;
    const profileDisplay = document.getElementById('profileDisplay');
    const profileDescription = document.getElementById('profileDescription');

    // Display the punctuation profile
    profileDisplay.textContent = results.profile;

    // Generate personality description
    let description = generatePersonalityDescription(results.topMarks);
    
    // Add confidence indicator
    const confidence = quizModes[selectedQuizMode].confidenceLevel;
    const quizInfo = `<div style="margin-bottom: 20px; padding: 15px; background: #f8f9ff; border-radius: 8px; border-left: 4px solid #5a67d8;">
        <strong>Quiz Results:</strong> ${quizModes[selectedQuizMode].name} • ${confidence} Confidence Level<br>
        <small style="color: #666;">Based on ${currentQuizQuestions.length} questions across 6 personality dimensions</small>
    </div>`;
    
    // Check if we're in test mode and add score details
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get('test');
    
    let testModeScores = '';
    if (isTestMode) {
        testModeScores = generateTestModeScores(results.scores, results.topMarks);
    }
    
    profileDescription.innerHTML = quizInfo + description + testModeScores;

    // Generate shareable URL
    generateShareableUrl(results.profile);
}

function generateTestModeScores(scores, topMarks) {
    // Show all scores in test mode for debugging
    const allScores = Object.keys(scores)
        .map(punct => ({
            punctuation: punct,
            score: scores[punct]
        }))
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0);

    const scoresHtml = allScores.map((item, index) => {
        const species = findSpeciesInfo(item.punctuation);
        const isInTopResults = topMarks.some(top => top.punctuation === item.punctuation);
        const style = isInTopResults ? 'font-weight: bold; color: #5a67d8;' : 'color: #666;';
        
        return `<div style="${style}">
            ${item.punctuation} ${species ? species.name : 'Unknown'}: ${item.score.toFixed(1)}%
        </div>`;
    }).join('');

    return `
        <div style="margin-top: 30px; padding: 20px; background: #f0f4ff; border-radius: 8px; border-left: 4px solid #667eea;">
            <h3 style="color: #5a67d8; margin-bottom: 15px;">🔍 Test Mode - All Scores</h3>
            <div style="font-family: monospace; font-size: 0.9rem; line-height: 1.4;">
                ${scoresHtml}
            </div>
            <small style="color: #666; margin-top: 10px; display: block;">
                Bold blue items appear in your top results above. Scores show percentage of optimal performance.
            </small>
        </div>
    `;
}

function generatePersonalityDescription(topMarks) {
    if (topMarks.length === 0) {
        return "Your punctuation personality is unique and balanced across many traits!";
    }

    const traitItems = topMarks.map((mark, index) => {
        const species = findSpeciesInfo(mark.punctuation);
        if (!species) return '';

        return `
            <div class="trait-item">
                <div class="trait-symbol">${mark.punctuation}</div>
                <div class="trait-name">${species.name}</div>
                <div class="trait-description">${species.description.toLowerCase()}</div>
            </div>
        `;
    }).join('');

    const strengthIndicator = `
        <div class="strength-indicator">
            <div class="strength-label top">Strong</div>
            <div class="strength-cone"></div>
            <div class="strength-label bottom">Light</div>
        </div>
    `;

    return `<div class="personality-traits">${strengthIndicator}${traitItems}</div>`;
}

function generateShareableUrl(profile) {
    const baseUrl = window.location.href.split('?')[0];
    const shareUrl = `${baseUrl}?profile=${encodeURIComponent(profile)}`;
    document.getElementById('shareUrl').value = shareUrl;
}

function displaySharedResults(profile) {
    const profileDisplay = document.getElementById('profileDisplay');
    const profileDescription = document.getElementById('profileDescription');
    
    profileDisplay.textContent = profile;
    
    // Generate description based on profile string
    // Handle ellipsis properly by parsing the profile more carefully
    const punctuationArray = parseProfileString(profile);
    const mockTopMarks = punctuationArray.slice(0, 8).map((punct, index) => ({
        punctuation: punct,
        score: 10 - index // Mock decreasing scores
    }));
    
    const description = generatePersonalityDescription(mockTopMarks);
    
    // Check if we're in test mode for shared results too
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get('test');
    
    let testModeNote = '';
    if (isTestMode) {
        testModeNote = `
            <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                <h4 style="color: #856404; margin-bottom: 10px;">🔍 Test Mode Note</h4>
                <p style="color: #856404; margin: 0;">
                    Detailed scores are only available when taking the quiz directly. 
                    This shared result shows the personality profile only.
                </p>
            </div>
        `;
    }
    
    profileDescription.innerHTML = description + testModeNote;
    
    // Set share URL to current URL
    document.getElementById('shareUrl').value = window.location.href;
}

function parseProfileString(profile) {
    const result = [];
    let i = 0;
    
    while (i < profile.length) {
        if (i < profile.length - 2 && profile.substr(i, 3) === '…') {
            result.push('…');
            i += 3;
        } else if (i < profile.length - 1 && ['()', '[]', '{}', '""'].includes(profile.substr(i, 2))) {
            result.push(profile.substr(i, 2));
            i += 2;
        } else {
            result.push(profile[i]);
            i++;
        }
    }
    
    return result;
}