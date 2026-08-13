const commonReferences = [
  { label: 'MDN Web Docs - JavaScript Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' }
];

export const javascriptContentBatch19 = {
  'js_advanced_modules': {
    isStructured: true,
    title: '248-254. Advanced Modules',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'While basic `import` and `export` allow you to share code between files, advanced module concepts include Default Exports (exporting a single main entity), Named Exports (exporting multiple specific entities), and Dynamic Imports (loading a module only when it is needed).',
    whyUseIt: 'As your project grows to hundreds of files, organizing them properly is critical. Default exports are great for React components. Dynamic imports are crucial for Performance (Code Splitting) — you don\'t load the "Settings" code until the user actually clicks the Settings button.',
    syntax: 'export default ClassName;\nimport name from "./file.js";\n\n// Dynamic\nimport("./file.js").then(module => ...);',
    codeExample: '// --- math.js ---\nexport const pi = 3.14; // Named Export\nexport default function calculate() { ... } // Default Export\n\n// --- main.js ---\n// Import default WITHOUT curly braces, import named WITH curly braces\nimport calculate, { pi } from "./math.js";\n\n// Dynamic Import (returns a Promise!)\ndocument.getElementById("btn").addEventListener("click", async () => {\n  const module = await import("./heavyFeature.js");\n  module.loadFeature();\n});',
    expectedOutput: '(Code executes based on imported logic, heavyFeature loads only on click)',
    explanation: [
      { code: 'export default', desc: 'Can only be used ONCE per file. When importing it, you do not use `{}` and can name it whatever you want.' },
      { code: 'export const pi', desc: 'A Named Export. Can be used many times per file. Must be imported inside `{}` with the exact same name.' },
      { code: 'await import(...)', desc: 'Dynamic import. Instead of loading the file when the page boots, it fetches the JavaScript file over the network exactly when this line of code runs.' }
    ],
    realWorldExample: 'A web app has a massive PDF-generation library (2MB size). Instead of forcing every user to download it on the homepage, you dynamically `import()` it ONLY if they click the "Download PDF" button.',
    commonMistakes: [
      { error: 'Mixing up brackets on import', code: 'import { React } from "react";', suffix: 'If the library exported React as a Default export, you must import it WITHOUT brackets: `import React from "react";`.' }
    ],
    bestPractices: ['Organize your projects by feature, not by file type. Instead of a `js/` folder and `css/` folder, have a `components/Button/` folder containing both `Button.js` and `Button.css`.'],
    practiceExercise: {
      task: 'Write the syntax to export a function named `sayHi` as a Default Export.',
      expectedOutput: '(Syntax only)',
      solution: 'export default function sayHi() { console.log("Hi"); }'
    },
    quiz: [
      { question: 'How many Default Exports can a single JavaScript file have?', options: ['0', '1', '10', 'Unlimited'], answer: '1' },
      { question: 'How do you import a Default Export?', options: ['import { Name } from "file"', 'import Name from "file"', 'import * as Name', 'require(Name)'], answer: 'import Name from "file"' },
      { question: 'Why use Dynamic Imports (`import()`)?', options: ['To encrypt the file', 'To load code asynchronously only when it is needed, improving initial page load time', 'To import CSS', 'To bypass CORS'], answer: 'To load code asynchronously only when it is needed, improving initial page load time' },
      { question: 'What does a Dynamic Import return?', options: ['A string', 'An HTML Element', 'A Promise', 'An array'], answer: 'A Promise' },
      { question: 'If `utils.js` exports `export const age = 20;`, how do you import it?', options: ['import age from "utils.js"', 'import { age } from "utils.js"', 'import * age', 'import [age]'], answer: 'import { age } from "utils.js"' }
    ],
    interviewQuestions: [
      { q: 'Can you rename a Named Export when importing it?', a: 'Yes, using the `as` keyword. Example: `import { calculate as calcMath } from "./math.js";`' }
    ],
    summary: ['Default exports: 1 per file, no `{}` to import.', 'Named exports: multiple per file, use `{}` to import.', 'Dynamic imports use promises for code-splitting.'],
    references: commonReferences
  },

  'js_javascript_projects_ideas': {
    isStructured: true,
    title: '255-267. JavaScript Projects (Ideas)',
    difficulty: 'All Levels',
    readingTime: '2 min',
    definition: 'The best way to learn JavaScript is by building. These projects progress from simple DOM manipulation to complex API and State management.',
    whyUseIt: 'Tutorials only teach you syntax. Building projects teaches you problem-solving, debugging, and how to architecture an application.',
    syntax: 'N/A',
    codeExample: '// Idea 1: Calculator\n// Requires: Variables, Functions, DOM Events (click), basic Math.\n\n// Idea 2: To-Do List\n// Requires: Arrays, DOM Element Creation (createElement), localStorage.\n\n// Idea 3: Weather App\n// Requires: fetch(), Promises/Async Await, JSON parsing, Geolocation API.',
    expectedOutput: '(Your beautiful portfolio)',
    explanation: [
      { code: 'Calculator', desc: 'Focuses on basic logic and updating the DOM instantly.' },
      { code: 'To-Do List', desc: 'Focuses on CRUD (Create, Read, Update, Delete) operations on an array, and saving to localStorage.' },
      { code: 'Weather App', desc: 'Focuses on working with external servers, handling async delays, and parsing JSON.' }
    ],
    realWorldExample: 'Every senior developer got their start by building simple calculators and to-do lists to build muscle memory.',
    commonMistakes: [
      { error: 'Tutorial Hell', code: 'Watching 100 hours of video without typing code.', suffix: 'You MUST build things yourself from a blank screen. It is okay to Google things when you get stuck, but don\'t just copy-paste.' }
    ],
    bestPractices: ['Start small. Don\'t try to build Facebook as your first project. Build a button that changes color. Then build a counter. Then a clock.'],
    practiceExercise: {
      task: 'Pick one project from the list (e.g., Digital Clock) and try to build it today using `setInterval` and `new Date()`.',
      expectedOutput: '(A working clock in your browser)',
      solution: 'setInterval(() => { document.getElementById("clock").innerText = new Date().toLocaleTimeString(); }, 1000);'
    },
    quiz: [
      { question: 'What is the most important part of learning JavaScript?', options: ['Memorizing every method', 'Watching tutorials', 'Building projects and writing code yourself', 'Reading MDN docs cover to cover'], answer: 'Building projects and writing code yourself' }
    ],
    interviewQuestions: [
      { q: 'How do you structure a complex Vanilla JS project?', a: 'Typically using the MVC (Model-View-Controller) pattern. Keep your data/state (Model) separate from your DOM manipulation (View), and use events/functions (Controller) to link them.' }
    ],
    summary: ['Build a Calculator for logic.', 'Build a To-Do list for data management.', 'Build a Weather App for APIs.'],
    references: commonReferences
  }
};
