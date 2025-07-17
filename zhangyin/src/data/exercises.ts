import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    title: 'The Lost Wallet',
    text: 'Sarah was walking home from school when she noticed something on the sidewalk. It was a leather wallet. She picked it up and opened it carefully. Inside, she found some cash, a driver\'s license, and a photo of an elderly couple. The name on the license was "Robert Johnson, 123 Oak Street." Sarah looked around, but there was no one in sight.',
    requiredLength: 150,
    keyPoints: ['Return the wallet', 'Interaction with Mr. Johnson', 'Moral lesson'],
    difficulty: 'easy',
    category: '日常生活',
    sampleAnswer: 'Sarah decided to take the wallet to the address on the driver\'s license. When she arrived at 123 Oak Street, an elderly man opened the door. His face lit up when he saw the wallet. "Thank you so much, young lady," Mr. Johnson said, his voice trembling with emotion. "My wife and I have been worried sick. This wallet contains our anniversary photo." Sarah smiled warmly. "I\'m glad I could help," she replied. Mr. Johnson insisted on giving her a reward, but Sarah politely declined. "Doing the right thing is its own reward," she said. As she walked home, Sarah felt a warm glow in her heart, knowing she had made a difference in someone\'s life.',
    analysis: {
      structure: [
        'Beginning: Sarah takes action to return the wallet',
        'Middle: Meeting with Mr. Johnson and emotional exchange',
        'End: Moral conclusion and Sarah\'s feelings'
      ],
      vocabulary: [
        'trembling with emotion',
        'insisted on',
        'politely declined',
        'warm glow',
        'made a difference'
      ],
      grammar: [
        'Past tense narration',
        'Direct speech with proper punctuation',
        'Complex sentences with subordinate clauses'
      ],
      coherence: [
        'Logical sequence of events',
        'Smooth transitions between paragraphs',
        'Consistent character voice'
      ],
      scoring: {
        content: 8,
        language: 8,
        structure: 8,
        total: 24
      }
    }
  },
  {
    id: '2',
    title: 'The Unexpected Guest',
    text: 'Emily was home alone on a stormy night. Suddenly, she heard a knock at the door. When she opened it, she saw a small boy, about 8 years old, soaking wet and shivering. "Please help me," the boy said. "I\'m lost and I can\'t find my way home." Emily hesitated for a moment, then invited him inside.',
    requiredLength: 150,
    keyPoints: ['Help the boy', 'Find his family', 'Safe return'],
    difficulty: 'medium',
    category: '人际关系',
    sampleAnswer: 'Emily wrapped the boy in a warm blanket and gave him hot chocolate. "What\'s your name?" she asked gently. "Tommy," he replied between sips. "I was playing in the park when the storm started, and I ran the wrong way." Emily called the police, who said they had received a report about a missing child. Within minutes, a patrol car arrived with Tommy\'s worried parents. His mother burst into tears of relief as she hugged her son. "We\'ve been searching everywhere," she sobbed. Tommy\'s father shook Emily\'s hand gratefully. "Thank you for taking care of our boy," he said. As they left, Emily watched the reunited family drive away, feeling grateful she had been there to help.',
    analysis: {
      structure: [
        'Beginning: Emily provides immediate comfort',
        'Middle: Gathering information and calling for help',
        'End: Reunion with family and Emily\'s reflection'
      ],
      vocabulary: [
        'soaking wet and shivering',
        'burst into tears of relief',
        'grateful',
        'reunited family'
      ],
      grammar: [
        'Past continuous tense',
        'Reported speech',
        'Emotional descriptive language'
      ],
      coherence: [
        'Clear timeline of events',
        'Emotional progression',
        'Satisfying resolution'
      ],
      scoring: {
        content: 9,
        language: 8,
        structure: 9,
        total: 26
      }
    }
  },
  {
    id: '3',
    title: 'The Scholarship Interview',
    text: 'David stood outside the interview room, his palms sweating. This was his last chance to get the scholarship that would allow him to attend university. His family couldn\'t afford the tuition, and he had worked so hard for this opportunity. He took a deep breath and knocked on the door.',
    requiredLength: 150,
    keyPoints: ['Interview process', 'Personal story', 'Success or failure'],
    difficulty: 'hard',
    category: '教育成长',
    sampleAnswer: 'The interview panel consisted of three distinguished professors. David sat down nervously but straightened his shoulders. "Tell us about yourself," one professor said. David spoke passionately about his love for engineering and how he had built his first robot at age 12 using spare parts. The professors leaned forward, intrigued. When asked about financial need, David explained how his single mother worked two jobs to support the family. "Education is my only way to break the cycle of poverty," he said honestly. After thirty minutes, the lead professor smiled warmly. "We\'re impressed by your determination and creativity. The scholarship is yours." David\'s eyes filled with tears of joy. Years later, he would graduate top of his class and return to mentor other scholarship students.',
    analysis: {
      structure: [
        'Beginning: Interview setup and initial nervousness',
        'Middle: David\'s compelling personal story',
        'End: Success and future impact'
      ],
      vocabulary: [
        'distinguished professors',
        'passionately',
        'break the cycle of poverty',
        'tears of joy'
      ],
      grammar: [
        'Complex narrative structure',
        'Direct speech with interruptions',
        'Time transitions'
      ],
      coherence: [
        'Strong character development',
        'Thematic consistency',
        'Inspiring conclusion'
      ],
      scoring: {
        content: 10,
        language: 9,
        structure: 10,
        total: 29
      }
    }
  }
];

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(exercise => exercise.id === id);
};

export const getExercisesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Exercise[] => {
  return exercises.filter(exercise => exercise.difficulty === difficulty);
};

export const getExercisesByCategory = (category: string): Exercise[] => {
  return exercises.filter(exercise => exercise.category === category);
};