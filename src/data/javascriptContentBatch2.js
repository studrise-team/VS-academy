const commonReferences = [
  { label: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/' },
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatch2 = {
  'js_arithmetic_operators': {
    isStructured: true,
    title: '15. Arithmetic Operators',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Arithmetic operators are used to perform mathematical calculations on numbers, such as addition, subtraction, multiplication, and division.',
    whyUseIt: 'Any time your program needs to calculate a total, find a percentage, or figure out the remainder of a division, you use arithmetic operators.',
    syntax: '+ (Addition)\n- (Subtraction)\n* (Multiplication)\n/ (Division)\n% (Modulus/Remainder)\n** (Exponentiation)',
    codeExample: 'let a = 10;\nlet b = 3;\n\nconsole.log(a + b); // 13\nconsole.log(a - b); // 7\nconsole.log(a * b); // 30\nconsole.log(a / b); // 3.333...\nconsole.log(a % b); // 1 (Remainder of 10 / 3)\nconsole.log(a ** b); // 1000 (10 to the power of 3)',
    expectedOutput: 'The results of the mathematical operations.',
    explanation: [
      { code: 'a % b', desc: 'The Modulus operator (%) returns the remainder of a division. 10 divided by 3 is 9, with 1 left over.' },
      { code: 'a ** b', desc: 'The Exponentiation operator (**), added in ES2016, calculates a to the power of b.' }
    ],
    realWorldExample: 'An online store uses addition to calculate the cart subtotal, multiplication to calculate the sales tax (`subtotal * 0.08`), and addition again for the final price.',
    commonMistakes: [
      { error: 'Adding strings and numbers', code: 'console.log(5 + "5");', suffix: 'If you use the `+` operator with a string, JavaScript concatenates (joins) them instead of adding them, resulting in "55".' }
    ],
    bestPractices: ['Ensure both variables are Numbers before using arithmetic operators. Use explicit conversion `Number(val)` if unsure.'],
    practiceExercise: {
      task: 'Create variables `x = 15` and `y = 4`. Calculate and log the remainder when x is divided by y using the modulus operator.',
      expectedOutput: '3',
      solution: 'let x = 15; let y = 4; console.log(x % y);'
    },
    quiz: [
      { question: 'Which operator is used to find the remainder of a division?', options: ['/', '%', '\\', '//'], answer: '%' },
      { question: 'What is the result of `10 ** 2`?', options: ['20', '100', '12', '5'], answer: '100' },
      { question: 'What happens if you run `"10" - 2`?', options: ['NaN', '"102"', '8', 'Error'], answer: '8' },
      { question: 'What happens if you run `"10" + 2`?', options: ['12', '"102"', 'NaN', 'Error'], answer: '"102"' },
      { question: 'Which operator is used for standard division?', options: ['%', '\\', '/', 'div'], answer: '/' }
    ],
    interviewQuestions: [
      { q: 'How can you use the Modulus (%) operator to check if a number is even or odd?', a: 'You can do `number % 2`. If the result is 0, the number is even. If the result is 1, the number is odd.' }
    ],
    summary: ['Used for basic math.', '`%` returns the remainder.', '`**` calculates exponents.'],
    references: commonReferences
  },

  'js_assignment_operators': {
    isStructured: true,
    title: '16. Assignment Operators',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Assignment operators assign a value to a variable. The most common is the equals sign `=`, but there are shorthand operators to perform math and assign the result at the same time.',
    whyUseIt: 'They save time and make code cleaner. Instead of writing `score = score + 5`, you can write `score += 5`.',
    syntax: '=\n+=\n-=\n*=\n/=\n%=',
    codeExample: 'let points = 10; // Assigns 10 to points\n\npoints += 5; // Same as points = points + 5 (Now 15)\npoints -= 2; // Same as points = points - 2 (Now 13)\npoints *= 2; // Same as points = points * 2 (Now 26)',
    expectedOutput: 'The variable updates its own value based on the math operation.',
    explanation: [
      { code: 'points += 5', desc: 'Adds 5 to the current value of points and saves the new value back into points.' }
    ],
    realWorldExample: 'In a video game, when a player collects a coin, the code runs `coins += 1;` to update their total.',
    commonMistakes: [
      { error: 'Confusing assignment with equality', code: 'if (x = 10)', suffix: 'The `=` operator ASSIGNS a value, it does not COMPARE. This mistake will forcefully change x to 10 and evaluate to true. Always use `===` for comparison.' }
    ],
    bestPractices: ['Use shorthand assignment operators (`+=`, `-=`) to keep code concise when modifying an existing variable.'],
    practiceExercise: {
      task: 'Create a variable `health = 100`. The player takes 20 damage. Use a shorthand assignment operator to update the health, then log it.',
      expectedOutput: '80',
      solution: 'let health = 100; health -= 20; console.log(health);'
    },
    quiz: [
      { question: 'What does the `=` operator do in JavaScript?', options: ['Compares two values', 'Assigns a value to a variable', 'Calculates math', 'Checks for equality'], answer: 'Assigns a value to a variable' },
      { question: 'What is `x += 5` shorthand for?', options: ['x = 5 + 5', 'x = x + 5', 'x = x - 5', 'x + 5 = x'], answer: 'x = x + 5' },
      { question: 'If `let y = 10;`, what is the value of `y` after `y *= 3;`?', options: ['13', '7', '30', '103'], answer: '30' },
      { question: 'Can you use assignment operators on variables declared with `const`?', options: ['Yes', 'No, const variables cannot be reassigned', 'Only `+=` is allowed', 'Only strings'], answer: 'No, const variables cannot be reassigned' },
      { question: 'Which operator assigns the remainder to the variable?', options: ['/=', '*=', '%=', '-='], answer: '%=' }
    ],
    interviewQuestions: [
      { q: 'What happens if you use a single `=` inside an `if` statement? (e.g. `if (a = b)`)', a: 'It performs an assignment instead of a comparison. The value of `b` is assigned to `a`, and then the `if` statement evaluates the "truthiness" of that new assigned value. This is a common bug.' }
    ],
    summary: ['`=` assigns data.', '`+=`, `-=`, etc. are shorthand for update logic.', 'Cannot be used on `const` variables.'],
    references: commonReferences
  },

  'js_comparison_operators': {
    isStructured: true,
    title: '17. Comparison Operators',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Comparison operators compare two values and evaluate to a Boolean (`true` or `false`). They are the foundation of decision-making in code.',
    whyUseIt: 'Used to check conditions. For example, checking if a user\'s password matches the saved password, or if their age is over 18.',
    syntax: '==  (Loose equality)\n=== (Strict equality)\n!=  (Loose inequality)\n!== (Strict inequality)\n>   (Greater than)\n<   (Less than)\n>=  (Greater than or equal)\n<=  (Less than or equal)',
    codeExample: 'console.log(5 > 3);    // true\nconsole.log(5 >= 5);   // true\nconsole.log(10 < 2);   // false\n\n// Equality vs Strict Equality\nconsole.log(5 == "5");  // true (Values match)\nconsole.log(5 === "5"); // false (Types do NOT match)',
    expectedOutput: 'Boolean values (true or false).',
    explanation: [
      { code: '5 == "5"', desc: 'Loose equality allows type coercion. It changes the string to a number, then compares. (Avoid using this).' },
      { code: '5 === "5"', desc: 'Strict equality checks BOTH the value and the exact data type. Number is not String, so it is false. (Always use this).' }
    ],
    realWorldExample: 'A ticketing website uses `>=` to check if a user is old enough: `if (userAge >= 18) { grantAccess(); }`.',
    commonMistakes: [
      { error: 'Using == instead of ===', code: 'if (input == 0)', suffix: 'If you use `==`, JavaScript might coerce empty strings or false to 0, causing unexpected bugs. Always use `===`.' }
    ],
    bestPractices: ['Always use Strict Equality `===` and Strict Inequality `!==` to prevent type coercion bugs.'],
    practiceExercise: {
      task: 'Create variables `a = 10` (number) and `b = "10"` (string). Log the result of `a == b` and `a === b`.',
      expectedOutput: 'true, false',
      solution: 'let a = 10; let b = "10"; console.log(a == b); console.log(a === b);'
    },
    quiz: [
      { question: 'What is the difference between `==` and `===`?', options: ['They are exactly the same', '`==` compares type only, `===` compares value only', '`==` allows type coercion, `===` strictly checks value AND data type', '`===` is for strings only'], answer: '`==` allows type coercion, `===` strictly checks value AND data type' },
      { question: 'What does `10 !== 10` evaluate to?', options: ['true', 'false', 'NaN', 'Error'], answer: 'false' },
      { question: 'What does `5 >= 5` evaluate to?', options: ['true', 'false', 'NaN', 'Error'], answer: 'true' },
      { question: 'Which operator means "Strict Inequality"?', options: ['!=', '!==', '<>', '=/='], answer: '!==' },
      { question: 'Is it best practice to use `==` or `===`?', options: ['==', '===', 'Neither', 'Both'], answer: '===' }
    ],
    interviewQuestions: [
      { q: 'Why is `NaN === NaN` false in JavaScript?', a: 'According to the IEEE 754 floating-point standard, NaN is not equal to anything, not even itself. To check if a value is NaN, you must use the `Number.isNaN()` function.' }
    ],
    summary: ['Evaluate to Booleans.', 'Always use `===` to prevent coercion bugs.', 'Used heavily in `if` statements.'],
    references: commonReferences
  },

  'js_logical_operators': {
    isStructured: true,
    title: '18. Logical Operators',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Logical operators (`&&`, `||`, `!`) are used to combine multiple comparison conditions together into a single Boolean result.',
    whyUseIt: 'You often need multiple things to be true. For example, a user can only log in IF their email is correct AND their password is correct.',
    syntax: '&& (AND - both sides must be true)\n|| (OR - at least one side must be true)\n!  (NOT - reverses the boolean)',
    codeExample: 'let isAdult = true;\nlet hasTicket = false;\n\n// AND: Both must be true\nconsole.log(isAdult && hasTicket); // false\n\n// OR: One must be true\nconsole.log(isAdult || hasTicket); // true\n\n// NOT: Reverses the value\nconsole.log(!isAdult); // false',
    expectedOutput: 'Booleans evaluating combined logic.',
    explanation: [
      { code: '&&', desc: 'If the left side is false, the whole thing fails immediately (Short-circuiting).' },
      { code: '||', desc: 'If the left side is true, the whole thing passes immediately (Short-circuiting).' },
      { code: '!', desc: 'Turns true into false, and false into true.' }
    ],
    realWorldExample: 'An online store applies a discount if `(userPoints > 1000) || (userIsVIP === true)`. If either condition is true, they get the discount.',
    commonMistakes: [
      { error: 'Misunderstanding short-circuit evaluation', code: 'false && executeFunction()', suffix: 'Because it is an AND (`&&`) operator and the first value is false, JS stops immediately. `executeFunction()` will never be called.' }
    ],
    bestPractices: ['Use parentheses to group complex logical conditions to make them readable: `if ((a && b) || c)`.'],
    practiceExercise: {
      task: 'Create variables `hasLicense = true` and `isTired = true`. A person can drive if they have a license AND are NOT tired. Write a log using logic operators to see if they can drive.',
      expectedOutput: 'false',
      solution: 'let hasLicense = true; let isTired = true; console.log(hasLicense && !isTired);'
    },
    quiz: [
      { question: 'What does the `&&` operator do?', options: ['Returns true if ONE condition is true', 'Returns true only if BOTH conditions are true', 'Reverses the boolean', 'Adds numbers together'], answer: 'Returns true only if BOTH conditions are true' },
      { question: 'What does the `||` operator do?', options: ['Returns true if ONE condition is true', 'Returns true only if BOTH conditions are true', 'Reverses the boolean', 'Subtracts numbers'], answer: 'Returns true if ONE condition is true' },
      { question: 'What does `!true` evaluate to?', options: ['true', 'false', 'undefined', 'error'], answer: 'false' },
      { question: 'Evaluate: `(5 > 3) && (10 < 5)`', options: ['true', 'false', 'NaN', 'Error'], answer: 'false' },
      { question: 'Evaluate: `(5 > 3) || (10 < 5)`', options: ['true', 'false', 'NaN', 'Error'], answer: 'true' }
    ],
    interviewQuestions: [
      { q: 'Explain short-circuit evaluation in JavaScript.', a: 'When evaluating logical expressions, JS stops processing as soon as it finds the definitive answer. For `a && b`, if `a` is false, it returns `a` and doesn\'t even look at `b`. For `a || b`, if `a` is true, it returns `a` and ignores `b`.' }
    ],
    summary: ['`&&` (AND): Both sides must be true.', '`||` (OR): One side must be true.', '`!` (NOT): Flips the boolean value.'],
    references: commonReferences
  },

  'js_increment_and_decrement': {
    isStructured: true,
    title: '19. Increment and Decrement',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The increment (`++`) and decrement (`--`) operators are shorthands to add or subtract exactly 1 from a numerical variable.',
    whyUseIt: 'They are incredibly common in loops and counters to step up or down by one without writing out `x = x + 1`.',
    syntax: 'variable++  (Adds 1)\nvariable--  (Subtracts 1)',
    codeExample: 'let count = 0;\n\ncount++; // count is now 1\ncount++; // count is now 2\ncount--; // count is now 1\n\nconsole.log(count);',
    expectedOutput: '1',
    explanation: [
      { code: 'count++', desc: 'Exactly the same as writing count = count + 1.' },
      { code: 'count--', desc: 'Exactly the same as writing count = count - 1.' }
    ],
    realWorldExample: 'When displaying an image carousel, clicking the "Next" button runs `currentSlide++` to move to the next image index.',
    commonMistakes: [
      { error: 'Prefix vs Postfix confusion', code: 'let a = 1; let b = a++;', suffix: '`a++` (postfix) returns the value THEN increments. `++a` (prefix) increments the value THEN returns it. It is best to use them on their own separate lines to avoid confusion.' }
    ],
    bestPractices: ['Use `++` and `--` primarily inside `for` loops or alone on their own lines. Avoid nesting them inside complex equations.'],
    practiceExercise: {
      task: 'Declare `let likes = 99;`. Increment it by 1 using the increment operator, then log the new amount.',
      expectedOutput: '100',
      solution: 'let likes = 99; likes++; console.log(likes);'
    },
    quiz: [
      { question: 'What does the `++` operator do?', options: ['Adds 2', 'Adds 1', 'Multiplies by 2', 'Adds a string'], answer: 'Adds 1' },
      { question: 'What does the `--` operator do?', options: ['Subtracts 1', 'Subtracts 2', 'Divides by 2', 'Deletes the variable'], answer: 'Subtracts 1' },
      { question: 'What is `x++` shorthand for?', options: ['x = x + 2', 'x = x + x', 'x = x + 1', 'x = 1'], answer: 'x = x + 1' },
      { question: 'Can you use `++` on a `const` variable?', options: ['Yes', 'No, const cannot be reassigned', 'Only inside loops', 'Only on strings'], answer: 'No, const cannot be reassigned' },
      { question: 'If `let y = 5; y--;`, what is the value of `y`?', options: ['6', '5', '4', '0'], answer: '4' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `i++` (postfix) and `++i` (prefix)?', a: 'Postfix (`i++`) evaluates to the current value of `i`, and then increments `i`. Prefix (`++i`) increments `i` first, and then evaluates to the new incremented value.' }
    ],
    summary: ['`++` adds 1.', '`--` subtracts 1.', 'Extremely common in `for` loops.'],
    references: commonReferences
  },

  'js_ternary_operator': {
    isStructured: true,
    title: '20. Ternary Operator',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The ternary operator is the only JavaScript operator that takes three operands. It is a shorthand, one-line version of an `if...else` statement.',
    whyUseIt: 'It makes the code significantly cleaner and shorter when assigning variables based on a simple true/false condition.',
    syntax: 'condition ? valueIfTrue : valueIfFalse',
    codeExample: 'let age = 20;\n\n// Instead of 5 lines of if/else:\nlet status = (age >= 18) ? "Adult" : "Minor";\n\nconsole.log(status); // "Adult"',
    expectedOutput: '"Adult"',
    explanation: [
      { code: '(age >= 18)', desc: 'The condition to check (Is age greater than or equal to 18?).' },
      { code: '? "Adult"', desc: 'If the condition is true, return this.' },
      { code: ': "Minor"', desc: 'If the condition is false, return this.' }
    ],
    realWorldExample: 'A React application displays a user avatar. `const icon = user.isLoggedIn ? "profile_pic.png" : "guest_icon.png";`',
    commonMistakes: [
      { error: 'Nesting multiple ternaries', code: 'a ? b : c ? d : e', suffix: 'Nesting ternary operators makes the code almost impossible to read. If you have multiple conditions, use standard `if...else` blocks instead.' }
    ],
    bestPractices: ['Use the ternary operator for simple assignment logic. Do not use it for complex, multi-line function calls.'],
    practiceExercise: {
      task: 'Create `let isMember = true;`. Use a ternary operator to assign the string "$10" to `fee` if they are a member, and "$20" if they are not. Log the fee.',
      expectedOutput: '"$10"',
      solution: 'let isMember = true; let fee = isMember ? "$10" : "$20"; console.log(fee);'
    },
    quiz: [
      { question: 'What does the ternary operator replace?', options: ['for loops', 'if...else statements', 'switch statements', 'arrays'], answer: 'if...else statements' },
      { question: 'What symbol separates the condition from the true value in a ternary operator?', options: [':', ';', '?', '='], answer: '?' },
      { question: 'What symbol separates the true value from the false value?', options: [':', ';', '?', '='], answer: ':' },
      { question: 'Evaluate: `(10 > 5) ? "Yes" : "No"`', options: ['"Yes"', '"No"', 'true', 'false'], answer: '"Yes"' },
      { question: 'Evaluate: `(2 === "2") ? "Same" : "Different"`', options: ['"Same"', '"Different"', 'true', 'false'], answer: '"Different"' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t you nest ternary operators?', a: 'Readability is critical in software engineering. Nested ternaries are notoriously difficult to read and parse mentally. Standard `if/else` or `switch` statements are much better for complex logic.' }
    ],
    summary: ['One-line `if/else`.', 'Format: `condition ? true : false`.', 'Great for simple variable assignments.'],
    references: commonReferences
  },

  'js_nullish_coalescing_operator': {
    isStructured: true,
    title: '21. Nullish Coalescing Operator',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'The Nullish Coalescing Operator (`??`) is a logical operator that returns its right-hand operand when its left-hand operand is strictly `null` or `undefined`, and otherwise returns its left-hand operand.',
    whyUseIt: 'It provides a safe way to set default values. It replaces the old `||` default method, which was dangerous because `||` treats `0` and `""` as failures.',
    syntax: 'value1 ?? defaultValue',
    codeExample: 'let userScore = 0;\n\n// Old way (Buggy: treats 0 as false, overrides user score!)\nlet finalScore1 = userScore || 100;\n\n// New way (Safe: only replaces null/undefined)\nlet finalScore2 = userScore ?? 100;\n\nconsole.log(finalScore1); // 100 (WRONG)\nconsole.log(finalScore2); // 0 (CORRECT)',
    expectedOutput: '100, 0',
    explanation: [
      { code: 'userScore ?? 100', desc: 'Reads as: "Use userScore. But if userScore is exactly null or undefined, use 100 instead."' }
    ],
    realWorldExample: 'Fetching settings from a database. `const theme = user.settings.theme ?? "dark";` If the user hasn\'t set a theme (undefined), it defaults to "dark". If they explicitly set it to "" (empty string), it keeps the empty string.',
    commonMistakes: [
      { error: 'Using || instead of ?? for defaults', code: 'count || 10', suffix: 'If the user explicitly wanted the count to be `0` (a valid number), `||` will see `0` as falsy and override it to 10. `??` respects `0` and `""`.' }
    ],
    bestPractices: ['Always use `??` instead of `||` when assigning fallback/default values for variables.'],
    practiceExercise: {
      task: 'Create `let username = "";`. Use `??` to assign `"Guest"` to a variable if `username` is nullish. Log it. (It should log "", not "Guest").',
      expectedOutput: '""',
      solution: 'let username = ""; let display = username ?? "Guest"; console.log(display);'
    },
    quiz: [
      { question: 'What symbol is the Nullish Coalescing Operator?', options: ['||', '&&', '??', '!!'], answer: '??' },
      { question: 'When does `??` fall back to the right-side value?', options: ['Only when the left side is exactly `null` or `undefined`', 'Whenever the left side is falsy (0, "", false)', 'Only if there is an error', 'Never'], answer: 'Only when the left side is exactly `null` or `undefined`' },
      { question: 'What is the output of `0 ?? 50`?', options: ['50', '0', 'undefined', 'NaN'], answer: '0' },
      { question: 'What is the output of `null ?? "Default"`?', options: ['null', '"Default"', 'undefined', 'Error'], answer: '"Default"' },
      { question: 'Why is `??` safer than `||` for setting default values?', options: ['It is faster', 'It preserves intentional `0`, `false`, and `""` values without overriding them', 'It only works with numbers', 'It works on older browsers'], answer: 'It preserves intentional `0`, `false`, and `""` values without overriding them' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `||` (Logical OR) and `??` (Nullish Coalescing)?', a: '`||` checks for "falsy" values, which includes `0`, `false`, `NaN`, and `""`. `??` checks for "nullish" values, which is strictly only `null` or `undefined`. `??` is much safer for assigning defaults.' }
    ],
    summary: ['Returns the right side if left is `null` or `undefined`.', 'Safer than `||` for setting defaults.', 'Respects valid falsy values like `0` or `""`.'],
    references: commonReferences
  },

  'js_optional_chaining': {
    isStructured: true,
    title: '22. Optional Chaining',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'The Optional Chaining Operator (`?.`) allows you to safely read the value of a property located deep within a chain of connected objects, without having to check if each reference in the chain is valid.',
    whyUseIt: 'If you try to read a property of `undefined`, JavaScript crashes entirely with a `TypeError`. Optional chaining prevents the crash and safely returns `undefined` instead.',
    syntax: 'object?.property?.subProperty',
    codeExample: 'let user = { name: "Alice" }; // No address object\n\n// Old way (Crashes if address is missing)\n// console.log(user.address.street); // ERROR!\n\n// New way (Safe)\nconsole.log(user?.address?.street); // undefined',
    expectedOutput: 'undefined',
    explanation: [
      { code: 'user?.address', desc: 'Checks if address exists. Because it doesn\'t, it stops immediately and returns undefined instead of crashing on `.street`.' }
    ],
    realWorldExample: 'When calling a backend API, data is often missing. Instead of writing `if (user && user.profile && user.profile.avatar)`, developers just write `let img = user?.profile?.avatar;` to safely access the image.',
    commonMistakes: [
      { error: 'Using optional chaining when a property is strictly required', code: '', suffix: 'If your application absolutely requires an ID to function, don\'t use `?.`. Let it fail so you can catch the error properly. Only use `?.` for truly optional data.' }
    ],
    bestPractices: ['Combine Optional Chaining with Nullish Coalescing for ultimate safety: `let city = user?.address?.city ?? "Unknown City";`'],
    practiceExercise: {
      task: 'Create `let car = {};`. Use optional chaining to try to safely access `car.engine.cylinders`. Log the result.',
      expectedOutput: 'undefined',
      solution: 'let car = {}; console.log(car?.engine?.cylinders);'
    },
    quiz: [
      { question: 'What symbol is the Optional Chaining operator?', options: ['??', '?.', '!.', '||'], answer: '?.' },
      { question: 'What happens if you try to read `user.profile.age` but `profile` is undefined?', options: ['It returns undefined', 'It returns 0', 'It crashes the program with a TypeError', 'It returns null'], answer: 'It crashes the program with a TypeError' },
      { question: 'What does `user?.profile?.age` do if `profile` is undefined?', options: ['Crashes the program', 'Safely returns `undefined` and stops evaluating', 'Returns 0', 'Prompts the user'], answer: 'Safely returns `undefined` and stops evaluating' },
      { question: 'Can you use Optional Chaining on functions? (e.g. `myFunc?.()`)', options: ['Yes, it will only execute if myFunc exists', 'No, only on objects', 'Yes, but it causes lag', 'No, syntax error'], answer: 'Yes, it will only execute if myFunc exists' },
      { question: 'What happens when you combine `?.` with `??`?', options: ['It causes an error', 'It allows you to safely dig into an object and provide a fallback default if it fails', 'It deletes the object', 'It encrypts the data'], answer: 'It allows you to safely dig into an object and provide a fallback default if it fails' }
    ],
    interviewQuestions: [
      { q: 'Why is Optional Chaining highly beneficial when working with external APIs?', a: 'External APIs are unpredictable. Properties might be missing or null. Without `?.`, you would have to write massive nested `if` statements to verify every level of the JSON response to prevent crashes.' }
    ],
    summary: ['Safely access deeply nested object properties.', 'Prevents `TypeError: Cannot read properties of undefined`.', 'Returns `undefined` if the chain breaks.'],
    references: commonReferences
  },

  'js_operator_precedence': {
    isStructured: true,
    title: '23. Operator Precedence',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Operator precedence determines the order in which operators are evaluated when calculating an expression. It follows rules similar to BEDMAS/PEMDAS in mathematics.',
    whyUseIt: 'If you don\'t understand precedence, your complex equations or logical conditions will evaluate in the wrong order, causing massive logical bugs.',
    syntax: '// Use parentheses () to force precedence',
    codeExample: 'let result1 = 10 + 5 * 2;\n// Multiplication has higher precedence: 5*2 = 10 -> 10+10 = 20\n\nlet result2 = (10 + 5) * 2;\n// Parentheses force addition first: 15 * 2 = 30\n\nconsole.log(result1, result2);',
    expectedOutput: '20, 30',
    explanation: [
      { code: '5 * 2', desc: 'Multiplication ranks higher than Addition, so it executes first.' },
      { code: '(10 + 5)', desc: 'Parentheses always have the highest precedence, forcing whatever is inside to evaluate first.' }
    ],
    realWorldExample: 'Calculating a shopping cart: `total = price + tax * quantity`. If tax is 2 and quantity is 3, the engine does `2*3` first. To calculate properly, a developer uses parentheses: `total = (price + tax) * quantity`.',
    commonMistakes: [
      { error: 'Assuming left-to-right evaluation', code: 'true || false && false', suffix: 'Logical AND (`&&`) has higher precedence than OR (`||`). This evaluates as `true || (false && false)`, resulting in `true`.' }
    ],
    bestPractices: ['Do not memorize the entire precedence table. Whenever you have mixed operators, explicitly use parentheses `()` to guarantee the execution order and improve readability.'],
    practiceExercise: {
      task: 'Declare `let ans = 20 - 10 / 2;`. Predict the output, then use parentheses to change the calculation so the subtraction happens first.',
      expectedOutput: '15, and then 5.',
      solution: 'let ans = 20 - 10 / 2; // 15\nlet ans2 = (20 - 10) / 2; // 5'
    },
    quiz: [
      { question: 'What mathematical order of operations rule does JavaScript generally follow?', options: ['Left to Right regardless of operator', 'BEDMAS/PEMDAS', 'Right to Left', 'Alphabetical'], answer: 'BEDMAS/PEMDAS' },
      { question: 'What is the output of `5 + 2 * 3`?', options: ['21', '11', '16', '10'], answer: '11' },
      { question: 'How can you override default operator precedence?', options: ['By writing it in capital letters', 'By using parentheses `()`', 'By using square brackets `[]`', 'You cannot override it'], answer: 'By using parentheses `()`' },
      { question: 'Which logical operator has higher precedence?', options: ['|| (OR)', '&& (AND)', 'They are equal', 'None'], answer: '&& (AND)' },
      { question: 'Evaluate: `true || false && false`', options: ['true', 'false', 'undefined', 'error'], answer: 'true' }
    ],
    interviewQuestions: [
      { q: 'Why is it recommended to use parentheses even if the default operator precedence is correct?', a: 'Using parentheses explicitly communicates the intended logic to other developers reading your code, removing any ambiguity or requirement for them to memorize the precedence table.' }
    ],
    summary: ['Determines evaluation order.', 'Multiplication beats Addition.', 'Parentheses `()` always evaluate first.'],
    references: commonReferences
  }
};
