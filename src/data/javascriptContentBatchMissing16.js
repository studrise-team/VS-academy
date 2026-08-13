const commonReferences = [
  { label: 'MDN Web Docs - Client-side form validation', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation' }
];

export const javascriptContentBatchMissing16 = {
  'js_input_validation': {
    isStructured: true,
    title: '164. Input Validation',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Input validation is the process of ensuring that the data entered by a user matches the required format, length, or criteria before it is processed or sent to a server.',
    whyUseIt: 'Validation prevents bad data from breaking your application, protects against malicious security attacks (like SQL injection), and provides immediate, helpful feedback to the user if they make a mistake.',
    syntax: 'if (input.value === "") { // show error }',
    codeExample: 'const ageInput = document.querySelector("#age");\nconst form = document.querySelector("#age-form");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  \n  const age = Number(ageInput.value);\n  \n  // Basic Validation Logic\n  if (isNaN(age)) {\n    console.log("Error: Please enter a valid number.");\n  } else if (age < 18) {\n    console.log("Error: You must be at least 18 years old.");\n  } else {\n    console.log("Success: Age accepted!");\n  }\n});',
    expectedOutput: 'Logs different error messages depending on what the user types (e.g., "abc", 15, or 25).',
    explanation: [
      { code: 'Number(ageInput.value)', desc: 'Because `value` always returns a string, we must first convert it to a Number to perform mathematical validation.' },
      { code: 'isNaN(age)', desc: 'Checks if the conversion failed (e.g., if the user typed "hello").' }
    ],
    realWorldExample: 'Checking if a username is between 3 and 15 characters long before allowing the user to click the "Create Account" button.',
    commonMistakes: [
      { error: 'Trusting Client-Side Validation exclusively', code: '', suffix: 'JavaScript validation is for User Experience (UX), NOT security. A malicious user can easily disable JavaScript in their browser and bypass your checks. You MUST always validate data again on your backend server.' }
    ],
    bestPractices: ['Don\'t wait until the user hits "Submit" to validate. Validate as they type (using the `input` or `blur` events) to provide immediate feedback.'],
    practiceExercise: {
      task: 'Given `let age = 15;`, write an `if/else` statement that logs "Valid" if age is between 13 and 19 (inclusive), and "Invalid" otherwise.',
      expectedOutput: '"Valid"',
      solution: 'if (age >= 13 && age <= 19) { console.log("Valid"); } else { console.log("Invalid"); }'
    },
    quiz: [
      { question: 'What is the main goal of input validation?', options: ['To make the page load faster', 'To ensure user data is correct and safe before processing it', 'To apply CSS to inputs', 'To translate text'], answer: 'To ensure user data is correct and safe before processing it' },
      { question: 'Why is JavaScript validation alone NOT enough for security?', options: ['Because it is too slow', 'Because users can easily disable JavaScript in their browser and bypass it', 'Because it only works on passwords', 'Because JS cannot read inputs'], answer: 'Because users can easily disable JavaScript in their browser and bypass it' },
      { question: 'If a user types `25` into a text input, what data type does `input.value` return in JS?', options: ['Number', 'String ("25")', 'Boolean', 'Object'], answer: 'String ("25")' },
      { question: 'What built-in function checks if a value is "Not a Number"?', options: ['isNotNumber()', 'Number.isFalse()', 'isNaN()', 'checkNum()'], answer: 'isNaN()' },
      { question: 'Which event is best for validating an input the exact moment a user clicks away from it?', options: ['blur', 'input', 'submit', 'click'], answer: 'blur' }
    ],
    interviewQuestions: [
      { q: 'What is HTML5 built-in validation?', a: 'HTML5 includes built-in attributes like `required`, `minlength`, `type="email"`, and `pattern`. Browsers automatically validate these before the `submit` event fires, saving you from writing basic JS validation.' }
    ],
    summary: ['Checks data before submission.', 'Improves User Experience (UX).', 'Never rely solely on JS for security.'],
    references: commonReferences
  },
  'js_required_fields': {
    isStructured: true,
    title: '165. Required Fields',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Checking for required fields is the simplest form of validation: ensuring that the user did not leave an input blank.',
    whyUseIt: 'To prevent users from submitting incomplete forms (like registering an account without providing a username).',
    syntax: 'if (input.value.trim() === "") { // Handle blank input }',
    codeExample: 'const usernameInput = document.querySelector("#username");\nconst form = document.querySelector("form");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  \n  // .trim() removes whitespace from the start and end\n  const username = usernameInput.value.trim();\n  \n  if (username === "") {\n    console.log("Error: Username is required!");\n    usernameInput.style.borderColor = "red";\n  } else {\n    console.log(`Welcome, ${username}`);\n    usernameInput.style.borderColor = "green";\n  }\n});',
    expectedOutput: 'If left blank (or filled with only spaces), logs an error and turns the border red.',
    explanation: [
      { code: 'value.trim()', desc: 'Crucial for required fields! If you don\'t use `trim()`, a user could just type three spaces ("   ") and bypass your validation, because "   " is technically not an empty string.' },
      { code: '=== ""', desc: 'Checks if the resulting trimmed string is completely empty.' }
    ],
    realWorldExample: 'Highlighting a missing "First Name" field in red and showing a little "This field is required" text below it when the user tries to checkout.',
    commonMistakes: [
      { error: 'Forgetting to trim()', code: 'if(input.value === "")', suffix: 'Fails if the user accidentally hits the spacebar before submitting.' }
    ],
    bestPractices: ['Combine JavaScript validation with the HTML5 `required` attribute (`<input type="text" required>`). This gives you the browser\'s built-in popup warnings for free.'],
    practiceExercise: {
      task: 'Given a string `let data = "   ";`, write an `if` statement using `.trim()` to check if it is empty. If it is, log "Required".',
      expectedOutput: '"Required"',
      solution: 'if (data.trim() === "") { console.log("Required"); }'
    },
    quiz: [
      { question: 'What is the most robust way to check if a text input is completely blank in JavaScript?', options: ['input.value === null', 'input.value === ""', 'input.value.trim() === ""', 'input.value.length < 1'], answer: 'input.value.trim() === ""' },
      { question: 'Why is the `.trim()` method important for required fields?', options: ['It makes the string uppercase', 'It prevents users from bypassing validation by just typing spaces', 'It deletes the input element', 'It encrypts the data'], answer: 'It prevents users from bypassing validation by just typing spaces' },
      { question: 'What HTML attribute can you use to make the browser enforce a required field automatically?', options: ['mandatory', 'required', 'important', 'validate'], answer: 'required' },
      { question: 'Does `trim()` change the original string in the input box?', options: ['Yes, instantly', 'No, it returns a new string with the whitespace removed', 'Only in strict mode', 'Yes, but only on submit'], answer: 'No, it returns a new string with the whitespace removed' },
      { question: 'How can you visually show a user that a field is required?', options: ['Turn the border red using JS', 'Add an asterisk (*) next to the label', 'Show a small error message below the input', 'All of the above'], answer: 'All of the above' }
    ],
    interviewQuestions: [
      { q: 'How do you check if a checkbox is "required" (i.e., the user checked it)?', a: 'Instead of checking `.value`, you check the boolean property `.checked`. E.g., `if (!checkbox.checked) { throw Error; }`.' }
    ],
    summary: ['Ensure fields are not blank.', 'Always use `.trim()`.', 'Combine with HTML `required`.'],
    references: commonReferences
  },
  'js_email_validation': {
    isStructured: true,
    title: '166. Email Validation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Email validation ensures that a string provided by the user conforms to the standard format of an email address (e.g., `user@example.com`).',
    whyUseIt: 'To prevent typos when a user signs up, ensuring you can actually send them password resets and notifications.',
    syntax: 'const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; regex.test(email);',
    codeExample: 'function validateEmail(email) {\n  // A basic Regular Expression for email\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  \n  return emailRegex.test(email);\n}\n\nconsole.log(validateEmail("test@test.com")); // true\nconsole.log(validateEmail("test@test"));     // false\nconsole.log(validateEmail("test.com"));      // false',
    expectedOutput: 'true\nfalse\nfalse',
    explanation: [
      { code: 'emailRegex', desc: 'A Regular Expression (RegEx) is a pattern used to match character combinations in strings. This one essentially checks for: "some characters, an @ symbol, some characters, a dot, and some characters".' },
      { code: 'regex.test(email)', desc: 'Returns `true` if the string matches the pattern, `false` otherwise.' }
    ],
    realWorldExample: 'Showing a green checkmark next to the email input field as soon as the user types a valid email address.',
    commonMistakes: [
      { error: 'Trying to write a "perfect" email RegEx', code: '', suffix: 'The official specification for what constitutes a valid email is incredibly complex. If you try to write a 500-character RegEx, you will likely block valid (but unusual) emails. Stick to a simple RegEx (checks for `@` and `.`), and send a confirmation email to truly verify it.' }
    ],
    bestPractices: ['Always use `<input type="email">` in your HTML. This automatically gives you basic email validation by the browser and pulls up the correct keyboard (with the `@` symbol) on mobile phones!'],
    practiceExercise: {
      task: 'Write an `if` statement using the `includes()` method to do a very basic check: if `email` includes an "@" symbol, log "Valid", else log "Invalid".',
      expectedOutput: 'Basic validation logs result.',
      solution: 'if (email.includes("@")) { console.log("Valid"); } else { console.log("Invalid"); }'
    },
    quiz: [
      { question: 'What is the standard JavaScript tool used for complex string pattern matching like email validation?', options: ['JSON', 'Regular Expressions (RegEx)', 'Math.match', 'String.validate'], answer: 'Regular Expressions (RegEx)' },
      { question: 'Which RegEx method tests if a string matches the pattern and returns a boolean?', options: ['regex.test(string)', 'regex.match(string)', 'regex.check(string)', 'string.regex()'], answer: 'regex.test(string)' },
      { question: 'Why should you use `<input type="email">` in your HTML?', options: ['It provides automatic browser validation', 'It shows the correct keyboard on mobile devices', 'It is better for accessibility', 'All of the above'], answer: 'All of the above' },
      { question: 'Is it recommended to write a massively complex RegEx to perfectly match the official email specification?', options: ['Yes, it is the only way to be safe', 'No, it is better to use a simple check and rely on sending a confirmation email', 'Yes, it makes the code run faster', 'Only on the backend'], answer: 'No, it is better to use a simple check and rely on sending a confirmation email' },
      { question: 'What is a basic string method you could use if you didn\'t know RegEx, just to check for an "@"?', options: ['string.has("@")', 'string.contains("@")', 'string.includes("@")', 'string.find("@")'], answer: 'string.includes("@")' }
    ],
    interviewQuestions: [
      { q: 'What does `^` and `$` mean in a Regular Expression?', a: '`^` asserts the start of the string, and `$` asserts the end of the string. Using them ensures the *entire* string matches the pattern, rather than just a substring.' }
    ],
    summary: ['Use Regular Expressions for pattern matching.', 'Test using `regex.test(string)`.', 'Use `<input type="email">` for free browser validation.'],
    references: commonReferences
  },
  'js_password_validation': {
    isStructured: true,
    title: '167. Password Validation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Password validation involves checking a user\'s password against a set of security rules (length, uppercase, numbers, special characters) before allowing them to register.',
    whyUseIt: 'To enforce security policies and protect user accounts from easily being guessed or cracked by brute force.',
    syntax: 'if (password.length >= 8 && /[A-Z]/.test(password)) { ... }',
    codeExample: 'function validatePassword(pw) {\n  let errors = [];\n  \n  if (pw.length < 8) {\n    errors.push("Must be at least 8 characters.");\n  }\n  if (!/[A-Z]/.test(pw)) {\n    errors.push("Must contain an uppercase letter.");\n  }\n  if (!/[0-9]/.test(pw)) {\n    errors.push("Must contain a number.");\n  }\n  \n  return errors;\n}\n\nconst results = validatePassword("weak");\nconsole.log(results);\n// ["Must be at least 8 characters.", "Must contain an uppercase letter.", "Must contain a number."]',
    expectedOutput: 'An array of specific error messages telling the user exactly what they did wrong.',
    explanation: [
      { code: 'pw.length < 8', desc: 'A simple string length check.' },
      { code: '/[A-Z]/.test(pw)', desc: 'A simple RegEx that searches the string for any uppercase letter from A to Z.' },
      { code: 'errors.push(...)', desc: 'Instead of returning a simple `true`/`false`, collecting errors in an array allows you to show the user exactly which requirements they are missing.' }
    ],
    realWorldExample: 'A "Password Strength" meter that turns from Red to Yellow to Green as the user types and satisfies more of the validation rules.',
    commonMistakes: [
      { error: 'Validating only on submit', code: '', suffix: 'Password validation is frustrating for users. Use the `input` event to validate their password *as they type*, checking off the requirements visually on the screen.' }
    ],
    bestPractices: ['Do not use overly restrictive password rules (e.g., "Must have exactly 1 special character and no repeating letters"). Allow long passphrases, which are actually more secure than short, complex passwords.'],
    practiceExercise: {
      task: 'Write a basic `if` statement to check if a `password` variable is strictly greater than 10 characters long.',
      expectedOutput: 'True or False depending on length.',
      solution: 'if (password.length > 10) { console.log("Good length"); }'
    },
    quiz: [
      { question: 'Why is it better to return an array of error messages rather than a single boolean for password validation?', options: ['It is faster', 'It allows you to tell the user EXACTLY which rules they failed (e.g., "Missing a number")', 'It uses less memory', 'Arrays are required for forms'], answer: 'It allows you to tell the user EXACTLY which rules they failed (e.g., "Missing a number")' },
      { question: 'What does the RegEx `/[0-9]/` look for?', options: ['A string that is exactly 9 characters long', 'Any digit from 0 to 9 anywhere in the string', 'The exact string "0-9"', 'Zeroes and nines only'], answer: 'Any digit from 0 to 9 anywhere in the string' },
      { question: 'When is the best time to validate a password for good UX?', options: ['As the user is typing (using the `input` event)', 'Only after they hit Submit', 'When the page loads', 'When they hover over the button'], answer: 'As the user is typing (using the `input` event)' },
      { question: 'How do you check the length of a password string?', options: ['password.size', 'password.count', 'password.length', 'password.chars'], answer: 'password.length' },
      { question: 'What HTML input type should you use to hide the characters as the user types?', options: ['type="hidden"', 'type="password"', 'type="text"', 'type="secret"'], answer: 'type="password"' }
    ],
    interviewQuestions: [
      { q: 'Should you hash passwords in JavaScript on the client-side before sending them to the server?', a: 'No. The server should receive the password securely over HTTPS, and then the *server* should hash and salt the password before storing it in the database.' }
    ],
    summary: ['Check length using `.length`.', 'Check characters using simple RegEx.', 'Provide clear, specific error messages.'],
    references: commonReferences
  },
  'js_custom_validation': {
    isStructured: true,
    title: '168. Custom Validation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Custom validation uses the HTML5 Constraint Validation API (methods like `setCustomValidity`) to integrate your custom JavaScript rules with the browser\'s native popup error messages.',
    whyUseIt: 'You get the best of both worlds: complex JavaScript logic, combined with the accessible, localized popup bubbles that the browser generates natively.',
    syntax: 'input.setCustomValidity("Error message");',
    codeExample: 'const pass1 = document.querySelector("#pass1");\nconst pass2 = document.querySelector("#pass2");\n\npass2.addEventListener("input", () => {\n  if (pass1.value !== pass2.value) {\n    // Sets a custom error. This prevents form submission natively.\n    pass2.setCustomValidity("Passwords do not match!");\n  } else {\n    // Clearing the error string marks the field as valid.\n    pass2.setCustomValidity("");\n  }\n});',
    expectedOutput: 'If the user hits submit and the passwords don\'t match, the browser will block submission and show a native popup saying "Passwords do not match!".',
    explanation: [
      { code: 'setCustomValidity("Message")', desc: 'Tells the browser that this input is currently invalid, and provides the message to show in the tooltip.' },
      { code: 'setCustomValidity("")', desc: 'Passing an empty string is absolutely critical. It tells the browser the input is now VALID. If you don\'t do this, the input will remain broken forever.' }
    ],
    realWorldExample: 'Checking if a "Username" is already taken. You fetch the database, and if it is taken, you call `usernameInput.setCustomValidity("Username already exists.")`.',
    commonMistakes: [
      { error: 'Forgetting to clear the error', code: '', suffix: 'If you set a custom validity message, the form will NEVER submit until you call `setCustomValidity("")` to clear it when the user fixes the issue.' }
    ],
    bestPractices: ['Run `setCustomValidity` inside an `input` event listener so that as soon as the user corrects their mistake, the error state is cleared immediately.'],
    practiceExercise: {
      task: 'Given an input `username`, write an `if` statement: if value is "admin", call `setCustomValidity("Reserved")`, else clear it.',
      expectedOutput: 'Custom validity is set or cleared.',
      solution: 'if (username.value === "admin") { username.setCustomValidity("Reserved"); } else { username.setCustomValidity(""); }'
    },
    quiz: [
      { question: 'What does `setCustomValidity()` do?', options: ['Changes the placeholder text', 'Triggers a JavaScript `alert()`', 'Integrates a custom error message into the browser\'s native validation popup system', 'Deletes the input'], answer: 'Integrates a custom error message into the browser\'s native validation popup system' },
      { question: 'How do you tell the browser that the input is now VALID and the error is fixed?', options: ['setCustomValidity(true)', 'setCustomValidity(null)', 'setCustomValidity("")', 'clearCustomValidity()'], answer: 'setCustomValidity("")' },
      { question: 'Will a form submit if an input currently has a custom validity message set?', options: ['Yes, it submits anyway', 'No, the browser will block the submission and show the native tooltip', 'Only in Chrome', 'Only if the user clicks twice'], answer: 'No, the browser will block the submission and show the native tooltip' },
      { question: 'Which pseudo-class in CSS can you use to style elements that have failed validation?', options: ['`:error`', '`:invalid`', '`:wrong`', '`:failed`'], answer: '`:invalid`' },
      { question: 'Why is `setCustomValidity` better than building your own error message `<div>`s?', options: ['It is faster', 'It automatically prevents form submission and ensures accessibility (screen readers can read the browser tooltips)', 'It supports HTML tags inside the message', 'It is not better, it is worse'], answer: 'It automatically prevents form submission and ensures accessibility (screen readers can read the browser tooltips)' }
    ],
    interviewQuestions: [
      { q: 'How do you force the browser to immediately show the validation tooltip without waiting for a submit event?', a: 'You can call the `inputElement.reportValidity()` method.' }
    ],
    summary: ['Mixes JS logic with native UI.', 'Use `setCustomValidity("Error")`.', 'MUST clear it with `setCustomValidity("")`.'],
    references: commonReferences
  }
};
