// Quiz Data and Taxonomy Module
// Contains all static data for the punctuation personality quiz

// Taxonomy data structure
const taxonomyData = {
    "Terminator": {
        description: "Sentence enders that bring closure and finality",
        species: [
            {symbol: ".", name: "Period", description: "Stable, gravitational, attracts order"},
            {symbol: "!", name: "Exclamation", description: "High energy, repels others, volatile"},
            {symbol: "?", name: "Question", description: "Curves toward unknowns, seeks pairs"},
        ]
    },
    "Separator": {
        description: "Dividers and spacers that organize and structure",
        species: [
            {symbol: ",", name: "Comma", description: "Pauses, creates space, gentle separator"},
            {symbol: ";", name: "Semicolon", description: "Bridge-builder, connects disparate groups"},
            {symbol: ":", name: "Colon", description: "Binary splitter, creates symmetry"},
            {symbol: "-", name: "Dash", description: "Linear mover, creates connections"},
            {symbol: "|", name: "Pipe", description: "Divider, creates clear boundaries"},
            {symbol: "/", name: "Slash", description: "Path-maker, shows alternative routes"},
            {symbol: "\\", name: "Backslash", description: "Reverse navigator, moves against the flow"}
        ]
    },
    "Encloser": {
        description: "Boundary makers that contain and protect",
        species: [
            {symbol: "()", name: "Parentheses", description: "Protective, encircles others"},
            {symbol: "[]", name: "Brackets", description: "Rigid boundary, territorial"},
            {symbol: "{}", name: "Braces", description: "Flexible containers, expand to fit contents"},
            {symbol: "\"\"", name: "Quotes", description: "Mirror-seeker, always wants a partner"}
        ]
    },
    "Modifier": {
        description: "Attachment and possession markers",
        species: [
            {symbol: "'", name: "Apostrophe", description: "Possessive, claims nearby space"},
            {symbol: "_", name: "Underscore", description: "Foundation, supports from below"},
            {symbol: "^", name: "Caret", description: "Ascending, always moves upward"},
            {symbol: "`", name: "Backtick", description: "Whisper-maker, speaks in coded language"}
        ]
    },
    "Operator": {
        description: "Mathematical and logical processors",
        species: [
            {symbol: "+", name: "Plus", description: "Accumulator, draws elements toward center"},
            {symbol: "=", name: "Equals", description: "Balance-keeper, enforces equilibrium"},
            {symbol: "<", name: "Less-than", description: "Directional pointer, shows hierarchy"},
            {symbol: ">", name: "Greater-than", description: "Dominance marker, establishes pecking order"},
            {symbol: "*", name: "Asterisk", description: "Radiant, influences all neighbors"},
            {symbol: "%", name: "Percent", description: "Proportional divider, measures territories"},
            {symbol: "#", name: "Hash", description: "Grid-maker, enforces structure"}
        ]
    },
    "Connector": {
        description: "Social linkers that bring elements together",
        species: [
            {symbol: "&", name: "Ampersand", description: "Social connector, brings others together"},
            {symbol: "@", name: "At-symbol", description: "Vortex creator, spins others around it"},
            {symbol: "~", name: "Tilde", description: "Wave-maker, oscillates through space"}
        ]
    },
    "Indicator": {
        description: "Suggestion and continuation markers",
        species: [
            {symbol: "…", name: "Ellipsis", description: "Dreamer, fades in and out of existence"}
        ]
    }
};

// Quiz mode configurations
const quizModes = {
    'quick': {
        name: 'Quick Quiz',
        questionCount: 15,
        confidenceLevel: 'Moderate'
    },
    'standard': {
        name: 'Standard Quiz',
        questionCount: 25,
        confidenceLevel: 'High'
    },
    'indepth': {
        name: 'In-Depth Quiz',
        questionCount: 40,
        confidenceLevel: 'Very High'
    }
};

// Helper function to find species information by punctuation symbol
function findSpeciesInfo(punctuation) {
    for (const genusName in taxonomyData) {
        const species = taxonomyData[genusName].species.find(s => s.symbol === punctuation);
        if (species) return species;
    }
    return null;
}