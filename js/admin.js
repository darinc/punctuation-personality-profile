// Admin Mode Module
// Provides analysis tools for punctuation scoring data

function checkAdminMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    
    if (adminParam !== null) {
        showAdminMode();
    }
}

function showAdminMode() {
    // Create admin section if it doesn't exist
    if (!document.getElementById('admin')) {
        createAdminSection();
    }
    
    // Show admin section and add to navigation
    showSection('admin');
    
    // Add admin button to navigation if not already there
    const adminBtn = document.getElementById('adminBtn');
    if (!adminBtn) {
        const nav = document.querySelector('.navigation');
        const adminButton = document.createElement('button');
        adminButton.className = 'nav-button';
        adminButton.id = 'adminBtn';
        adminButton.textContent = '🔧 Admin';
        adminButton.onclick = () => showSection('admin');
        nav.appendChild(adminButton);
    }
    
    // Auto-run analysis
    runPunctuationAnalysis();
}

function createAdminSection() {
    const container = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    
    const adminSection = document.createElement('section');
    adminSection.id = 'admin';
    adminSection.className = 'section';
    adminSection.innerHTML = `
        <div class="admin-container">
            <h2>🔧 Admin Mode - Punctuation Scoring Analysis</h2>
            <p style="color: #666; margin-bottom: 30px;">
                This admin panel analyzes the scoring balance and representation of punctuation marks across all quiz questions.
            </p>
            
            <div class="admin-controls">
                <button class="btn" onclick="runPunctuationAnalysis()">📊 Run Analysis</button>
                <button class="btn" onclick="exportAnalysisCSV()" id="exportBtn" style="background: #48bb78; display: none;">📁 Export CSV</button>
                <button class="btn" onclick="showQuestionBreakdown()" id="breakdownBtn" style="background: #667eea; display: none;">📋 Question Breakdown</button>
            </div>
            
            <div id="analysis-results" class="analysis-results">
                <!-- Analysis results will be populated here -->
            </div>
            
            <div id="question-breakdown" class="question-breakdown" style="display: none;">
                <!-- Question breakdown will be populated here -->
            </div>
        </div>
    `;
    
    container.insertBefore(adminSection, footer);
}

function runPunctuationAnalysis() {
    const punctuationTotals = {};
    const punctuationCounts = {};
    const questionDetails = [];
    
    // Initialize all possible punctuation marks
    const allPunctuation = [".", "!", "?", ",", ";", ":", "-", "|", "/", "\\", "()", "[]", "{}", "\"\"", "'", "_", "^", "`", "+", "=", "<", ">", "*", "%", "#", "&", "@", "~", "…"];
    allPunctuation.forEach(punct => {
        punctuationTotals[punct] = 0;
        punctuationCounts[punct] = 0;
    });
    
    let totalAnswers = 0;
    
    // Analyze all quiz questions
    allQuizQuestions.forEach(question => {
        const questionAnalysis = {
            id: question.id,
            category: question.category,
            question: question.question,
            answers: [],
            punctuationUsed: new Set()
        };
        
        question.answers.forEach((answer, answerIndex) => {
            if (answer.scores) {
                totalAnswers++;
                const answerAnalysis = {
                    index: answerIndex,
                    text: answer.text,
                    scores: answer.scores,
                    totalScore: 0
                };
                
                Object.entries(answer.scores).forEach(([punct, score]) => {
                    punctuationTotals[punct] += score;
                    punctuationCounts[punct]++;
                    answerAnalysis.totalScore += score;
                    questionAnalysis.punctuationUsed.add(punct);
                });
                
                questionAnalysis.answers.push(answerAnalysis);
            }
        });
        
        questionAnalysis.punctuationUsed = Array.from(questionAnalysis.punctuationUsed);
        questionDetails.push(questionAnalysis);
    });
    
    // Store results globally for export
    window.adminAnalysisResults = {
        totals: punctuationTotals,
        counts: punctuationCounts,
        questionDetails: questionDetails,
        totalAnswers: totalAnswers
    };
    
    displayAnalysisResults(punctuationTotals, punctuationCounts, totalAnswers);
    
    // Show export and breakdown buttons
    document.getElementById('exportBtn').style.display = 'inline-block';
    document.getElementById('breakdownBtn').style.display = 'inline-block';
}

