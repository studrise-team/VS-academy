const commonReferences = [
  { label: 'W3Schools JavaScript Loops', url: 'https://www.w3schools.com/js/js_loop_for.asp' },
  { label: 'MDN Web Docs - Loops', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' }
];

export const javascriptContentBatch4 = {
  'js_for_loop': {
    isStructured: true,
    title: '31. for Loop',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A `for` loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.',
    whyUseIt: 'If you want to print "Hello" 100 times, you don\'t want to write `console.log("Hello")` 100 times. A loop does the repetition for you.',
    syntax: 'for (initialization; condition; increment) {\n  // Code to run\n}',
    codeExample: 'for (let i = 0; i < 5; i++) {\n  console.log("Iteration number: " + i);\n}',
    expectedOutput: '"Iteration number: 0"\n"Iteration number: 1"\n"Iteration number: 2"\n"Iteration number: 3"\n"Iteration number: 4"',
    explanation: [
      { code: 'let i = 0;', desc: 'Initialization: Executed only once before the loop starts. Sets the starting counter.' },
      { code: 'i < 5;', desc: 'Condition: Checked before every iteration. If true, the loop runs. If false, it stops.' },
      { code: 'i++', desc: 'Increment: Executed AFTER each iteration to update the counter.' }
    ],
    realWorldExample: 'A game creates 10 enemy spaceships at the start of a level: `for(let i=0; i<10; i++) { spawnEnemy(); }`.',
    commonMistakes: [
      { error: 'Infinite loops', code: 'for (let i = 0; i < 5; i--) { ... }', suffix: 'If the condition never becomes false (e.g., `i` keeps going down while the condition is `i < 5`), the loop runs forever and crashes the browser.' }
    ],
    bestPractices: ['Use `let` for the loop counter (`i`), not `var`, to ensure it is block-scoped and doesn\'t leak into the rest of your program.'],
    practiceExercise: {
      task: 'Write a `for` loop that counts backwards from 3 to 1 and logs the numbers, then logs "Go!".',
      expectedOutput: '3\n2\n1\n"Go!"',
      solution: 'for (let i = 3; i > 0; i--) {\n  console.log(i);\n}\nconsole.log("Go!");'
    },
    quiz: [
      { question: 'What does a `for` loop do?', options: ['Creates an array', 'Repeats code a specific number of times', 'Checks an if statement', 'Creates a function'], answer: 'Repeats code a specific number of times' },
      { question: 'Which part of the `for` loop executes ONLY ONCE?', options: ['Initialization', 'Condition', 'Increment', 'The code block'], answer: 'Initialization' },
      { question: 'What happens if the condition is false on the very first check?', options: ['The loop runs once anyway', 'The loop never runs', 'It throws an error', 'It becomes an infinite loop'], answer: 'The loop never runs' },
      { question: 'What causes an infinite loop?', options: ['Using let instead of var', 'A condition that never becomes false', 'Missing a semicolon', 'Logging too much data'], answer: 'A condition that never becomes false' },
      { question: 'What is the standard variable name developers use for a loop counter?', options: ['count', 'number', 'i', 'indexCount'], answer: 'i' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between declaring the loop counter with `let` vs `var`?', a: 'Variables declared with `let` inside a `for` loop are block-scoped; they do not exist outside the loop. If you use `var`, the counter variable continues to exist in the outer scope after the loop finishes, which can cause bugs.' }
    ],
    summary: ['Repeats code while a condition is true.', 'Syntax: `for (start; stop_condition; step)`.', 'Beware of infinite loops.'],
    references: commonReferences
  },

  'js_while_loop': {
    isStructured: true,
    title: '32. while Loop',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A `while` loop executes a block of code as long as a specified condition evaluates to `true`. Unlike a `for` loop, it does not have built-in initialization or increment sections.',
    whyUseIt: 'Used when you don\'t know exactly how many times a loop should run in advance. It runs until a specific state is reached.',
    syntax: 'while (condition) {\n  // Code to run\n}',
    codeExample: 'let power = 100;\n\nwhile (power > 0) {\n  console.log("Still running. Power: " + power);\n  power -= 25; // Important: update the condition variable\n}\nconsole.log("Battery dead.");',
    expectedOutput: '"Still running. Power: 100"\n"Still running. Power: 75"\n"Still running. Power: 50"\n"Still running. Power: 25"\n"Battery dead."',
    explanation: [
      { code: 'while (power > 0)', desc: 'Before every iteration, it checks if power is greater than 0.' },
      { code: 'power -= 25', desc: 'You MUST change the variable inside the loop, otherwise `power` stays 100 forever (infinite loop).' }
    ],
    realWorldExample: 'A video game loop: `while (gameIsRunning) { renderGraphics(); getPlayerInput(); }`. The loop doesn\'t run exactly 100 times; it runs until the player quits.',
    commonMistakes: [
      { error: 'Forgetting to update the condition', code: 'let i = 0; while (i < 5) { console.log(i); }', suffix: 'Without `i++` inside the block, `i` is always 0. `0 < 5` is always true. The loop runs infinitely.' }
    ],
    bestPractices: ['Only use `while` loops when the number of iterations is unknown. If you know you need exactly 10 iterations, use a `for` loop.'],
    practiceExercise: {
      task: 'Declare `let count = 0;`. Write a while loop that logs `count` and adds 2 to it, as long as it is less than 5.',
      expectedOutput: '0\n2\n4',
      solution: 'let count = 0; while (count < 5) { console.log(count); count += 2; }'
    },
    quiz: [
      { question: 'When should you use a `while` loop instead of a `for` loop?', options: ['When you want to go faster', 'When you do NOT know how many times the loop needs to run', 'When you are working with arrays', 'You should never use a while loop'], answer: 'When you do NOT know how many times the loop needs to run' },
      { question: 'What does a `while` loop check before running its block of code?', options: ['The initialization variable', 'The condition', 'The increment variable', 'The array length'], answer: 'The condition' },
      { question: 'Where must you place the code that updates the condition (like `i++`) in a `while` loop?', options: ['In the parentheses', 'Outside the loop', 'Inside the loop block', 'It does it automatically'], answer: 'Inside the loop block' },
      { question: 'What happens if the while condition is initially false?', options: ['It runs once', 'It never runs', 'It runs infinitely', 'It throws an error'], answer: 'It never runs' },
      { question: 'Can a `while` loop create an infinite loop?', options: ['No, JavaScript prevents it', 'Yes, if the condition never evaluates to false', 'Only in strict mode', 'Only if you use var'], answer: 'Yes, if the condition never evaluates to false' }
    ],
    interviewQuestions: [
      { q: 'Explain the fundamental difference in use cases between a `for` loop and a `while` loop.', a: 'A `for` loop is typically used for "definite iteration", where the number of times to loop is known upfront (like iterating through an array of fixed size). A `while` loop is used for "indefinite iteration", where the loop continues until a specific state changes (like waiting for a user to click a button).' }
    ],
    summary: ['Runs as long as a condition is true.', 'Best for unknown iteration counts.', 'Must manually update the condition variable inside.'],
    references: commonReferences
  },

  'js_do_while': {
    isStructured: true,
    title: '33. do...while Loop',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'A `do...while` loop is exactly like a `while` loop, except it evaluates its condition AFTER the code block runs. This guarantees that the code block will execute at least once.',
    whyUseIt: 'When you need to prompt a user for input, and keep prompting them until the input is valid. You have to prompt them at least the first time.',
    syntax: 'do {\n  // Code to run\n} while (condition);',
    codeExample: 'let count = 10;\n\n// Even though 10 is NOT less than 5...\ndo {\n  console.log("Count is: " + count);\n  count++;\n} while (count < 5);\n\n// It still ran once!',
    expectedOutput: '"Count is: 10"',
    explanation: [
      { code: 'do { ... }', desc: 'Executes this code block immediately without checking anything.' },
      { code: 'while (count < 5)', desc: 'Checks the condition at the end. Since 11 < 5 is false, it does not loop back.' }
    ],
    realWorldExample: 'A password prompt: `do { guess = prompt("Enter password:"); } while (guess !== correctPassword);` It guarantees the prompt shows up at least once.',
    commonMistakes: [
      { error: 'Forgetting the semicolon', code: '} while (true)', suffix: 'Unlike `for` and `while` loops, the `do...while` syntax requires a semicolon at the very end.' }
    ],
    bestPractices: ['Reserve `do...while` loops strictly for scenarios where the code absolutely must execute before the first validation check.'],
    practiceExercise: {
      task: 'Declare `let x = 100;`. Write a `do...while` loop that logs `x`, subtracts 50, and loops while `x > 200`.',
      expectedOutput: '100',
      solution: 'let x = 100; do { console.log(x); x -= 50; } while (x > 200);'
    },
    quiz: [
      { question: 'What is the primary difference between `while` and `do...while`?', options: ['`do...while` is faster', '`do...while` evaluates the condition AFTER running the code block, guaranteeing at least one execution', '`do...while` does not need a condition', '`while` is for arrays'], answer: '`do...while` evaluates the condition AFTER running the code block, guaranteeing at least one execution' },
      { question: 'If the condition in a `do...while` loop is initially false, how many times will the loop run?', options: ['0', '1', 'Infinitely', '2'], answer: '1' },
      { question: 'What punctuation mark is required at the end of a `do...while` loop statement?', options: ['Colon :', 'Comma ,', 'Semicolon ;', 'None'], answer: 'Semicolon ;' },
      { question: 'When is a `do...while` loop commonly used?', options: ['Iterating through arrays', 'Math calculations', 'User input validation prompts', 'Styling HTML'], answer: 'User input validation prompts' },
      { question: 'Does `do...while` suffer from infinite loops?', options: ['No', 'Yes, if the condition never becomes false', 'Only on old browsers', 'Only if you use strings'], answer: 'Yes, if the condition never becomes false' }
    ],
    interviewQuestions: [
      { q: 'Why might a developer choose a `while(true)` loop with an internal `break` statement over a `do...while` loop?', a: 'Some developers find `while(true)` with a `break` easier to read because the exit condition is placed logically within the block where the state changes, rather than tucked away at the very end. However, `do...while` is the standard semantic choice.' }
    ],
    summary: ['Executes AT LEAST once.', 'Condition checked at the end.', 'Great for user prompts.'],
    references: commonReferences
  },

  'js_nested_loops': {
    isStructured: true,
    title: '34. Nested Loops',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A nested loop is a loop placed inside the body of another loop. For every single iteration of the "outer" loop, the "inner" loop will execute all of its iterations from start to finish.',
    whyUseIt: 'Essential for working with multi-dimensional data, like grids, matrices, or tables (rows and columns).',
    syntax: 'for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    // Code\n  }\n}',
    codeExample: 'for (let week = 1; week <= 2; week++) {\n  console.log("Week: " + week);\n  for (let day = 1; day <= 3; day++) {\n    console.log("  Day: " + day);\n  }\n}',
    expectedOutput: '"Week: 1"\n"  Day: 1"\n"  Day: 2"\n"  Day: 3"\n"Week: 2"\n"  Day: 1"\n"  Day: 2"\n"  Day: 3"',
    explanation: [
      { code: 'Outer loop (week)', desc: 'Runs twice (Week 1, Week 2).' },
      { code: 'Inner loop (day)', desc: 'Runs three times FOR EACH week. Total inner executions: 2 * 3 = 6.' }
    ],
    realWorldExample: 'Drawing a chessboard. The outer loop creates 8 rows. The inner loop creates 8 squares inside each row (8x8 = 64 squares).',
    commonMistakes: [
      { error: 'Using the same counter variable', code: 'for (let i=0; i<5; i++) { for(let i=0; i<3; i++) {} }', suffix: 'You must use different variable names for the outer and inner loops (traditionally `i`, then `j`, then `k`) to prevent them from interfering with each other.' }
    ],
    bestPractices: ['Avoid nesting loops more than 2 or 3 levels deep. It causes massive performance drops (O(n^2) or O(n^3) time complexity).'],
    practiceExercise: {
      task: 'Write a nested loop to create a 3x3 grid coordinates. Outer loop `x` (1 to 3), inner loop `y` (1 to 3). Log `x, y`.',
      expectedOutput: '1,1 \n 1,2 \n 1,3 \n 2,1 ... 3,3',
      solution: 'for(let x=1; x<=3; x++) { for(let y=1; y<=3; y++) { console.log(x+","+y); } }'
    },
    quiz: [
      { question: 'What is a nested loop?', options: ['A loop inside an if statement', 'A loop inside another loop', 'A loop that never ends', 'A loop with no condition'], answer: 'A loop inside another loop' },
      { question: 'If the outer loop runs 5 times, and the inner loop runs 4 times, how many times does the inner code execute?', options: ['9', '5', '20', '4'], answer: '20' },
      { question: 'What happens if you use `let i` for both the outer and inner loop counters?', options: ['It works perfectly', 'The inner loop overwrites the outer loop counter, causing logical bugs or infinite loops', 'The browser automatically renames it', 'It runs faster'], answer: 'The inner loop overwrites the outer loop counter, causing logical bugs or infinite loops' },
      { question: 'What are standard variable names for nested loop counters?', options: ['x, y, z', 'a, b, c', 'i, j, k', '1, 2, 3'], answer: 'i, j, k' },
      { question: 'Why should you avoid deep nesting (e.g., 4 levels deep)?', options: ['It drains battery', 'It causes extreme performance issues (exponential time complexity)', 'It deletes data', 'It is not allowed in JavaScript'], answer: 'It causes extreme performance issues (exponential time complexity)' }
    ],
    interviewQuestions: [
      { q: 'Explain the Time Complexity of a nested loop.', a: 'A standard loop has a time complexity of O(N). A nested loop (where the inner iterates based on the outer) has a time complexity of O(N^2) (Quadratic time). This means if the data size doubles, the processing time quadruples, making it very inefficient for large datasets.' }
    ],
    summary: ['A loop inside a loop.', 'Inner completes all iterations per outer iteration.', 'Beware of performance issues (O(N^2)).'],
    references: commonReferences
  },

  'js_break': {
    isStructured: true,
    title: '35. break Statement',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `break` statement instantly terminates the current loop, switch, or label statement, and transfers program control to the statement following the terminated loop.',
    whyUseIt: 'To stop a loop early when you have found what you are looking for, saving processing power and time.',
    syntax: 'break;',
    codeExample: 'for (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    console.log("Found 5! Stopping.");\n    break;\n  }\n  console.log(i);\n}',
    expectedOutput: '1\n2\n3\n4\n"Found 5! Stopping."',
    explanation: [
      { code: 'break;', desc: 'When i becomes 5, break triggers. The loop completely stops. It does not print 6, 7, 8, etc.' }
    ],
    realWorldExample: 'Searching an array of 1,000,000 user records for an ID. If you find the ID on record #5, you use `break;` so the computer doesn\'t waste time checking the remaining 999,995 records.',
    commonMistakes: [
      { error: 'Using break outside a loop or switch', code: 'if (true) { break; }', suffix: 'The `break` statement only works inside loops (`for`, `while`, `do...while`) and `switch` statements. Using it in a plain `if` causes a syntax error.' }
    ],
    bestPractices: ['Use `break` to optimize performance when searching through data arrays.'],
    practiceExercise: {
      task: 'Write a for loop from 1 to 100. If the number is divisible by 7 (use modulus), log it and `break` the loop instantly.',
      expectedOutput: '1\n2\n3\n4\n5\n6\n7',
      solution: 'for (let i = 1; i <= 100; i++) { console.log(i); if (i % 7 === 0) break; }'
    },
    quiz: [
      { question: 'What does the `break` statement do?', options: ['Pauses the loop', 'Exits the loop completely and moves to the next line of code', 'Restarts the loop', 'Skips one iteration'], answer: 'Exits the loop completely and moves to the next line of code' },
      { question: 'Can you use `break` inside a standard `if` statement that is NOT inside a loop?', options: ['Yes', 'No, it causes a syntax error', 'Only if it has an else', 'Only in strict mode'], answer: 'No, it causes a syntax error' },
      { question: 'Why is `break` useful in searching algorithms?', options: ['It deletes the data', 'It encrypts the data', 'It stops the search once the item is found, saving processing time', 'It makes the code longer'], answer: 'It stops the search once the item is found, saving processing time' },
      { question: 'If you use `break` in a nested inner loop, does it stop the outer loop too?', options: ['Yes, it stops all loops', 'No, it only stops the inner loop it is placed in', 'It pauses the outer loop', 'It causes an error'], answer: 'No, it only stops the inner loop it is placed in' },
      { question: 'What other statement uses `break`?', options: ['try/catch', 'switch', 'function', 'class'], answer: 'switch' }
    ],
    interviewQuestions: [
      { q: 'How do you break out of both an inner AND an outer loop simultaneously?', a: 'You must use a "Labeled Statement". You label the outer loop (e.g., `outerLoop: for(...)`) and then write `break outerLoop;` from inside the inner loop.' }
    ],
    summary: ['Terminates a loop instantly.', 'Great for performance optimization.', 'Only stops the loop it is currently inside.'],
    references: commonReferences
  },

  'js_continue': {
    isStructured: true,
    title: '36. continue Statement',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `continue` statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.',
    whyUseIt: 'When you want to skip over certain elements (like ignoring negative numbers) but you still want the loop to finish processing the rest.',
    syntax: 'continue;',
    codeExample: 'for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    continue; // Skip the rest of this iteration\n  }\n  console.log(i);\n}',
    expectedOutput: '1\n2\n4\n5',
    explanation: [
      { code: 'continue;', desc: 'When i is 3, continue triggers. It immediately jumps back to the top of the loop (i++). The console.log(3) is skipped.' }
    ],
    realWorldExample: 'Processing a list of user transactions. If a transaction is marked as "Failed", use `continue;` to skip calculating it, and move on to the next one.',
    commonMistakes: [
      { error: 'Using continue in a while loop incorrectly', code: 'let i=0; while(i<5) { if(i===2) continue; i++; }', suffix: 'If you use continue in a while loop BEFORE you update the counter (i++), it will skip the update, stay on 2 forever, and create an infinite loop.' }
    ],
    bestPractices: ['Use `continue` to filter out bad data quickly at the top of a loop block.'],
    practiceExercise: {
      task: 'Write a for loop from 1 to 5. Use an if statement with `continue` to skip the number 4. Log the others.',
      expectedOutput: '1\n2\n3\n5',
      solution: 'for(let i=1; i<=5; i++){ if(i===4) continue; console.log(i); }'
    },
    quiz: [
      { question: 'What is the difference between `break` and `continue`?', options: ['They are the same', '`break` skips one step, `continue` stops the loop completely', '`break` stops the loop completely, `continue` skips the current iteration and moves to the next', '`continue` is for arrays only'], answer: '`break` stops the loop completely, `continue` skips the current iteration and moves to the next' },
      { question: 'What happens to the code BELOW the `continue` statement inside the loop block?', options: ['It runs twice', 'It is skipped for that specific iteration', 'It throws an error', 'It runs normally'], answer: 'It is skipped for that specific iteration' },
      { question: 'Can `continue` be used in a switch statement?', options: ['Yes', 'No', 'Only in strict mode', 'Only inside functions'], answer: 'No' },
      { question: 'Why must you be careful using `continue` inside a `while` loop?', options: ['It crashes the browser', 'You might skip the counter increment, causing an infinite loop', 'It deletes the variables', 'It returns undefined'], answer: 'You might skip the counter increment, causing an infinite loop' },
      { question: 'Does `continue` stop the entire loop?', options: ['Yes', 'No', 'Only if the condition is true', 'Only for numbers'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'Can you use `continue` with a label like you can with `break`?', a: 'Yes. In nested loops, `continue labelName;` will jump to the next iteration of the loop designated by that specific label.' }
    ],
    summary: ['Skips the current iteration.', 'Moves to the next loop cycle.', 'Beware of infinite loops in `while` statements.'],
    references: commonReferences
  },

  'js_for_of': {
    isStructured: true,
    title: '37. for...of Loop',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `for...of` statement creates a loop iterating over iterable objects, such as Arrays, Strings, Maps, and Sets. It provides a much cleaner syntax than a traditional `for` loop.',
    whyUseIt: 'When you want to loop through every item in an array or string without having to manually track index numbers (like `i`).',
    syntax: 'for (let item of iterable) {\n  // Code\n}',
    codeExample: 'let fruits = ["Apple", "Banana", "Cherry"];\n\nfor (let fruit of fruits) {\n  console.log(fruit);\n}\n\nlet word = "JS";\nfor (let letter of word) {\n  console.log(letter);\n}',
    expectedOutput: '"Apple"\n"Banana"\n"Cherry"\n"J"\n"S"',
    explanation: [
      { code: 'let fruit of fruits', desc: 'JavaScript automatically extracts each item in the array, one by one, and assigns it to the variable `fruit`.' }
    ],
    realWorldExample: 'Displaying a list of products on an e-commerce page: `for (let product of productList) { renderCard(product); }`',
    commonMistakes: [
      { error: 'Trying to use for...of on a regular Object', code: 'let obj = {a: 1}; for(let val of obj)', suffix: 'Regular JavaScript Objects `{}` are NOT iterable. If you try to use `for...of` on them, you will get a TypeError. Use `for...in` instead.' }
    ],
    bestPractices: ['Use `for...of` as your default loop for Arrays. It is cleaner, safer, and prevents "off-by-one" index errors.'],
    practiceExercise: {
      task: 'Create an array `colors = ["red", "blue", "green"]`. Use a `for...of` loop to log each color.',
      expectedOutput: '"red"\n"blue"\n"green"',
      solution: 'let colors = ["red", "blue", "green"]; for (let c of colors) { console.log(c); }'
    },
    quiz: [
      { question: 'What is `for...of` best used for?', options: ['Regular Objects', 'Iterables like Arrays and Strings', 'Mathematical calculations', 'Creating variables'], answer: 'Iterables like Arrays and Strings' },
      { question: 'Do you need to use index numbers (like `i`) with a `for...of` loop?', options: ['Yes', 'No, it extracts the items directly', 'Only for strings', 'Only for large arrays'], answer: 'No, it extracts the items directly' },
      { question: 'What happens if you use `for...of` on a standard Object `{}`?', options: ['It works perfectly', 'It loops through the keys', 'It throws a TypeError: object is not iterable', 'It returns undefined'], answer: 'It throws a TypeError: object is not iterable' },
      { question: 'Can you use `break` inside a `for...of` loop?', options: ['Yes', 'No', 'Only if there is an if statement', 'Only in functions'], answer: 'Yes' },
      { question: 'What keyword connects the variable to the iterable?', options: ['in', 'from', 'of', 'at'], answer: 'of' }
    ],
    interviewQuestions: [
      { q: 'What is the main advantage of `for...of` over `forEach`?', a: 'You cannot use `break`, `continue`, or `yield` inside a `forEach` loop. A `for...of` loop supports all standard loop control statements.' }
    ],
    summary: ['Best loop for Arrays and Strings.', 'Does not require index tracking.', 'Cannot be used on standard Objects `{}`.'],
    references: commonReferences
  },

  'js_for_in': {
    isStructured: true,
    title: '38. for...in Loop',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `for...in` statement iterates over all enumerable properties (keys) of an Object. It allows you to inspect the contents of an object.',
    whyUseIt: 'When you have a data object (like a user profile) and you need to look at every property inside it, even if you don\'t know the property names in advance.',
    syntax: 'for (let key in object) {\n  // Code\n}',
    codeExample: 'let user = {\n  name: "Alice",\n  age: 25,\n  role: "Admin"\n};\n\nfor (let key in user) {\n  // Accessing the key AND the value\n  console.log(key + ": " + user[key]);\n}',
    expectedOutput: '"name: Alice"\n"age: 25"\n"role: Admin"',
    explanation: [
      { code: 'let key in user', desc: 'Loops 3 times. Key becomes "name", then "age", then "role".' },
      { code: 'user[key]', desc: 'Uses Bracket Notation to access the actual value (e.g., user["name"]).' }
    ],
    realWorldExample: 'Debugging or printing out all the settings a user has customized in their profile object.',
    commonMistakes: [
      { error: 'Using for...in on Arrays', code: 'let arr = [10, 20]; for (let i in arr)', suffix: 'While it technically works, `for...in` iterates over the indexes as strings ("0", "1"), NOT the values. Furthermore, it might iterate in a random order. Always use `for...of` for arrays.' }
    ],
    bestPractices: ['Strictly reserve `for...in` for Objects. Use `for...of` for Arrays.'],
    practiceExercise: {
      task: 'Create `let car = { make: "Ford", model: "Mustang" };`. Write a `for...in` loop to log only the keys (not the values).',
      expectedOutput: '"make"\n"model"',
      solution: 'let car = { make: "Ford", model: "Mustang" }; for (let k in car) { console.log(k); }'
    },
    quiz: [
      { question: 'What is `for...in` best used for?', options: ['Arrays', 'Strings', 'Standard Objects', 'Functions'], answer: 'Standard Objects' },
      { question: 'What does the variable in a `for...in` loop represent?', options: ['The value', 'The Object property key/name', 'The object itself', 'An index number'], answer: 'The Object property key/name' },
      { question: 'How do you access the value of the object during the loop?', options: ['object.key', 'object[key]', 'key.value', 'value(key)'], answer: 'object[key]' },
      { question: 'Is it recommended to use `for...in` on Arrays?', options: ['Yes, it is the best way', 'No, because it returns string indexes and order is not guaranteed', 'Only for large arrays', 'Only for numbers'], answer: 'No, because it returns string indexes and order is not guaranteed' },
      { question: 'What keyword is used?', options: ['of', 'in', 'at', 'from'], answer: 'in' }
    ],
    interviewQuestions: [
      { q: 'Why is `for...in` considered risky for arrays?', a: 'Because `for...in` iterates over all enumerable properties. If a third-party library adds a custom property or function to the Array prototype, the `for...in` loop will iterate over that custom property as well, breaking your code.' }
    ],
    summary: ['Iterates over Object keys.', 'Use bracket notation `obj[key]` for values.', 'Do NOT use on Arrays.'],
    references: commonReferences
  },

  'js_loop_practice': {
    isStructured: true,
    title: '39. Loop Practice Problems',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Practical problems to combine your knowledge of for loops, while loops, array iteration, and control statements.',
    whyUseIt: 'Repetition is the only way to solidify your understanding of control flow.',
    syntax: '// Apply Module 4 concepts',
    codeExample: '// Problem: Sum all numbers in an array\nlet nums = [5, 10, 15];\nlet sum = 0;\n\nfor (let num of nums) {\n  sum += num;\n}\nconsole.log(sum);',
    expectedOutput: '30',
    explanation: [
      { code: 'let sum = 0;', desc: 'Create a variable OUTSIDE the loop to hold the total.' },
      { code: 'sum += num;', desc: 'Add each item to the total.' }
    ],
    realWorldExample: 'Algorithms. Every technical interview will require you to loop over data, manipulate it, and return a result.',
    commonMistakes: [
      { error: 'Off-by-one errors', code: 'for(let i=0; i<=arr.length; i++)', suffix: 'When using a standard for loop on an array, the condition must be strictly `< length`, not `<=`. If you use `<=`, the last iteration will return undefined.' }
    ],
    bestPractices: ['When given a problem, write down the steps on paper before writing the loop in JavaScript.'],
    practiceExercise: {
      task: 'Write a loop that prints the even numbers from 2 to 10.',
      expectedOutput: '2\n4\n6\n8\n10',
      solution: 'for(let i=2; i<=10; i+=2) { console.log(i); }'
    },
    quiz: [
      { question: 'If an array has 5 items, what are its valid index numbers?', options: ['1 to 5', '0 to 4', '0 to 5', '1 to 6'], answer: '0 to 4' },
      { question: 'What is an "off-by-one" error?', options: ['Missing a semicolon', 'Looping one time too many or one time too few', 'Using the wrong variable name', 'Deleting an array'], answer: 'Looping one time too many or one time too few' },
      { question: 'How can you easily loop backwards through an array?', options: ['Use a while loop', 'Use for...of', 'Start `i` at array.length - 1, and use `i--`', 'You cannot loop backwards'], answer: 'Start `i` at array.length - 1, and use `i--`' },
      { question: 'Which loop is easiest for arrays if you do NOT care about the index?', options: ['for', 'while', 'do...while', 'for...of'], answer: 'for...of' },
      { question: 'Which loop is easiest for objects?', options: ['for', 'while', 'for...in', 'for...of'], answer: 'for...in' }
    ],
    interviewQuestions: [
      { q: 'How would you find the largest number in an array using a loop?', a: 'Create a variable `let max = array[0];`. Loop through the array. If the current number is greater than `max`, update `max = currentNumber;`. Return `max` at the end.' }
    ],
    summary: ['Beware of off-by-one errors.', 'Use `for...of` for arrays.', 'Use `for...in` for objects.'],
    references: commonReferences
  }
};
