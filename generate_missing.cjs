const fs = require('fs');
const missing = JSON.parse(fs.readFileSync('js_missing_topics.json', 'utf-8'));

let contentStr = 'const commonReferences = [\n  { label: \'MDN Web Docs\', url: \'https://developer.mozilla.org/en-US/docs/Web/JavaScript\' }\n];\n\nexport const javascriptContentBatchMissing = {\n';

missing.forEach((topic, index) => {
  let id = 'js_' + topic.title.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/, '');
  if (id === 'js_') id = 'js_topic_' + topic.num;
  
  contentStr += `  '${id}': {
    isStructured: true,
    title: '${topic.num}. ${topic.title.replace(/'/g, "\\'")}',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'This topic covers ${topic.title.replace(/'/g, "\\'")}. The content is currently being generated in the background by the autopilot and will be available shortly.',
    whyUseIt: 'Understanding this concept is essential for mastering JavaScript.',
    syntax: '// Content coming soon',
    codeExample: '// Example coming soon\\nconsole.log("Pending");',
    expectedOutput: '"Pending"',
    explanation: [
      { code: 'console.log()', desc: 'Placeholder explanation.' }
    ],
    realWorldExample: 'Real-world example is being generated.',
    commonMistakes: [
      { error: 'Placeholder error', code: 'N/A', suffix: 'Explanation coming soon.' }
    ],
    bestPractices: ['Best practice coming soon.'],
    practiceExercise: {
      task: 'Practice task coming soon.',
      expectedOutput: 'Output',
      solution: 'Solution'
    },
    quiz: [
      { question: 'Quiz question 1?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
      { question: 'Quiz question 2?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
      { question: 'Quiz question 3?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
      { question: 'Quiz question 4?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
      { question: 'Quiz question 5?', options: ['A', 'B', 'C', 'D'], answer: 'A' }
    ],
    interviewQuestions: [
      { q: 'Interview question coming soon?', a: 'Answer coming soon.' }
    ],
    summary: ['Point 1', 'Point 2', 'Point 3'],
    references: commonReferences
  }`;
  
  if (index < missing.length - 1) {
    contentStr += ',\n';
  }
});

contentStr += '\n};\n';

fs.writeFileSync('src/data/javascriptContentBatchMissing.js', contentStr);
console.log('Created javascriptContentBatchMissing.js with ' + missing.length + ' placeholders.');
