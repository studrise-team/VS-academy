const commonReferences = [
  { label: 'MDN Web Docs - HTML Forms', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms' },
  { label: 'W3Schools JavaScript Form Validation', url: 'https://www.w3schools.com/js/js_validation.asp' }
];

export const javascriptContentBatch12 = {
  'js_reading_form_data': {
    isStructured: true,
    title: '163 & 170. Reading Form Data & Submission',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Reading form data involves capturing the values that a user types into HTML input fields (text boxes, checkboxes, dropdowns) using JavaScript when a form is submitted.',
    whyUseIt: 'When a user registers or logs in, you need to read the data they entered to validate it (check if passwords match) and then send it to your database/server.',
    syntax: 'const value = document.getElementById("inputId").value;',
    codeExample: '// HTML: <form id="loginForm"> <input id="email" type="email"> <button type="submit">Login</button> </form>\n\nconst form = document.getElementById("loginForm");\nconst emailInput = document.getElementById("email");\n\nform.addEventListener("submit", function(e) {\n  e.preventDefault(); // Stop page reload\n  \n  const userEmail = emailInput.value;\n  console.log("Submitting email: " + userEmail);\n});',
    expectedOutput: '(When submitted without reloading, it logs: "Submitting email: test@example.com")',
    explanation: [
      { code: 'form.addEventListener("submit", ...)', desc: 'We listen for the `submit` event on the entire form, NOT a `click` event on the button. This ensures pressing "Enter" on the keyboard also works.' },
      { code: 'e.preventDefault()', desc: 'Crucial! Without this, the browser will refresh the page immediately and you will lose all your JavaScript state.' },
      { code: 'emailInput.value', desc: 'The `.value` property retrieves whatever text the user currently has typed into that specific input field.' }
    ],
    realWorldExample: 'A search bar on a website. You read `searchInput.value` on submit, and then redirect the user to `/search?q=value`.',
    commonMistakes: [
      { error: 'Reading the value outside the event listener', code: 'const userEmail = emailInput.value;\nform.addEventListener("submit", ...)', suffix: 'If you read the value immediately when the script loads, it will be an empty string `""` because the user hasn\'t typed anything yet. You MUST read `.value` INSIDE the submit callback.' }
    ],
    bestPractices: ['For large forms, instead of selecting 15 individual inputs, use `new FormData(formElement)` to automatically gather all data into one object.'],
    practiceExercise: {
      task: 'Assume an input with id `username`. Write a snippet to get its value and log it.',
      expectedOutput: '(Logs the entered username)',
      solution: 'const name = document.getElementById("username").value; console.log(name);'
    },
    quiz: [
      { question: 'Which property is used to get the text entered into an HTML `<input>` element?', options: ['.text', '.content', '.innerHTML', '.value'], answer: '.value' },
      { question: 'What event should you listen to for forms?', options: ['click on the button', 'submit on the form', 'enter on the input', 'change on the form'], answer: 'submit on the form' },
      { question: 'Why is `e.preventDefault()` used in form submissions?', options: ['To clear the form fields', 'To prevent the browser from reloading the page', 'To validate the data automatically', 'To disable the submit button'], answer: 'To prevent the browser from reloading the page' },
      { question: 'When is the correct time to read `input.value`?', options: ['Immediately when the page loads', 'Outside all functions', 'Inside the submit event listener (when the user actually clicks submit)', 'In the HTML tag'], answer: 'Inside the submit event listener (when the user actually clicks submit)' },
      { question: 'Which HTML element requires listening to the "change" event to see if it is checked or not?', options: ['<input type="text">', '<textarea>', '<input type="checkbox">', '<button>'], answer: '<input type="checkbox">' }
    ],
    interviewQuestions: [
      { q: 'What is the `FormData` API?', a: 'It is a built-in browser API that allows you to easily construct a set of key/value pairs representing form fields and their values, often used to send data via `fetch` without needing to manually grab every single `.value`.' }
    ],
    summary: ['Listen for `submit` on the `<form>`.', 'Always use `e.preventDefault()`.', 'Read data using `inputElement.value` inside the listener.'],
    references: commonReferences
  },

  'js_input_validation': {
    isStructured: true,
    title: '164-169. Form Validation',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Form Validation is the process of ensuring that user input is clean, correct, and useful before sending it to a server. This includes checking for required fields, valid email formats, and password strength.',
    whyUseIt: 'If a user forgets to type their email, or types "123" instead of a valid email address, your server will fail or save bad data. Validating in the browser provides instant, user-friendly feedback without waiting for a server response.',
    syntax: 'if (input.value === "") { \n  // Show error \n}',
    codeExample: 'const form = document.getElementById("registerForm");\nconst password = document.getElementById("pwd");\nconst errorMsg = document.getElementById("error");\n\nform.addEventListener("submit", function(e) {\n  if (password.value.length < 8) {\n    e.preventDefault(); // Stop submission!\n    errorMsg.textContent = "Password must be at least 8 characters.";\n    errorMsg.style.color = "red";\n  } else {\n    errorMsg.textContent = "";\n    // Let the form submit naturally, or handle via JS\n  }\n});',
    expectedOutput: '(If password is "1234", form stops and shows red text. If "12345678", it proceeds)',
    explanation: [
      { code: 'password.value.length < 8', desc: 'We check the length of the string the user typed.' },
      { code: 'e.preventDefault()', desc: 'Because the data is bad, we MUST stop the form from submitting.' },
      { code: 'errorMsg.textContent = ...', desc: 'We show a helpful, visible error message to the user.' }
    ],
    realWorldExample: 'A sign-up page. It checks if `password.value === confirmPassword.value`. If not, it highlights the boxes in red and says "Passwords do not match".',
    commonMistakes: [
      { error: 'Relying solely on frontend validation', code: '// Assuming frontend is secure', suffix: 'Frontend validation is for User Experience (UX). A malicious user can bypass JavaScript. You MUST also validate the data again on your backend server.' }
    ],
    bestPractices: ['Provide real-time validation. Don\'t wait for the user to hit "Submit". Use the `input` event to validate their email format as they are typing.'],
    practiceExercise: {
      task: 'Assume a variable `age = 15`. Write an `if` statement to check if age is less than 18. If it is, log "You must be 18+".',
      expectedOutput: '"You must be 18+"',
      solution: 'let age = 15; if(age < 18) { console.log("You must be 18+"); }'
    },
    quiz: [
      { question: 'Why do we validate forms with JavaScript?', options: ['To make the website load faster', 'To provide instant feedback and prevent bad data from reaching the server', 'To encrypt the data', 'To style the inputs'], answer: 'To provide instant feedback and prevent bad data from reaching the server' },
      { question: 'How do you check if an input string is empty?', options: ['input.value === 0', 'input.value === "empty"', 'input.value === ""', 'input.value == null'], answer: 'input.value === ""' },
      { question: 'How do you stop a form from submitting if validation fails?', options: ['return false', 'e.preventDefault()', 'form.stop()', 'document.pause()'], answer: 'e.preventDefault()' },
      { question: 'Is frontend (JavaScript) validation enough to secure an application?', options: ['Yes', 'No, users can bypass JS, so the backend must also validate', 'Only on mobile', 'Yes, if using React'], answer: 'No, users can bypass JS, so the backend must also validate' },
      { question: 'What property tells you how many characters are in a string?', options: ['.size', '.count', '.length', '.chars'], answer: '.length' }
    ],
    interviewQuestions: [
      { q: 'How would you validate that a string is a properly formatted email address?', a: 'Typically, by using a Regular Expression (RegEx) that checks for characters, an "@" symbol, a domain name, a dot, and a top-level domain.' }
    ],
    summary: ['Validation ensures data is correct before sending.', 'Check `.value.length` or `=== ""` for requirements.', 'Always use backend validation for actual security.'],
    references: commonReferences
  }
};
