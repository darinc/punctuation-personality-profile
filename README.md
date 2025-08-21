# Punctuation Personality Profile

A web-based personality quiz that matches users with punctuation marks based on their responses to situational questions. Discover which punctuation marks reflect your unique personality traits and communication style.

## Features

### 🎯 Interactive Quiz System
- **Multiple Quiz Modes**: Quick (15 questions), Standard (25 questions), Deep (40 questions)
- **Adaptive Length**: "Keep Going" option to extend shorter quizzes
- **Smart Scoring**: Engagement-based normalization ensures fair results
- **Keyboard Navigation**: Full vim-style and arrow key support

### 📊 Personality Analysis
- **Punctuation Taxonomy**: Organized classification of punctuation marks by genus and personality traits
- **Visual Results**: Cone-shaped strength indicators and columnar trait display
- **Shareable Profiles**: Generate unique URLs to share your punctuation personality

### 🔧 Admin Tools
- **Scoring Analysis**: Browser-based analysis of punctuation mark distribution and scoring balance
- **CSV Export**: Export scoring data for external analysis
- **Question Breakdown**: Detailed view of individual question scoring patterns
- **Representation Tracking**: Identify over/under-represented punctuation marks

### 🧪 Testing & Development
- **Test Mode**: `?test=random` for automated testing with random answers
- **Debug Features**: Score display in test mode for development validation
- **Modular Architecture**: Clean separation of concerns across JavaScript modules

## Project Structure

```
punctuation-ecosystem/
├── index.html              # Main application entry point
├── styles.css              # Complete stylesheet with responsive design
├── js/
│   ├── app.js              # Main application logic and initialization
│   ├── admin.js            # Admin mode functionality
│   ├── keyboard-navigation.js  # Comprehensive keyboard support
│   ├── quiz-data.js        # Quiz mode configurations
│   ├── quiz-engine.js      # Core quiz logic and state management
│   ├── quiz-questions.js   # Question data and taxonomy
│   ├── results.js          # Results calculation and display
│   ├── scoring.js          # Scoring algorithms
│   └── test-mode.js        # Testing utilities
└── analyze_punctuation_scores.py  # Legacy Python analysis script
```

## Usage

### Basic Quiz Taking
1. Open `index.html` in a web browser
2. Click "Take The Test" to start
3. Choose your preferred quiz mode
4. Answer questions using mouse clicks or keyboard navigation
5. View your punctuation personality profile

### URL Parameters
- `?profile=...` - View a specific personality profile
- `?test=random` - Enable test mode with random answers
- `?test=10` - Enable test mode with n number of random answers
- `?admin` - Access admin analysis tools

### Keyboard Navigation
- **Quiz Selection**: `j/k` or arrow keys to navigate, `Enter` to select
- **Questions**: `j/k/h/l` or arrow keys to navigate, `Space/Enter/x` to select or deselect

### Admin Mode
Access via `?admin` URL parameter to analyze:
- Total scores and question distribution by punctuation mark
- Representation balance (over/under-represented marks)
- Individual question scoring breakdowns
- Export data as CSV for external analysis

## Technical Details

### Scoring Algorithm
The quiz uses engagement-based normalization to ensure fair scoring regardless of how many questions a user answers. Scores are calculated based on:

1. **Primary selections** (higher weight)
2. **Secondary selections** (lower weight) 
3. **Dynamic maximum calculation** based on actual user engagement
4. **Normalization** to 100-point scale

### Responsive Design
- Mobile-first CSS with responsive breakpoints
- Touch-friendly interface elements
- Accessible keyboard navigation
- Clean typography with proper contrast ratios

### Browser Compatibility
- Modern browsers with ES6+ support
- No external dependencies
- Graceful degradation for older browsers

## Development

### Local Development
Simply open `index.html` in a web browser. No build process or server required.

### Testing
Use test mode (`?test=random`) to validate scoring algorithms and UI behavior with randomized quiz responses.

### Extending the Quiz
1. Add new questions to `js/quiz-questions.js`
2. Update scoring in individual question objects
3. Modify quiz modes in `js/quiz-data.js` if needed
4. Run admin analysis to validate scoring balance

## License

Made with ❤️ (not science)