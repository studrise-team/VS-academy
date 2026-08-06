const fs = require('fs');

const missingMysql = [
  'mysql_upper_lower',
  'mysql_aggregate_functions',
  'mysql_case'
];

const missingLinux = [
  'linux_gunzip',
  'linux_env_vars',
  'linux_path_var',
  'linux_bash_basics',
  'linux_aliases',
  'linux_shell_scripts',
  'linux_variables',
  'linux_conditionals',
  'linux_loops',
  'linux_functions',
  'linux_nginx',
  'linux_apache',
  'linux_cron_jobs'
];

const placeholder = (id) => `
  '${id}': {
    isStructured: true,
    title: '${id}',
    difficulty: 'Beginner',
    readingTime: '1 min',
    definition: 'Content coming soon.',
    whyUseIt: '...',
    syntax: '...',
    codeExample: '...',
    hasLiveOutput: false,
    expectedOutput: '...',
    explanation: [{ code: '...', desc: '...' }],
    realWorldExample: '...',
    commonMistakes: [{ error: '...', code: '', suffix: '...' }],
    bestPractices: ['...'],
    practiceExercise: { task: '...', expectedOutput: '...', solution: '...' },
    quiz: [
      { question: 'Q1', options: ['1','2','3','4'], answer: '1' },
      { question: 'Q2', options: ['1','2','3','4'], answer: '1' },
      { question: 'Q3', options: ['1','2','3','4'], answer: '1' },
      { question: 'Q4', options: ['1','2','3','4'], answer: '1' },
      { question: 'Q5', options: ['1','2','3','4'], answer: '1' }
    ],
    interviewQuestions: [{ q: '...', a: '...' }],
    summary: ['...'],
    references: []
  }`;

const mysqlPatch = `export const mysqlPatch = {
${missingMysql.map(id => placeholder(id)).join(',\n')}
};`;

const linuxPatch = `export const linuxPatch = {
${missingLinux.map(id => placeholder(id)).join(',\n')}
};`;

fs.writeFileSync('./src/data/mysqlPatch.js', mysqlPatch);
fs.writeFileSync('./src/data/linuxPatch.js', linuxPatch);

// Update linuxContent.js
let lc = fs.readFileSync('./src/data/linuxContent.js', 'utf-8');
if (!lc.includes('linuxPatch')) {
  lc = "import { linuxPatch } from './linuxPatch';\n" + lc;
  lc = lc.replace('linuxContentBatch9', 'linuxContentBatch9,\n  linuxPatch');
  fs.writeFileSync('./src/data/linuxContent.js', lc);
}

// Update mysqlContent.js
let mc = fs.readFileSync('./src/data/mysqlContent.js', 'utf-8');
if (!mc.includes('mysqlPatch')) {
  mc = "import { mysqlPatch } from './mysqlPatch';\n" + mc;
  mc = mc.replace('mysqlContentBatch7', 'mysqlContentBatch7,\n  mysqlPatch');
  fs.writeFileSync('./src/data/mysqlContent.js', mc);
}
