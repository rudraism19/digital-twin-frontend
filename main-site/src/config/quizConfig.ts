export type TraitVector = {
  technical: number;
  analytical: number;
  creative: number;
  peopleOriented: number;
  entrepreneurial: number;
  structured: number;
};

export type QuizOption = {
  id: string;
  label: string;
  iconName: string; // We'll map this to Lucide icons in the component
  color: string;
  weights: TraitVector;
};

export type QuizQuestion = {
  id: string;
  title: string;
  options: QuizOption[];
};

export const DOMAIN_OPTIONS = [
  'Technology & IT',
  'Healthcare',
  'Business & Management',
  'Creative & Design',
  'Engineering',
  'Science & Research',
  'Education',
  'Govt & Law'
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    title: 'What excites you the most?',
    options: [
      {
        id: 'q1_opt1',
        label: 'Building and playing with technology.',
        iconName: 'Monitor',
        color: 'blue',
        weights: { technical: 3, analytical: 1, creative: 0, peopleOriented: 0, entrepreneurial: 0, structured: 0 }
      },
      {
        id: 'q1_opt2',
        label: 'Creating art, music, or designs.',
        iconName: 'Palette',
        color: 'purple',
        weights: { technical: 0, analytical: 0, creative: 3, peopleOriented: 0, entrepreneurial: 1, structured: 0 }
      },
      {
        id: 'q1_opt3',
        label: 'Helping people and talking to others.',
        iconName: 'Heart',
        color: 'pink',
        weights: { technical: 0, analytical: 0, creative: 0, peopleOriented: 3, entrepreneurial: 0, structured: 1 }
      },
      {
        id: 'q1_opt4',
        label: 'Starting a business or leading a team.',
        iconName: 'Briefcase',
        color: 'green',
        weights: { technical: 0, analytical: 1, creative: 0, peopleOriented: 1, entrepreneurial: 3, structured: 1 }
      }
    ]
  },
  {
    id: 'q2',
    title: 'How do you prefer to solve problems?',
    options: [
      {
        id: 'q2_opt1',
        label: 'Look at the numbers and data.',
        iconName: 'LineChart',
        color: 'indigo',
        weights: { technical: 0, analytical: 3, creative: 0, peopleOriented: 0, entrepreneurial: 0, structured: 2 }
      },
      {
        id: 'q2_opt2',
        label: 'Brainstorm crazy, new ideas.',
        iconName: 'Lightbulb',
        color: 'yellow',
        weights: { technical: 0, analytical: 0, creative: 3, peopleOriented: 0, entrepreneurial: 1, structured: -1 }
      },
      {
        id: 'q2_opt3',
        label: 'Follow a step-by-step plan.',
        iconName: 'ListChecks',
        color: 'slate',
        weights: { technical: 0, analytical: 1, creative: 0, peopleOriented: 0, entrepreneurial: 0, structured: 3 }
      },
      {
        id: 'q2_opt4',
        label: 'Ask friends or colleagues for advice.',
        iconName: 'Users',
        color: 'rose',
        weights: { technical: 0, analytical: 0, creative: 0, peopleOriented: 3, entrepreneurial: 0, structured: 0 }
      }
    ]
  },
  {
    id: 'q3',
    title: 'Choose your ideal workplace:',
    options: [
      {
        id: 'q3_opt1',
        label: 'A quiet lab or office with computers.',
        iconName: 'Cpu',
        color: 'cyan',
        weights: { technical: 2, analytical: 2, creative: 0, peopleOriented: -1, entrepreneurial: 0, structured: 1 }
      },
      {
        id: 'q3_opt2',
        label: 'A busy, social environment.',
        iconName: 'Coffee',
        color: 'orange',
        weights: { technical: 0, analytical: 0, creative: 1, peopleOriented: 3, entrepreneurial: 1, structured: -1 }
      },
      {
        id: 'q3_opt3',
        label: 'Outdoors or constantly moving around.',
        iconName: 'Map',
        color: 'emerald',
        weights: { technical: 0, analytical: 1, creative: 0, peopleOriented: 1, entrepreneurial: 1, structured: -2 }
      },
      {
        id: 'q3_opt4',
        label: 'A creative art studio.',
        iconName: 'Brush',
        color: 'purple',
        weights: { technical: 0, analytical: 0, creative: 3, peopleOriented: 0, entrepreneurial: 1, structured: -1 }
      }
    ]
  },
  {
    id: 'q4',
    title: 'In a group project, you are usually the one who:',
    options: [
      {
        id: 'q4_opt1',
        label: 'Does the research and writing.',
        iconName: 'Book',
        color: 'blue',
        weights: { technical: 0, analytical: 3, creative: 0, peopleOriented: 0, entrepreneurial: 0, structured: 2 }
      },
      {
        id: 'q4_opt2',
        label: 'Pitches the project to the class.',
        iconName: 'Megaphone',
        color: 'red',
        weights: { technical: 0, analytical: 0, creative: 1, peopleOriented: 2, entrepreneurial: 3, structured: 0 }
      },
      {
        id: 'q4_opt3',
        label: 'Makes sure everyone is happy and working.',
        iconName: 'HeartHandshake',
        color: 'pink',
        weights: { technical: 0, analytical: 0, creative: 0, peopleOriented: 3, entrepreneurial: 0, structured: 0 }
      },
      {
        id: 'q4_opt4',
        label: 'Builds the actual model or presentation.',
        iconName: 'Wrench',
        color: 'amber',
        weights: { technical: 3, analytical: 0, creative: 2, peopleOriented: 0, entrepreneurial: 0, structured: 0 }
      }
    ]
  },
  {
    id: 'q5',
    title: 'What is your biggest career goal?',
    options: [
      {
        id: 'q5_opt1',
        label: 'To invent a new technology.',
        iconName: 'Rocket',
        color: 'cyan',
        weights: { technical: 3, analytical: 2, creative: 1, peopleOriented: 0, entrepreneurial: 1, structured: 0 }
      },
      {
        id: 'q5_opt2',
        label: 'To become a wealthy CEO or owner.',
        iconName: 'TrendingUp',
        color: 'green',
        weights: { technical: 0, analytical: 1, creative: 0, peopleOriented: 1, entrepreneurial: 3, structured: 1 }
      },
      {
        id: 'q5_opt3',
        label: 'To help my community and save lives.',
        iconName: 'ShieldPlus',
        color: 'rose',
        weights: { technical: 0, analytical: 0, creative: 0, peopleOriented: 3, entrepreneurial: 0, structured: 1 }
      },
      {
        id: 'q5_opt4',
        label: 'To be known for my creative talent.',
        iconName: 'Star',
        color: 'yellow',
        weights: { technical: 0, analytical: 0, creative: 3, peopleOriented: 1, entrepreneurial: 1, structured: -1 }
      }
    ]
  }
];
