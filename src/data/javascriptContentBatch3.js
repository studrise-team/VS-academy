const commonReferences = [
  { label: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/' },
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatch3 = {
  'js_if_statement': {
    isStructured: true,
    title: '24. if Statement',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `if` statement is the most basic form of control flow in JavaScript. It executes a block of code ONLY if a specified condition evaluates to `true`.',
    whyUseIt: 'To make your programs smart. Programs need to make decisions, like showing a "Welcome Back" message only if the user is logged in.',
    syntax: 'if (condition) {\n  // Code to run if condition is true\n}',
    codeExample: 'let isRaining = true;\n\nif (isRaining) {\n  console.log("Take an umbrella.");\n}\n\nlet score = 85;\nif (score > 50) {\n  console.log("You passed!");\n}',
    expectedOutput: '"Take an umbrella."\n"You passed!"',
    explanation: [
      { code: 'if (isRaining)', desc: 'The condition goes inside parentheses. Since isRaining is true, the block executes.' },
      { code: '{ ... }', desc: 'The curly braces define the block of code that belongs to the if statement.' }
    ],
    realWorldExample: 'A banking app checks `if (withdrawalAmount <= accountBalance)`. If it is true, the app dispenses cash. If it is false, nothing happens and the machine stops.',
    commonMistakes: [
      { error: 'Forgetting the curly braces', code: 'if (true) console.log("Yes");', suffix: 'While JavaScript allows you to omit braces for a single line of code, it is a terrible practice. Always use curly braces to prevent bugs when adding more lines later.' }
    ],
    bestPractices: ['Always use curly braces `{}` even if the `if` statement only contains one line.'],
    practiceExercise: {
      task: 'Declare `let temperature = 30;`. Write an `if` statement that checks if the temperature is greater than 25. If it is, log "It is hot outside.".',
      expectedOutput: '"It is hot outside."',
      solution: 'let temperature = 30; if (temperature > 25) { console.log("It is hot outside."); }'
    },
    quiz: [
      { question: 'What does an `if` statement do?', options: ['Loops code forever', 'Executes code only if a condition is true', 'Creates a function', 'Stops the program entirely'], answer: 'Executes code only if a condition is true' },
      { question: 'What symbols surround the condition in an `if` statement?', options: ['{}', '[]', '()', '<>'], answer: '()' },
      { question: 'What symbols surround the code block to be executed?', options: ['()', '{}', '[]', '||'], answer: '{}' },
      { question: 'What happens if the condition in an `if` statement evaluates to false?', options: ['The program crashes', 'The code block is skipped and the program continues', 'It runs anyway', 'It loops backward'], answer: 'The code block is skipped and the program continues' },
      { question: 'Is it required to write `if (condition === true)`?', options: ['Yes', 'No, `if (condition)` is sufficient if the variable is already a boolean', 'Only for numbers', 'Only in strict mode'], answer: 'No, `if (condition)` is sufficient if the variable is already a boolean' }
    ],
    interviewQuestions: [
      { q: 'What happens if you accidentally put a semicolon right after the condition, like `if (x > 5); { ... }`?', a: 'The semicolon terminates the `if` statement immediately. The block `{ ... }` that follows is treated as an independent block of code and will execute unconditionally, regardless of whether the `if` condition was true or false.' }
    ],
    summary: ['Executes code conditionally.', 'Condition goes in `()`.', 'Code block goes in `{}`.'],
    references: commonReferences
  },

  'js_if_else': {
    isStructured: true,
    title: '25. if...else',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `else` statement is paired with an `if` statement. It defines a block of code to be executed if the `if` condition evaluates to `false`.',
    whyUseIt: 'You often need an alternative action. If a user enters the right password, log them in. Else, show them an error message.',
    syntax: 'if (condition) {\n  // Code if true\n} else {\n  // Code if false\n}',
    codeExample: 'let isOnline = false;\n\nif (isOnline) {\n  console.log("User is connected.");\n} else {\n  console.log("User is offline. Please reconnect.");\n}',
    expectedOutput: '"User is offline. Please reconnect."',
    explanation: [
      { code: 'else {', desc: 'Catches any case where the above `if` condition was false.' }
    ],
    realWorldExample: 'A game checks: `if (playerLives > 0)` load the next level. `else` show the Game Over screen.',
    commonMistakes: [
      { error: 'Adding a condition to else', code: 'else (x < 10) { ... }', suffix: 'An `else` block acts as a catch-all. It CANNOT have a condition attached to it. If you need another condition, use `else if`.' }
    ],
    bestPractices: ['Format `else` on the same line as the closing brace of the `if` block: `} else {` to save vertical space and improve readability.'],
    practiceExercise: {
      task: 'Declare `let age = 16;`. Write an if/else block. If age is >= 18, log "Can vote". Else, log "Too young".',
      expectedOutput: '"Too young"',
      solution: 'let age = 16; if (age >= 18) { console.log("Can vote"); } else { console.log("Too young"); }'
    },
    quiz: [
      { question: 'When does the code inside an `else` block execute?', options: ['Always', 'Only when the `if` condition is false', 'Only when the `if` condition is true', 'When an error occurs'], answer: 'Only when the `if` condition is false' },
      { question: 'Can an `else` block have its own condition like `else (x > 5)`?', options: ['Yes', 'No, it is a catch-all block', 'Only in modern JavaScript', 'Only if you use strict mode'], answer: 'No, it is a catch-all block' },
      { question: 'Do you need an `if` block to use an `else` block?', options: ['Yes, `else` must immediately follow an `if` or `else if`', 'No, `else` can be used by itself', 'Only inside functions', 'Only in loops'], answer: 'Yes, `else` must immediately follow an `if` or `else if`' },
      { question: 'What is the syntax format for else?', options: ['else = {}', 'else { ... }', 'else ()', 'else then { ... }'], answer: 'else { ... }' },
      { question: 'How many `else` blocks can you attach to a single `if` statement?', options: ['Zero or one', 'As many as you want', 'Two', 'Five'], answer: 'Zero or one' }
    ],
    interviewQuestions: [
      { q: 'Can you have code between the closing brace of an `if` and the `else` keyword?', a: 'No. The `else` keyword must immediately follow the closing brace of the `if` block, otherwise a syntax error will occur.' }
    ],
    summary: ['Provides a fallback path.', 'Executes when `if` fails.', 'Cannot have its own condition.'],
    references: commonReferences
  },

  'js_else_if': {
    isStructured: true,
    title: '26. else if',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `else if` statement allows you to chain multiple, distinct conditions together. It is checked only if the previous `if` (or `else if`) condition was false.',
    whyUseIt: 'Used when there are more than two possible outcomes. For example, grading a test: if score > 90 (A), else if score > 80 (B), else if score > 70 (C).',
    syntax: 'if (condition1) {\n  // Code\n} else if (condition2) {\n  // Code\n} else {\n  // Catch-all\n}',
    codeExample: 'let time = 14;\n\nif (time < 12) {\n  console.log("Good morning!");\n} else if (time < 18) {\n  console.log("Good afternoon!");\n} else {\n  console.log("Good evening!");\n}',
    expectedOutput: '"Good afternoon!"',
    explanation: [
      { code: 'else if (time < 18)', desc: 'This condition is only evaluated because the first condition (time < 12) was false. Since 14 < 18 is true, this block runs.' },
      { code: 'else', desc: 'If none of the above conditions were true, this catch-all block would run.' }
    ],
    realWorldExample: 'A traffic light system: `if (color === "green")` go, `else if (color === "yellow")` slow down, `else` stop.',
    commonMistakes: [
      { error: 'Putting conditions in the wrong order', code: 'if (score > 50) return "C"; else if (score > 90) return "A";', suffix: 'Conditions are checked top-to-bottom. If a student gets 95, they will trigger the `> 50` check first, receive a "C", and the program will exit the chain immediately.' }
    ],
    bestPractices: ['Always structure your conditions logically (e.g., highest to lowest, or most specific to least specific) because the engine stops evaluating as soon as it finds the first true condition.'],
    practiceExercise: {
      task: 'Create `let temp = 15;`. Write an if/else-if/else chain. If temp > 30, log "Hot". Else if temp > 20, log "Warm". Else, log "Cold".',
      expectedOutput: '"Cold"',
      solution: 'let temp = 15; if (temp > 30) { console.log("Hot"); } else if (temp > 20) { console.log("Warm"); } else { console.log("Cold"); }'
    },
    quiz: [
      { question: 'What is the purpose of `else if`?', options: ['To create infinite loops', 'To check a new condition if the previous conditions were false', 'To handle errors', 'To replace the else block'], answer: 'To check a new condition if the previous conditions were false' },
      { question: 'If the first `if` statement is true, will the `else if` statements below it be evaluated?', options: ['Yes', 'No, the chain stops as soon as a true condition is met', 'Only if you use a continue keyword', 'Only in strict mode'], answer: 'No, the chain stops as soon as a true condition is met' },
      { question: 'How many `else if` statements can you chain together?', options: ['One', 'Two', 'Five', 'Unlimited'], answer: 'Unlimited' },
      { question: 'Do you HAVE to end an `else if` chain with an `else` block?', options: ['Yes, it will crash otherwise', 'No, the `else` block is optional', 'Only if there are more than 3 conditions', 'Only in functions'], answer: 'No, the `else` block is optional' },
      { question: 'What happens if a student has a score of 85, and your code checks `if (score > 50)` before checking `else if (score > 80)`?', options: ['They get both blocks of code', 'They hit the `score > 50` block and the chain exits', 'The computer gets confused and errors', 'It skips to the end'], answer: 'They hit the `score > 50` block and the chain exits' }
    ],
    interviewQuestions: [
      { q: 'What is the performance difference between a chain of separate `if` statements vs an `if/else-if` chain?', a: 'Separate `if` statements force the engine to evaluate every single condition, even if the first one was true. An `if/else-if` chain stops evaluating immediately after finding a true condition, making it much more efficient.' }
    ],
    summary: ['Chains multiple conditions together.', 'Stops evaluating after the first match.', 'Order of conditions is critical.'],
    references: commonReferences
  },

  'js_nested_conditions': {
    isStructured: true,
    title: '27. Nested Conditions',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A nested condition is simply an `if` statement placed inside another `if` statement. It allows you to check for sub-conditions only after a primary condition has been met.',
    whyUseIt: 'Used when a decision tree requires multiple steps. For example: "If the user is an admin, check if they are the super-admin. If yes, grant delete permissions."',
    syntax: 'if (condition1) {\n  if (condition2) {\n    // Runs if both are true\n  }\n}',
    codeExample: 'let isLoggedIn = true;\nlet userRole = "admin";\n\nif (isLoggedIn) {\n  console.log("Welcome back!");\n  \n  if (userRole === "admin") {\n    console.log("Admin Dashboard Access Granted.");\n  } else {\n    console.log("User Dashboard Access Granted.");\n  }\n} else {\n  console.log("Please log in.");\n}',
    expectedOutput: '"Welcome back!"\n"Admin Dashboard Access Granted."',
    explanation: [
      { code: 'if (userRole === "admin")', desc: 'This nested condition is entirely protected by the outer condition. It will never run unless isLoggedIn is true.' }
    ],
    realWorldExample: 'E-commerce shipping logic: `if (cartTotal > 50) { if (country === "USA") { applyFreeShipping(); } }`',
    commonMistakes: [
      { error: 'Creating the "Pyramid of Doom"', code: 'if(a) { if(b) { if(c) { if(d) { } } } }', suffix: 'Deeply nesting conditions makes code unreadable and hard to maintain. If you find yourself nesting more than 2 levels deep, consider combining them with logical AND (`&&`) or returning early from a function.' }
    ],
    bestPractices: ['Combine conditions using `&&` if the nested `if` doesn\'t have an `else`. E.g., change `if(a) { if(b) { } }` to `if(a && b) { }`.'],
    practiceExercise: {
      task: 'Create variables `hasKey = true` and `doorIsLocked = true`. Write an `if` statement checking if you have the key. Inside it, write another `if` checking if the door is locked. If both are true, log "Unlocking door".',
      expectedOutput: '"Unlocking door"',
      solution: 'let hasKey = true; let doorIsLocked = true; if (hasKey) { if (doorIsLocked) { console.log("Unlocking door"); } }'
    },
    quiz: [
      { question: 'What is a nested condition?', options: ['An if statement inside a loop', 'An if statement inside another if statement', 'An if statement with no curly braces', 'A switch statement'], answer: 'An if statement inside another if statement' },
      { question: 'If the outer `if` condition is false, will the inner `if` condition be checked?', options: ['Yes, always', 'No, the entire outer block is skipped', 'Only if you use else', 'Only in strict mode'], answer: 'No, the entire outer block is skipped' },
      { question: 'What is a common problem with deeply nested if statements?', options: ['They run too fast', 'They cause the "Pyramid of Doom", making code unreadable', 'They consume too much internet data', 'They delete variables'], answer: 'They cause the "Pyramid of Doom", making code unreadable' },
      { question: 'How can you avoid simple nesting if there is no `else` condition?', options: ['Use `++`', 'Combine the conditions using `&&`', 'Use a try/catch', 'You cannot avoid it'], answer: 'Combine the conditions using `&&`' },
      { question: 'Can you place an `if` statement inside an `else` block?', options: ['Yes', 'No', 'Only once', 'Only if it is a while loop'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Explain the "Early Return" or "Guard Clause" pattern and how it prevents nesting.', a: 'Instead of wrapping the entire function in an `if (isValid)` block, a guard clause checks the opposite `if (!isValid) return;` at the top of the function. This stops execution early, allowing the rest of the function to remain un-nested and clean.' }
    ],
    summary: ['An `if` inside an `if`.', 'Outer must be true to reach the inner.', 'Avoid deep nesting for readability.'],
    references: commonReferences
  },

  'js_switch_statement': {
    isStructured: true,
    title: '28. switch Statement',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `switch` statement evaluates an expression and matches its value against a series of `case` clauses. It is often used as a cleaner alternative to a long chain of `else if` statements.',
    whyUseIt: 'When checking a single variable against many possible exact values (like checking what day of the week it is, or what role a user has).',
    syntax: 'switch(expression) {\n  case value1:\n    // code\n    break;\n  case value2:\n    // code\n    break;\n  default:\n    // catch-all\n}',
    codeExample: 'let day = "Monday";\n\nswitch(day) {\n  case "Monday":\n    console.log("Start of the work week.");\n    break;\n  case "Friday":\n    console.log("Weekend is almost here!");\n    break;\n  default:\n    console.log("Just a regular day.");\n}',
    expectedOutput: '"Start of the work week."',
    explanation: [
      { code: 'switch(day)', desc: 'Evaluates the variable "day".' },
      { code: 'case "Monday":', desc: 'Checks if day === "Monday". If true, executes the code below it.' },
      { code: 'break;', desc: 'CRITICAL: Stops the switch statement. If you forget this, the code will "fall through" and execute the next cases too.' },
      { code: 'default:', desc: 'Acts like an "else" block. Runs if no cases match.' }
    ],
    realWorldExample: 'A payment gateway processes different currencies: `switch(currency) { case "USD": processUS(); break; case "EUR": processEU(); break; }`.',
    commonMistakes: [
      { error: 'Forgetting the break statement', code: 'case "A": doSomething(); case "B": doOther();', suffix: 'If you omit `break;`, JavaScript executes the matched case AND every single case below it, regardless of whether they match. This is called "fall-through".' }
    ],
    bestPractices: ['Always include a `default` case to handle unexpected values, and never forget your `break` statements.'],
    practiceExercise: {
      task: 'Create `let status = 404;`. Write a switch statement. If 200, log "OK". If 404, log "Not Found". Default log "Unknown error".',
      expectedOutput: '"Not Found"',
      solution: 'let s = 404; switch(s) { case 200: console.log("OK"); break; case 404: console.log("Not Found"); break; default: console.log("Unknown"); }'
    },
    quiz: [
      { question: 'What is a `switch` statement primarily used as an alternative to?', options: ['for loops', 'while loops', 'long else if chains', 'arrays'], answer: 'long else if chains' },
      { question: 'What keyword defines a matching scenario inside a switch?', options: ['if', 'case', 'match', 'when'], answer: 'case' },
      { question: 'What happens if you forget to write `break;` at the end of a case?', options: ['The program crashes', 'It skips the case', 'Execution falls through and runs the code in the following cases as well', 'It automatically adds a break'], answer: 'Execution falls through and runs the code in the following cases as well' },
      { question: 'What is the `default` keyword used for in a switch?', options: ['To create variables', 'It acts like an `else` block, executing if no cases match', 'To exit the switch', 'To restart the switch'], answer: 'It acts like an `else` block, executing if no cases match' },
      { question: 'Does a switch statement use loose equality (`==`) or strict equality (`===`) to match cases?', options: ['Loose Equality (==)', 'Strict Equality (===)', 'It doesn\'t use equality', 'It changes based on the data type'], answer: 'Strict Equality (===)' }
    ],
    interviewQuestions: [
      { q: 'Can you use conditions like `score > 90` inside a switch case?', a: 'By default, no, because `switch(score)` looks for exact value matches, not boolean evaluations. However, you can achieve this by doing a "true switch": `switch(true) { case (score > 90): ... }`. Though an if/else chain is generally preferred for this.' }
    ],
    summary: ['Alternative to long `else if` chains.', 'Uses strict equality (`===`).', 'ALWAYS use `break;`.'],
    references: commonReferences
  },

  'js_truthy_falsy': {
    isStructured: true,
    title: '29. Truthy and Falsy Values',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'In JavaScript, a "falsy" value is a value that translates to `false` when evaluated in a Boolean context (like inside an `if` statement). A "truthy" value is anything that translates to `true`.',
    whyUseIt: 'You can write much shorter code. Instead of writing `if (username !== "" && username !== null)`, you can just write `if (username)` because empty strings and null are inherently falsy.',
    syntax: '// The 6 Falsy Values:\nfalse\n0\n"" (empty string)\nnull\nundefined\nNaN',
    codeExample: 'let username = "";\n\nif (username) {\n  console.log("Welcome, " + username);\n} else {\n  console.log("Please enter a username.");\n}\n// Output: "Please enter a username." because "" is falsy.',
    expectedOutput: '"Please enter a username."',
    explanation: [
      { code: 'if (username)', desc: 'The engine forces the string into a boolean. Since it is empty, it becomes `false`.' },
      { code: 'The 6 falsy values', desc: 'Memorize them: false, 0, "", null, undefined, NaN. Absolutely EVERYTHING else is truthy.' }
    ],
    realWorldExample: 'Checking if an array has items: `if (users.length)` works perfectly because if length is 0, it is falsy. If length is 1 or more, it is truthy.',
    commonMistakes: [
      { error: 'Assuming empty arrays or objects are falsy', code: 'if ([]) { ... }', suffix: 'An empty array `[]` and an empty object `{}` are NOT falsy. They are objects in memory, which makes them TRUTHY. To check if an array is empty, check `if (array.length === 0)`.' }
    ],
    bestPractices: ['Leverage truthy/falsy evaluations to keep conditional checks clean and concise, rather than explicitly checking `!== null && !== undefined`.'],
    practiceExercise: {
      task: 'Declare `let balance = 0;`. Write an `if (balance)` statement. Will it run the `if` block or the `else` block? Log the result.',
      expectedOutput: 'It runs the else block because 0 is falsy.',
      solution: 'let balance = 0; if (balance) { console.log("Has money"); } else { console.log("No money"); }'
    },
    quiz: [
      { question: 'Which of the following is NOT a falsy value?', options: ['0', '"" (empty string)', 'undefined', '"false" (string)'], answer: '"false" (string)' },
      { question: 'Is an empty array `[]` truthy or falsy?', options: ['Truthy', 'Falsy', 'Neither', 'Both'], answer: 'Truthy' },
      { question: 'Is the number `0` truthy or falsy?', options: ['Truthy', 'Falsy', 'Neither', 'Error'], answer: 'Falsy' },
      { question: 'Is the number `-1` truthy or falsy?', options: ['Truthy', 'Falsy', 'Neither', 'Error'], answer: 'Truthy' },
      { question: 'Why does `if ("0")` evaluate to true?', options: ['Because zero is true', 'Because it is a non-empty string, and all non-empty strings are truthy', 'Because of a bug in JavaScript', 'Because it converts to 1'], answer: 'Because it is a non-empty string, and all non-empty strings are truthy' }
    ],
    interviewQuestions: [
      { q: 'How can you explicitly convert a truthy/falsy value into a strict boolean `true` or `false`?', a: 'You can use the `Boolean()` function, or more commonly, use the double NOT operator (`!!`). For example, `!!"hello"` evaluates to true, and `!!0` evaluates to false.' }
    ],
    summary: ['6 Falsy values: `false, 0, "", null, undefined, NaN`.', 'Everything else is Truthy.', 'Empty arrays/objects are Truthy.'],
    references: commonReferences
  },

  'js_conditional_practice': {
    isStructured: true,
    title: '30. Practice Problems',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A collection of real-world conditional logic problems to test your understanding of if/else, switch, and ternary operators.',
    whyUseIt: 'Programming is a skill built through repetition and problem-solving. Reading syntax is not enough; you must apply it.',
    syntax: '// Apply what you learned in Module 3',
    codeExample: '// Problem: Write an if/else block that determines if a number is positive, negative, or zero.\nlet num = -5;\n\nif (num > 0) {\n  console.log("Positive");\n} else if (num < 0) {\n  console.log("Negative");\n} else {\n  console.log("Zero");\n}',
    expectedOutput: '"Negative"',
    explanation: [
      { code: 'Practice', desc: 'Focus on writing clean logic that handles all edge cases without unnecessary nesting.' }
    ],
    realWorldExample: 'Technical interviews often feature logical word problems to see how you structure your `if` and `else if` chains.',
    commonMistakes: [
      { error: 'Not testing edge cases', code: '', suffix: 'When practicing, always change your variables to test the boundaries. If checking `age > 18`, explicitly test what happens when age is exactly 18.' }
    ],
    bestPractices: ['Write out your logic in plain English (pseudo-code) before writing the actual JavaScript.'],
    practiceExercise: {
      task: 'FizzBuzz: Write logic for a variable `n = 15`. If `n` is divisible by 3 AND 5, log "FizzBuzz". Else if divisible by 3, log "Fizz". Else if divisible by 5, log "Buzz". Else log `n`.',
      expectedOutput: '"FizzBuzz"',
      solution: 'let n = 15; if (n % 3 === 0 && n % 5 === 0) { console.log("FizzBuzz"); } else if (n % 3 === 0) { console.log("Fizz"); } else if (n % 5 === 0) { console.log("Buzz"); } else { console.log(n); }'
    },
    quiz: [
      { question: 'If you want to execute code ONLY if a variable `x` is between 10 and 20, how do you write the condition?', options: ['if (10 < x < 20)', 'if (x > 10 || x < 20)', 'if (x > 10 && x < 20)', 'if (x == 10-20)'], answer: 'if (x > 10 && x < 20)' },
      { question: 'What is the cleanest way to write `if (isValid === true)`?', options: ['if (isValid = true)', 'if (isValid)', 'if (isValid == "true")', 'if (true === isValid)'], answer: 'if (isValid)' },
      { question: 'How do you check if a string is NOT empty?', options: ['if (str != null)', 'if (str)', 'if (str === empty)', 'if (str === 0)'], answer: 'if (str)' },
      { question: 'What happens if you have an `if` block followed immediately by another `if` block (no else)?', options: ['The second one is skipped', 'They both execute independently if their conditions are true', 'It causes a syntax error', 'They merge together'], answer: 'They both execute independently if their conditions are true' },
      { question: 'Which operator should you use to assign a value based on a condition in a single line?', options: ['Ternary (?)', 'Switch', 'if', 'typeof'], answer: 'Ternary (?)' }
    ],
    interviewQuestions: [
      { q: 'In the FizzBuzz problem, why must the check for "divisible by 3 AND 5" come first in the `else if` chain?', a: 'Because conditions are checked top-to-bottom. If you check "divisible by 3" first, the number 15 will trigger it, log "Fizz", and exit the chain. It will never reach the check for "3 AND 5".' }
    ],
    summary: ['Test boundaries and edge cases.', 'Order your `else if` statements carefully.', 'Use truthy/falsy shortcuts for cleaner code.'],
    references: commonReferences
  }
};