function displayAnalysisResults(totals, counts, totalAnswers) {
    const resultsContainer = document.getElementById('analysis-results');
    
    // Sort by total possible score (descending)
    const sortedByTotal = Object.entries(totals)
        .sort(([,a], [,b]) => b - a)
        .filter(([punct, total]) => total > 0);
    
    // Calculate statistics
    const maxPossible = Math.max(...Object.values(totals));
    const minPossible = Math.min(...Object.values(totals).filter(v => v > 0));
    const avgPossible = Object.values(totals).reduce((a, b) => a + b, 0) / Object.values(totals).filter(v => v > 0).length;
    
    // Low and high representation
    const lowRep = Object.entries(counts).filter(([punct, count]) => count > 0 && count <= 5).sort(([,a], [,b]) => a - b);
    const highRep = Object.entries(counts).filter(([punct, count]) => count >= 15).sort(([,a], [,b]) => b - a);
    
    const html = `
        <div class="analysis-summary">
            <h3>📊 Analysis Summary</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${allQuizQuestions.length}</div>
                    <div class="stat-label">Total Questions</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${totalAnswers}</div>
                    <div class="stat-label">Answer Options</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${Object.values(totals).filter(v => v > 0).length}</div>
                    <div class="stat-label">Punctuation Used</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${avgPossible.toFixed(1)}</div>
                    <div class="stat-label">Avg Total Score</div>
                </div>
            </div>
        </div>
        
        <div class="scoring-table">
            <h3>🎯 Punctuation Scoring Analysis</h3>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Punctuation</th>
                        <th>Name</th>
                        <th>Total Score</th>
                        <th>Questions</th>
                        <th>Avg Score</th>
                        <th>Representation</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedByTotal.map(([punct, totalScore]) => {
                        const count = counts[punct];
                        const avg = count > 0 ? (totalScore / count).toFixed(2) : '0.00';
                        const species = findSpeciesInfo(punct);
                        const name = species ? species.name : 'Unknown';
                        
                        let repClass = '';
                        let repText = 'Normal';
                        if (count <= 5) {
                            repClass = 'low-rep';
                            repText = 'Low';
                        } else if (count >= 15) {
                            repClass = 'high-rep';
                            repText = 'High';
                        }
                        
                        return `
                            <tr>
                                <td class="punct-symbol">${punct}</td>
                                <td>${name}</td>
                                <td class="score-cell">${totalScore}</td>
                                <td class="count-cell">${count}</td>
                                <td class="avg-cell">${avg}</td>
                                <td class="rep-cell ${repClass}">${repText}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="representation-analysis">
            <div class="rep-section">
                <h4>⚠️ Low Representation (≤5 questions)</h4>
                <div class="rep-list">
                    ${lowRep.length > 0 ? lowRep.map(([punct, count]) => {
                        const species = findSpeciesInfo(punct);
                        const name = species ? species.name : 'Unknown';
                        return `<span class="rep-item low">${punct} ${name}: ${count}</span>`;
                    }).join('') : '<em>None</em>'}
                </div>
            </div>
            
            <div class="rep-section">
                <h4>🔥 High Representation (≥15 questions)</h4>
                <div class="rep-list">
                    ${highRep.length > 0 ? highRep.map(([punct, count]) => {
                        const species = findSpeciesInfo(punct);
                        const name = species ? species.name : 'Unknown';
                        return `<span class="rep-item high">${punct} ${name}: ${count}</span>`;
                    }).join('') : '<em>None</em>'}
                </div>
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = html;
}

function showQuestionBreakdown() {
    const breakdownContainer = document.getElementById('question-breakdown');
    const { questionDetails } = window.adminAnalysisResults;
    
    if (!questionDetails) {
        alert('Please run analysis first');
        return;
    }
    
    const html = `
        <h3>📋 Question-by-Question Breakdown</h3>
        <div class="question-list">
            ${questionDetails.map(question => `
                <div class="question-item">
                    <div class="question-header">
                        <strong>Q${question.id}: ${question.category}</strong>
                        <span class="punct-used">Uses: ${question.punctuationUsed.join(', ')}</span>
                    </div>
                    <div class="question-text">${question.question}</div>
                    <div class="answers-list">
                        ${question.answers.map(answer => `
                            <div class="answer-item">
                                <div class="answer-text">"${answer.text}"</div>
                                <div class="answer-scores">
                                    ${Object.entries(answer.scores).map(([punct, score]) => 
                                        `<span class="score-badge">${punct}: ${score}</span>`
                                    ).join('')}
                                    <span class="total-score">Total: ${answer.totalScore}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    breakdownContainer.innerHTML = html;
    breakdownContainer.style.display = 'block';
    
    // Scroll to breakdown
    breakdownContainer.scrollIntoView({ behavior: 'smooth' });
}

function exportAnalysisCSV() {
    const { totals, counts } = window.adminAnalysisResults;
    
    if (!totals || !counts) {
        alert('Please run analysis first');
        return;
    }
    
    // Create CSV content
    const headers = ['Punctuation', 'Name', 'Total_Score', 'Question_Count', 'Average_Score'];
    const rows = [headers];
    
    Object.keys(totals).forEach(punct => {
        if (totals[punct] > 0) {
            const species = findSpeciesInfo(punct);
            const name = species ? species.name : 'Unknown';
            const totalScore = totals[punct];
            const count = counts[punct];
            const avg = count > 0 ? (totalScore / count).toFixed(2) : '0.00';
            
            rows.push([punct, name, totalScore, count, avg]);
        }
    });
    
    // Convert to CSV string
    const csvContent = rows.map(row => 
        row.map(cell => `"${cell}"`).join(',')
    ).join('\n');
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'punctuation_analysis.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    console.log('CSV exported successfully');
}