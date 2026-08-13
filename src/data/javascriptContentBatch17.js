const commonReferences = [
  { label: 'MDN Web Docs - Error Handling', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
  { label: 'W3Schools JS Errors', url: 'https://www.w3schools.com/js/js_errors.asp' }
];

export const javascriptContentBatch17 = {
  'js_javascript_errors': {
    isStructured: true,
    title: '229-232. JavaScript Errors',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Errors are mistakes in your code that cause the program to behave unexpectedly or crash. There are three main types: Syntax Errors (typos in the code), Runtime Errors (code is valid, but fails when it tries to execute), and Logical Errors (code runs without crashing, but produces the wrong result).',
    whyUseIt: 'Understanding the types of errors helps you figure out HOW to fix them. If you know what a Syntax Error looks like, you know you just need to check your spelling or brackets.',
    syntax: '// Syntax Error: missing bracket\n// Runtime Error: referencing undefined variable\n// Logical Error: 2 + 2 = 5',
    codeExample: '// 1. Syntax Error (Uncomment to see crash)\n// let name = "John;\n\n// 2. Runtime Error (ReferenceError)\n// console.log(unknownVariable);\n\n// 3. Logical Error\nfunction calculateTotal(price, tax) {\n  return price - tax; // Logical mistake! Should be + tax\n}\nconsole.log(calculateTotal(100, 10)); // Outputs 90, not 110',
    expectedOutput: '90 (A Logical Error occurred)',
    explanation: [
      { code: 'let name = "John;', desc: 'Syntax Error. The browser cannot even parse this code because the closing quote is missing.' },
      { code: 'console.log(unknownVariable);', desc: 'Runtime Error. The syntax is fine, but when the browser tries to run it, the variable doesn\'t exist.' },
      { code: 'price - tax', desc: 'Logical Error. The hardest to find, because the browser doesn\'t give you an error message. The code just does the wrong math.' }
    ],
    realWorldExample: 'A checkout system charges users the wrong amount because of a Logical Error (subtracting shipping instead of adding it). The site doesn\'t crash, but the business loses money.',
    commonMistakes: [
      { error: 'Ignoring error messages in the console', code: 'Uncaught TypeError: Cannot read properties of null', suffix: 'Beginners often ignore red text in the console. Error messages tell you exactly which line crashed and why! Read them carefully.' }
    ],
    bestPractices: ['Always keep the Browser DevTools (F12) console open while writing code so you can instantly see if you create a Syntax or Runtime error.'],
    practiceExercise: {
      task: 'Write a small function that intends to multiply two numbers, but has a Logical Error where it adds them instead. Call it with (5, 5).',
      expectedOutput: '10 (Instead of 25)',
      solution: 'function multiplyError(a, b) { return a + b; } console.log(multiplyError(5, 5));'
    },
    quiz: [
      { question: 'What type of error is caused by missing a closing bracket `}`?', options: ['Runtime Error', 'Logical Error', 'Syntax Error', 'Network Error'], answer: 'Syntax Error' },
      { question: 'What type of error occurs if you try to call a function that doesn\'t exist?', options: ['Runtime Error', 'Logical Error', 'Syntax Error', 'Formatting Error'], answer: 'Runtime Error' },
      { question: 'Which error type will NOT show a red error message in the browser console?', options: ['Syntax Error', 'ReferenceError', 'TypeError', 'Logical Error'], answer: 'Logical Error' },
      { question: 'What is a TypeError?', options: ['A typo in the code', 'A type of Runtime error where you try to perform an operation on the wrong type of data (e.g., calling a string as a function)', 'An error related to typing on the keyboard', 'A logical error'], answer: 'A type of Runtime error where you try to perform an operation on the wrong type of data (e.g., calling a string as a function)' },
      { question: 'Where do you look to see JavaScript errors?', options: ['The HTML file', 'The CSS file', 'The Browser Developer Tools Console', 'The server logs'], answer: 'The Browser Developer Tools Console' }
    ],
    interviewQuestions: [
      { q: 'Can a Syntax Error be caught by a `try...catch` block?', a: 'No. `try...catch` only catches Runtime errors. If there is a Syntax error, the JavaScript engine fails to parse the file entirely, so the `try...catch` never even gets executed.' }
    ],
    summary: ['Syntax: Typos/grammar mistakes.', 'Runtime: Fails during execution (e.g., missing variable).', 'Logical: Code runs, but math/logic is wrong.'],
    references: commonReferences
  },

  'js_try_catch_throw_finally': {
    isStructured: true,
    title: '233-235. try...catch, throw, finally',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`try...catch` is a construct used to handle Runtime errors gracefully. You put risky code in the `try` block. If it crashes, the program doesn\'t stop; instead, control jumps to the `catch` block. `throw` lets you create custom errors. `finally` runs code regardless of success or failure.',
    whyUseIt: 'If your app asks a server for data and the server is down, a normal script will crash, freezing the whole page. With `try...catch`, you catch the error and show a polite "Server unavailable" message to the user instead.',
    syntax: 'try {\n  // Risky code\n} catch (error) {\n  // Handle error\n} finally {\n  // Always runs\n}',
    codeExample: 'function parseUserJSON(jsonString) {\n  try {\n    console.log("Trying to parse...");\n    const user = JSON.parse(jsonString);\n    \n    if (!user.name) {\n      throw new Error("JSON is valid, but missing a name!");\n    }\n    \n    console.log("Success:", user.name);\n  } catch (error) {\n    console.log("Caught an Error:", error.message);\n  } finally {\n    console.log("Parsing attempt finished.");\n  }\n}\n\n// Calling with bad JSON\nparseUserJSON(\'{"age": 25}\');',
    expectedOutput: '"Trying to parse..."\n"Caught an Error: JSON is valid, but missing a name!"\n"Parsing attempt finished."',
    explanation: [
      { code: 'try { ... }', desc: 'We attempt to run this code. If ANY line in here throws an error, execution immediately stops and jumps to `catch`.' },
      { code: 'throw new Error(...)', desc: 'We artificially force an error to happen because the data didn\'t meet our specific requirements.' },
      { code: 'catch (error)', desc: 'This block receives the error object, allowing us to log it or alert the user without crashing the app.' },
      { code: 'finally { ... }', desc: 'Runs no matter what. Excellent for hiding loading spinners or closing database connections.' }
    ],
    realWorldExample: 'Processing a credit card. `try { chargeCard(); } catch(e) { showDeclinedMessage(); } finally { hideLoadingSpinner(); }`.',
    commonMistakes: [
      { error: 'Putting all code in a giant try block', code: 'try { /* 500 lines of code */ } catch(e) {}', suffix: 'Only wrap the specific code that you EXPECT might fail (like `JSON.parse` or API calls). Wrapping the whole file hides unrelated bugs.' }
    ],
    bestPractices: ['Don\'t leave a `catch` block empty (e.g., `catch(e) {}`). This is called "swallowing" an error. It makes debugging impossible because the code silently fails. Always at least `console.error(e)`.'],
    practiceExercise: {
      task: 'Write a `try...catch` block. Inside `try`, explicitly `throw new Error("Oops!")`. Inside `catch`, log the error message.',
      expectedOutput: '"Oops!"',
      solution: 'try { throw new Error("Oops!"); } catch (err) { console.log(err.message); }'
    },
    quiz: [
      { question: 'What does the `try` block do?', options: ['Handles the error', 'Contains code that might throw an error', 'Throws a custom error', 'Runs after the error'], answer: 'Contains code that might throw an error' },
      { question: 'What does the `catch` block do?', options: ['Catches user input', 'Runs only if the try block is successful', 'Executes if an error occurs in the try block', 'Creates a new error'], answer: 'Executes if an error occurs in the try block' },
      { question: 'What is the purpose of the `throw` keyword?', options: ['To discard a variable', 'To manually generate/trigger a custom error', 'To throw data to the server', 'To exit a loop'], answer: 'To manually generate/trigger a custom error' },
      { question: 'When does the `finally` block execute?', options: ['Only on success', 'Only on error', 'It always executes, regardless of whether an error occurred or not', 'Only if you use the throw keyword'], answer: 'It always executes, regardless of whether an error occurred or not' },
      { question: 'What happens if a runtime error occurs OUTSIDE of a `try...catch` block?', options: ['The browser fixes it', 'It becomes a syntax error', 'The script crashes and execution stops', 'It is ignored'], answer: 'The script crashes and execution stops' }
    ],
    interviewQuestions: [
      { q: 'If a function inside a `try` block contains a `setTimeout` which throws an error after 2 seconds, will the `catch` block catch it?', a: 'No! The `try...catch` executes synchronously. By the time the `setTimeout` callback runs and throws the error 2 seconds later, the `try...catch` has already finished and moved on. The error will crash the program.' }
    ],
    summary: ['`try` wraps risky code.', '`catch` handles the crash gracefully.', '`throw` creates custom errors.', '`finally` always runs.'],
    references: commonReferences
  },

  'js_debugging_console_methods': {
    isStructured: true,
    title: '236-237. Debugging & Console Methods',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Debugging is the process of finding and fixing bugs (errors) in your code. Browser Developer Tools (DevTools) provide powerful features like breakpoints. The `console` object provides methods to print various types of data to the DevTools console.',
    whyUseIt: 'You need to know what your code is doing behind the scenes. Without `console.log`, you are flying blind. Without breakpoints, you can\'t step through complex logic line-by-line to see where the math goes wrong.',
    syntax: 'console.log(data);\nconsole.error(msg);\nconsole.table(array);\ndebugger;',
    codeExample: 'const users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" }\n];\n\n// 1. Standard log\nconsole.log("Checking users...");\n\n// 2. Table view (great for arrays of objects!)\nconsole.table(users);\n\n// 3. Error styling (prints in red)\nconsole.error("This is a simulated error message.");\n\n// 4. Warning styling (prints in yellow)\nconsole.warn("This is a warning.");\n\nfunction calculate() {\n  let x = 10;\n  // 5. The debugger keyword pauses execution if DevTools is open\n  debugger; \n  x += 5;\n}\ncalculate();',
    expectedOutput: '(Check Browser Console: See standard text, a formatted table, red error text, yellow warning text, and the script pausing)',
    explanation: [
      { code: 'console.table(users)', desc: 'A fantastic way to visualize arrays and objects in a neat grid.' },
      { code: 'console.error()', desc: 'Formats the output in red, making it stand out from standard logs.' },
      { code: 'debugger;', desc: 'If the browser DevTools are open, the JavaScript engine will freeze exactly on this line. You can then inspect variable values by hovering over them.' }
    ],
    realWorldExample: 'You have a massive array of 50 products coming from an API. You use `console.table(products)` to quickly scan if the prices are formatted correctly.',
    commonMistakes: [
      { error: 'Leaving console.log in production', code: 'console.log("User password is:", pwd);', suffix: 'Always remove or disable `console.log` statements before deploying your website. It clutters the console and can leak sensitive information.' }
    ],
    bestPractices: ['Instead of `console.log(variable)`, use `console.log({variable})`. By wrapping it in an object, the console will print both the variable name AND its value!'],
    practiceExercise: {
      task: 'Create an array with your 3 favorite colors. Log it to the console using `console.table()`.',
      expectedOutput: '(A visual table in the console showing the indexes and colors)',
      solution: 'let colors = ["Red", "Blue", "Green"]; console.table(colors);'
    },
    quiz: [
      { question: 'What is debugging?', options: ['Writing new code', 'Removing viruses', 'The process of finding and fixing errors in code', 'Optimizing images'], answer: 'The process of finding and fixing errors in code' },
      { question: 'Which console method prints a message in red text?', options: ['.log()', '.warn()', '.error()', '.table()'], answer: '.error()' },
      { question: 'Which console method is best for viewing an array of objects?', options: ['.log()', '.array()', '.grid()', '.table()'], answer: '.table()' },
      { question: 'What does the `debugger;` keyword do?', options: ['Fixes all bugs automatically', 'Pauses the execution of JavaScript (if DevTools is open) so you can inspect variables', 'Crashes the browser', 'Deletes the file'], answer: 'Pauses the execution of JavaScript (if DevTools is open) so you can inspect variables' },
      { question: 'How do you open the Browser Developer Tools on most browsers?', options: ['F1', 'F12 (or Right-Click -> Inspect)', 'Ctrl + S', 'Alt + F4'], answer: 'F12 (or Right-Click -> Inspect)' }
    ],
    interviewQuestions: [
      { q: 'What is `console.time()` and `console.timeEnd()` used for?', a: 'They are used to benchmark code performance. You start the timer before a block of code, and end it after. The console will print exactly how many milliseconds the code took to execute.' }
    ],
    summary: ['DevTools (F12) are essential for debugging.', 'Use `console.table` for arrays/objects.', 'Use the `debugger` keyword to pause code.'],
    references: commonReferences
  }
};
