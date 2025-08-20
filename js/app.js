// Main Application Module
// Global state management and application initialization

// Global variables
let currentView = 'ecosystem';
let currentQuestion = 0;
let quizAnswers = {};
let quizData = [];
let selectedQuizMode = 'standard';
let currentQuizQuestions = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTaxonomy();
    initializeQuiz();
    checkUrlForResults();
    checkTestMode();
    setupKeyboardNavigation();
});

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section and activate button
    document.getElementById(sectionName).classList.add('active');
    
    // Find and activate the correct nav button
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(btn => {
        if (btn.textContent.includes('Ecosystem') && sectionName === 'ecosystem') btn.classList.add('active');
        if (btn.textContent.includes('Quiz') && sectionName === 'quiz') btn.classList.add('active');
        if (btn.textContent.includes('Results') && sectionName === 'results') btn.classList.add('active');
    });
    
    currentView = sectionName;

    // Initialize keyboard navigation for quiz selection
    if (sectionName === 'quiz' && document.getElementById('quiz-selection').style.display !== 'none') {
        currentlySelectedQuizOption = 1; // Default to Standard Quiz
        setTimeout(() => updateQuizSelectionHighlight(), 100);
    }

    // Reset quiz if switching away from it
    if (sectionName !== 'quiz' && currentQuestion > 0) {
        // Optional: Ask user if they want to save progress
    }
}

function initializeTaxonomy() {
    const container = document.getElementById('taxonomy-display');
    let html = '';
    
    Object.keys(taxonomyData).forEach(genusName => {
        const genus = taxonomyData[genusName];
        html += `
            <div class="genus-container">
                <h3 class="genus-title">${genusName}</h3>
                <p style="color: #666; margin-bottom: 20px; font-style: italic;">${genus.description}</p>
                <div style="background: #f8f9ff; padding: 20px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #5a67d8;">
                <table class="species-table">
        `;
        
        genus.species.forEach(species => {
            html += `
                <tr class="species-row">
                    <td class="species-symbol">${species.symbol}</td>
                    <td class="species-name">${species.name}</td>
                    <td class="species-description">- ${species.description}</td>
                </tr>
            `;
        });
        
        html += `</table></div></div>`;
    });
    
    container.innerHTML = html;
}

// Utility functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function copyUrl() {
    const urlInput = document.getElementById('shareUrl');
    urlInput.select();
    urlInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
}