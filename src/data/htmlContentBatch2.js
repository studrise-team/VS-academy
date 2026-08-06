const commonReferences = [
  { label: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' },
  { label: 'MDN Web Docs HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
];

export const htmlContentBatch2 = {
  'html_classes': {
    isStructured: true,
    title: '19. HTML Classes',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `class` attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.',
    whyUseIt: 'It is the primary way to target elements with CSS for styling, or with JavaScript for manipulation.',
    syntax: '<tag class="classname">Content</tag>',
    codeExample: '<style>\n.city {\n  background-color: tomato;\n  color: white;\n  padding: 10px;\n}\n</style>\n\n<h2 class="city">London</h2>\n<p>London is the capital of England.</p>\n\n<h2 class="city">Paris</h2>\n<p>Paris is the capital of France.</p>',
    hasLiveOutput: true,
    expectedOutput: '<h2 style="background-color: tomato; color: white; padding: 10px;">London</h2><p>London is the capital of England.</p><h2 style="background-color: tomato; color: white; padding: 10px;">Paris</h2>',
    explanation: [
      { code: 'class="city"', desc: 'Assigns the class "city" to the elements.' },
      { code: '.city', desc: 'In CSS, you target a class using a period (.) followed by the class name.' }
    ],
    realWorldExample: 'Having 10 "Buy Now" buttons on a page that all share a `<button class="btn-primary">` class so they look identical.',
    commonMistakes: [
      { error: 'Starting class names with a number.', code: 'class="1st-item"', suffix: 'Class names must begin with a letter.' }
    ],
    bestPractices: [
      'Use descriptive, semantic names (e.g., "error-message" instead of "red-text")',
      'Elements can have multiple classes: class="btn btn-primary large"'
    ],
    practiceExercise: {
      task: 'Create a paragraph with the class "highlight".',
      expectedOutput: '<p class="highlight">Text</p>',
      solution: '<p class="highlight">Text</p>'
    },
    quiz: [
      { question: 'What is the purpose of the class attribute?', options: ['To define a unique ID', 'To group elements so they can be styled with CSS', 'To create a table', 'To insert an image'], answer: 'To group elements so they can be styled with CSS' },
      { question: 'Can multiple elements on the same page have the same class?', options: ['Yes', 'No', 'Only if they are the same tag', 'Only in CSS3'], answer: 'Yes' },
      { question: 'How do you target a class in CSS?', options: ['#classname', '.classname', '*classname', 'classname:'], answer: '.classname' },
      { question: 'Can an element have more than one class?', options: ['No, only one', 'Yes, separated by commas', 'Yes, separated by spaces', 'Yes, separated by dashes'], answer: 'Yes, separated by spaces' },
      { question: 'Is class="Title" the same as class="title"?', options: ['Yes', 'No, class names are case-sensitive', 'Only in HTML5', 'Only on Macs'], answer: 'No, class names are case-sensitive' }
    ],
    interviewQuestions: [
      { q: 'Can you assign multiple classes to a single HTML element?', a: 'Yes. You can assign multiple classes by separating them with a space within the class attribute. For example: `<div class="card active highlighted">`.' }
    ],
    summary: ['Classes group elements for CSS/JS.', 'Multiple elements share classes.', 'Target in CSS with a dot (.).'],
    references: commonReferences
  },

  'html_ids': {
    isStructured: true,
    title: '20. HTML IDs',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `id` attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.',
    whyUseIt: 'To uniquely identify an element. Used for "jump to" links (bookmarks), highly specific CSS styling, and precise JavaScript targeting.',
    syntax: '<tag id="unique-name">Content</tag>',
    codeExample: '<h1 id="myHeader">Hello World</h1>\n\n<!-- A link that jumps to the element with id="myHeader" -->\n<a href="#myHeader">Jump to Header</a>',
    hasLiveOutput: true,
    expectedOutput: '<h1 id="myHeader">Hello World</h1><a href="#myHeader">Jump to Header</a>',
    explanation: [
      { code: 'id="myHeader"', desc: 'Assigns a unique identifier to the h1.' },
      { code: '#myHeader', desc: 'In CSS or links, you target an ID using a hash/pound symbol (#).' }
    ],
    realWorldExample: 'A "Back to Top" button that links to `<div id="top">` at the very beginning of the page.',
    commonMistakes: [
      { error: 'Using the same ID twice on one page.', code: '<h1 id="title">...<h2 id="title">', suffix: 'IDs MUST be completely unique per page. If you need it twice, use a class.' }
    ],
    bestPractices: [
      'Prefer classes for CSS styling. Save IDs for JavaScript hooks or page anchors.',
      'Do not put spaces in ID names.'
    ],
    practiceExercise: {
      task: 'Create a `<div>` with the unique ID "main-container".',
      expectedOutput: '<div id="main-container"></div>',
      solution: '<div id="main-container"></div>'
    },
    quiz: [
      { question: 'What is the main rule for the id attribute?', options: ['It must be numeric', 'It must be unique within the HTML document', 'It must be used on every element', 'It must match the class name'], answer: 'It must be unique within the HTML document' },
      { question: 'How do you target an ID in CSS?', options: ['.idname', '#idname', '*idname', 'idname:'], answer: '#idname' },
      { question: 'Can an element have more than one ID?', options: ['Yes, separated by spaces', 'No, it can only have one ID', 'Yes, separated by commas', 'Only in HTML5'], answer: 'No, it can only have one ID' },
      { question: 'What happens if you click a link like <a href="#section2">?', options: ['It opens a new page', 'It jumps to the element on the page with id="section2"', 'It refreshes the page', 'It throws an error'], answer: 'It jumps to the element on the page with id="section2"' },
      { question: 'Which is better for applying CSS styles to multiple elements?', options: ['id', 'class', 'href', 'src'], answer: 'class' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between an ID and a Class?', a: 'A Class can be applied to many elements on a page, and is primarily used for CSS styling. An ID MUST be completely unique per page, and is primarily used as an anchor for links or a highly specific hook for JavaScript (`getElementById`).' }
    ],
    summary: ['IDs must be unique per page.', 'Target in CSS/Links with a hash (#).', 'Used for anchors and JS hooks.'],
    references: commonReferences
  },

  'html_iframe': {
    isStructured: true,
    title: '21. HTML Iframes',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'An iframe (inline frame) is used to embed another document within the current HTML document.',
    whyUseIt: 'To embed external content like YouTube videos, Google Maps, or external advertising banners into your site.',
    syntax: '<iframe src="url" title="description"></iframe>',
    codeExample: '<!-- Embedding a YouTube video -->\n<iframe width="560" height="315" \n  src="https://www.youtube.com/embed/tgbNymZ7vqY" \n  title="YouTube video player" \n  frameborder="0" \n  allowfullscreen>\n</iframe>',
    hasLiveOutput: false,
    expectedOutput: 'A YouTube video player embedded in the page.',
    explanation: [
      { code: '<iframe>', desc: 'The tag used to create the inline frame.' },
      { code: 'src', desc: 'The URL of the page/content to embed.' },
      { code: 'title', desc: 'Crucial for accessibility (screen readers).' }
    ],
    realWorldExample: 'Embedding a Google Map showing your store\'s location on a "Contact Us" page.',
    commonMistakes: [
      { error: 'Trying to iframe a site that blocks it.', code: 'src="https://google.com"', suffix: 'Many major sites (like Google or Facebook) send an "X-Frame-Options: DENY" header to prevent clickjacking. You cannot iframe them.' }
    ],
    bestPractices: [
      'Always include a title attribute for accessibility',
      'Be careful when iframing unknown sites due to security risks'
    ],
    practiceExercise: {
      task: 'Write an iframe tag that embeds "https://example.com" with a width of 300 and height of 200.',
      expectedOutput: '<iframe src="https://example.com" width="300" height="200"></iframe>',
      solution: '<iframe src="https://example.com" width="300" height="200"></iframe>'
    },
    quiz: [
      { question: 'What does "iframe" stand for?', options: ['Internet frame', 'Interactive frame', 'Inline frame', 'Image frame'], answer: 'Inline frame' },
      { question: 'What is the primary use of an iframe?', options: ['To draw graphics', 'To embed another web page within the current page', 'To create a table', 'To play audio'], answer: 'To embed another web page within the current page' },
      { question: 'Which attribute points to the URL of the embedded content?', options: ['href', 'src', 'link', 'url'], answer: 'src' },
      { question: 'Why is the title attribute important in an iframe?', options: ['It creates a tooltip on hover', 'It is required for screen readers (accessibility)', 'It makes the video play', 'It bypasses security blocks'], answer: 'It is required for screen readers (accessibility)' },
      { question: 'Can you embed ANY website using an iframe?', options: ['Yes', 'No, websites can block being embedded for security reasons', 'Only if you own the domain', 'Only with HTTPS'], answer: 'No, websites can block being embedded for security reasons' }
    ],
    interviewQuestions: [
      { q: 'Why do some websites block being loaded in an iframe?', a: 'Security. A malicious site could iframe a banking website, make it invisible (opacity: 0), and trick the user into clicking buttons on the hidden bank site. This is called "Clickjacking". Sites block iframes using the `X-Frame-Options` HTTP header.' }
    ],
    summary: ['Iframes embed other web pages.', 'Used for YouTube, Maps, etc.', 'Always use a title attribute.'],
    references: commonReferences
  },

  'html_forms': {
    isStructured: true,
    title: '22. HTML Forms',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'An HTML form is used to collect user input. The user input is most often sent to a server for processing.',
    whyUseIt: 'Without forms, users couldn\'t log in, register, search, or buy products. Forms make the web interactive.',
    syntax: '<form action="/submit" method="post">\n  <!-- input elements -->\n</form>',
    codeExample: '<form action="/login" method="POST">\n  <label for="username">Username:</label><br>\n  <input type="text" id="username" name="username"><br>\n  \n  <label for="pwd">Password:</label><br>\n  <input type="password" id="pwd" name="pwd"><br><br>\n  \n  <input type="submit" value="Login">\n</form>',
    hasLiveOutput: true,
    expectedOutput: '<form><label>Username:</label><br><input type="text"><br><label>Password:</label><br><input type="password"><br><br><input type="submit" value="Login"></form>',
    explanation: [
      { code: '<form>', desc: 'The container for input elements.' },
      { code: 'action', desc: 'The URL where the form data is sent upon submission.' },
      { code: 'method', desc: 'The HTTP method used (GET or POST).' },
      { code: 'name', desc: 'Crucial! The name attribute acts as the variable name when data is sent to the server.' }
    ],
    realWorldExample: 'The Google Search bar is just a form with a text input and a submit button that sends a GET request.',
    commonMistakes: [
      { error: 'Forgetting the "name" attribute on inputs.', code: '<input type="text">', suffix: 'If there is no name attribute, the data typed into that field will NOT be sent to the server.' }
    ],
    bestPractices: [
      'Use POST for sensitive data (like passwords)',
      'Use GET for non-sensitive data (like search queries)',
      'Always associate a <label> with its <input> using the "for" and "id" attributes.'
    ],
    practiceExercise: {
      task: 'Create a form that sends data to "/search" using the "GET" method.',
      expectedOutput: '<form action="/search" method="GET"></form>',
      solution: '<form action="/search" method="GET"></form>'
    },
    quiz: [
      { question: 'Which tag is used to create a form?', options: ['<input>', '<form>', '<field>', '<submit>'], answer: '<form>' },
      { question: 'What does the "action" attribute in a form do?', options: ['Makes the form move', 'Specifies the URL where the data is sent', 'Defines the HTTP method', 'Validates the data'], answer: 'Specifies the URL where the data is sent' },
      { question: 'Which HTTP method should be used for submitting passwords?', options: ['GET', 'POST', 'PUT', 'UPDATE'], answer: 'POST' },
      { question: 'Which input attribute is absolutely required for the server to identify the submitted data?', options: ['id', 'class', 'name', 'value'], answer: 'name' },
      { question: 'How do you link a <label> to an <input>?', options: ['By placing them near each other', 'Using the label\'s "for" attribute and the input\'s "id" attribute', 'Using the same "name" attribute', 'Using CSS'], answer: 'Using the label\'s "for" attribute and the input\'s "id" attribute' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between GET and POST form methods?', a: 'GET appends form data into the URL (e.g., `?q=search`), making it visible, bookmarkable, and insecure for sensitive data. POST sends data inside the HTTP request body, keeping it hidden from the URL, making it safer for passwords and large payloads.' }
    ],
    summary: ['Forms collect user input.', 'POST for sensitive data, GET for search.', 'Inputs must have a name attribute.'],
    references: commonReferences
  },

  'html_input_types': {
    isStructured: true,
    title: '23. HTML Input Types',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The `<input>` element can be displayed in several ways, depending on the `type` attribute.',
    whyUseIt: 'Different data requires different UI elements (e.g., text, passwords, checkboxes, dates).',
    syntax: '<input type="type_name">',
    codeExample: '<label>Text:</label> <input type="text"><br>\n<label>Password:</label> <input type="password"><br>\n<label>Radio:</label> <input type="radio" name="gender"> Male <input type="radio" name="gender"> Female<br>\n<label>Checkbox:</label> <input type="checkbox"> I agree<br>\n<label>Date:</label> <input type="date"><br>\n<label>Submit:</label> <input type="submit" value="Send">',
    hasLiveOutput: true,
    expectedOutput: '<label>Text:</label> <input type="text"><br><label>Password:</label> <input type="password"><br><label>Radio:</label> <input type="radio" name="g"> Male <input type="radio" name="g"> Female<br><label>Checkbox:</label> <input type="checkbox"> I agree<br><label>Date:</label> <input type="date"><br><input type="button" value="Send">',
    explanation: [
      { code: 'text', desc: 'Default single-line text field.' },
      { code: 'password', desc: 'Masks characters as asterisks/dots.' },
      { code: 'radio', desc: 'Allows selecting only ONE option from a group (must share the same name).' },
      { code: 'checkbox', desc: 'Allows selecting zero or more options.' }
    ],
    realWorldExample: 'A checkout form using `text` for name, `email` for email, and a `checkbox` for "Subscribe to newsletter".',
    commonMistakes: [
      { error: 'Not grouping radio buttons.', code: '', suffix: 'If radio buttons don\'t share the exact same `name` attribute, the user will be able to select all of them at once!' }
    ],
    bestPractices: [
      'Use HTML5 types (email, number, date) so mobile phones show the correct keyboard (e.g., number pad for number inputs)'
    ],
    practiceExercise: {
      task: 'Create a password input field.',
      expectedOutput: '<input type="password">',
      solution: '<input type="password">'
    },
    quiz: [
      { question: 'What is the default type for an <input> tag?', options: ['password', 'button', 'text', 'submit'], answer: 'text' },
      { question: 'Which input type masks the user\'s typing with dots or asterisks?', options: ['hidden', 'mask', 'password', 'secure'], answer: 'password' },
      { question: 'How do you ensure a user can only select ONE radio button out of a group?', options: ['Use type="single"', 'Give them all the same "id" attribute', 'Give them all the same "name" attribute', 'Use JavaScript'], answer: 'Give them all the same "name" attribute' },
      { question: 'Which input type is best for "I agree to the Terms of Service"?', options: ['radio', 'checkbox', 'text', 'boolean'], answer: 'checkbox' },
      { question: 'Why use type="email" instead of type="text"?', options: ['It is more secure', 'It automatically validates the email format and shows an email keyboard on mobile', 'It connects to a database', 'It sends an email automatically'], answer: 'It automatically validates the email format and shows an email keyboard on mobile' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to use specific HTML5 input types like `email` or `tel` instead of just `text`?', a: 'Two main reasons: 1) Built-in browser validation (it won\'t submit if it doesn\'t look like an email). 2) Mobile User Experience. Using `tel` brings up the numeric keypad on a smartphone, while `email` brings up a keyboard with the `@` symbol.' }
    ],
    summary: ['Type attribute defines the UI.', 'Radio buttons must share a name.', 'Use HTML5 types for mobile keyboards.'],
    references: commonReferences
  },

  'html_form_validation': {
    isStructured: true,
    title: '24. Form Validation',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'HTML5 introduced built-in form validation attributes to ensure users enter the correct data format before the form can be submitted.',
    whyUseIt: 'To catch errors (like missing fields or bad emails) immediately on the client side, without needing to write custom JavaScript.',
    syntax: '<input type="text" required>',
    codeExample: '<form>\n  <!-- Must be filled out -->\n  <input type="text" placeholder="Username" required>\n  \n  <!-- Must be a valid email -->\n  <input type="email" placeholder="Email" required>\n  \n  <!-- Must be a number between 1 and 10 -->\n  <input type="number" min="1" max="10">\n  \n  <button type="submit">Submit</button>\n</form>',
    hasLiveOutput: true,
    expectedOutput: '<form><input type="text" placeholder="Username" required><input type="email" placeholder="Email" required><button type="submit">Submit</button></form>',
    explanation: [
      { code: 'required', desc: 'The form will not submit if this field is empty.' },
      { code: 'min / max', desc: 'Defines numerical boundaries for type="number".' },
      { code: 'pattern', desc: 'Allows you to use a Regular Expression for advanced validation.' }
    ],
    realWorldExample: 'Preventing a user from accidentally submitting a payment form without entering their credit card number.',
    commonMistakes: [
      { error: 'Relying ONLY on HTML validation.', code: '', suffix: 'HTML validation can easily be bypassed by malicious users (by editing the DOM). You MUST always validate data on the backend server as well.' }
    ],
    bestPractices: [
      'Use HTML validation for user convenience (quick feedback)',
      'Use Server-side validation for security (the ultimate truth)'
    ],
    practiceExercise: {
      task: 'Create an input field for a text that the user MUST fill out (cannot be left blank).',
      expectedOutput: '<input type="text" required>',
      solution: '<input type="text" required>'
    },
    quiz: [
      { question: 'Which attribute prevents a form from submitting if a field is left empty?', options: ['mandatory', 'important', 'required', 'validate'], answer: 'required' },
      { question: 'Which attribute specifies the minimum value for a number input?', options: ['minimum', 'min', 'low', 'start'], answer: 'min' },
      { question: 'Which attribute allows you to validate text against a Regular Expression?', options: ['regex', 'pattern', 'match', 'rule'], answer: 'pattern' },
      { question: 'Is HTML5 client-side validation secure enough to protect your database?', options: ['Yes, it cannot be bypassed', 'No, it can be bypassed easily. Server-side validation is mandatory.', 'Only in Chrome', 'Yes, if combined with SSL'], answer: 'No, it can be bypassed easily. Server-side validation is mandatory.' },
      { question: 'What happens if a user clicks submit but a "required" field is empty?', options: ['The server crashes', 'The browser shows a warning tooltip and stops the submission', 'The page refreshes', 'The field turns green'], answer: 'The browser shows a warning tooltip and stops the submission' }
    ],
    interviewQuestions: [
      { q: 'If HTML5 provides form validation, why do we still write validation code on the server (backend)?', a: 'Client-side validation (HTML/JS) is purely for User Experience—it gives immediate feedback. However, a malicious user can easily use Developer Tools to remove the `required` attribute or bypass the frontend entirely using tools like Postman. Server-side validation is the only way to guarantee data integrity and security.' }
    ],
    summary: ['required prevents empty fields.', 'min/max validate numbers.', 'Never rely solely on client-side validation.'],
    references: commonReferences
  },

  'html_semantic': {
    isStructured: true,
    title: '25. Semantic HTML',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Semantic HTML elements clearly describe their meaning to both the browser and the developer.',
    whyUseIt: 'Instead of using meaningless `<div>` and `<span>` tags for everything, semantic tags make code readable, improve SEO, and make sites accessible to screen readers.',
    syntax: '<article>...</article>\n<nav>...</nav>',
    codeExample: '<!-- BAD (Non-semantic "Div Soup") -->\n<div class="header">Title</div>\n<div class="menu">Links</div>\n<div class="main-content">Text</div>\n\n<!-- GOOD (Semantic HTML5) -->\n<header>\n  <h1>Title</h1>\n</header>\n<nav>\n  <ul>Links</ul>\n</nav>\n<main>\n  <article>\n    <p>Text</p>\n  </article>\n</main>\n<footer>\n  <p>Copyright</p>\n</footer>',
    hasLiveOutput: false,
    expectedOutput: 'Structurally sound, SEO friendly code.',
    explanation: [
      { code: '<header>', desc: 'Introductory content or navigational links.' },
      { code: '<nav>', desc: 'Major block of navigation links.' },
      { code: '<main>', desc: 'The dominant content of the document (only one per page).' },
      { code: '<article>', desc: 'Independent, self-contained content (like a blog post).' },
      { code: '<footer>', desc: 'Footer for its nearest section (copyright, author).' }
    ],
    realWorldExample: 'A screen reader software (used by blind users) looks for the `<nav>` tag so the user can easily skip the navigation menu and jump straight to the `<main>` content.',
    commonMistakes: [
      { error: 'Using semantic tags just for styling.', code: '', suffix: 'Semantic tags have no default visual style (they act just like divs). You still need CSS to style them.' }
    ],
    bestPractices: [
      'Use semantic tags to outline your page layout instead of divs.'
    ],
    practiceExercise: {
      task: 'Which semantic tag should you use to wrap your website\'s main navigation links?',
      expectedOutput: '<nav>',
      solution: '<nav>'
    },
    quiz: [
      { question: 'What does "Semantic HTML" mean?', options: ['HTML that has built-in CSS', 'HTML tags that describe their meaning to the browser and developer', 'HTML that connects to a database', 'HTML used only for mobile'], answer: 'HTML tags that describe their meaning to the browser and developer' },
      { question: 'Which is a non-semantic element?', options: ['<article>', '<nav>', '<div>', '<footer>'], answer: '<div>' },
      { question: 'Which tag is best for a self-contained blog post?', options: ['<section>', '<div>', '<article>', '<main>'], answer: '<article>' },
      { question: 'Which tag should contain the primary content of your webpage?', options: ['<body>', '<main>', '<content>', '<section>'], answer: '<main>' },
      { question: 'Why is Semantic HTML important?', options: ['It makes the code run faster', 'It improves SEO and Accessibility (Screen Readers)', 'It eliminates the need for CSS', 'It prevents hacking'], answer: 'It improves SEO and Accessibility (Screen Readers)' }
    ],
    interviewQuestions: [
      { q: 'How does Semantic HTML affect Accessibility?', a: 'Screen readers rely on semantic tags to navigate a page. If a site is just a bunch of `<div>`s, the screen reader reads it as a giant, unstructured block of text. Semantic tags like `<nav>` or `<main>` allow users to easily skip around and understand the structure.' }
    ],
    summary: ['Semantic tags have meaning.', 'Improves SEO and Accessibility.', 'Use <header>, <nav>, <main>, <article>, <footer>.'],
    references: commonReferences
  },

  'html_audio': {
    isStructured: true,
    title: '26. HTML Audio',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The HTML5 `<audio>` element is used to play an audio file on a web page.',
    whyUseIt: 'Before HTML5, audio required third-party plugins like Flash. Now it is natively supported.',
    syntax: '<audio controls>\n  <source src="file.mp3" type="audio/mpeg">\n</audio>',
    codeExample: '<audio controls>\n  <!-- Provide multiple formats for browser compatibility -->\n  <source src="horse.ogg" type="audio/ogg">\n  <source src="horse.mp3" type="audio/mpeg">\n  Your browser does not support the audio element.\n</audio>',
    hasLiveOutput: false,
    expectedOutput: 'A native audio player with play/pause controls.',
    explanation: [
      { code: 'controls', desc: 'Adds play, pause, and volume controls. Without this, the audio is invisible.' },
      { code: '<source>', desc: 'Allows you to specify alternative audio files which the browser may choose from.' },
      { code: 'Fallback text', desc: 'Text between the tags is only shown if the browser doesn\'t support <audio>.' }
    ],
    realWorldExample: 'A podcast website using the `<audio>` tag to let users listen to episodes directly in the browser.',
    commonMistakes: [
      { error: 'Using autoplay.', code: '<audio autoplay>', suffix: 'Most modern browsers block autoplaying audio with sound because users hate it.' }
    ],
    bestPractices: [
      'Always provide an MP3 format, as it is supported by all modern browsers'
    ],
    practiceExercise: {
      task: 'Write an audio tag that displays controls.',
      expectedOutput: '<audio controls></audio>',
      solution: '<audio controls></audio>'
    },
    quiz: [
      { question: 'Which HTML5 element is used to play sound files?', options: ['<sound>', '<music>', '<audio>', '<mp3>'], answer: '<audio>' },
      { question: 'Which attribute displays the play/pause button?', options: ['play', 'controls', 'buttons', 'ui'], answer: 'controls' },
      { question: 'Why use the <source> tag inside <audio>?', options: ['To link to external CSS', 'To provide multiple file formats for browser compatibility', 'To write lyrics', 'To define the volume'], answer: 'To provide multiple file formats for browser compatibility' },
      { question: 'What happens if you use the "autoplay" attribute?', options: ['It plays immediately', 'Modern browsers usually block it unless muted', 'It downloads the file', 'It plays in a loop'], answer: 'Modern browsers usually block it unless muted' },
      { question: 'Which audio format has the best cross-browser support?', options: ['WAV', 'OGG', 'MP3', 'FLAC'], answer: 'MP3' }
    ],
    interviewQuestions: [
      { q: 'Why do browsers block the `autoplay` attribute for audio?', a: 'User Experience. In the early days of the web, sites would blast music at users unexpectedly. Now, Chrome and Safari enforce policies that block autoplaying media that contains sound unless the user explicitly interacts with the page first.' }
    ],
    summary: ['<audio> plays sound natively.', 'Add the controls attribute to show UI.', 'MP3 is universally supported.'],
    references: commonReferences
  },

  'html_video': {
    isStructured: true,
    title: '27. HTML Video',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The HTML5 `<video>` element is used to show a video on a web page.',
    whyUseIt: 'Allows native video playback without needing external plugins (like the deprecated Adobe Flash).',
    syntax: '<video src="movie.mp4" controls></video>',
    codeExample: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\n  Your browser does not support the video tag.\n</video>',
    hasLiveOutput: false,
    expectedOutput: 'A native video player.',
    explanation: [
      { code: 'controls', desc: 'Adds play, pause, and volume controls.' },
      { code: 'width / height', desc: 'Prevents the page layout from flickering while the video loads.' }
    ],
    realWorldExample: 'A background video on a landing page (using `autoplay muted loop`).',
    commonMistakes: [
      { error: 'Trying to host large videos yourself.', code: '', suffix: 'Video files are huge. Usually, it is better to upload to YouTube or Vimeo and use an <iframe>, rather than hosting raw .mp4 files on your own server.' }
    ],
    bestPractices: [
      'Always use MP4 format (supported everywhere)',
      'If you must autoplay a video, you MUST include the "muted" attribute, or it will be blocked.'
    ],
    practiceExercise: {
      task: 'Create a video tag that automatically plays, loops endlessly, and is muted.',
      expectedOutput: '<video autoplay loop muted></video>',
      solution: '<video autoplay loop muted></video>'
    },
    quiz: [
      { question: 'Which HTML5 element is used to play movies?', options: ['<movie>', '<media>', '<video>', '<film>'], answer: '<video>' },
      { question: 'Which video format is universally supported across all modern browsers?', options: ['OGG', 'WebM', 'MP4', 'AVI'], answer: 'MP4' },
      { question: 'How do you successfully autoplay a video in modern browsers?', options: ['<video autoplay>', '<video autoplay muted>', '<video start="true">', 'You cannot'], answer: '<video autoplay muted>' },
      { question: 'Which attribute makes the video start over when it finishes?', options: ['repeat', 'restart', 'loop', 'continue'], answer: 'loop' },
      { question: 'Why specify width and height on a video tag?', options: ['To compress the video size', 'To prevent page layout shifts while loading', 'To increase resolution', 'To change the aspect ratio'], answer: 'To prevent page layout shifts while loading' }
    ],
    interviewQuestions: [
      { q: 'If you want a silent background video on your homepage, what attributes must the `<video>` tag have?', a: 'It needs `autoplay`, `loop`, and `muted`. Without `muted`, the browser will block the `autoplay`.' }
    ],
    summary: ['<video> plays movies natively.', 'MP4 is the best format.', 'Autoplay requires the muted attribute.'],
    references: commonReferences
  },

  'html_canvas': {
    isStructured: true,
    title: '28. HTML Canvas',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'The `<canvas>` element is used to draw graphics, on the fly, via JavaScript.',
    whyUseIt: 'To create dynamic 2D or 3D graphics, animations, data visualizations (charts), or browser-based games.',
    syntax: '<canvas id="myCanvas" width="200" height="100"></canvas>',
    codeExample: '<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>\n\n<script>\n// JavaScript is required to draw on the canvas\nvar canvas = document.getElementById("myCanvas");\nvar ctx = canvas.getContext("2d");\nctx.fillStyle = "#FF0000";\nctx.fillRect(0, 0, 150, 75);\n</script>',
    hasLiveOutput: false,
    expectedOutput: 'A box with a red rectangle drawn inside it.',
    explanation: [
      { code: '<canvas>', desc: 'Acts purely as a container/blank slate.' },
      { code: 'JavaScript', desc: 'Canvas has no drawing abilities of its own (HTML is for structure). You must use JS to draw lines, circles, etc.' }
    ],
    realWorldExample: 'Web-based games like Agar.io, or charting libraries like Chart.js use canvas to render their graphics.',
    commonMistakes: [
      { error: 'Resizing via CSS instead of HTML attributes.', code: '', suffix: 'If you stretch a canvas using CSS (width: 100%), the drawing inside becomes blurry and distorted. Set the exact pixel dimensions on the HTML attributes.' }
    ],
    bestPractices: [
      'Provide fallback content inside the tag for older browsers'
    ],
    practiceExercise: {
      task: 'Create a blank canvas element with the ID "gameBoard".',
      expectedOutput: '<canvas id="gameBoard"></canvas>',
      solution: '<canvas id="gameBoard"></canvas>'
    },
    quiz: [
      { question: 'What is the <canvas> element used for?', options: ['Displaying images', 'Drawing graphics on the fly via JavaScript', 'Creating tables', 'Playing video'], answer: 'Drawing graphics on the fly via JavaScript' },
      { question: 'Can you draw on a canvas using only HTML and CSS?', options: ['Yes', 'No, it requires JavaScript', 'Only in HTML5', 'Yes, using SVG'], answer: 'No, it requires JavaScript' },
      { question: 'What is a common use case for Canvas?', options: ['Writing paragraphs', 'Browser-based games and charts', 'Creating forms', 'Linking pages'], answer: 'Browser-based games and charts' },
      { question: 'How should you define the dimensions of a canvas to avoid blurriness?', options: ['Using CSS width/height', 'Using HTML width/height attributes', 'Using JavaScript resize', 'Using viewbox'], answer: 'Using HTML width/height attributes' },
      { question: 'What does the JavaScript method getContext("2d") do?', options: ['Makes it 3D', 'Creates the drawing object used to draw on the canvas', 'Deletes the canvas', 'Fills it with color'], answer: 'Creates the drawing object used to draw on the canvas' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between Canvas and SVG?', a: 'Canvas draws pixels (bitmap) using JavaScript; if you enlarge it, it gets pixelated/blurry. SVG draws shapes using math (vector); it can scale to any size without losing quality.' }
    ],
    summary: ['Canvas is a container for graphics.', 'Requires JavaScript to draw.', 'Great for games and charts.'],
    references: commonReferences
  },

  'html_svg': {
    isStructured: true,
    title: '29. HTML SVG',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'SVG stands for Scalable Vector Graphics. It is an XML-based markup language for describing two-dimensional vector graphics.',
    whyUseIt: 'Unlike standard images (JPEGs/PNGs) which lose quality when resized, SVGs use math to draw shapes. They can scale to any size infinitely without ever losing quality.',
    syntax: '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="green" />\n</svg>',
    codeExample: '<svg width="100" height="100">\n  <!-- Draws a circle -->\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />\n</svg>',
    hasLiveOutput: true,
    expectedOutput: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
    explanation: [
      { code: '<svg>', desc: 'The container tag.' },
      { code: '<circle>', desc: 'An SVG element defining a circle (cx/cy = center coordinates, r = radius).' }
    ],
    realWorldExample: 'Website logos and icons. Because they are math-based, the logo will look crystal clear on both a tiny phone screen and a giant 4K monitor.',
    commonMistakes: [
      { error: 'Using SVG for complex photographs.', code: '', suffix: 'SVGs are for shapes, logos, and illustrations. Photographs (like a picture of a dog) should be JPG or WebP.' }
    ],
    bestPractices: [
      'Use SVGs for logos, icons, and simple illustrations to save file size and ensure crispness.'
    ],
    practiceExercise: {
      task: 'Write an SVG tag containing a circle.',
      expectedOutput: '<svg><circle></circle></svg>',
      solution: '<svg><circle></circle></svg>'
    },
    quiz: [
      { question: 'What does SVG stand for?', options: ['Simple Vector Graphics', 'Scalable Vector Graphics', 'Standard Visual Graphics', 'System Variable Graphics'], answer: 'Scalable Vector Graphics' },
      { question: 'What happens when you zoom in on an SVG?', options: ['It gets blurry (pixelated)', 'It remains perfectly crisp and sharp', 'It disappears', 'It turns black and white'], answer: 'It remains perfectly crisp and sharp' },
      { question: 'What language is SVG written in under the hood?', options: ['JSON', 'XML', 'Python', 'Markdown'], answer: 'XML' },
      { question: 'When should you NOT use SVG?', options: ['For a company logo', 'For UI icons', 'For a high-resolution photograph of a person', 'For a simple chart'], answer: 'For a high-resolution photograph of a person' },
      { question: 'Which tag is used to draw a circle inside an SVG?', options: ['<round>', '<circ>', '<circle>', '<ellipse>'], answer: '<circle>' }
    ],
    interviewQuestions: [
      { q: 'Why is SVG often preferred over PNG for website logos and icons?', a: 'SVG is resolution-independent. It scales perfectly on high-DPI (Retina) displays without pixelation. Additionally, SVGs are often smaller in file size and can be animated or styled using CSS.' }
    ],
    summary: ['SVG = Scalable Vector Graphics.', 'Never lose quality when zoomed.', 'Best for logos and icons.'],
    references: commonReferences
  },

  'html_meta_tags': {
    isStructured: true,
    title: '30. HTML Meta Tags',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `<meta>` tag provides metadata (information about data) about the HTML document. They are not displayed on the page.',
    whyUseIt: 'Crucial for specifying character sets, page descriptions for search engines, and viewport settings for mobile responsiveness.',
    syntax: '<meta name="..." content="...">',
    codeExample: '<!DOCTYPE html>\n<html>\n<head>\n  <!-- Character encoding -->\n  <meta charset="UTF-8">\n  \n  <!-- Description for search engines -->\n  <meta name="description" content="Free Web tutorials">\n  \n  <!-- Make website responsive on mobile phones -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>...</body>\n</html>',
    hasLiveOutput: false,
    expectedOutput: 'Invisible metadata parsed by the browser.',
    explanation: [
      { code: 'charset="UTF-8"', desc: 'Ensures emojis and international characters display correctly.' },
      { code: 'name="viewport"', desc: 'The most important tag for Responsive Web Design. It tells mobile phones not to zoom out.' }
    ],
    realWorldExample: 'When you share a link on iMessage or Twitter, the title and image that pop up are generated using `<meta>` tags (specifically Open Graph tags).',
    commonMistakes: [
      { error: 'Forgetting the viewport meta tag.', code: '', suffix: 'Without it, your website will look like a tiny, zoomed-out desktop site on mobile phones.' }
    ],
    bestPractices: [
      'Always include the UTF-8 charset and Viewport meta tags on every project.'
    ],
    practiceExercise: {
      task: 'Write the meta tag that sets the character encoding to UTF-8.',
      expectedOutput: '<meta charset="UTF-8">',
      solution: '<meta charset="UTF-8">'
    },
    quiz: [
      { question: 'Where must <meta> tags be placed in an HTML document?', options: ['Inside <body>', 'At the very end', 'Inside <head>', 'Inside <header>'], answer: 'Inside <head>' },
      { question: 'Are meta tags visible to the user on the webpage?', options: ['Yes', 'No, they are invisible', 'Only on mobile', 'Only to admins'], answer: 'No, they are invisible' },
      { question: 'Which meta tag is absolutely required to make a website mobile-friendly (responsive)?', options: ['<meta name="mobile">', '<meta name="viewport">', '<meta name="responsive">', '<meta charset="UTF-8">'], answer: '<meta name="viewport">' },
      { question: 'Which meta tag attribute fixes issues with displaying emojis and foreign languages?', options: ['name="language"', 'content="emoji"', 'charset="UTF-8"', 'lang="en"'], answer: 'charset="UTF-8"' },
      { question: 'Who primarily reads meta description tags?', options: ['Web Developers only', 'Search Engines (like Google) and Social Media link previews', 'Screen Readers only', 'Servers'], answer: 'Search Engines (like Google) and Social Media link previews' }
    ],
    interviewQuestions: [
      { q: 'What does the viewport meta tag do?', a: '`<meta name="viewport" content="width=device-width, initial-scale=1.0">` tells the browser to set the width of the page to follow the screen-width of the device, preventing mobile devices from rendering the page at a desktop width and zooming out.' }
    ],
    summary: ['Meta tags provide invisible page info.', 'Go in the <head>.', 'Viewport tag is required for mobile sites.'],
    references: commonReferences
  },

  'html_seo_basics': {
    isStructured: true,
    title: '31. HTML SEO Basics',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'SEO (Search Engine Optimization) is the practice of making your web pages easier for search engines (like Google) to crawl and rank.',
    whyUseIt: 'Good HTML structure directly impacts how high your website appears in Google search results.',
    syntax: 'N/A (Conceptual)',
    codeExample: '<!-- Good SEO Practices -->\n<head>\n  <title>Best Pizza in New York | Mario\'s Pizza</title>\n  <meta name="description" content="Voted the best slice in NYC. Open late, delivery available.">\n</head>\n<body>\n  <header>\n    <h1>Mario\'s Pizza</h1>\n  </header>\n  <main>\n    <img src="pizza.jpg" alt="Hot pepperoni pizza fresh out of the oven">\n  </main>\n</body>',
    hasLiveOutput: false,
    expectedOutput: 'A page structure optimized for search engines.',
    explanation: [
      { code: '<title>', desc: 'The most important SEO element. It is the blue link in Google search results.' },
      { code: 'Meta Description', desc: 'The snippet of text under the blue link in Google.' },
      { code: 'alt attributes', desc: 'Google cannot "see" images. It reads the alt text.' }
    ],
    realWorldExample: 'Searching for "Pizza near me" and seeing Mario\'s Pizza at the top because their title and description are perfectly optimized.',
    commonMistakes: [
      { error: 'Having multiple <h1> tags.', code: '', suffix: 'While HTML5 technically allows it, SEO best practices dictate one <h1> per page that describes the main topic.' }
    ],
    bestPractices: [
      'Write descriptive, unique <title> tags for every page',
      'Use Semantic HTML (<main>, <article>)',
      'Ensure fast page load times'
    ],
    practiceExercise: {
      task: 'What HTML attribute allows search engines to understand what an image depicts?',
      expectedOutput: 'alt',
      solution: 'The `alt` attribute.'
    },
    quiz: [
      { question: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Site Engagement Output', 'System Error Override', 'Standard Element Ordering'], answer: 'Search Engine Optimization' },
      { question: 'Which HTML tag is arguably the most important for SEO?', options: ['<body>', '<title>', '<div>', '<footer>'], answer: '<title>' },
      { question: 'How do you help Google understand what is inside an image?', options: ['Use the title attribute', 'Use the alt attribute', 'Name the file "google.jpg"', 'You cannot'], answer: 'Use the alt attribute' },
      { question: 'What does the meta description tag do?', options: ['Creates a popup', 'Provides the snippet text shown under the link in search engine results', 'Translates the page', 'Changes the font'], answer: 'Provides the snippet text shown under the link in search engine results' },
      { question: 'How many <h1> tags should a well-optimized SEO page typically have?', options: ['Zero', 'One', 'Five', 'Unlimited'], answer: 'One' }
    ],
    interviewQuestions: [
      { q: 'Why is Semantic HTML important for SEO?', a: 'Search engine bots read code, not visual designs. Semantic tags like `<article>`, `<header>`, and strict heading hierarchies (`h1` to `h2`) provide a clear, readable outline of the page\'s content structure, making it easier for bots to understand and index.' }
    ],
    summary: ['SEO helps you rank on Google.', 'Title and Meta Description are key.', 'Use Semantic HTML and Alt text.'],
    references: commonReferences
  },

  'html_accessibility': {
    isStructured: true,
    title: '32. Web Accessibility (a11y)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Web Accessibility (often abbreviated as a11y) means designing websites so that people with disabilities can use them.',
    whyUseIt: 'It is a moral, and often legal, requirement to ensure your content is accessible to visually impaired, motor-impaired, and hearing-impaired users.',
    syntax: '<!-- Use semantic tags and ARIA attributes if necessary -->',
    codeExample: '<!-- Bad Accessibility -->\n<div class="btn" onclick="submit()">Click Me</div>\n\n<!-- Good Accessibility -->\n<button type="submit" aria-label="Submit Form">Click Me</button>\n\n<!-- Good Image Accessibility -->\n<img src="chart.jpg" alt="Bar chart showing a 20% increase in sales">',
    hasLiveOutput: false,
    expectedOutput: 'A page that screen readers can easily parse.',
    explanation: [
      { code: 'alt text', desc: 'Screen readers read this aloud to blind users.' },
      { code: 'Semantic HTML', desc: 'Using <button> instead of a clickable <div> ensures users can navigate to it using the "Tab" key on their keyboard.' },
      { code: 'aria-label', desc: 'Provides an invisible label for screen readers when visual text is missing (like an icon button).' }
    ],
    realWorldExample: 'A blind user utilizing software called a "Screen Reader" (like VoiceOver or NVDA) to read a news website to them out loud.',
    commonMistakes: [
      { error: 'Making custom buttons out of divs.', code: '<div onclick="...">', suffix: 'Divs are not focusable by the keyboard. Users who cannot use a mouse will be completely unable to click your button.' }
    ],
    bestPractices: [
      'Always use native HTML elements (<button>, <a>, <input>) before building custom ones.',
      'Ensure high color contrast for visually impaired users.'
    ],
    practiceExercise: {
      task: 'Provide an invisible label for screen readers on a button using an ARIA attribute: `<button>X</button>`',
      expectedOutput: '<button aria-label="Close">X</button>',
      solution: '<button aria-label="Close">X</button>'
    },
    quiz: [
      { question: 'What does the numeronym "a11y" stand for?', options: ['Ally', 'Accessibility', 'Automatically', 'Alignment'], answer: 'Accessibility' },
      { question: 'Why should you use a <button> tag instead of a clickable <div>?', options: ['It looks better', 'Buttons are keyboard focusable and screen-reader friendly natively', 'Divs are slower', 'It saves memory'], answer: 'Buttons are keyboard focusable and screen-reader friendly natively' },
      { question: 'Which attribute is essential for making images accessible to blind users?', options: ['src', 'title', 'alt', 'width'], answer: 'alt' },
      { question: 'What does an ARIA attribute do?', options: ['Styles the page', 'Provides extra context to assistive technologies (like screen readers)', 'Connects to a database', 'Plays audio'], answer: 'Provides extra context to assistive technologies (like screen readers)' },
      { question: 'Who benefits from web accessibility?', options: ['Only blind users', 'Only deaf users', 'People with disabilities, and often everyone (e.g., high contrast helps in sunlight)', 'Only search engines'], answer: 'People with disabilities, and often everyone (e.g., high contrast helps in sunlight)' }
    ],
    interviewQuestions: [
      { q: 'What happens if you use an empty alt attribute `alt=""`?', a: 'Using an empty alt attribute is valid and explicitly tells the screen reader that the image is purely decorative and should be skipped. Omitting the alt attribute entirely might cause the screen reader to awkwardly read out the image\'s file name.' }
    ],
    summary: ['Design for all users.', 'Use native elements (buttons, links).', 'Alt text and ARIA attributes are key.'],
    references: commonReferences
  },

  'html_best_practices': {
    isStructured: true,
    title: '33. HTML Best Practices',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A set of rules and conventions that professional developers follow to write clean, maintainable, and fast HTML code.',
    whyUseIt: 'Clean code is easier to read, fewer bugs occur, and it performs better for users and search engines.',
    syntax: 'N/A',
    codeExample: '<!-- GOOD CODE -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Clean Code</title>\n</head>\n<body>\n  <img src="logo.png" alt="Logo">\n</body>\n</html>',
    hasLiveOutput: false,
    expectedOutput: 'Clean, professional HTML.',
    explanation: [
      { code: 'Lowercase tags', desc: 'Use <body>, not <BODY>.' },
      { code: 'Quote attributes', desc: 'Use class="btn", not class=btn.' },
      { code: 'Indentation', desc: 'Indent nested elements to show hierarchy.' }
    ],
    realWorldExample: 'Working on a team where 5 different developers need to read and understand your HTML files.',
    commonMistakes: [
      { error: 'Skipping the doctype.', code: '', suffix: 'This throws the browser into "Quirks Mode", causing layout bugs.' }
    ],
    bestPractices: [
      'Separate Concerns: Keep CSS in .css files, JS in .js files, and HTML strictly for structure.'
    ],
    practiceExercise: {
      task: 'Fix this bad code: `<IMG SRC=dog.jpg alt=Dog>`',
      expectedOutput: '<img src="dog.jpg" alt="Dog">',
      solution: '<img src="dog.jpg" alt="Dog">'
    },
    quiz: [
      { question: 'What happens if you omit the <!DOCTYPE html> declaration?', options: ['The page fails to load', 'The browser enters "Quirks Mode" and may render CSS incorrectly', 'The server crashes', 'It defaults to HTML5 automatically'], answer: 'The browser enters "Quirks Mode" and may render CSS incorrectly' },
      { question: 'Is it recommended to use uppercase or lowercase HTML tags?', options: ['Uppercase (<DIV>)', 'Lowercase (<div>)', 'Mixed (<DiV>)', 'It does not matter'], answer: 'Lowercase (<div>)' },
      { question: 'Should attribute values be enclosed in quotes?', options: ['Yes, it is a strict best practice (e.g., class="btn")', 'No, it slows down parsing', 'Only if there is a space in the value', 'Only for the src attribute'], answer: 'Yes, it is a strict best practice (e.g., class="btn")' },
      { question: 'What does "Separation of Concerns" mean in front-end development?', options: ['HTML, CSS, and JS should all be in one file', 'HTML is for structure, CSS is for styling, JS is for logic. Keep them separate.', 'HTML should handle logic', 'Use spaces instead of tabs'], answer: 'HTML is for structure, CSS is for styling, JS is for logic. Keep them separate.' },
      { question: 'Why is indentation important in HTML?', options: ['It makes the code run faster', 'It is required by the browser', 'It makes the nested document structure readable for humans', 'It saves file space'], answer: 'It makes the nested document structure readable for humans' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t you use inline styles (e.g., `<div style="color: red;">`)?', a: 'Inline styles violate the "Separation of Concerns" principle. They make HTML cluttered, are difficult to override, and prevent you from reusing styles across different pages. CSS should live in external stylesheets.' }
    ],
    summary: ['Write lowercase tags.', 'Quote your attributes.', 'Separate HTML, CSS, and JS.'],
    references: commonReferences
  },

  'html_mini_project': {
    isStructured: true,
    title: '34. Mini Project: Build a Resume',
    difficulty: 'Advanced',
    readingTime: '10 min',
    definition: 'A practical exercise tying together headings, paragraphs, lists, links, and semantic HTML.',
    whyUseIt: 'To solidify your understanding of how HTML tags work together to form a complete document.',
    syntax: 'N/A',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Jane Doe - Resume</title>\n</head>\n<body>\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Web Developer | <a href="mailto:jane@example.com">jane@example.com</a></p>\n  </header>\n  <hr>\n  <main>\n    <section>\n      <h2>Experience</h2>\n      <ul>\n        <li><strong>Frontend Developer</strong> at TechCorp (2021-Present)</li>\n        <li><strong>Intern</strong> at WebSolutions (2019-2021)</li>\n      </ul>\n    </section>\n    <section>\n      <h2>Skills</h2>\n      <ul>\n        <li>HTML5</li>\n        <li>CSS3</li>\n      </ul>\n    </section>\n  </main>\n</body>\n</html>',
    hasLiveOutput: true,
    expectedOutput: '<h1>Jane Doe</h1><p>Web Developer</p><hr><h2>Experience</h2><ul><li>Frontend Developer</li></ul>',
    explanation: [
      { code: '<header>', desc: 'Used for the name and contact info.' },
      { code: '<section>', desc: 'Divides the resume into logical parts.' },
      { code: '<ul>', desc: 'Perfect for listing experience and skills.' }
    ],
    realWorldExample: 'Building your personal portfolio website from scratch.',
    commonMistakes: [
      { error: 'Forgetting the <body> tag.', code: '', suffix: 'All the visible resume content must go inside the <body> tag.' }
    ],
    bestPractices: [
      'Use the exact hierarchy of h1 -> h2 -> h3 for your resume sections.'
    ],
    practiceExercise: {
      task: 'What tag is used in the example to create the horizontal line separating the header from the main content?',
      expectedOutput: '<hr>',
      solution: 'The `<hr>` (Horizontal Rule) tag.'
    },
    quiz: [
      { question: 'Which tag is best suited to contain the name and contact info at the top of a resume?', options: ['<footer>', '<header>', '<nav>', '<ul>'], answer: '<header>' },
      { question: 'Which tag creates a horizontal line across the page?', options: ['<line>', '<break>', '<hr>', '<br>'], answer: '<hr>' },
      { question: 'What tag should you use to list your skills (e.g., HTML, CSS, JS)?', options: ['<p>', '<ul>', '<heading>', '<table>'], answer: '<ul>' },
      { question: 'How do you create a link that opens the user\'s email client?', options: ['<a href="email:...">', '<a href="mailto:...">', '<a href="sendto:...">', '<mail>'], answer: '<a href="mailto:...">' },
      { question: 'Which semantic tag is best for grouping the "Experience" and "Education" sections separately?', options: ['<section>', '<span>', '<b>', '<nav>'], answer: '<section>' }
    ],
    interviewQuestions: [
      { q: 'How would you attach a CSS file to style this HTML resume?', a: 'You would use the `<link>` tag inside the `<head>` section: `<link rel="stylesheet" href="styles.css">`.' }
    ],
    summary: ['Combine tags to build a page.', 'Use Semantic HTML for structure.'],
    references: commonReferences
  },

  'html_interview_questions': {
    isStructured: true,
    title: '35. Top HTML Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A review of the most common conceptual questions asked during Junior Front-End Developer interviews.',
    whyUseIt: 'To verify your deep understanding of how HTML works under the hood.',
    syntax: 'N/A',
    codeExample: '<!-- Common Interview Topic: Doctype -->\n<!DOCTYPE html>\n\n<!-- Common Interview Topic: Data Attributes -->\n<div data-user-id="123">User Profile</div>',
    hasLiveOutput: false,
    expectedOutput: 'Knowledge Check.',
    explanation: [
      { code: 'Concepts', desc: 'Focus on Accessibility, Semantic HTML, and SEO.' }
    ],
    realWorldExample: 'Passing a technical screen for a Web Developer role.',
    commonMistakes: [
      { error: 'Answering that HTML is a programming language.', code: '', suffix: 'Instant red flag. It is a markup language.' }
    ],
    bestPractices: [
      'Explain the "Why" behind Semantic HTML, not just what the tags are.'
    ],
    practiceExercise: {
      task: 'What does the "DOM" stand for? (Think Document...)',
      expectedOutput: 'Document Object Model',
      solution: 'Document Object Model.'
    },
    quiz: [
      { question: 'What is the DOM?', options: ['Document Object Model - an API representing the HTML document as a tree of nodes', 'Data Object Module', 'Display Output Management', 'Document Order Model'], answer: 'Document Object Model - an API representing the HTML document as a tree of nodes' },
      { question: 'What is the purpose of "data-" attributes?', options: ['To connect to a database directly', 'To store custom data private to the page or application inside an HTML element', 'To format dates', 'To style data'], answer: 'To store custom data private to the page or application inside an HTML element' },
      { question: 'What is the difference between LocalStorage and SessionStorage in HTML5?', options: ['LocalStorage is for CSS, SessionStorage is for JS', 'LocalStorage persists until manually cleared, SessionStorage is cleared when the browser tab closes', 'There is no difference', 'LocalStorage is on the server, SessionStorage is on the client'], answer: 'LocalStorage persists until manually cleared, SessionStorage is cleared when the browser tab closes' },
      { question: 'Why use Semantic tags?', options: ['To make the text red', 'Accessibility and SEO', 'To run JavaScript', 'To compress files'], answer: 'Accessibility and SEO' },
      { question: 'What is "Quirks Mode"?', options: ['A fun CSS animation mode', 'A compatibility mode triggered when the DOCTYPE is missing or malformed', 'A secure browsing mode', 'A JavaScript framework'], answer: 'A compatibility mode triggered when the DOCTYPE is missing or malformed' }
    ],
    interviewQuestions: [
      { q: 'What is the DOM (Document Object Model)?', a: 'The DOM is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content. The DOM represents the HTML document as a tree of nodes and objects.' }
    ],
    summary: ['Review Semantic HTML.', 'Understand the DOM.', 'Know the difference between block and inline.'],
    references: commonReferences
  },

  'html_cheat_sheet': {
    isStructured: true,
    title: '36. HTML Cheat Sheet',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A quick reference guide for the most commonly used HTML tags.',
    whyUseIt: 'Keep this handy when building your first websites.',
    syntax: 'N/A',
    codeExample: '<!-- STRUCTURE -->\n<html>, <head>, <body>, <main>, <header>, <footer>\n\n<!-- TEXT -->\n<h1>-<h6>, <p>, <span>, <strong>, <em>, <br>, <hr>\n\n<!-- LINKS & MEDIA -->\n<a>, <img>, <video>, <audio>, <iframe>\n\n<!-- LISTS & TABLES -->\n<ul>, <ol>, <li>, <table>, <tr>, <th>, <td>\n\n<!-- FORMS -->\n<form>, <input>, <button>, <label>, <textarea>, <select>',
    hasLiveOutput: false,
    expectedOutput: 'Reference list of tags.',
    explanation: [
      { code: 'Reference', desc: 'Memorize these core tags to build 95% of web layouts.' }
    ],
    realWorldExample: 'Pinning a cheat sheet to your monitor while coding.',
    commonMistakes: [
      { error: 'Trying to memorize every single HTML tag.', code: '', suffix: 'There are over 100 tags. You only need to memorize about 20. Google the rest when needed.' }
    ],
    bestPractices: [
      'Practice building pages to build muscle memory.'
    ],
    practiceExercise: {
      task: 'Which tag creates a dropdown menu in a form?',
      expectedOutput: '<select>',
      solution: 'The `<select>` tag (paired with `<option>` tags).'
    },
    quiz: [
      { question: 'Which tag creates a line break?', options: ['<break>', '<hr>', '<br>', '<lb>'], answer: '<br>' },
      { question: 'Which tag creates a multi-line text input field?', options: ['<input type="multiline">', '<textarea>', '<text>', '<paragraph>'], answer: '<textarea>' },
      { question: 'Which tag creates a dropdown list?', options: ['<dropdown>', '<list>', '<select>', '<menu>'], answer: '<select>' },
      { question: 'Which tag is used for the largest heading?', options: ['<header>', '<h1>', '<h6>', '<title>'], answer: '<h1>' },
      { question: 'Which tag creates a hyperlink?', options: ['<link>', '<href>', '<a>', '<url>'], answer: '<a>' }
    ],
    interviewQuestions: [
      { q: 'Should you memorize every HTML tag?', a: 'No. Understand the structure, the semantic meaning of the common 20-30 tags, and how to use attributes. Developers use Google and documentation (like MDN) daily for obscure tags.' }
    ],
    summary: ['Master the core tags.', 'Forms, Lists, Media, and Structure.', 'Don\'t memorize everything.'],
    references: commonReferences
  }
};
