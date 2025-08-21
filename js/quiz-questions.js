const allQuizQuestions = [
  {
    id: 1,
    category: "Morning Mood",
    question: "How do you usually greet the day?",
    answers: [
      {
        text: "With a clear plan and a coffee",
        scores: {
          ".": 4,
          ":": 3,
          ",": 2,
        },
      },
      {
        text: "Music and movement, starting with high energy",
        scores: {
          "!": 4,
          "~": 3,
          "*": 3,
        },
      },
      {
        text: "Curious about what surprises are in store",
        scores: {
          "?": 5,
          "…": 3,
        },
      },
      {
        text: "Checking messages and connecting with others",
        scores: {
          "@": 5,
          "&": 3,
          '""': 2,
        },
      },
      {
        text: "Hitting snooze, drifting in and out of dreams",
        scores: {
          "…": 4,
          _: 3,
          ",": 2,
        },
      },
      {
        text: "Making a list to get organized immediately",
        scores: {
          "#": 5,
          "=": 3,
          "|": 2,
        },
      },
    ],
  },
  {
    id: 2,
    category: "Social Style",
    question: "At a party, you are most likely to…",
    answers: [
      {
        text: "Stay deep in conversation with a trusted group",
        scores: {
          "()": 5,
          "[]": 3,
        },
      },
      {
        text: "Act as a bridge, connecting different people",
        scores: {
          ";": 5,
          "&": 3,
        },
      },
      {
        text: "Be a center of energy, drawing others in",
        scores: {
          "!": 4,
          "*": 4,
        },
      },
      {
        text: "Quietly observe from the sidelines",
        scores: {
          "…": 4,
          "`": 4,
        },
      },
      {
        text: "Avoid large parties altogether",
        scores: {
          "\\": 4,
          "[]": 3,
          _: 2,
        },
      },
    ],
  },
  {
    id: 3,
    category: "Decision Making",
    question: "When faced with a tough choice, your first instinct is to…",
    answers: [
      {
        text: "Analyze it logically with pros and cons",
        scores: {
          "=": 5,
          "%": 4,
          ":": 3,
        },
      },
      {
        text: "Ask trusted friends for their perspectives",
        scores: {
          "?": 5,
          "&": 3,
        },
      },
      {
        text: "Trust your gut and make a bold move",
        scores: {
          "!": 4,
          "'": 4,
        },
      },
      {
        text: "Wait and see how things unfold",
        scores: {
          "…": 4,
          _: 3,
        },
      },
    ],
  },
  {
    id: 4,
    category: "Work Habits",
    question: "Your workspace is usually…",
    answers: [
      {
        text: "Neat, with everything in its proper place",
        scores: {
          ".": 4,
          "#": 4,
          ",": 3,
        },
      },
      {
        text: "A creative chaos that makes sense to you",
        scores: {
          "~": 5,
          "-": 4,
          "/": 2,
        },
      },
      {
        text: "Minimal, containing only the essentials",
        scores: {
          "|": 5,
          _: 3,
          "<": 2,
        },
      },
      {
        text: "Adaptable, piled with current projects and ideas",
        scores: {
          "^": 5,
          "{}": 4,
          "+": 2,
        },
      },
    ],
  },
  {
    id: 5,
    category: "Conflict Style",
    question: "When disagreements happen, you tend to…",
    answers: [
      {
        text: "Mediate and find a middle ground for everyone",
        scores: {
          ";": 5,
          "+": 3,
          "=": 2,
        },
      },
      {
        text: "Stand firm and defend your position clearly",
        scores: {
          "|": 5,
          ">": 4,
        },
      },
      {
        text: "Defuse the tension with humor or a distraction",
        scores: {
          "~": 5,
          "()": 3,
        },
      },
      {
        text: "Ask probing questions to understand the root cause",
        scores: {
          "?": 5,
          ":": 3,
        },
      },
      {
        text: "Withdraw until things have cooled down",
        scores: {
          "…": 4,
          "\\": 4,
        },
      },
      {
        text: "Establish clear boundaries and rules of engagement",
        scores: {
          "#": 5,
          "[]": 4,
        },
      },
    ],
  },
  {
    id: 6,
    category: "Communication",
    question: "Your text messages usually…",
    answers: [
      {
        text: "Are short, clear, and to the point",
        scores: {
          ".": 4,
          "-": 3,
          "|": 3,
        },
      },
      {
        text: "Are full of excitement and energy!!!",
        scores: {
          "!": 5,
          "*": 4,
        },
      },
      {
        text: "Trail off… leaving things open-ended",
        scores: {
          "…": 5,
          "~": 3,
        },
      },
      {
        text: "Contain inside jokes or coded language",
        scores: {
          "`": 5,
          "'": 3,
          '""': 2,
        },
      },
    ],
  },
  {
    id: 7,
    category: "Energy Source",
    question: "You feel most recharged after…",
    answers: [
      {
        text: "A productive day of checking things off a list",
        scores: {
          "#": 5,
          ".": 3,
          "=": 2,
        },
      },
      {
        text: "A lively social gathering with friends",
        scores: {
          "&": 5,
          "@": 4,
        },
      },
      {
        text: "Quiet time alone to think and daydream",
        scores: {
          "…": 5,
          "()": 3,
          _: 2,
        },
      },
      {
        text: "Exploring a new place or trying a new activity",
        scores: {
          "/": 5,
          "?": 3,
          "!": 2,
        },
      },
    ],
  },
  {
    id: 8,
    category: "Abstract",
    question: "If your mind were a place, what would it be?",
    answers: [
      {
        text: "A bustling library with everything neatly cataloged",
        scores: {
          "#": 5,
          ".": 4,
          "=": 2,
        },
      },
      {
        text: "A busy workshop filled with various projects",
        scores: {
          "+": 5,
          "^": 4,
          "/": 2,
        },
      },
      {
        text: "A vast, open field with ever-changing weather",
        scores: {
          "~": 5,
          "…": 4,
          "*": 2,
        },
      },
      {
        text: "A secret garden with hidden paths and quiet corners",
        scores: {
          "()": 5,
          "`": 4,
          "{}": 2,
        },
      },
    ],
  },
  {
    id: 9,
    category: "Energy Level",
    question: "What best describes your typical vibe?",
    answers: [
      {
        text: "Grounded and steady",
        scores: {
          ".": 5,
          _: 4,
        },
      },
      {
        text: "Bubbly and radiant",
        scores: {
          "!": 4,
          "*": 4,
          "@": 2,
        },
      },
      {
        text: "Mysterious and hard to read",
        scores: {
          "…": 4,
          "`": 4,
          '""': 2,
        },
      },
      {
        text: "Flows in up-and-down waves",
        scores: {
          "~": 5,
          "^": 4,
        },
      },
    ],
  },
  {
    id: 10,
    category: "Collaboration",
    question: "In a group project, you are naturally the…",
    answers: [
      {
        text: "Organizer who creates the structure and plan",
        scores: {
          "#": 5,
          "[]": 3,
          ":": 2,
        },
      },
      {
        text: "Motivator who brings the energy and hype",
        scores: {
          "!": 5,
          "*": 4,
          "+": 2,
        },
      },
      {
        text: "Connector who makes sure everyone works well together",
        scores: {
          "&": 5,
          ";": 4,
        },
      },
      {
        text: "Quiet contributor who supports from behind the scenes",
        scores: {
          _: 5,
          "()": 4,
          "<": 2,
        },
      },
    ],
  },
  {
    id: 11,
    category: "Values",
    question: "Which of these words is most important to you?",
    answers: [
      {
        text: "Connection",
        scores: {
          "&": 5,
          "()": 3,
          ";": 2,
        },
      },
      {
        text: "Discovery",
        scores: {
          "?": 5,
          "/": 4,
          "^": 2,
        },
      },
      {
        text: "Justice",
        scores: {
          "=": 5,
          "|": 4,
          ">": 2,
        },
      },
      {
        text: "Freedom",
        scores: {
          "~": 5,
          "\\": 4,
          "-": 2,
        },
      },
      {
        text: "Stability",
        scores: {
          ".": 5,
          _: 4,
          "[]": 2,
        },
      },
    ],
  },
  {
    id: 12,
    category: "Life Outlook",
    question: "Which phrase feels most like you?",
    answers: [
      {
        text: "Keep it simple and clear.",
        scores: {
          ".": 5,
          "<": 4,
          ",": 2,
        },
      },
      {
        text: "Go big or go home!",
        scores: {
          "!": 5,
          "*": 4,
          ">": 2,
        },
      },
      {
        text: "What if…?",
        scores: {
          "?": 5,
          "…": 4,
        },
      },
      {
        text: "We’re better together.",
        scores: {
          "&": 5,
          "+": 3,
          "()": 2,
        },
      },
    ],
  },
  {
    id: 13,
    category: "Challenge",
    question: "What is most likely to drain your energy?",
    answers: [
      {
        text: "Too many rigid rules and procedures",
        scores: {
          "\\": 5,
          "~": 3,
          "%": 2,
        },
      },
      {
        text: "Vague instructions and a lack of clear goals",
        scores: {
          ".": 5,
          "|": 3,
          "=": 2,
        },
      },
      {
        text: "Having to work alone for too long",
        scores: {
          "&": 5,
          "@": 3,
          ";": 2,
        },
      },
      {
        text: "Constant interruptions and social demands",
        scores: {
          "()": 5,
          "[]": 3,
          _: 2,
        },
      },
    ],
  },
  {
    id: 14,
    category: "Leadership",
    question: "When leading others, you prefer to…",
    answers: [
      {
        text: "Give clear, logical instructions",
        scores: {
          ":": 5,
          "|": 3,
        },
      },
      {
        text: "Point the way forward with a strong vision",
        scores: {
          ">": 5,
          "^": 4,
        },
      },
      {
        text: "Encourage alternate ideas and possibilities",
        scores: {
          "<": 5,
          "/": 4,
        },
      },
      {
        text: "Support the team from behind the scenes",
        scores: {
          _: 5,
          "()": 4,
        },
      },
    ],
  },
  {
    id: 15,
    category: "Mindset",
    question: "How do you handle change?",
    answers: [
      {
        text: "Adapt, stay flexible, and keep moving",
        scores: {
          "-": 5,
          "~": 4,
          "/": 2,
        },
      },
      {
        text: "Hold firm to your principles and routines",
        scores: {
          "[]": 5,
          "#": 4,
        },
      },
      {
        text: "Expand your capacity to include the new reality",
        scores: {
          "{}": 5,
          "+": 4,
        },
      },
      {
        text: "Fade into the background and observe first",
        scores: {
          "…": 4,
          "%": 4,
        },
      },
    ],
  },
  {
    id: 16,
    category: "Curiosity",
    question: "When something puzzles you, your first move is…",
    answers: [
      {
        text: "Search online and go down a rabbit hole",
        scores: {
          "@": 5,
          "/": 3,
          "#": 2,
        },
      },
      {
        text: "Ask someone nearby for their thoughts",
        scores: {
          "&": 4,
          "?": 4,
        },
      },
      {
        text: "Sit and think it through from all angles",
        scores: {
          ".": 4,
          "=": 4,
        },
      },
      {
        text: "Let it float in your mind until an answer appears",
        scores: {
          "…": 5,
          _: 3,
          "`": 2,
        },
      },
    ],
  },
  {
    id: 17,
    category: "Humor",
    question: "Your sense of humor leans toward…",
    answers: [
      {
        text: "Playful exaggeration and loudness",
        scores: {
          "!": 4,
          "*": 4,
        },
      },
      {
        text: "Clever, witty wordplay",
        scores: {
          "'": 5,
          '""': 4,
        },
      },
      {
        text: "Dry, understated, and subtle wit",
        scores: {
          ".": 4,
          "`": 4,
          "-": 2,
        },
      },
      {
        text: "Absurd, surreal, and unexpected",
        scores: {
          "~": 5,
          "{}": 3,
          "\\": 2,
        },
      },
    ],
  },
  {
    id: 18,
    category: "Learning",
    question: "When learning something new, you prefer…",
    answers: [
      {
        text: "A step-by-step, structured guide",
        scores: {
          ":": 5,
          "#": 3,
          "=": 2,
        },
      },
      {
        text: "Hands-on experimentation and play",
        scores: {
          "/": 5,
          "!": 3,
          "+": 3,
        },
      },
      {
        text: "Comparing multiple sources and approaches",
        scores: {
          ";": 5,
          "<": 4,
          "%": 3,
        },
      },
      {
        text: "Quiet reflection and personal note-taking",
        scores: {
          "…": 4,
          "'": 4,
          "()": 2,
        },
      },
    ],
  },
  {
    id: 19,
    category: "Tech Habits",
    question: "How do you relate to technology?",
    answers: [
      {
        text: "I use it as a tool for organization and structure",
        scores: {
          "#": 5,
          _: 3,
          "|": 2,
        },
      },
      {
        text: "I use it primarily for social connection",
        scores: {
          "@": 5,
          "&": 4,
        },
      },
      {
        text: "I love to tinker, modify, and see what it can do",
        scores: {
          "^": 5,
          "+": 4,
          "*": 2,
        },
      },
      {
        text: "I mostly avoid it when I can, preferring analog",
        scores: {
          "\\": 5,
          "()": 3,
          ".": 2,
        },
      },
    ],
  },
  {
    id: 20,
    category: "Travel Style",
    question: "On a trip, you prefer to…",
    answers: [
      {
        text: "Plan a detailed itinerary in advance",
        scores: {
          ".": 4,
          "{}": 4,
          "=": 3,
        },
      },
      {
        text: "Wander and follow spontaneous detours",
        scores: {
          "/": 5,
          "?": 4,
          "~": 2,
        },
      },
      {
        text: "Stick to the main path and known highlights",
        scores: {
          "-": 5,
          ">": 3,
          "|": 3,
        },
      },
      {
        text: "Mix a bit of structure with plenty of free time",
        scores: {
          ";": 5,
          ":": 4,
          "+": 2,
        },
      },
    ],
  },
  {
    id: 21,
    category: "Creativity",
    question: "Your creative process looks like…",
    answers: [
      {
        text: "Starting with a structure, then getting playful",
        scores: {
          ":": 5,
          "~": 3,
          "|": 2,
        },
      },
      {
        text: "Sudden and intense explosions of energy",
        scores: {
          "!": 5,
          "*": 3,
          ">": 2,
        },
      },
      {
        text: "Steady, patient layering and refinement",
        scores: {
          ".": 4,
          _: 4,
          ",": 2,
        },
      },
      {
        text: "Mixing unexpected elements to see what happens",
        scores: {
          ";": 5,
          "+": 4,
          "?": 2,
        },
      },
    ],
  },
  {
    id: 22,
    category: "Relationships",
    question: "In relationships, you value most…",
    answers: [
      {
        text: "Stability and unwavering reliability",
        scores: {
          ".": 5,
          "()": 3,
          "=": 2,
        },
      },
      {
        text: "Excitement, passion, and mutual reflection",
        scores: {
          "!": 4,
          '""': 4,
        },
      },
      {
        text: "Shared curiosity and continuous growth",
        scores: {
          "?": 5,
          "^": 4,
        },
      },
      {
        text: "Balance, fairness, and proportionality",
        scores: {
          "=": 5,
          "%": 3,
        },
      },
    ],
  },
  {
    id: 23,
    category: "Leisure",
    question: "Your perfect free evening looks like…",
    answers: [
      {
        text: "Organizing or tidying your personal space",
        scores: {
          ",": 5,
          "#": 4,
        },
      },
      {
        text: "A lively dinner out with a group of friends",
        scores: {
          "&": 5,
          ":": 3,
        },
      },
      {
        text: "Getting lost in a book or your own thoughts",
        scores: {
          "…": 5,
          "'": 3,
          "`": 2,
        },
      },
      {
        text: "Tinkering on a personal project or hobby",
        scores: {
          "^": 5,
          "+": 3,
          "{}": 2,
        },
      },
    ],
  },
  {
    id: 24,
    category: "Risk",
    question: "Your attitude toward risk is…",
    answers: [
      {
        text: "Cautious and steady; I prefer safe boundaries",
        scores: {
          ".": 4,
          "[]": 4,
        },
      },
      {
        text: "All-in and bold; I'm not afraid to take the lead",
        scores: {
          "!": 5,
          ">": 4,
        },
      },
      {
        text: "Curious but calculated; I measure the proportions",
        scores: {
          "?": 5,
          "%": 4,
          "<": 2,
        },
      },
      {
        text: "Fluid and adaptable; I go with the flow",
        scores: {
          "~": 5,
          "-": 3,
        },
      },
    ],
  },
  {
    id: 25,
    category: "Abstract",
    question: "Which of these best represents your inner energy?",
    answers: [
      {
        text: "A slow-moving glacier, powerful and deliberate",
        scores: {
          "[]": 5,
          "|": 4,
          _: 2,
        },
      },
      {
        text: "A crackling fire, warm and consuming",
        scores: {
          "!": 5,
          "*": 4,
          ">": 2,
        },
      },
      {
        text: "A deep ocean current, mysterious and steady",
        scores: {
          "…": 5,
          '""': 4,
          "~": 2,
        },
      },
      {
        text: "A sudden gust of wind, changing and unpredictable",
        scores: {
          "/": 5,
          "?": 4,
          "-": 2,
        },
      },
    ],
  },
  {
    id: 26,
    category: "Work Environment",
    question: "Where do you do your best work?",
    answers: [
      {
        text: "A structured office with clear processes",
        scores: {
          ".": 4,
          "#": 4,
          "[]": 3,
        },
      },
      {
        text: "A collaborative and social co-working space",
        scores: {
          "&": 5,
          ";": 4,
          "@": 2,
        },
      },
      {
        text: "A quiet, protected home office or corner",
        scores: {
          "()": 5,
          _: 3,
          "`": 2,
        },
      },
      {
        text: "On the move: cafés, trains, wherever inspiration strikes",
        scores: {
          "/": 5,
          "~": 3,
          "-": 2,
        },
      },
    ],
  },
  {
    id: 27,
    category: "Challenge",
    question: "You find it most difficult to deal with information that is...",
    answers: [
      {
        text: "Overly emotional and not based on facts",
        scores: {
          "=": 5,
          ".": 3,
          "<": 2,
        },
      },
      {
        text: "Too abstract and without practical application",
        scores: {
          _: 5,
          "+": 3,
          "|": 2,
        },
      },
      {
        text: "Presented in a disorganized, chaotic way",
        scores: {
          "#": 5,
          ",": 3,
          "[]": 2,
        },
      },
      {
        text: "Presented as final, with no room for other possibilities",
        scores: {
          "?": 5,
          "~": 3,
          "…": 2,
        },
      },
    ],
  },
  {
    id: 28,
    category: "Style Choices",
    question: "Your fashion style is…",
    answers: [
      {
        text: "Clean, classic, and put-together",
        scores: {
          ",": 5,
          ".": 3,
        },
      },
      {
        text: "Bold, expressive, and makes a statement",
        scores: {
          "!": 4,
          "*": 4,
        },
      },
      {
        text: "Alternative and goes against the current flow",
        scores: {
          "\\": 5,
          "`": 4,
        },
      },
      {
        text: "Balanced, neutral, and proportional",
        scores: {
          "=": 5,
          "%": 3,
        },
      },
      {
        text: "Layered, eclectic, and adaptable",
        scores: {
          "{}": 5,
          '""': 3,
          "~": 2,
        },
      },
      {
        text: "Comfort-focused and understated",
        scores: {
          _: 5,
          "-": 3,
        },
      },
    ],
  },
  {
    id: 29,
    category: "Imagination",
    question: "Your imagination is like…",
    answers: [
      {
        text: "A structured grid where ideas have a place",
        scores: {
          "#": 5,
          "=": 3,
          "[]": 2,
        },
      },
      {
        text: "A sparkling starburst of interconnected thoughts",
        scores: {
          "*": 5,
          "^": 3,
          "!": 2,
        },
      },
      {
        text: "A flowing river that follows new paths",
        scores: {
          "~": 5,
          "/": 3,
          "-": 2,
        },
      },
      {
        text: "An endless, hazy horizon of possibilities",
        scores: {
          "…": 5,
          "<": 4,
        },
      },
    ],
  },
  {
    id: 30,
    category: "Digital Life",
    question: "Your phone's home screen looks like…",
    answers: [
      {
        text: "Buzzing with notifications—always on",
        scores: {
          "@": 5,
          "!": 3,
        },
      },
      {
        text: "Neat folders, with everything organized",
        scores: {
          "#": 5,
          "[]": 3,
          ",": 2,
        },
      },
      {
        text: "Minimalist, with just a few essential apps",
        scores: {
          _: 5,
          "\\": 4,
        },
      },
      {
        text: "A collection of widgets for social connection",
        scores: {
          "&": 4,
          "'": 3,
          '""': 2,
        },
      },
    ],
  },
  {
    id: 31,
    category: "Affection",
    question: "You show love/affection mostly through…",
    answers: [
      {
        text: "Thoughtful words and affirming notes",
        scores: {
          '""': 5,
          "'": 3,
        },
      },
      {
        text: "Acts of service and practical support",
        scores: {
          _: 5,
          ":": 3,
          "+": 2,
        },
      },
      {
        text: "Big, energetic gestures and celebration",
        scores: {
          "!": 5,
          "*": 3,
          ">": 2,
        },
      },
      {
        text: "Quiet, protective presence and listening",
        scores: {
          "()": 5,
          "…": 3,
        },
      },
    ],
  },
  {
    id: 32,
    category: "Strengths",
    question: "A hidden strength of yours is…",
    answers: [
      {
        text: "Maintaining stability under pressure",
        scores: {
          ".": 5,
          "=": 3,
          _: 2,
        },
      },
      {
        text: "Bringing different types of people together",
        scores: {
          "&": 5,
          ";": 3,
        },
      },
      {
        text: "Seeing creative solutions others might miss",
        scores: {
          "*": 5,
          "/": 3,
          "?": 2,
        },
      },
      {
        text: "Fiercely protecting what you care about",
        scores: {
          "()": 5,
          "{}": 4,
        },
      },
    ],
  },
  {
    id: 33,
    category: "Resilience",
    question: "When you fail at something, you tend to…",
    answers: [
      {
        text: "Analyze what went wrong and adjust your approach",
        scores: {
          "?": 5,
          ":": 3,
          "^": 2,
        },
      },
      {
        text: "Push harder with renewed determination",
        scores: {
          "!": 4,
          ">": 4,
        },
      },
      {
        text: "Step back to reflect and understand it personally",
        scores: {
          "…": 4,
          '""': 3,
          "()": 2,
        },
      },
      {
        text: "Joke about it and move on quickly",
        scores: {
          "'": 4,
          "~": 3,
        },
      },
    ],
  },
  {
    id: 34,
    category: "Information",
    question: "How do you prefer to receive information?",
    answers: [
      {
        text: "As a direct, clear summary",
        scores: {
          ".": 5,
          "|": 3,
          "<": 2,
        },
      },
      {
        text: "Through a story or personal narrative",
        scores: {
          '""': 5,
          "&": 3,
          "'": 2,
        },
      },
      {
        text: "As a set of questions to explore",
        scores: {
          "?": 5,
          "…": 3,
          "~": 2,
        },
      },
      {
        text: "As a structured diagram or chart",
        scores: {
          "#": 5,
          ":": 3,
          "=": 2,
        },
      },
    ],
  },
  {
    id: 35,
    category: "Motivation",
    question: "You are most motivated by...",
    answers: [
      {
        text: "The desire for achievement and progress",
        scores: {
          ">": 5,
          "^": 4,
          "!": 2,
        },
      },
      {
        text: "The need for harmony and connection",
        scores: {
          ";": 5,
          "()": 3,
          "&": 2,
        },
      },
      {
        text: "The pursuit of knowledge and understanding",
        scores: {
          "?": 5,
          ".": 3,
          "`": 2,
        },
      },
      {
        text: "The opportunity for creativity and self-expression",
        scores: {
          "*": 5,
          "~": 3,
          "{}": 2,
        },
      },
    ],
  },
  {
    id: 36,
    category: "Stress",
    question: "Under stress, you’re most likely to…",
    answers: [
      {
        text: "Hyper-focus and organize everything you can control",
        scores: {
          "#": 5,
          "=": 3,
          "[]": 2,
        },
      },
      {
        text: "Reach out and talk it through with friends",
        scores: {
          "&": 5,
          "@": 3,
        },
      },
      {
        text: "Internalize and process things quietly",
        scores: {
          _: 5,
          "…": 3,
          "()": 2,
        },
      },
      {
        text: "Get restless and need to move or do something",
        scores: {
          "!": 4,
          "-": 4,
        },
      },
    ],
  },
  {
    id: 37,
    category: "Habits",
    question: "You feel best when your life has…",
    answers: [
      {
        text: "A clear, predictable structure and routine",
        scores: {
          ".": 5,
          "#": 4,
          "[]": 2,
        },
      },
      {
        text: "A flexible rhythm that can adapt and change",
        scores: {
          "~": 5,
          "{}": 4,
          ",": 2,
        },
      },
      {
        text: "A good balance between social and private time",
        scores: {
          ";": 5,
          "=": 4,
          "%": 2,
        },
      },
      {
        text: "A constant stream of new challenges and goals",
        scores: {
          "^": 5,
          ">": 4,
          "!": 2,
        },
      },
    ],
  },
  {
    id: 38,
    category: "Pet Peeves",
    question: "Your biggest pet peeve is…",
    answers: [
      {
        text: "Disorder, mess, and lack of structure",
        scores: {
          "#": 5,
          "[]": 4,
        },
      },
      {
        text: "People being indirect or hiding their true feelings",
        scores: {
          "!": 4,
          ">": 4,
        },
      },
      {
        text: "Unfairness and lack of balance",
        scores: {
          "=": 5,
          "<": 3,
          "|": 2,
        },
      },
      {
        text: "Boredom and having nothing new to think about",
        scores: {
          "…": 4,
          "-": 3,
          "?": 2,
        },
      },
    ],
  },
  {
    id: 39,
    category: "Legacy",
    question: "You’d most like to be remembered for…",
    answers: [
      {
        text: "Your kindness and the relationships you built",
        scores: {
          "&": 5,
          "()": 3,
          ",": 2,
        },
      },
      {
        text: "Your achievements and the impact you made",
        scores: {
          ">": 5,
          "^": 4,
          "*": 2,
        },
      },
      {
        text: "Your unique creativity and perspective",
        scores: {
          "*": 5,
          "~": 3,
          "`": 2,
        },
      },
      {
        text: "Your wisdom and the ideas you shared",
        scores: {
          "?": 5,
          '""': 3,
          "'": 2,
        },
      },
    ],
  },
  {
    id: 40,
    category: "Motto",
    question: "Pick the motto that fits you best:",
    answers: [
      {
        text: "Keep moving forward.",
        scores: {
          ">": 5,
          "-": 4,
          "^": 2,
        },
      },
      {
        text: "Balance in all things.",
        scores: {
          "=": 5,
          ".": 3,
          "%": 2,
        },
      },
      {
        text: "Always ask why.",
        scores: {
          "?": 5,
          ":": 3,
        },
      },
      {
        text: "Make it fun.",
        scores: {
          "~": 5,
          "!": 3,
        },
      },
      {
        text: "Stay connected.",
        scores: {
          "&": 4,
          "@": 4,
        },
      },
      {
        text: "Protect what matters.",
        scores: {
          "()": 5,
          "{}": 4,
        },
      },
    ],
  },
];
