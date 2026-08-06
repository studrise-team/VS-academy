const commonReferences = [
  { label: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
  { label: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { label: 'CSS Tricks', url: 'https://css-tricks.com/' }
];

export const cssContentBatch1 = {
  'css_introduction_to_css': {
    isStructured: true,
    title: '1. Introduction to CSS',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML.',
    whyUseIt: 'While HTML dictates the structure of a webpage, CSS controls its appearance. It allows you to add colors, adjust layouts, change fonts, and make your webpage visually appealing and responsive.',
    syntax: `selector {
    property: value;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: lightblue;
}
h1 {
    color: white;
    text-align: center;
}
</style>
</head>
<body>

<h1>Hello World!</h1>

</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="background-color: lightblue; padding: 20px;">
    <h1 style="color: white; text-align: center;">Hello World!</h1>
</div>`,
    explanation: [
        { code: 'body { background-color: lightblue; }', desc: 'Sets the background color of the entire page to light blue.' },
        { code: 'h1 { color: white; text-align: center; }', desc: 'Selects all h1 elements, makes their text white, and centers them.' }
    ],
    realWorldExample: 'Think of HTML as the bricks and skeleton of a house. CSS is the paint, the wallpaper, the window styles, and the interior design that makes the house look beautiful.',
    commonMistakes: [
      { error: 'Forgetting semicolons at the end of declarations.', code: 'color: red', suffix: 'Should be color: red;' },
      { error: 'Writing property names incorrectly.', code: 'text-color: red;', suffix: 'Should be color: red;' }
    ],
    bestPractices: [
      'Keep your CSS organized and commented.',
      'Use external stylesheets instead of inline CSS for large projects.',
      'Always test your styles across different browsers.'
    ],
    practiceExercise: {
      task: 'Create an HTML paragraph and use CSS to change its text color to green and make it bold.',
      expectedOutput: '<p style="color: green; font-weight: bold;">I am learning CSS!</p>',
      solution: `p {
    color: green;
    font-weight: bold;
}`
    },
    quiz: [
      { question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'], answer: 'Cascading Style Sheets' },
      { question: 'What is the purpose of CSS?', options: ['To create logic', 'To style HTML elements', 'To store data', 'To create database tables'], answer: 'To style HTML elements' },
      { question: 'Which part of a CSS rule targets the HTML element?', options: ['Property', 'Value', 'Declaration', 'Selector'], answer: 'Selector' },
      { question: 'Is CSS a programming language?', options: ['Yes', 'No, it is a markup language', 'No, it is a style sheet language', 'Only CSS3 is a programming language'], answer: 'No, it is a style sheet language' },
      { question: 'Which tag is used to embed CSS directly within an HTML file?', options: ['<css>', '<script>', '<style>', '<link>'], answer: '<style>' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between HTML and CSS?', a: 'HTML is used to structure the content on the web (the skeleton), whereas CSS is used to style and format that content (the design and layout).' },
      { q: 'Explain the term "Cascading" in CSS.', a: 'Cascading refers to the way CSS applies rules. If multiple conflicting rules target the same element, the browser decides which one wins based on specificity and source order, cascading down the stylesheet.' }
    ],
    summary: [
      'CSS (Cascading Style Sheets) controls the visual appearance of HTML.',
      'CSS separates presentation from structure.',
      'A CSS rule consists of a selector and a declaration block.'
    ],
    references: commonReferences
  },

  'css_history_of_css': {
    isStructured: true,
    title: '2. History of CSS',
    difficulty: 'Beginner',
    readingTime: '4 Minutes',
    definition: 'CSS was proposed by Håkon Wium Lie in 1994 and became a W3C Recommendation in 1996.',
    whyUseIt: 'Understanding the history of CSS helps developers appreciate modern layout tools like Flexbox and Grid, and why certain legacy quirks (like floats for layouts) existed.',
    syntax: '/* No specific syntax for history, but here is CSS1 syntax */\nP { color: red; }',
    codeExample: `/* CSS 1 (1996) */
p { font-family: serif; color: black; }

/* CSS 2 (1998) introduced positioning */
div { position: absolute; top: 10px; left: 10px; }

/* CSS 3 (1999-Present) introduced modules */
.box { border-radius: 10px; box-shadow: 2px 2px 5px gray; }`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'CSS 1', desc: 'Basic font, color, and margin properties.' },
        { code: 'CSS 2', desc: 'Introduced absolute positioning, z-index, and media types.' },
        { code: 'CSS 3', desc: 'Split into modules, introduced rounded corners, shadows, animations, Flexbox, and Grid.' }
    ],
    realWorldExample: 'In the early 90s, websites were styled using HTML tags like <font> and <center>. This made websites bulky and impossible to maintain. CSS was invented to move all styling to a separate file, revolutionizing web design.',
    commonMistakes: [
      { error: 'Assuming CSS3 is a completely different language.', code: '', suffix: 'CSS3 is just a continuation of CSS2 broken into independent modules.' }
    ],
    bestPractices: [
      'Use modern CSS3 properties (Flexbox/Grid) over legacy CSS2 layout hacks (Floats/Tables).'
    ],
    practiceExercise: {
      task: 'Write a comment in CSS explaining what year CSS1 was released.',
      expectedOutput: '/* CSS1 was released in 1996 */',
      solution: '/* CSS1 was released in 1996 */'
    },
    quiz: [
      { question: 'Who proposed CSS?', options: ['Tim Berners-Lee', 'Håkon Wium Lie', 'Brendan Eich', 'Bill Gates'], answer: 'Håkon Wium Lie' },
      { question: 'In what year was CSS first proposed?', options: ['1990', '1994', '2000', '1985'], answer: '1994' },
      { question: 'Which version of CSS introduced modules like Flexbox and Grid?', options: ['CSS 1', 'CSS 2', 'CSS 3', 'CSS 4'], answer: 'CSS 3' },
      { question: 'Before CSS, how were HTML pages styled?', options: ['Using JavaScript', 'Using HTML presentational tags like <font>', 'They could not be styled', 'Using Python'], answer: 'Using HTML presentational tags like <font>' },
      { question: 'What organization maintains CSS standards?', options: ['W3C (World Wide Web Consortium)', 'ECMA', 'ISO', 'Microsoft'], answer: 'W3C (World Wide Web Consortium)' }
    ],
    interviewQuestions: [
      { q: 'Why was CSS created?', a: 'To solve the problem of mixing content (HTML) with presentation tags. CSS allowed developers to separate content from design, drastically reducing code repetition and maintenance.' }
    ],
    summary: [
      'CSS was proposed in 1994 to separate content from presentation.',
      'CSS1 handled basic fonts and colors.',
      'CSS2 introduced advanced positioning.',
      'CSS3 brought animations, shadows, and modern layouts.'
    ],
    references: commonReferences
  },

  'css_why_css': {
    isStructured: true,
    title: '3. Why CSS?',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'CSS is the fundamental technology used to present Web pages visually.',
    whyUseIt: 'Without CSS, the web would be a collection of boring, unstyled text documents on white backgrounds. CSS saves time, improves page load speeds, and enables device-responsive design.',
    syntax: `/* Reusing a single class saves time */
.primary-btn {
    background: blue;
    color: white;
}`,
    codeExample: `<!-- Without CSS -->
<h1>Main Title</h1>
<p>Some text</p>

<!-- With CSS -->
<style>
  .card { padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px; }
  .title { color: darkblue; font-family: sans-serif; }
</style>
<div class="card">
  <h1 class="title">Main Title</h1>
  <p>Some text</p>
</div>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px;">
  <h1 style="color: darkblue; font-family: sans-serif; margin: 0 0 10px 0;">Main Title</h1>
  <p style="margin: 0;">Some text</p>
</div>`,
    explanation: [
        { code: 'box-shadow', desc: 'Adds depth and a modern card look.' },
        { code: 'Reusability', desc: 'The .card class can be applied to 100 different elements, styling them all instantly.' }
    ],
    realWorldExample: 'Imagine writing `<font color="red" face="Arial">` on every single paragraph across a 1,000-page website. If you wanted to change it to blue, you would have to edit 1,000 files. With CSS, you change `p { color: blue; }` in one file, and the entire website updates instantly!',
    commonMistakes: [
      { error: 'Using inline styles everywhere.', code: '<h1 style="...">', suffix: 'Defeats the purpose of CSS reusability.' }
    ],
    bestPractices: [
      'Write modular, reusable CSS classes.',
      'Avoid styling HTML globally unless necessary, use class selectors.'
    ],
    practiceExercise: {
      task: 'Define a CSS class named "highlight" that sets the background color to yellow.',
      expectedOutput: '<style>.highlight { background-color: yellow; }</style>',
      solution: `.highlight {
    background-color: yellow;
}`
    },
    quiz: [
      { question: 'What is the biggest advantage of using CSS?', options: ['It runs faster than JavaScript', 'It creates databases', 'It separates presentation from content, saving time', 'It compiles HTML'], answer: 'It separates presentation from content, saving time' },
      { question: 'How does CSS improve page load speeds?', options: ['It compresses images automatically', 'Browsers cache external CSS files, so they only download once', 'It deletes HTML tags', 'It turns code into binary'], answer: 'Browsers cache external CSS files, so they only download once' },
      { question: 'Which concept enables mobile-friendly websites?', options: ['CSS Databases', 'CSS Responsive Design (Media Queries)', 'HTML Forms', 'JavaScript Loops'], answer: 'CSS Responsive Design (Media Queries)' },
      { question: 'Can multiple HTML pages share the same CSS file?', options: ['Yes', 'No', 'Only in CSS1', 'Only if they are on the same server'], answer: 'Yes' },
      { question: 'What does CSS eliminate the need for?', options: ['HTML', 'JavaScript', 'Presentational HTML tags like <font> and <center>', 'Web Browsers'], answer: 'Presentational HTML tags like <font> and <center>' }
    ],
    interviewQuestions: [
      { q: 'What are the main advantages of CSS?', a: '1. Separation of concerns (Content vs Design). 2. Consistency across multiple pages. 3. Faster page load times due to caching. 4. Easier maintenance and global updates. 5. Device compatibility (responsive design).' }
    ],
    summary: [
      'CSS saves enormous amounts of time by styling globally.',
      'CSS files are cached, making websites faster.',
      'CSS makes websites responsive to different screen sizes.'
    ],
    references: commonReferences
  },

  'css_types_of_css': {
    isStructured: true,
    title: '4. Types of CSS',
    difficulty: 'Beginner',
    readingTime: '6 Minutes',
    definition: 'CSS can be added to HTML documents in three ways: Inline, Internal, and External.',
    whyUseIt: 'Different scenarios require different types of CSS. External is best for full websites, Internal is good for single-page tests, and Inline is useful for quick overrides.',
    syntax: `<!-- 1. Inline CSS -->
<h1 style="color: blue;">Hello</h1>

<!-- 2. Internal CSS -->
<style> h1 { color: blue; } </style>

<!-- 3. External CSS -->
<link rel="stylesheet" href="styles.css">`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <!-- EXTERNAL CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- INTERNAL CSS -->
  <style>
    .internal-text {
      color: green;
      font-size: 20px;
    }
  </style>
</head>
<body>

  <!-- INLINE CSS -->
  <h1 style="color: red; text-decoration: underline;">Inline Styled Heading</h1>
  
  <p class="internal-text">Internal Styled Paragraph</p>

</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h1 style="color: red; text-decoration: underline; margin:0 0 10px 0;">Inline Styled Heading</h1>
  <p style="color: green; font-size: 20px; margin:0;">Internal Styled Paragraph</p>
</div>`,
    explanation: [
        { code: 'Inline', desc: 'Uses the style attribute inside the HTML element.' },
        { code: 'Internal', desc: 'Uses a <style> tag inside the <head> section.' },
        { code: 'External', desc: 'Links to a separate .css file using the <link> tag.' }
    ],
    realWorldExample: 'Use External CSS for your main website theme. Use Internal CSS if you are sending a standalone HTML email. Use Inline CSS dynamically via JavaScript to animate an element.',
    commonMistakes: [
      { error: 'Using Inline CSS everywhere.', code: '<p style="...">', suffix: 'This makes your HTML messy and impossible to maintain.' }
    ],
    bestPractices: [
      'Always prefer External CSS for production websites.',
      'Avoid Inline CSS unless absolutely necessary (e.g., dynamic JavaScript styles).'
    ],
    practiceExercise: {
      task: 'Write the HTML tag required to link an external stylesheet named "main.css".',
      expectedOutput: '<link rel="stylesheet" href="main.css">',
      solution: '<link rel="stylesheet" href="main.css">'
    },
    quiz: [
      { question: 'Which CSS type has the highest priority?', options: ['External', 'Internal', 'Inline', 'Browser Default'], answer: 'Inline' },
      { question: 'Which tag is used for Internal CSS?', options: ['<link>', '<script>', '<style>', '<css>'], answer: '<style>' },
      { question: 'Which tag is used for External CSS?', options: ['<style>', '<script>', '<link>', '<a>'], answer: '<link>' },
      { question: 'Where should the <link> tag for External CSS be placed?', options: ['At the end of the <body>', 'Inside the <head> section', 'Anywhere in the document', 'Before the <html> tag'], answer: 'Inside the <head> section' },
      { question: 'Which attribute is used for Inline CSS?', options: ['class', 'style', 'id', 'css'], answer: 'style' }
    ],
    interviewQuestions: [
      { q: 'What is the priority order (specificity) of the three types of CSS?', a: 'Inline CSS has the highest priority. If an element has an inline style, it will override Internal and External CSS rules. Internal CSS generally overrides External CSS if it is declared later in the <head>.' }
    ],
    summary: [
      'Inline CSS is written directly on the element using the style attribute.',
      'Internal CSS is placed in the <head> inside <style> tags.',
      'External CSS uses a separate .css file and is the recommended approach.'
    ],
    references: commonReferences
  },

  'css_css_syntax': {
    isStructured: true,
    title: '5. CSS Syntax',
    difficulty: 'Beginner',
    readingTime: '4 Minutes',
    definition: 'A CSS rule consists of a selector and a declaration block containing property-value pairs.',
    whyUseIt: 'Understanding the syntax is required to write any valid CSS code.',
    syntax: `selector {
    property: value;
}`,
    codeExample: `/* Selector points to the HTML element you want to style */
h1 {
  /* Declaration block starts with { */
  
  color: blue;       /* Declaration (Property: Value;) */
  font-size: 12px;   /* Multiple declarations are separated by semicolons */
  
} /* Declaration block ends with } */`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Selector (h1)', desc: 'Indicates which HTML element is to be styled.' },
        { code: 'Property (color)', desc: 'The specific aspect of the element you want to change.' },
        { code: 'Value (blue)', desc: 'The setting you want to apply to the property.' }
    ],
    realWorldExample: 'Writing CSS is like ordering a custom coffee: "Coffee (Selector) { size: Large (Property: Value); milk: Oat; }".',
    commonMistakes: [
      { error: 'Missing a semicolon.', code: 'color: blue font-size: 12px;', suffix: 'This breaks the entire CSS rule.' },
      { error: 'Using an equals sign instead of a colon.', code: 'color = blue;', suffix: 'CSS requires a colon (:).' }
    ],
    bestPractices: [
      'Place one declaration per line for readability.',
      'Always add a semicolon to the last declaration, even though it is optional.'
    ],
    practiceExercise: {
      task: 'Write a CSS rule targeting the "p" tag, setting the background color to black.',
      expectedOutput: 'p {\n  background-color: black;\n}',
      solution: `p {
  background-color: black;
}`
    },
    quiz: [
      { question: 'What separates a property and a value in CSS?', options: ['Equals sign (=)', 'Semicolon (;)', 'Colon (:)', 'Hyphen (-)'], answer: 'Colon (:)' },
      { question: 'What separates multiple declarations in CSS?', options: ['Comma (,)', 'Semicolon (;)', 'Period (.)', 'Space'], answer: 'Semicolon (;)' },
      { question: 'What surrounds a CSS declaration block?', options: ['Parentheses ()', 'Square brackets []', 'Curly braces {}', 'Angle brackets <>'], answer: 'Curly braces {}' },
      { question: 'In "color: red;", what is "color"?', options: ['Selector', 'Property', 'Value', 'Declaration'], answer: 'Property' },
      { question: 'In "font-size: 16px;", what is "16px"?', options: ['Selector', 'Property', 'Value', 'Attribute'], answer: 'Value' }
    ],
    interviewQuestions: [
      { q: 'Explain the components of a CSS rule-set.', a: 'A rule-set consists of a selector (pointing to the HTML element) and a declaration block (surrounded by curly braces). The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.' }
    ],
    summary: [
      'A CSS rule consists of a Selector and a Declaration Block.',
      'Declarations are property-value pairs separated by colons.',
      'Always use semicolons to separate multiple declarations.'
    ],
    references: commonReferences
  },

  'css_comments': {
    isStructured: true,
    title: '6. Comments',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'CSS comments are used to explain code or temporarily disable parts of stylesheets. They are ignored by the browser.',
    whyUseIt: 'Comments make your code readable for yourself and other developers. They are also useful for debugging.',
    syntax: `/* This is a single-line comment */

/* 
   This is a 
   multi-line comment 
*/`,
    codeExample: `/* --- Header Styles --- */
h1 {
  color: green;
  /* text-align: center; (disabled for now) */
}

/* 
  The paragraph styles below
  set the base typography 
*/
p {
  font-size: 16px;
}`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '/*', desc: 'Starts the comment.' },
        { code: '*/', desc: 'Ends the comment.' }
    ],
    realWorldExample: 'In a 5,000-line CSS file, you would use comments like /* NAVIGATION BAR */ and /* FOOTER */ to divide the file into logical sections.',
    commonMistakes: [
      { error: 'Trying to use HTML comments in CSS files.', code: '<!-- comment -->', suffix: 'HTML comments do not work in CSS.' },
      { error: 'Trying to use JS single line comments.', code: '// comment', suffix: 'While some preprocessors (SASS) support this, vanilla CSS does not.' }
    ],
    bestPractices: [
      'Comment why a specific style was used if it is not obvious (e.g., a hack to fix an IE bug).',
      'Use comments to organize your stylesheet into sections.'
    ],
    practiceExercise: {
      task: 'Write a valid CSS comment that says "Main Layout".',
      expectedOutput: '/* Main Layout */',
      solution: '/* Main Layout */'
    },
    quiz: [
      { question: 'How do you insert a comment in a CSS file?', options: ['// this is a comment', '<!-- this is a comment -->', '/* this is a comment */', '" this is a comment "'], answer: '/* this is a comment */' },
      { question: 'Are CSS comments displayed in the browser?', options: ['Yes', 'No', 'Only in development mode', 'Only on mobile'], answer: 'No' },
      { question: 'Can CSS comments span multiple lines?', options: ['Yes', 'No'], answer: 'Yes' },
      { question: 'Can you nest CSS comments? ( /* /* nested */ */ )', options: ['Yes', 'No'], answer: 'No' },
      { question: 'Can you use HTML comments (<!-- -->) inside a <style> tag?', options: ['Yes, but only for older browser hiding', 'Yes, it works exactly like CSS comments', 'No, it will break the CSS', 'Only in HTML5'], answer: 'No, it will break the CSS' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to use comments in CSS?', a: 'Comments improve code maintainability, help organize large files, and assist teams in understanding the intent behind complex or hacky CSS rules.' }
    ],
    summary: [
      'Comments start with /* and end with */.',
      'They are ignored by browsers.',
      'They can span single or multiple lines.'
    ],
    references: commonReferences
  },

  'css_css_selectors': {
    isStructured: true,
    title: '7. CSS Selectors',
    difficulty: 'Beginner',
    readingTime: '7 Minutes',
    definition: 'CSS Selectors are used to "find" (or select) the HTML elements you want to style.',
    whyUseIt: 'Without selectors, CSS would not know which HTML elements to apply colors and layouts to.',
    syntax: `/* Element Selector */
p { color: red; }

/* Class Selector */
.highlight { font-weight: bold; }

/* ID Selector */
#header { background: black; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Element Selector targets ALL <p> tags */
  p { text-align: center; }

  /* ID Selector targets exactly ONE unique element */
  #main-title { color: blue; }

  /* Class Selector targets MULTIPLE elements with this class */
  .danger { color: red; }

  /* Universal Selector targets EVERYTHING */
  * { font-family: Arial; }
</style>
</head>
<body>

  <h1 id="main-title">Welcome</h1>
  <p>This is a standard paragraph.</p>
  <p class="danger">This is a warning!</p>

</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="font-family: Arial;">
  <h1 style="color: blue;">Welcome</h1>
  <p style="text-align: center;">This is a standard paragraph.</p>
  <p style="text-align: center; color: red;">This is a warning!</p>
</div>`,
    explanation: [
        { code: '#', desc: 'Used for ID selectors. IDs must be unique per page.' },
        { code: '.', desc: 'Used for Class selectors. Classes can be used infinitely.' }
    ],
    realWorldExample: 'Think of Selectors like an address system. The Element selector is "Everyone in the City". The Class selector is "Everyone wearing a red shirt". The ID selector is "John Doe at 123 Main St".',
    commonMistakes: [
      { error: 'Starting an ID with a number.', code: '#123header', suffix: 'IDs and Classes cannot start with a number.' },
      { error: 'Forgetting the dot for a class.', code: 'highlight { color: red; }', suffix: 'This looks for a <highlight> HTML tag, not a class.' }
    ],
    bestPractices: [
      'Use Classes (.) for almost all styling to keep CSS reusable.',
      'Avoid using IDs (#) for styling, as their high specificity makes overrides difficult.',
      'Combine selectors for precision (e.g., div.card p { ... }).'
    ],
    practiceExercise: {
      task: 'Write a CSS selector to target an element with the class "btn" and make its background green.',
      expectedOutput: '.btn { background-color: green; }',
      solution: `.btn { background-color: green; }`
    },
    quiz: [
      { question: 'Which character is used to select an ID in CSS?', options: ['#', '.', '*', '&'], answer: '#' },
      { question: 'Which character is used to select a Class in CSS?', options: ['#', '.', '*', '&'], answer: '.' },
      { question: 'Which selector targets all elements on the page?', options: ['all', 'body', '*', 'html'], answer: '*' },
      { question: 'How do you group multiple selectors to share the same CSS rule?', options: ['Separate them with a space', 'Separate them with a comma', 'Separate them with a plus sign', 'Separate them with a period'], answer: 'Separate them with a comma' },
      { question: 'Can an HTML element have multiple classes?', options: ['Yes', 'No'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between an ID and a Class selector?', a: 'An ID is unique and can only be used once per HTML page, targeted with a #. A Class can be used on multiple elements across the page, targeted with a .' },
      { q: 'Explain CSS Specificity.', a: 'Specificity determines which CSS rule is applied when multiple rules target the same element. IDs have higher specificity than Classes, and Classes have higher specificity than Element selectors.' }
    ],
    summary: [
      'Element selectors target HTML tags (h1, p).',
      'Class selectors target the class attribute (.) and are reusable.',
      'ID selectors target the id attribute (#) and are unique.',
      'Group selectors using a comma (,).'
    ],
    references: commonReferences
  },

  'css_colors': {
    isStructured: true,
    title: '8. Colors',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'CSS colors define the color of text, backgrounds, and borders.',
    whyUseIt: 'Colors are essential for branding, visual hierarchy, and UI design.',
    syntax: `selector {
    color: value; /* For text */
    background-color: value; /* For background */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .name-color { color: Tomato; }
  .hex-color { color: #3Cb371; }
  .rgb-color { color: rgb(60, 90, 200); }
  .rgba-color { color: rgba(255, 0, 0, 0.5); } /* 50% opacity red */
  
  .box {
    background-color: #f4f4f4;
    border: 2px solid dodgerblue;
    padding: 10px;
  }
</style>
<body>
  <div class="box">
    <h3 class="name-color">Color by Name</h3>
    <h3 class="hex-color">Color by HEX</h3>
    <h3 class="rgb-color">Color by RGB</h3>
    <h3 class="rgba-color">Color by RGBA (Transparent)</h3>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="background-color: #f4f4f4; border: 2px solid dodgerblue; padding: 10px;">
    <h3 style="color: Tomato; margin: 5px 0;">Color by Name</h3>
    <h3 style="color: #3Cb371; margin: 5px 0;">Color by HEX</h3>
    <h3 style="color: rgb(60, 90, 200); margin: 5px 0;">Color by RGB</h3>
    <h3 style="color: rgba(255, 0, 0, 0.5); margin: 5px 0;">Color by RGBA (Transparent)</h3>
</div>`,
    explanation: [
        { code: 'HEX', desc: 'Hexadecimal color (e.g., #FF0000 is red).' },
        { code: 'RGB', desc: 'Red, Green, Blue values from 0-255.' },
        { code: 'RGBA', desc: 'Same as RGB, but with an Alpha channel for transparency (0.0 to 1.0).' }
    ],
    realWorldExample: 'Most enterprise companies define their branding using precise HEX codes (e.g., Facebook Blue is #1877F2) rather than color names.',
    commonMistakes: [
      { error: 'Forgetting the hash in HEX colors.', code: 'color: FF0000;', suffix: 'Should be #FF0000.' }
    ],
    bestPractices: [
      'Use HEX or RGB/HSL for precision, avoid predefined color names (like "red" or "blue") in production.',
      'Ensure high contrast between text color and background color for accessibility.'
    ],
    practiceExercise: {
      task: 'Set the background color of a div to a 50% transparent black using RGBA.',
      expectedOutput: 'div { background-color: rgba(0, 0, 0, 0.5); }',
      solution: `div { background-color: rgba(0, 0, 0, 0.5); }`
    },
    quiz: [
      { question: 'Which property is used to change the text color?', options: ['font-color', 'text-color', 'color', 'fgcolor'], answer: 'color' },
      { question: 'Which format represents white in HEX?', options: ['#000000', '#FFFFFF', '#FF0000', '#111111'], answer: '#FFFFFF' },
      { question: 'What does the "A" in RGBA stand for?', options: ['Auto', 'Alpha (Opacity)', 'Array', 'Apple'], answer: 'Alpha (Opacity)' },
      { question: 'What is the range of values for RGB colors?', options: ['0 to 100', '0 to 255', '0.0 to 1.0', '-100 to 100'], answer: '0 to 255' },
      { question: 'Which is a valid CSS color name?', options: ['tomato', 'dark-light-blue', 'bright-red', 'transparent-green'], answer: 'tomato' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between RGB and HEX?', a: 'They both represent the exact same colors on screen. HEX uses base-16 alphanumeric notation (#RRGGBB), while RGB uses base-10 numerical values rgb(R, G, B). HEX is often shorter and more widely used.' }
    ],
    summary: [
      'The color property changes text color.',
      'Colors can be defined by Names, HEX, RGB, RGBA, HSL, or HSLA.',
      'RGBA allows you to control the transparency (Alpha) of a color.'
    ],
    references: commonReferences
  },

  'css_backgrounds': {
    isStructured: true,
    title: '9. Backgrounds',
    difficulty: 'Beginner',
    readingTime: '6 Minutes',
    definition: 'CSS background properties are used to define the background effects for elements.',
    whyUseIt: 'Backgrounds are crucial for creating distinct sections, Hero banners, and adding visual flair using colors or images.',
    syntax: `selector {
    background-color: value;
    background-image: url('image.jpg');
    background-size: cover;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .hero-banner {
    /* Set a fallback color */
    background-color: #333;
    
    /* Set the background image */
    background-image: url('https://picsum.photos/600/200');
    
    /* Prevent the image from repeating */
    background-repeat: no-repeat;
    
    /* Cover the entire div */
    background-size: cover;
    
    /* Center the image */
    background-position: center;
    
    color: white;
    padding: 50px;
    text-align: center;
  }
</style>
<body>
  <div class="hero-banner">
    <h2>Welcome to my Website</h2>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="background-image: url('https://picsum.photos/600/200'); background-size: cover; background-position: center; color: white; padding: 50px; text-align: center; border-radius: 8px;">
  <h2 style="margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">Welcome to my Website</h2>
</div>`,
    explanation: [
        { code: 'background-size: cover', desc: 'Scales the image to cover the entire container, potentially cropping it.' },
        { code: 'background-size: contain', desc: 'Scales the image so the entire image is visible, leaving empty space if aspect ratios differ.' },
        { code: 'background-repeat', desc: 'By default, background images repeat infinitely. Use no-repeat to stop this.' }
    ],
    realWorldExample: 'The massive image you see at the top of a modern website (a Hero section) is almost always rendered using `background-image` with `background-size: cover` and `background-position: center`.',
    commonMistakes: [
      { error: 'Text unreadable over background images.', code: '', suffix: 'Always set a fallback background-color and use text-shadows or dark overlays to ensure text is readable.' },
      { error: 'Incorrect URL path.', code: 'background-image: url(img.jpg);', suffix: 'Ensure the path is relative to the CSS file, not the HTML file.' }
    ],
    bestPractices: [
      'Always specify a `background-color` as a fallback if the image fails to load.',
      'Use shorthand `background: #333 url("img.jpg") no-repeat center/cover;` to save space.'
    ],
    practiceExercise: {
      task: 'Write a shorthand background property setting the color to red, image to "bg.png", no repeating, and fixed position.',
      expectedOutput: 'background: red url("bg.png") no-repeat fixed;',
      solution: `background: red url("bg.png") no-repeat fixed;`
    },
    quiz: [
      { question: 'Which property is used to set a background image?', options: ['background-img', 'bg-image', 'background-image', 'image-src'], answer: 'background-image' },
      { question: 'What is the default value of background-repeat?', options: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'], answer: 'repeat' },
      { question: 'Which property prevents the background image from scrolling with the page?', options: ['background-scroll', 'background-attachment', 'background-fixed', 'background-position'], answer: 'background-attachment' },
      { question: 'Which value makes the background image cover the entire element?', options: ['fill', 'contain', 'cover', '100%'], answer: 'cover' },
      { question: 'Can you have multiple background images on one element?', options: ['Yes, separated by commas', 'No', 'Only in HTML', 'Only using JavaScript'], answer: 'Yes, separated by commas' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between background-size: cover and contain?', a: 'Cover scales the image as large as possible to fill the container completely, often cropping the image. Contain scales the image to the maximum size where both its width and height can fit inside the container, never cropping, but potentially leaving empty letterbox space.' }
    ],
    summary: [
      'Use background-color for solid backgrounds.',
      'Use background-image for graphics.',
      'Control scaling with background-size (cover/contain).',
      'Control tiling with background-repeat.'
    ],
    references: commonReferences
  },

  'css_borders': {
    isStructured: true,
    title: '10. Borders',
    difficulty: 'Beginner',
    readingTime: '4 Minutes',
    definition: 'The CSS border properties allow you to specify the style, width, and color of an element\'s border.',
    whyUseIt: 'Borders define boundaries for elements, highlight active form fields, and can create shapes like circles (using border-radius).',
    syntax: `selector {
    border-width: 2px;
    border-style: solid;
    border-color: red;
    
    /* Shorthand */
    border: 2px solid red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .solid-border { border: 2px solid black; }
  .dashed-border { border: 3px dashed blue; }
  .dotted-border { border: 4px dotted red; }
  
  .rounded {
    border: 2px solid green;
    border-radius: 10px; /* Curves the corners */
    padding: 10px;
  }
</style>
<body>
  <p class="solid-border">Solid Border</p>
  <p class="dashed-border">Dashed Border</p>
  <p class="dotted-border">Dotted Border</p>
  <p class="rounded">Rounded Corners!</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="border: 2px solid black; padding: 5px; margin: 5px 0;">Solid Border</p>
  <p style="border: 3px dashed blue; padding: 5px; margin: 5px 0;">Dashed Border</p>
  <p style="border: 4px dotted red; padding: 5px; margin: 5px 0;">Dotted Border</p>
  <p style="border: 2px solid green; border-radius: 10px; padding: 5px; margin: 5px 0;">Rounded Corners!</p>
</div>`,
    explanation: [
        { code: 'border-style', desc: 'MUST be specified for a border to appear (solid, dashed, dotted, none).' },
        { code: 'border-radius', desc: 'Rounds the corners. Setting it to 50% on a square element makes a perfect circle.' },
        { code: 'border shorthand', desc: 'The order is usually Width, Style, Color (e.g., 1px solid black).' }
    ],
    realWorldExample: 'Buttons on modern websites usually have `border: none` and a `border-radius: 4px` to look sleek. Inputs often have a subtle grey border that changes to a bright blue border (`border-color`) when clicked.',
    commonMistakes: [
      { error: 'Forgetting border-style.', code: 'border-color: red; border-width: 2px;', suffix: 'Nothing will show up unless you add border-style: solid;' }
    ],
    bestPractices: [
      'Use the `border` shorthand property to keep CSS clean.',
      'Use `border-radius: 50%` to easily create circular profile pictures.'
    ],
    practiceExercise: {
      task: 'Write CSS to create a circle. Assume a div with width 100px and height 100px. Add a 5px solid red border.',
      expectedOutput: 'div { width: 100px; height: 100px; border: 5px solid red; border-radius: 50%; }',
      solution: `div {
    width: 100px;
    height: 100px;
    border: 5px solid red;
    border-radius: 50%;
}`
    },
    quiz: [
      { question: 'Which property is REQUIRED for a border to be visible?', options: ['border-width', 'border-color', 'border-style', 'border-radius'], answer: 'border-style' },
      { question: 'Which property rounds the corners of a border?', options: ['border-corner', 'corner-radius', 'border-radius', 'border-curve'], answer: 'border-radius' },
      { question: 'What is the correct shorthand syntax for border?', options: ['border: solid 1px red;', 'border: red 1px solid;', 'border: 1px solid red;', 'All of the above work'], answer: 'All of the above work' },
      { question: 'How do you create a border only on the bottom?', options: ['border: bottom 1px solid;', 'border-bottom: 1px solid black;', 'bottom-border: 1px solid;', 'border-down: solid;'], answer: 'border-bottom: 1px solid black;' },
      { question: 'What value of border-radius creates a perfect circle (on a square element)?', options: ['100px', 'circle', '50%', '360deg'], answer: '50%' }
    ],
    interviewQuestions: [
      { q: 'How do you remove a border from an input field?', a: 'Use `border: none;` or `border: 0;`. You should also consider `outline: none;` to remove the accessibility focus ring if you are replacing it with a custom focus style.' }
    ],
    summary: [
      'Borders require a style (solid, dashed, dotted).',
      'The shorthand is: border: width style color.',
      'border-radius rounds the corners of an element.'
    ],
    references: commonReferences
  },

  'css_margins': {
    isStructured: true,
    title: '11. Margins',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'Margins are used to create space AROUND elements, outside of any defined borders.',
    whyUseIt: 'Margins push elements away from each other, creating layout structure and preventing elements from touching or crowding.',
    syntax: `selector {
    margin: 20px; /* All sides */
    margin-top: 10px;
    margin-bottom: 10px;
    margin: 10px 20px 30px 40px; /* Top Right Bottom Left */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    border: 2px solid black;
    background-color: lightgray;
  }
  
  .margin-all {
    margin: 30px; /* 30px on all 4 sides */
  }
  
  .margin-auto {
    width: 200px;
    margin: 0 auto; /* Centers the box horizontally! */
  }
</style>
<body>
  <div class="box margin-all">I have a 30px margin pushing others away.</div>
  <div class="box margin-auto">I am horizontally centered!</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="border: 2px solid black; background-color: lightgray; padding: 5px; margin: 30px;">I have a 30px margin pushing others away.</div>
  <div style="border: 2px solid black; background-color: lightgray; padding: 5px; width: 80%; margin: 0 auto; text-align: center;">I am horizontally centered!</div>
</div>`,
    explanation: [
        { code: 'margin: 30px', desc: 'Applies 30px space to top, right, bottom, and left.' },
        { code: 'margin: 10px 20px', desc: '10px top/bottom, 20px left/right.' },
        { code: 'margin: 0 auto', desc: 'The "magic" trick to horizontally center a block element (like a div) if it has a specified width.' }
    ],
    realWorldExample: 'Every modern website limits the maximum width of its content (e.g., `max-width: 1200px`) and then uses `margin: 0 auto;` so the website stays in the exact center of your ultra-wide monitor.',
    commonMistakes: [
      { error: 'Margin Collapse.', code: '', suffix: 'Top and bottom margins of adjacent elements sometimes collapse into a single margin. This confuses many beginners.' }
    ],
    bestPractices: [
      'Use margin shorthand (TRBL - Top, Right, Bottom, Left) like a clock starting at 12.',
      'Use `margin-bottom` on text elements (h1, p) to create consistent vertical rhythm.'
    ],
    practiceExercise: {
      task: 'Write shorthand margin property setting Top to 10px, Right to 20px, Bottom to 30px, and Left to 40px.',
      expectedOutput: 'margin: 10px 20px 30px 40px;',
      solution: `margin: 10px 20px 30px 40px;`
    },
    quiz: [
      { question: 'Margins create space ____ the border.', options: ['Inside', 'Outside', 'On top of', 'Underneath'], answer: 'Outside' },
      { question: 'What does "margin: 0 auto;" do to a block element with a set width?', options: ['Makes it invisible', 'Centers it horizontally', 'Centers it vertically', 'Removes all margins'], answer: 'Centers it horizontally' },
      { question: 'If margin has two values (margin: 10px 20px;), what do they represent?', options: ['Left/Right then Top/Bottom', 'Top/Bottom then Left/Right', 'Top/Right then Bottom/Left', 'Inside/Outside'], answer: 'Top/Bottom then Left/Right' },
      { question: 'In "margin: 10px 20px 30px 40px;", what is the Left margin?', options: ['10px', '20px', '30px', '40px'], answer: '40px' },
      { question: 'What is Margin Collapse?', options: ['When margins become negative', 'When left and right margins overlap', 'When vertical margins of adjacent elements merge into one', 'When margins are set to 0'], answer: 'When vertical margins of adjacent elements merge into one' }
    ],
    interviewQuestions: [
      { q: 'Explain Margin Collapsing.', a: 'Margin collapsing occurs when the top and bottom margins of two adjacent vertical block-level elements touch. Instead of adding together, they collapse into a single margin whose size is the larger of the two margins.' }
    ],
    summary: [
      'Margins create space OUTSIDE the element.',
      'Shorthand order is Top, Right, Bottom, Left (Clockwise).',
      'margin: 0 auto; centers block elements horizontally.'
    ],
    references: commonReferences
  },

  'css_padding': {
    isStructured: true,
    title: '12. Padding',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'Padding is used to create space INSIDE an element, between its content and its border.',
    whyUseIt: 'Without padding, text would jam right up against the borders of its container. Padding gives content room to breathe and makes buttons clickable and attractive.',
    syntax: `selector {
    padding: 20px; /* All sides */
    padding-top: 10px;
    padding: 10px 20px; /* Top/Bottom Left/Right */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .no-padding {
    border: 2px solid red;
    background-color: yellow;
  }
  
  .good-padding {
    border: 2px solid green;
    background-color: lightgreen;
    padding: 20px; /* Room to breathe! */
  }
  
  .btn {
    background-color: blue;
    color: white;
    padding: 10px 24px; /* classic button padding */
    border-radius: 4px;
    display: inline-block;
  }
</style>
<body>
  <div class="no-padding">I feel suffocated!</div>
  <br>
  <div class="good-padding">Ah, much better!</div>
  <br>
  <div class="btn">Click Me</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="border: 2px solid red; background-color: yellow; margin-bottom: 10px;">I feel suffocated!</div>
  <div style="border: 2px solid green; background-color: lightgreen; padding: 20px; margin-bottom: 10px;">Ah, much better!</div>
  <div style="background-color: blue; color: white; padding: 10px 24px; border-radius: 4px; display: inline-block;">Click Me</div>
</div>`,
    explanation: [
        { code: 'padding: 20px', desc: 'Pushes the border 20px away from the text inside.' },
        { code: 'padding: 10px 24px', desc: '10px top and bottom, 24px left and right. Extremely common for buttons.' }
    ],
    realWorldExample: 'Look at any modern UI button. The clickable colored area is created by padding. If a button had no padding, you would be clicking exactly on the letters of the text.',
    commonMistakes: [
      { error: 'Confusing Margin and Padding.', code: '', suffix: 'Margin pushes OTHER elements away. Padding pushes the BORDER away from its own content.' },
      { error: 'Padding expanding the element size.', code: '', suffix: 'By default, adding padding increases the total width/height of the element. Use box-sizing: border-box to fix this (explained in Box Model).' }
    ],
    bestPractices: [
      'Use padding to make touch targets (links/buttons) larger and easier to tap on mobile.'
    ],
    practiceExercise: {
      task: 'Style a class called "card" to have 15px padding on the top and bottom, and 30px padding on the left and right.',
      expectedOutput: '.card { padding: 15px 30px; }',
      solution: `.card {
    padding: 15px 30px;
}`
    },
    quiz: [
      { question: 'Padding creates space ____ the border.', options: ['Inside', 'Outside', 'On top of', 'Underneath'], answer: 'Inside' },
      { question: 'Which shorthand creates 10px padding top/bottom and 20px padding left/right?', options: ['padding: 10px 20px;', 'padding: 20px 10px;', 'padding: 10px 20px 10px;', 'padding: 10px;'], answer: 'padding: 10px 20px;' },
      { question: 'Does padding inherit the background color of the element?', options: ['Yes', 'No', 'Only on divs', 'Only if set explicitly'], answer: 'Yes' },
      { question: 'Which property is used to generate space around elements, outside the border?', options: ['padding', 'spacing', 'margin', 'border-spacing'], answer: 'margin' },
      { question: 'If you want a button to look bigger without changing the font size, you should increase the:', options: ['margin', 'padding', 'border', 'font-weight'], answer: 'padding' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference between Margin and Padding?', a: 'Padding adds space inside the element (between content and border), and it takes on the background color of the element. Margin adds space outside the element (between the border and adjacent elements), and it is always transparent.' }
    ],
    summary: [
      'Padding creates space INSIDE the element.',
      'Padding affects the total calculated size of the element (without box-sizing).',
      'The shorthand order is exactly the same as Margin (TRBL).'
    ],
    references: commonReferences
  },

  'css_height_width': {
    isStructured: true,
    title: '13. Height & Width',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'The height and width properties are used to set the size of an element.',
    whyUseIt: 'By default, block elements take up 100% width and stretch to fit their content vertically. You need height and width to create specific layouts, sidebars, images sizes, and cards.',
    syntax: `selector {
    width: 50%;
    height: 200px;
    max-width: 500px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .fixed-box {
    width: 200px;
    height: 100px;
    background-color: coral;
  }
  
  .responsive-box {
    width: 50%;       /* Takes half of parent's width */
    max-width: 300px; /* Will not grow beyond 300px */
    background-color: lightblue;
    padding: 20px;
  }
</style>
<body>
  <div class="fixed-box">I am exactly 200px wide.</div>
  <br>
  <div class="responsive-box">I shrink on small screens, but cap at 300px on large screens!</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 200px; height: 100px; background-color: coral; padding: 5px;">I am exactly 200px wide.</div>
  <br>
  <div style="width: 50%; max-width: 300px; background-color: lightblue; padding: 20px;">I shrink on small screens, but cap at 300px on large screens!</div>
</div>`,
    explanation: [
        { code: 'width: 200px', desc: 'Sets a rigid, absolute width. Not ideal for mobile devices.' },
        { code: 'width: 50%', desc: 'Relative width. Resizes automatically as the browser window resizes.' },
        { code: 'max-width', desc: 'Extremely important for responsive design. It allows an element to shrink, but prevents it from stretching too far.' }
    ],
    realWorldExample: 'A blog post container might have `width: 100%; max-width: 800px;`. On a phone, it takes up the whole screen. On a 4K monitor, it stops at 800px so the text lines don\'t get painfully long to read.',
    commonMistakes: [
      { error: 'Setting fixed heights on text containers.', code: 'height: 100px;', suffix: 'If the text is too long, it will overflow out of the box. Use min-height instead.' }
    ],
    bestPractices: [
      'Avoid setting rigid `height` on containers with text. Let the content dictate the height.',
      'Use `%` or `vw` for widths, and `max-width` to cap them, ensuring mobile responsiveness.'
    ],
    practiceExercise: {
      task: 'Create a rule for an image (.hero-img) to take up 100% of the width, but never exceed 600px.',
      expectedOutput: '.hero-img { width: 100%; max-width: 600px; }',
      solution: `.hero-img {
    width: 100%;
    max-width: 600px;
}`
    },
    quiz: [
      { question: 'Which property prevents an element from becoming wider than a specific value?', options: ['width', 'max-width', 'min-width', 'width-limit'], answer: 'max-width' },
      { question: 'What happens if you set a fixed height on a div, but put too much text inside it?', options: ['The div automatically grows', 'The text overflows outside the div', 'The text shrinks', 'An error occurs'], answer: 'The text overflows outside the div' },
      { question: 'Which unit is best for making a width responsive to the screen size?', options: ['px', 'cm', '%', 'pt'], answer: '%' },
      { question: 'Can you use "auto" as a value for height and width?', options: ['Yes', 'No'], answer: 'Yes' },
      { question: 'What is the default width of a block-level element (like a <div>)?', options: ['0', 'Fit to content', '100% of its parent', '50%'], answer: '100% of its parent' }
    ],
    interviewQuestions: [
      { q: 'Why is max-width preferred over width for responsive design?', a: 'Using `width: 500px` forces the element to be 500px, causing a horizontal scrollbar on devices smaller than 500px. Using `max-width: 500px` (with `width: 100%`) allows the element to shrink naturally on small screens, preventing scrollbars.' }
    ],
    summary: [
      'Width and height define the dimensions of the content area.',
      'Avoid fixed heights for text containers.',
      'Use max-width combined with % for responsive layouts.'
    ],
    references: commonReferences
  },

  'css_box_model': {
    isStructured: true,
    title: '14. Box Model',
    difficulty: 'Intermediate',
    readingTime: '8 Minutes',
    definition: 'The CSS Box Model describes the rectangular boxes generated for elements in the document tree. It consists of: Margins, Borders, Padding, and the actual Content.',
    whyUseIt: 'Understanding the Box Model is the absolute most important concept in CSS. If you do not understand it, your layouts will break, elements will not align, and sizes will be wrong.',
    syntax: `/* The Box Model fix you should put in EVERY project */
* {
    box-sizing: border-box;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 300px;
    padding: 25px;
    border: 25px solid navy;
    margin: 25px;
    background-color: lightblue;
  }
  
  .box-fixed {
    /* This changes how width is calculated! */
    box-sizing: border-box; 
    
    width: 300px;
    padding: 25px;
    border: 25px solid navy;
    margin: 25px;
    background-color: lightgreen;
  }
</style>
<body>
  <!-- Standard Box Model -->
  <div class="box">
    Width is actually 400px! (300 width + 50 padding + 50 border)
  </div>

  <!-- Border-Box Model -->
  <div class="box-fixed">
    Width is exactly 300px. (Content shrinks to absorb padding/border)
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 300px; padding: 25px; border: 25px solid navy; margin: 10px 0; background-color: lightblue; box-sizing: content-box;">Width is actually 400px!</div>
  <div style="width: 300px; padding: 25px; border: 25px solid navy; margin: 10px 0; background-color: lightgreen; box-sizing: border-box;">Width is exactly 300px!</div>
</div>`,
    explanation: [
        { code: 'Content Box (Default)', desc: 'Total Width = width + left/right padding + left/right border.' },
        { code: 'Border Box', desc: 'Total Width = width. The padding and border eat into the content space instead of expanding the box.' }
    ],
    realWorldExample: 'Imagine buying a 10x10 foot plot of land (width). If you build a 2-foot fence (border) and a 1-foot walkway (padding) on the OUTSIDE, you are trespassing on your neighbor\'s land (Content-box). If you build them on the INSIDE of your property line, your useable land shrinks, but you stay in your plot (Border-box).',
    commonMistakes: [
      { error: 'Elements breaking grids.', code: '', suffix: 'You set two divs to width: 50%, but added a 1px border. They now take up 50% + 2px, exceeding 100%, breaking to the next line. Fix: use box-sizing: border-box.' }
    ],
    bestPractices: [
      'Apply `box-sizing: border-box;` to the Universal Selector (*) at the very top of EVERY CSS file you ever write.'
    ],
    practiceExercise: {
      task: 'Write the CSS reset snippet that applies border-box to all elements on the page.',
      expectedOutput: '* { box-sizing: border-box; }',
      solution: `* {
    box-sizing: border-box;
}`
    },
    quiz: [
      { question: 'Which of the following is NOT part of the CSS Box Model?', options: ['Margin', 'Padding', 'Border', 'Position'], answer: 'Position' },
      { question: 'In the standard box model, what is the total width of an element with: width: 100px, padding: 10px, border: 5px?', options: ['100px', '115px', '130px', '110px'], answer: '130px' },
      { question: 'Which CSS property alters how the box model calculates width and height?', options: ['box-model', 'box-sizing', 'calculate-width', 'box-shadow'], answer: 'box-sizing' },
      { question: 'What is the most recommended value for box-sizing in modern web design?', options: ['content-box', 'border-box', 'padding-box', 'margin-box'], answer: 'border-box' },
      { question: 'Which part of the box model is transparent and cannot have a background color?', options: ['Content', 'Padding', 'Border', 'Margin'], answer: 'Margin' }
    ],
    interviewQuestions: [
      { q: 'Explain the CSS Box Model and the difference between content-box and border-box.', a: 'The Box Model wraps every HTML element, consisting of content, padding, borders, and margins. By default (content-box), width only applies to the content, and padding/borders are added ON TOP, increasing the total size. With border-box, the width defines the total final size, and padding/borders are subtracted from the inner content space. Border-box makes layouts predictable.' }
    ],
    summary: [
      'The Box Model is: Content -> Padding -> Border -> Margin.',
      'Standard box model adds padding/borders to your width.',
      'Use box-sizing: border-box to make elements behave predictably.'
    ],
    references: commonReferences
  }
};
