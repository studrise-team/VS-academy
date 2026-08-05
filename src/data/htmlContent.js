import { htmlContentBatch2 } from './htmlContentBatch2';

const commonReferences = [
  { label: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' },
  { label: 'MDN Web Docs HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
];

export const htmlContent = {
  'html_intro': {
    isStructured: true,
    title: '1. HTML Introduction',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.',
    whyUseIt: 'HTML describes the structure of a Web page and consists of a series of elements. HTML elements tell the browser how to display the content.',
    syntax: '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>',
    codeExample: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello HTML</title>\n</head>\n<body>\n    <h1>Welcome to Web Development</h1>\n    <p>This is where it all begins.</p>\n</body>\n</html>',
    hasLiveOutput: true,
    expectedOutput: '<h1>Welcome to Web Development</h1>\n<p>This is where it all begins.</p>',
    explanation: [
      { code: 'HTML', desc: 'HyperText Markup Language' },
      { code: 'Markup', desc: 'Tags used to define elements within the document' }
    ],
    realWorldExample: 'HTML is the skeleton of every single website on the internet, like the foundation and wooden framing of a house.',
    commonMistakes: [
      { error: 'Thinking HTML is a programming language.', code: '', suffix: 'It is a markup language used for structuring content, not logic.' }
    ],
    bestPractices: [
      'Learn the basic tags first',
      'Understand the document tree structure'
    ],
    practiceExercise: {
      task: 'Write a basic HTML document that says "I am learning HTML!" inside a paragraph tag.',
      expectedOutput: '<p>I am learning HTML!</p>',
      solution: '<!DOCTYPE html>\n<html>\n<body>\n  <p>I am learning HTML!</p>\n</body>\n</html>'
    },
    quiz: [
      { question: 'What does HTML stand for?', options: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Tool Multi Language', 'Hypertext Multiple Language'], answer: 'Hyper Text Markup Language' },
      { question: 'Is HTML a programming language?', options: ['Yes', 'No, it is a markup language', 'Only in HTML5', 'It is a styling language'], answer: 'No, it is a markup language' },
      { question: 'What is the primary function of HTML?', options: ['To style a web page', 'To add logic and interactivity', 'To structure the content of a web page', 'To host web servers'], answer: 'To structure the content of a web page' },
      { question: 'What do we call the building blocks of an HTML document?', options: ['Elements/Tags', 'Variables', 'Functions', 'Classes'], answer: 'Elements/Tags' },
      { question: 'Which of the following is NOT part of standard HTML?', options: ['<head>', '<body>', '<database>', '<title>'], answer: '<database>' }
    ],
    interviewQuestions: [
      { q: 'Is HTML considered a programming language?', a: 'No, HTML is a markup language. It is used to structure and present content on the web, but it lacks programming logic constructs like loops, variables, and conditional statements.' }
    ],
    summary: ['HTML structures web pages.', 'Uses tags as building blocks.', 'Not a programming language.'],
    references: commonReferences
  },

  'html_editors': {
    isStructured: true,
    title: '2. HTML Editors',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A simple text editor is all you need to learn HTML. Professional developers use specialized code editors like VS Code.',
    whyUseIt: 'Editors help you write code faster with features like syntax highlighting, auto-completion, and error checking.',
    syntax: 'No specific syntax. Just write text and save the file with an .html or .htm extension.',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- Write this in Notepad or VS Code and save as index.html -->\n  <h1>My Page</h1>\n\n</body>\n</html>',
    hasLiveOutput: true,
    expectedOutput: '<h1>My Page</h1>',
    explanation: [
      { code: '.html', desc: 'The standard file extension for HTML files.' }
    ],
    realWorldExample: 'VS Code, Sublime Text, and Notepad++ are popular tools used by millions of developers daily.',
    commonMistakes: [
      { error: 'Saving the file as .txt', code: '', suffix: 'Browsers will just display the raw text instead of rendering it as a webpage.' }
    ],
    bestPractices: [
      'Use a modern editor like VS Code.',
      'Install HTML extensions for formatting.'
    ],
    practiceExercise: {
      task: 'Create an HTML file in your mind. What should you name the main homepage file of a website?',
      expectedOutput: 'index.html',
      solution: 'The standard entry point file for any website should be named `index.html`.'
    },
    quiz: [
      { question: 'Which of the following is a popular code editor for HTML?', options: ['Microsoft Word', 'Visual Studio Code', 'Adobe Photoshop', 'Excel'], answer: 'Visual Studio Code' },
      { question: 'What file extension should be used for HTML files?', options: ['.txt', '.doc', '.html', '.web'], answer: '.html' },
      { question: 'Can you write HTML in Notepad (Windows) or TextEdit (Mac)?', options: ['Yes', 'No, they lack compilers', 'Only if you install a plugin', 'No, only VS Code works'], answer: 'Yes' },
      { question: 'What is the default filename for the main homepage of a website?', options: ['main.html', 'home.html', 'index.html', 'start.html'], answer: 'index.html' },
      { question: 'Why use a code editor over a plain text editor?', options: ['It is required to run HTML', 'It provides syntax highlighting and auto-completion', 'It hosts the website', 'It automatically writes CSS'], answer: 'It provides syntax highlighting and auto-completion' }
    ],
    interviewQuestions: [
      { q: 'Do you need a compiler to run HTML?', a: 'No, HTML does not need to be compiled. It is interpreted and rendered directly by the web browser (like Chrome, Firefox, or Safari).' }
    ],
    summary: ['Use editors like VS Code.', 'Save files as .html.', 'Browsers interpret the code.'],
    references: commonReferences
  },

  'html_basic_structure': {
    isStructured: true,
    title: '3. HTML Basic Structure',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Every HTML page follows a standard skeleton that tells the browser how to interpret the document.',
    whyUseIt: 'Without this structure, browsers cannot correctly display the webpage or understand its metadata.',
    syntax: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Web Page</title>\n</head>\n<body>\n\n</body>\n</html>',
    codeExample: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>This is my first webpage.</p>\n</body>\n</html>',
    hasLiveOutput: true,
    expectedOutput: '<h1>Hello World</h1>\n<p>This is my first webpage.</p>',
    explanation: [
      { code: '<!DOCTYPE html>', desc: 'Tells the browser this document uses HTML5.' },
      { code: '<html>', desc: 'The root element that wraps all content.' },
      { code: '<head>', desc: 'Contains metadata, title, and links (not visible on the page).' },
      { code: '<body>', desc: 'Contains all the visible content of the webpage.' }
    ],
    realWorldExample: 'Think of the `<head>` as the brain (handling logic and info) and the `<body>` as the physical body that users actually see.',
    commonMistakes: [
      { error: 'Putting visible content in the <head>.', code: '<head><h1>Hello</h1></head>', suffix: 'Visible content must only go inside the <body> tag.' }
    ],
    bestPractices: [
      'Always start with <!DOCTYPE html>',
      'Keep metadata organized in the <head>'
    ],
    practiceExercise: {
      task: 'Write the complete skeleton of an HTML document, with a title "Test" and a body containing "Hello".',
      expectedOutput: '<title>Test</title> in the head, and "Hello" in the body.',
      solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Test</title>\n</head>\n<body>\n  Hello\n</body>\n</html>'
    },
    quiz: [
      { question: 'Which tag indicates that the document is HTML5?', options: ['<html>', '<!DOCTYPE html>', '<html5>', '<head>'], answer: '<!DOCTYPE html>' },
      { question: 'Where should the <title> tag be placed?', options: ['Inside <body>', 'At the very top', 'Inside <head>', 'Inside <html>'], answer: 'Inside <head>' },
      { question: 'Which tag contains all the visible content on the webpage?', options: ['<head>', '<main>', '<body>', '<html>'], answer: '<body>' },
      { question: 'What is the root element of an HTML page?', options: ['<body>', '<!DOCTYPE html>', '<head>', '<html>'], answer: '<html>' },
      { question: 'Can you have multiple <body> tags in a single HTML document?', options: ['Yes', 'No', 'Only if they have different IDs', 'Only in HTML5'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of the `<!DOCTYPE html>` declaration?', a: 'It is an instruction to the web browser about what version of HTML the page is written in. `<!DOCTYPE html>` specifically tells the browser to render the page in standards mode using HTML5 rules.' }
    ],
    summary: ['<!DOCTYPE html> for HTML5.', '<head> for metadata.', '<body> for visible content.'],
    references: commonReferences
  },

  'html_elements': {
    isStructured: true,
    title: '4. HTML Elements',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'An HTML element is defined by a start tag, some content, and an end tag.',
    whyUseIt: 'Elements are the distinct pieces that make up the page, like paragraphs, links, and images.',
    syntax: '<tagname>Content goes here...</tagname>',
    codeExample: '<h1>This is a heading element</h1>\n<p>This is a paragraph element.</p>\n<br> <!-- This is an empty element (no closing tag) -->',
    hasLiveOutput: true,
    expectedOutput: '<h1>This is a heading element</h1>\n<p>This is a paragraph element.</p>',
    explanation: [
      { code: '<tagname>', desc: 'The opening tag.' },
      { code: '</tagname>', desc: 'The closing tag (note the forward slash).' },
      { code: 'Empty Elements', desc: 'Elements like <br> or <img> that don\'t have a closing tag.' }
    ],
    realWorldExample: 'Like Tupperware containers, elements can contain content, or even other elements (nested elements).',
    commonMistakes: [
      { error: 'Forgetting the closing tag.', code: '<h1>Welcome', suffix: 'This can cause the rest of your webpage to be formatted as a heading.' }
    ],
    bestPractices: [
      'Always close your tags',
      'Use lowercase tag names (e.g., <p> not <P>)'
    ],
    practiceExercise: {
      task: 'Create an `h2` element with the text "Subheading".',
      expectedOutput: '<h2>Subheading</h2>',
      solution: '<h2>Subheading</h2>'
    },
    quiz: [
      { question: 'What makes up a standard HTML element?', options: ['Just a start tag', 'A start tag, content, and an end tag', 'Content and a closing tag', 'A tag and an attribute'], answer: 'A start tag, content, and an end tag' },
      { question: 'How is a closing tag distinguished from an opening tag?', options: ['By a backslash (\\)', 'By a forward slash (/)', 'By an asterisk (*)', 'By being uppercase'], answer: 'By a forward slash (/)' },
      { question: 'Which of the following is an "Empty Element" (requires no closing tag)?', options: ['<p>', '<h1>', '<br>', '<div>'], answer: '<br>' },
      { question: 'What happens if you forget to close an <h1> tag?', options: ['The browser crashes', 'An error is thrown', 'The text following it may also appear as a heading', 'Nothing, browsers auto-fix it perfectly'], answer: 'The text following it may also appear as a heading' },
      { question: 'Are HTML tags case-sensitive? (e.g., <P> vs <p>)', options: ['Yes, <P> is invalid', 'No, but lowercase is recommended', 'Only in HTML5', 'Only on Linux servers'], answer: 'No, but lowercase is recommended' }
    ],
    interviewQuestions: [
      { q: 'What are empty elements in HTML?', a: 'Empty elements (also known as void elements) are elements that cannot contain any text or child elements. Examples include `<br>`, `<hr>`, `<img>`, and `<input>`. They do not require a closing tag.' }
    ],
    summary: ['Elements consist of a start tag, content, and end tag.', 'Empty elements have no closing tag.', 'Nested elements go inside each other.'],
    references: commonReferences
  },

  'html_attributes': {
    isStructured: true,
    title: '5. HTML Attributes',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Attributes provide additional information about HTML elements.',
    whyUseIt: 'To modify an element\'s default behavior, like telling an `<a>` tag where to link to, or giving an `<img>` a source file.',
    syntax: '<tagname attribute_name="attribute_value">content</tagname>',
    codeExample: '<!-- The href attribute provides the link destination -->\n<a href="https://google.com">Visit Google</a>\n\n<!-- The src attribute provides the image path -->\n<img src="logo.png" alt="Company Logo" width="100">',
    hasLiveOutput: true,
    expectedOutput: '<a href="https://google.com">Visit Google</a>',
    explanation: [
      { code: 'href="url"', desc: 'Used in <a> tags to define the hyperlink.' },
      { code: 'src="path"', desc: 'Used in <img> tags to define the image source.' },
      { code: 'alt="text"', desc: 'Alternative text for an image if it fails to load.' }
    ],
    realWorldExample: 'An element is a car, and attributes are its paint color and license plate number.',
    commonMistakes: [
      { error: 'Forgetting quotes around the attribute value.', code: '<a href=https://site.com>', suffix: 'Always use quotes (usually double quotes) around values.' }
    ],
    bestPractices: [
      'Always use lowercase attribute names',
      'Always quote attribute values'
    ],
    practiceExercise: {
      task: 'Write an `<a>` (link) element that points to "https://wikipedia.org" with the text "Wikipedia".',
      expectedOutput: '<a href="https://wikipedia.org">Wikipedia</a>',
      solution: '<a href="https://wikipedia.org">Wikipedia</a>'
    },
    quiz: [
      { question: 'Where are attributes placed in an HTML element?', options: ['In the closing tag', 'In the opening tag', 'After the content', 'Before the opening tag'], answer: 'In the opening tag' },
      { question: 'What is the correct format for an attribute?', options: ['name=value', 'name="value"', '"name"=value', 'name: value'], answer: 'name="value"' },
      { question: 'Which attribute specifies the destination of a link?', options: ['src', 'link', 'href', 'url'], answer: 'href' },
      { question: 'Which attribute provides alternative text for an image?', options: ['text', 'title', 'src', 'alt'], answer: 'alt' },
      { question: 'Can an element have more than one attribute?', options: ['Yes, separated by spaces', 'Yes, separated by commas', 'No, only one', 'Only image elements can'], answer: 'Yes, separated by spaces' }
    ],
    interviewQuestions: [
      { q: 'Why is the `alt` attribute important for images?', a: 'The `alt` attribute is crucial for accessibility (screen readers read it to visually impaired users), it displays if the image fails to load, and it helps with SEO (Search Engine Optimization).' }
    ],
    summary: ['Attributes provide extra info.', 'Go in the opening tag.', 'Format: name="value".'],
    references: commonReferences
  },

  'html_headings': {
    isStructured: true,
    title: '6. HTML Headings',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'HTML headings are defined with the `<h1>` to `<h6>` tags.',
    whyUseIt: 'To structure the page and indicate hierarchy. `<h1>` is the most important, `<h6>` is the least.',
    syntax: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>',
    codeExample: '<h1>Main Title</h1>\n<h2>Sub Title</h2>\n<h3>Section Header</h3>\n<h4>Small Header</h4>',
    hasLiveOutput: true,
    expectedOutput: '<h1>Main Title</h1>\n<h2>Sub Title</h2>\n<h3>Section Header</h3>\n<h4>Small Header</h4>',
    explanation: [
      { code: '<h1>', desc: 'Used for the main page title (should only be one per page).' },
      { code: '<h2> - <h6>', desc: 'Used for subheadings and nested sections.' }
    ],
    realWorldExample: 'Like an outline for an essay: h1 is the title, h2 are main points, h3 are sub-points.',
    commonMistakes: [
      { error: 'Using headings just to make text BIG.', code: '', suffix: 'Use CSS to change text size. Use headings for structure and SEO.' }
    ],
    bestPractices: [
      'Use only one <h1> per page',
      'Do not skip heading levels (e.g., don\'t jump from h1 to h3)'
    ],
    practiceExercise: {
      task: 'Create the smallest possible HTML heading with the text "Tiny".',
      expectedOutput: '<h6>Tiny</h6>',
      solution: '<h6>Tiny</h6>'
    },
    quiz: [
      { question: 'Which tag creates the largest, most important heading?', options: ['<heading>', '<h6>', '<h1>', '<h0>'], answer: '<h1>' },
      { question: 'How many heading levels are there in HTML?', options: ['3', '5', '6', 'Unlimited'], answer: '6' },
      { question: 'Should you use headings to make text bold or big?', options: ['Yes', 'No, use them for structure only', 'Only h1 and h2', 'Yes, it saves CSS'], answer: 'No, use them for structure only' },
      { question: 'How many <h1> tags should typically be on a single web page?', options: ['Zero', 'One', 'Two', 'As many as you want'], answer: 'One' },
      { question: 'Which tag represents the least important heading?', options: ['<h1>', '<h10>', '<h6>', '<last>'], answer: '<h6>' }
    ],
    interviewQuestions: [
      { q: 'Why is heading hierarchy important for SEO?', a: 'Search engines use headings to index the structure and content of your web pages. A logical hierarchy (h1 -> h2 -> h3) helps them understand what the main topics and subtopics are.' }
    ],
    summary: ['Headings range from <h1> to <h6>.', 'Use for structure, not styling.', 'Crucial for SEO and accessibility.'],
    references: commonReferences
  },

  'html_paragraphs': {
    isStructured: true,
    title: '7. HTML Paragraphs',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `<p>` tag defines a paragraph of text.',
    whyUseIt: 'To separate blocks of text. Browsers automatically add some space (margin) before and after a paragraph.',
    syntax: '<p>This is a paragraph.</p>',
    codeExample: '<p>This is the first paragraph of the article.</p>\n<p>This is the second paragraph.</p>\n<p>HTML ignores extra     spaces\nand line breaks.</p>',
    hasLiveOutput: true,
    expectedOutput: '<p>This is the first paragraph of the article.</p>\n<p>This is the second paragraph.</p>\n<p>HTML ignores extra spaces and line breaks.</p>',
    explanation: [
      { code: '<p>', desc: 'Wraps text into a readable block with margins.' },
      { code: 'Whitespace collapse', desc: 'Browsers collapse multiple spaces or line breaks inside a <p> tag into a single space.' }
    ],
    realWorldExample: 'Just like paragraphs in a book, separating distinct ideas.',
    commonMistakes: [
      { error: 'Trying to format with spaces.', code: '<p>Word       Word</p>', suffix: 'It will just render as "Word Word". Use CSS or <pre> for exact formatting.' }
    ],
    bestPractices: [
      'Always use closing </p> tags',
      'Use <br> for line breaks within a paragraph, not to create space between paragraphs'
    ],
    practiceExercise: {
      task: 'Create a paragraph containing the text "Hello World".',
      expectedOutput: '<p>Hello World</p>',
      solution: '<p>Hello World</p>'
    },
    quiz: [
      { question: 'Which tag is used to create a paragraph?', options: ['<para>', '<pg>', '<p>', '<text>'], answer: '<p>' },
      { question: 'What does the browser automatically add before and after a paragraph?', options: ['A border', 'A margin (whitespace)', 'A background color', 'Bold formatting'], answer: 'A margin (whitespace)' },
      { question: 'If you type multiple spaces between words in a <p> tag, how does it display?', options: ['As multiple spaces', 'As an error', 'As a single space', 'It creates a new line'], answer: 'As a single space' },
      { question: 'How do you force a single line break INSIDE a paragraph without creating a new paragraph?', options: ['<lb>', '<break>', '<br>', 'Press Enter'], answer: '<br>' },
      { question: 'What tag preserves exact spacing and line breaks as typed?', options: ['<p>', '<code>', '<pre>', '<format>'], answer: '<pre>' }
    ],
    interviewQuestions: [
      { q: 'What is HTML whitespace collapsing?', a: 'Whitespace collapsing is a feature where browsers reduce any sequence of spaces, tabs, and line breaks in the HTML code down to a single space when rendering the page. This prevents messy code formatting from ruining the visual layout.' }
    ],
    summary: ['<p> defines a paragraph.', 'Browsers add margin automatically.', 'Extra spaces are collapsed.'],
    references: commonReferences
  },

  'html_formatting': {
    isStructured: true,
    title: '8. HTML Text Formatting',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'HTML contains several elements for defining text with a special meaning, like bold or italic text.',
    whyUseIt: 'To highlight important words or phrases without writing CSS.',
    syntax: '<b>Bold</b> or <i>Italic</i>',
    codeExample: '<p>This text is <b>bold</b>.</p>\n<p>This text is <strong>important</strong>.</p>\n<p>This text is <i>italic</i>.</p>\n<p>This text is <em>emphasized</em>.</p>\n<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>',
    hasLiveOutput: true,
    expectedOutput: '<p>This text is <b>bold</b>.</p>\n<p>This text is <strong>important</strong>.</p>\n<p>This text is <i>italic</i>.</p>\n<p>This text is <em>emphasized</em>.</p>\n<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>',
    explanation: [
      { code: '<b> / <strong>', desc: 'Makes text bold. (strong implies semantic importance).' },
      { code: '<i> / <em>', desc: 'Makes text italic. (em implies verbal emphasis).' },
      { code: '<sub> / <sup>', desc: 'Subscript (lower) and Superscript (higher).' }
    ],
    realWorldExample: 'Using `<em>` to emphasize a word in a quote, or `<sup>` for a footnote number.',
    commonMistakes: [
      { error: 'Using <b> instead of <strong> for important text.', code: '', suffix: 'Screen readers differentiate between them. Use <strong> for actual importance.' }
    ],
    bestPractices: [
      'Prefer semantic tags (<strong>, <em>) over visual tags (<b>, <i>)'
    ],
    practiceExercise: {
      task: 'Write a paragraph that says "Warning!" in bold, using the semantically correct tag for important text.',
      expectedOutput: '<p><strong>Warning!</strong></p>',
      solution: '<p><strong>Warning!</strong></p>'
    },
    quiz: [
      { question: 'Which tag makes text bold with semantic importance?', options: ['<b>', '<bold>', '<strong>', '<heavy>'], answer: '<strong>' },
      { question: 'Which tag makes text italicized with verbal emphasis?', options: ['<i>', '<italic>', '<emphasis>', '<em>'], answer: '<em>' },
      { question: 'How do you write the "2" in H2O?', options: ['<sup>2</sup>', '<sub>2</sub>', '<down>2</down>', '<small>2</small>'], answer: '<sub>2</sub>' },
      { question: 'What does the <mark> tag do?', options: ['Underlines text', 'Highlights text (usually yellow)', 'Makes text bold', 'Deletes text'], answer: 'Highlights text (usually yellow)' },
      { question: 'What is the visual difference between <b> and <strong> in most browsers?', options: ['<b> is thicker', '<strong> is red', 'There is no visual difference', '<b> is italic'], answer: 'There is no visual difference' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `<b>` and `<strong>`?', a: 'Visually, they both make text bold. Semantically, `<b>` just means "make this look bold", while `<strong>` means "this text has strong importance." Screen readers will change their tone for `<strong>`.' }
    ],
    summary: ['<strong> and <em> for semantic meaning.', '<b> and <i> for visual style.', '<sub> and <sup> for math/science.'],
    references: commonReferences
  },

  'html_comments': {
    isStructured: true,
    title: '9. HTML Comments',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Comments are not displayed in the browser, but they can help document your HTML source code.',
    whyUseIt: 'To leave notes for yourself or other developers, or to temporarily hide code while debugging.',
    syntax: '<!-- Write your comments here -->',
    codeExample: '<!-- This is a comment -->\n<p>This is a paragraph.</p>\n\n<!-- \n  You can also hide code:\n  <p>Hidden paragraph</p> \n-->',
    hasLiveOutput: true,
    expectedOutput: '<p>This is a paragraph.</p>',
    explanation: [
      { code: '<!--', desc: 'The start of the comment block.' },
      { code: '-->', desc: 'The end of the comment block.' }
    ],
    realWorldExample: 'Leaving a note like `<!-- Main Navigation Menu Starts Here -->` in a massive HTML file.',
    commonMistakes: [
      { error: 'Leaving sensitive data in comments.', code: '<!-- API KEY: 12345 -->', suffix: 'Anyone can view comments by right-clicking and selecting "View Page Source"!' }
    ],
    bestPractices: [
      'Use comments to organize large sections of code.',
      'Never put passwords or sensitive data in HTML comments.'
    ],
    practiceExercise: {
      task: 'Create an HTML comment containing the text "TODO: Add image here".',
      expectedOutput: '<!-- TODO: Add image here -->',
      solution: '<!-- TODO: Add image here -->'
    },
    quiz: [
      { question: 'How do you write a comment in HTML?', options: ['// This is a comment', '/* This is a comment */', '<!-- This is a comment -->', '# This is a comment'], answer: '<!-- This is a comment -->' },
      { question: 'Are HTML comments visible on the webpage?', options: ['Yes', 'No', 'Only on hover', 'Only in Chrome'], answer: 'No' },
      { question: 'Can visitors see your HTML comments?', options: ['No, they are secure', 'Yes, by viewing the page source', 'Only if they hack the server', 'Only admins can'], answer: 'Yes, by viewing the page source' },
      { question: 'Can comments span multiple lines?', options: ['Yes', 'No, you need a new comment for each line', 'Only in CSS', 'Only if you use /* */'], answer: 'Yes' },
      { question: 'What is a common use for comments during development?', options: ['Styling text', 'Temporarily hiding code (commenting out)', 'Adding logic', 'Connecting to databases'], answer: 'Temporarily hiding code (commenting out)' }
    ],
    interviewQuestions: [
      { q: 'Is it safe to store API keys or passwords in HTML comments?', a: 'Absolutely not. HTML is sent to the client (browser) in plain text. Anyone can right-click, select "View Page Source", and read your comments.' }
    ],
    summary: ['Comments use <!-- -->.', 'Ignored by the browser rendering.', 'Visible in page source.'],
    references: commonReferences
  },

  'html_colors': {
    isStructured: true,
    title: '10. HTML Colors',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.',
    whyUseIt: 'To make your website visually appealing by changing background colors, text colors, and border colors.',
    syntax: '<p style="color: red;">Red Text</p>',
    codeExample: '<h1 style="background-color: Tomato;">Tomato Background</h1>\n<p style="color: #0000FF;">Blue Hex Text</p>\n<p style="color: rgb(0, 128, 0);">Green RGB Text</p>\n<p style="border: 2px solid Violet;">Violet Border</p>',
    hasLiveOutput: true,
    expectedOutput: '<h1 style="background-color: Tomato;">Tomato Background</h1>\n<p style="color: #0000FF;">Blue Hex Text</p>\n<p style="color: rgb(0, 128, 0);">Green RGB Text</p>\n<p style="border: 2px solid Violet;">Violet Border</p>',
    explanation: [
      { code: 'Color Names', desc: '140 standard names like Tomato, Orange, DodgerBlue, etc.' },
      { code: 'HEX (#RRGGBB)', desc: 'Hexadecimal value (e.g., #FF0000 is red).' },
      { code: 'RGB(R, G, B)', desc: 'Red, Green, Blue values from 0-255.' }
    ],
    realWorldExample: 'Using your company\'s exact HEX brand color (e.g., `#FF9900` for Amazon Orange) on a button.',
    commonMistakes: [
      { error: 'Forgetting the # in Hex codes.', code: 'color: FF0000', suffix: 'Must be color: #FF0000' }
    ],
    bestPractices: [
      'Use HEX or RGB values for consistency instead of color names',
      'Ensure high contrast between text and background colors for readability'
    ],
    practiceExercise: {
      task: 'Create a paragraph with inline style setting the text color to the HEX code for black (#000000).',
      expectedOutput: '<p style="color: #000000;">Text</p>',
      solution: '<p style="color: #000000;">Text</p>'
    },
    quiz: [
      { question: 'Which attribute is used to change the color of text inline?', options: ['color', 'style', 'text-color', 'font-color'], answer: 'style' },
      { question: 'Which is a valid HEX color code?', options: ['123456', '#FF0000', 'rgb(red)', 'color:blue'], answer: '#FF0000' },
      { question: 'In rgb(255, 0, 0), what color does this represent?', options: ['Blue', 'Green', 'Red', 'Black'], answer: 'Red' },
      { question: 'What does the "a" in rgba() stand for?', options: ['Aqua', 'Alpha (Opacity)', 'Absolute', 'Alignment'], answer: 'Alpha (Opacity)' },
      { question: 'How many predefined color names does HTML support?', options: ['10', '16', '140', 'Unlimited'], answer: '140' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between RGB and HEX?', a: 'They represent the same colors. RGB uses base-10 values (0-255) for Red, Green, and Blue. HEX uses base-16 values (00-FF). `#FF0000` is exactly the same as `rgb(255, 0, 0)`.' }
    ],
    summary: ['Colors define visual styles.', 'Use Names, HEX, or RGB.', 'Applied via the style attribute.'],
    references: commonReferences
  },

  'html_links': {
    isStructured: true,
    title: '11. HTML Links',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Links are found in nearly all web pages. Links allow users to click their way from page to page.',
    whyUseIt: 'They are the "Hypertext" part of HTML. Without links, the web would just be disconnected documents.',
    syntax: '<a href="url">link text</a>',
    codeExample: '<!-- Basic Link -->\n<a href="https://google.com">Go to Google</a>\n<br><br>\n<!-- Open in New Tab -->\n<a href="https://google.com" target="_blank">Google (New Tab)</a>\n<br><br>\n<!-- Use an Image as a Link -->\n<a href="https://wikipedia.org">\n  <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" width="50">\n</a>',
    hasLiveOutput: true,
    expectedOutput: '<a href="https://google.com">Go to Google</a><br><a href="https://google.com" target="_blank">Google (New Tab)</a>',
    explanation: [
      { code: '<a>', desc: 'Stands for "anchor".' },
      { code: 'href', desc: 'Hypertext REFerence - the destination URL.' },
      { code: 'target="_blank"', desc: 'Forces the link to open in a new browser tab/window.' }
    ],
    realWorldExample: 'A navigation bar at the top of a website is just a list of `<a>` tags styled to look like buttons.',
    commonMistakes: [
      { error: 'Forgetting the protocol (https://).', code: 'href="google.com"', suffix: 'This looks for a file named google.com on your computer. You must include https:// for external websites.' }
    ],
    bestPractices: [
      'Use descriptive link text (avoid "Click Here")',
      'Use target="_blank" when linking to external websites'
    ],
    practiceExercise: {
      task: 'Create a link to "https://apple.com" with the text "Apple". Make it open in a new tab.',
      expectedOutput: '<a href="https://apple.com" target="_blank">Apple</a>',
      solution: '<a href="https://apple.com" target="_blank">Apple</a>'
    },
    quiz: [
      { question: 'Which tag is used to create a hyperlink?', options: ['<link>', '<a>', '<hyper>', '<href>'], answer: '<a>' },
      { question: 'Which attribute specifies the link destination?', options: ['src', 'href', 'target', 'link'], answer: 'href' },
      { question: 'How do you make a link open in a new tab?', options: ['target="new"', 'open="new_tab"', 'target="_blank"', 'window="new"'], answer: 'target="_blank"' },
      { question: 'Can an image be used as a link?', options: ['Yes, by putting the <img> inside the <a> tag', 'No, only text can be linked', 'Yes, using the link-img attribute', 'Only in CSS'], answer: 'Yes, by putting the <img> inside the <a> tag' },
      { question: 'What happens if you click a link with href="#"?', options: ['It goes to Google', 'It throws an error', 'It jumps to the top of the current page', 'It closes the browser'], answer: 'It jumps to the top of the current page' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between an absolute and a relative URL in an href?', a: 'An absolute URL contains the full web address (e.g., `https://www.example.com/about.html`). A relative URL links to a file on the same server, based on the current location (e.g., `/about.html` or `images/pic.jpg`).' }
    ],
    summary: ['<a> tag creates links.', 'href specifies destination.', 'target="_blank" opens new tabs.'],
    references: commonReferences
  },

  'html_images': {
    isStructured: true,
    title: '12. HTML Images',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Images can improve the design and the appearance of a web page.',
    whyUseIt: 'To display photos, logos, and graphics.',
    syntax: '<img src="url" alt="alternatetext">',
    codeExample: '<!-- Image from the internet -->\n<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="200" height="250">\n\n<!-- Image as a link -->\n<a href="https://google.com">\n  <img src="https://www.w3schools.com/html/img_chania.jpg" alt="Flowers" width="200">\n</a>',
    hasLiveOutput: true,
    expectedOutput: '<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="200" height="250">',
    explanation: [
      { code: '<img>', desc: 'An empty element (no closing tag).' },
      { code: 'src', desc: 'Source URL of the image.' },
      { code: 'alt', desc: 'Alternative text if the image fails to load or for screen readers.' }
    ],
    realWorldExample: 'A profile picture on a social media dashboard.',
    commonMistakes: [
      { error: 'Omitting the alt attribute.', code: '', suffix: 'This is terrible for accessibility and SEO. Always include alt text.' }
    ],
    bestPractices: [
      'Always use the alt attribute',
      'Specify width and height to prevent page layout jumping as images load'
    ],
    practiceExercise: {
      task: 'Create an image tag pointing to "logo.png" with an alt text of "Company Logo".',
      expectedOutput: '<img src="logo.png" alt="Company Logo">',
      solution: '<img src="logo.png" alt="Company Logo">'
    },
    quiz: [
      { question: 'Which tag is used to insert an image?', options: ['<image>', '<pic>', '<img>', '<src>'], answer: '<img>' },
      { question: 'Does the <img> tag require a closing tag?', options: ['Yes, always', 'No, it is an empty element', 'Only if it has no alt text', 'Only in HTML4'], answer: 'No, it is an empty element' },
      { question: 'Which attribute defines the path to the image?', options: ['href', 'path', 'src', 'link'], answer: 'src' },
      { question: 'Why is the alt attribute important?', options: ['It makes the image load faster', 'It provides text for screen readers and if the image fails to load', 'It creates a border', 'It centers the image'], answer: 'It provides text for screen readers and if the image fails to load' },
      { question: 'How do you resize an image in HTML?', options: ['size="50%"', 'width="100" height="100"', 'resize="true"', 'zoom="2"'], answer: 'width="100" height="100"' }
    ],
    interviewQuestions: [
      { q: 'Why should you specify width and height attributes on an image?', a: 'Specifying dimensions reserves space for the image on the page before it loads. This prevents "Cumulative Layout Shift" (CLS), where the page suddenly jumps around as images finally pop in.' }
    ],
    summary: ['<img> inserts images.', 'Requires src and alt attributes.', 'It is an empty element.'],
    references: commonReferences
  },

  'html_favicon': {
    isStructured: true,
    title: '13. HTML Favicon',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A favicon is a small image displayed next to the page title in the browser tab.',
    whyUseIt: 'Provides brand identity and helps users locate your website when they have many tabs open.',
    syntax: '<link rel="icon" type="image/x-icon" href="/favicon.ico">',
    codeExample: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Website</title>\n  <!-- This adds the tiny logo in the browser tab -->\n  <link rel="icon" type="image/png" href="https://www.w3schools.com/favicon.ico">\n</head>\n<body>\n  <h1>Look at the browser tab!</h1>\n</body>\n</html>',
    hasLiveOutput: false,
    expectedOutput: 'A tiny icon appears in your browser tab next to the title.',
    explanation: [
      { code: '<link>', desc: 'Used in the <head> to link external resources.' },
      { code: 'rel="icon"', desc: 'Specifies the relationship between the document and the linked file (it\'s an icon).' }
    ],
    realWorldExample: 'The red YouTube play button or the blue Facebook "f" on your browser tabs.',
    commonMistakes: [
      { error: 'Putting the link tag in the body.', code: '', suffix: 'The favicon link tag MUST go inside the <head> section.' }
    ],
    bestPractices: [
      'Use a square image (e.g., 16x16 or 32x32 pixels)',
      'Save it as a .png or .ico file'
    ],
    practiceExercise: {
      task: 'Write the `<link>` tag required to add a favicon named "icon.png".',
      expectedOutput: '<link rel="icon" type="image/png" href="icon.png">',
      solution: '<link rel="icon" type="image/png" href="icon.png">'
    },
    quiz: [
      { question: 'What is a favicon?', options: ['A favorite icon saved by users', 'A small image in the browser tab', 'A large banner image', 'A special font'], answer: 'A small image in the browser tab' },
      { question: 'Where must the favicon code be placed?', options: ['Inside <body>', 'Inside <title>', 'Inside <head>', 'Before <html>'], answer: 'Inside <head>' },
      { question: 'Which tag is used to attach a favicon?', options: ['<favicon>', '<img>', '<meta>', '<link>'], answer: '<link>' },
      { question: 'What does the "rel" attribute stand for in the link tag?', options: ['Relative', 'Release', 'Relationship', 'Reload'], answer: 'Relationship' },
      { question: 'What is the standard size for a basic favicon?', options: ['1920x1080', '500x500', '16x16 or 32x32', '1x1'], answer: '16x16 or 32x32' }
    ],
    interviewQuestions: [
      { q: 'Can you use a `.png` or `.svg` file for a favicon?', a: 'Yes. While `.ico` was the historical standard, modern browsers fully support `.png` and even `.svg` files for favicons, which allows for transparency and crisp scaling.' }
    ],
    summary: ['Favicons are browser tab icons.', 'Use the <link> tag.', 'Place inside <head>.'],
    references: commonReferences
  },

  'html_tables': {
    isStructured: true,
    title: '14. HTML Tables',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'HTML tables allow web developers to arrange data into rows and columns.',
    whyUseIt: 'To display tabular data like schedules, pricing plans, or statistical reports.',
    syntax: '<table>\n  <tr>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n  </tr>\n</table>',
    codeExample: '<table border="1">\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Centro comercial</td>\n    <td>Francisco</td>\n    <td>Mexico</td>\n  </tr>\n</table>',
    hasLiveOutput: true,
    expectedOutput: '<table border="1"><tr><th>Company</th><th>Country</th></tr><tr><td>Apple</td><td>USA</td></tr></table>',
    explanation: [
      { code: '<table>', desc: 'The container for the table.' },
      { code: '<tr>', desc: 'Table Row (horizontal).' },
      { code: '<th>', desc: 'Table Header (bold and centered by default).' },
      { code: '<td>', desc: 'Table Data (a standard cell).' }
    ],
    realWorldExample: 'A monthly financial report showing income and expenses.',
    commonMistakes: [
      { error: 'Using tables for page layout.', code: '', suffix: 'In the 90s, developers used tables to build website layouts. Never do this today; use CSS Grid or Flexbox.' }
    ],
    bestPractices: [
      'Only use tables for tabular data',
      'Use <thead>, <tbody>, and <tfoot> for better accessibility'
    ],
    practiceExercise: {
      task: 'Create a simple table with one row containing two header cells: "Name" and "Age".',
      expectedOutput: '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n</table>',
      solution: '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n</table>'
    },
    quiz: [
      { question: 'Which tag defines a table row?', options: ['<td>', '<table>', '<tr>', '<row>'], answer: '<tr>' },
      { question: 'Which tag defines a table header?', options: ['<th>', '<thead>', '<header>', '<td>'], answer: '<th>' },
      { question: 'Which tag defines a standard data cell?', options: ['<cell>', '<data>', '<td>', '<tc>'], answer: '<td>' },
      { question: 'Should you use HTML tables to design your website layout?', options: ['Yes, it is the standard', 'No, use CSS for layout', 'Only for sidebars', 'Yes, it is mobile friendly'], answer: 'No, use CSS for layout' },
      { question: 'What attributes merge cells horizontally or vertically?', options: ['merge-x / merge-y', 'colspan / rowspan', 'width / height', 'cellmerge / rowmerge'], answer: 'colspan / rowspan' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of `colspan` and `rowspan`?', a: 'They are attributes used in `<td>` or `<th>` tags. `colspan` allows a cell to span across multiple columns (merge horizontally), and `rowspan` allows a cell to span multiple rows (merge vertically).' }
    ],
    summary: ['<table> wraps the data.', '<tr> = Row, <th> = Header, <td> = Data.', 'Only use for data, not layouts.'],
    references: commonReferences
  },

  'html_lists': {
    isStructured: true,
    title: '15. HTML Lists',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'HTML offers ways to specify lists of information, primarily unordered (bulleted) and ordered (numbered) lists.',
    whyUseIt: 'To group related items together, like a recipe ingredients list or a step-by-step tutorial.',
    syntax: '<ul>\n  <li>Item</li>\n</ul>',
    codeExample: '<h3>Unordered List</h3>\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>\n\n<h3>Ordered List</h3>\n<ol>\n  <li>Wake up</li>\n  <li>Drink Coffee</li>\n  <li>Code</li>\n</ol>',
    hasLiveOutput: true,
    expectedOutput: '<ul><li>Coffee</li><li>Tea</li></ul><ol><li>Wake up</li><li>Code</li></ol>',
    explanation: [
      { code: '<ul>', desc: 'Unordered List (bullets).' },
      { code: '<ol>', desc: 'Ordered List (numbers).' },
      { code: '<li>', desc: 'List Item (used inside both ul and ol).' }
    ],
    realWorldExample: 'A navbar! Most website navigation menus are actually `<ul>` lists styled with CSS to sit horizontally.',
    commonMistakes: [
      { error: 'Putting text directly inside ul.', code: '<ul>Coffee</ul>', suffix: 'All text/content MUST be wrapped inside <li> tags.' }
    ],
    bestPractices: [
      'Lists can be nested (a list inside a list)',
      'Use CSS (list-style-type) to change bullet styles'
    ],
    practiceExercise: {
      task: 'Create a numbered list with two items: "First" and "Second".',
      expectedOutput: '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>',
      solution: '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>'
    },
    quiz: [
      { question: 'Which tag creates a bulleted list?', options: ['<list>', '<ol>', '<ul>', '<li>'], answer: '<ul>' },
      { question: 'Which tag creates a numbered list?', options: ['<nl>', '<ol>', '<ul>', '<num>'], answer: '<ol>' },
      { question: 'Which tag defines the actual items inside a list?', options: ['<item>', '<list-item>', '<li>', '<i>'], answer: '<li>' },
      { question: 'Can you put an <ol> inside a <ul>?', options: ['Yes, it creates a nested list', 'No, it causes an error', 'Only in HTML5', 'Yes, but it removes the bullets'], answer: 'Yes, it creates a nested list' },
      { question: 'What attribute changes the numbering type of an <ol> (e.g., to Roman numerals)?', options: ['style', 'type', 'format', 'numbering'], answer: 'type' }
    ],
    interviewQuestions: [
      { q: 'Is it valid HTML to place a `<div>` directly inside a `<ul>`?', a: 'No. The only valid direct child elements of a `<ul>` or `<ol>` are `<li>` tags. If you need a div, it must be placed *inside* the `<li>`.' }
    ],
    summary: ['<ul> for bullets.', '<ol> for numbers.', '<li> for the items.'],
    references: commonReferences
  },

  'html_block_inline': {
    isStructured: true,
    title: '16. Block & Inline',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Every HTML element has a default display value, depending on what type of element it is. The two main values are block and inline.',
    whyUseIt: 'Understanding this is critical for building layouts and knowing why elements stack vertically or sit side-by-side.',
    syntax: 'N/A (Conceptual)',
    codeExample: '<!-- Block elements stack on top of each other -->\n<div style="background-color: yellow;">Block 1 (Takes full width)</div>\n<div style="background-color: lightblue;">Block 2 (Takes full width)</div>\n\n<br>\n<!-- Inline elements sit side by side -->\n<span style="background-color: yellow;">Inline 1</span>\n<span style="background-color: lightblue;">Inline 2</span>',
    hasLiveOutput: true,
    expectedOutput: '<div style="background-color: yellow;">Block 1</div><div style="background-color: lightblue;">Block 2</div><span style="background-color: yellow;">Inline 1</span> <span style="background-color: lightblue;">Inline 2</span>',
    explanation: [
      { code: 'Block-level', desc: 'Always starts on a new line and takes up the full width available (e.g., <div>, <p>, <h1>).' },
      { code: 'Inline', desc: 'Does not start on a new line and only takes up as much width as necessary (e.g., <span>, <a>, <img>).' }
    ],
    realWorldExample: 'A paragraph (`<p>`) is a block. A bold word inside it (`<strong>`) is inline so it doesn\'t break the sentence.',
    commonMistakes: [
      { error: 'Putting block elements inside inline elements.', code: '<a><div>...</div></a>', suffix: 'Technically allowed in HTML5 for <a> tags, but generally, block elements should not go inside inline elements.' }
    ],
    bestPractices: [
      'Use CSS (display: block/inline) to change default behaviors if needed'
    ],
    practiceExercise: {
      task: 'Is an `<h1>` tag block-level or inline?',
      expectedOutput: 'Block-level',
      solution: 'An `<h1>` is a block-level element. It forces a new line before and after it.'
    },
    quiz: [
      { question: 'What does a block-level element do by default?', options: ['Sits side-by-side with others', 'Always starts on a new line and takes full width', 'Is invisible', 'Centers itself'], answer: 'Always starts on a new line and takes full width' },
      { question: 'Which of the following is an inline element?', options: ['<div>', '<p>', '<a>', '<h1>'], answer: '<a>' },
      { question: 'Which of the following is a block-level element?', options: ['<span>', '<strong>', '<img>', '<p>'], answer: '<p>' },
      { question: 'Can an inline element take up the full width of the screen by default?', options: ['Yes', 'No, it only takes as much width as its content', 'Only if it has no text', 'Only in mobile browsers'], answer: 'No, it only takes as much width as its content' },
      { question: 'How can you change a block element to act like an inline element?', options: ['By deleting the tag', 'Using CSS: display: inline;', 'Using the HTML inline="true" attribute', 'It is impossible'], answer: 'Using CSS: display: inline;' }
    ],
    interviewQuestions: [
      { q: 'Can you set the width and height of an inline element?', a: 'No. By default, standard inline elements (like `<span>` or `<a>`) ignore width and height CSS properties. You must change them to `display: block` or `display: inline-block` to set dimensions.' }
    ],
    summary: ['Block: new line, full width (div, p).', 'Inline: same line, wraps content (span, a).'],
    references: commonReferences
  },

  'html_div': {
    isStructured: true,
    title: '17. The <div> Element',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `<div>` element is a generic block-level container for other HTML elements.',
    whyUseIt: 'It has no special meaning at all. It is used to group elements together so they can be styled with CSS or manipulated with JavaScript.',
    syntax: '<div>Content</div>',
    codeExample: '<div style="background-color: lightgrey; padding: 20px;">\n  <h2>News Article</h2>\n  <p>This is some text grouped together inside a div.</p>\n  <button>Read More</button>\n</div>',
    hasLiveOutput: true,
    expectedOutput: '<div style="background-color: lightgrey; padding: 20px;"><h2>News Article</h2><p>This is some text grouped together inside a div.</p></div>',
    explanation: [
      { code: '<div>', desc: 'Short for "division". It divides the page into sections.' }
    ],
    realWorldExample: 'A "Card" component on a website (like a YouTube video thumbnail + title) is wrapped in a `<div>` to style it as a single unit.',
    commonMistakes: [
      { error: 'Div Soup.', code: '<div><div><div>Text</div></div></div>', suffix: 'Using too many divs makes code unreadable. Use semantic tags (like <section> or <article>) when possible.' }
    ],
    bestPractices: [
      'Give your divs class names (e.g., <div class="card">) to style them easily'
    ],
    practiceExercise: {
      task: 'Wrap an `<h1>` and a `<p>` tag inside a generic block container.',
      expectedOutput: '<div>\n  <h1>Title</h1>\n  <p>Text</p>\n</div>',
      solution: '<div>\n  <h1>Title</h1>\n  <p>Text</p>\n</div>'
    },
    quiz: [
      { question: 'What does <div> stand for?', options: ['Divide', 'Division', 'Divert', 'Device'], answer: 'Division' },
      { question: 'Is <div> a block-level or inline element?', options: ['Block-level', 'Inline', 'Both', 'Neither'], answer: 'Block-level' },
      { question: 'What semantic meaning does a <div> have to a browser or screen reader?', options: ['It is a paragraph', 'It is a header', 'It has absolutely no meaning', 'It is an important alert'], answer: 'It has absolutely no meaning' },
      { question: 'Why do developers use <div> tags?', options: ['To make text bold', 'To group elements together for styling or scripting', 'To insert images', 'To create tables'], answer: 'To group elements together for styling or scripting' },
      { question: 'What is the modern HTML5 alternative to a <div> for a standalone article?', options: ['<article>', '<section>', '<main>', 'All of the above'], answer: 'All of the above' }
    ],
    interviewQuestions: [
      { q: 'What is "Divitis" or "Div Soup"?', a: 'It refers to the bad practice of overusing `<div>` tags to structure a webpage when more descriptive, semantic HTML5 tags (like `<header>`, `<nav>`, `<main>`, `<article>`) should be used instead.' }
    ],
    summary: ['<div> is a generic block container.', 'Used for grouping and styling.', 'Has no semantic meaning.'],
    references: commonReferences
  },

  'html_span': {
    isStructured: true,
    title: '18. The <span> Element',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `<span>` element is a generic inline container for phrasing content.',
    whyUseIt: 'To group a small chunk of text or an inline element to style it, without breaking it onto a new line.',
    syntax: '<span>Content</span>',
    codeExample: '<p>My mother has <span style="color: blue; font-weight: bold;">blue</span> eyes.</p>',
    hasLiveOutput: true,
    expectedOutput: '<p>My mother has <span style="color: blue; font-weight: bold;">blue</span> eyes.</p>',
    explanation: [
      { code: '<span>', desc: 'Like a div, but for inline content.' }
    ],
    realWorldExample: 'Making a specific word in a paragraph a different color.',
    commonMistakes: [
      { error: 'Using span to block content.', code: '<span><h2>Title</h2></span>', suffix: 'Spans are inline. Do not put block elements (like h2) inside them.' }
    ],
    bestPractices: [
      'Use span when no other semantic element (like <em> or <strong>) applies'
    ],
    practiceExercise: {
      task: 'Write a paragraph saying "I love CSS". Use a span to color the word "CSS" red.',
      expectedOutput: '<p>I love <span style="color: red;">CSS</span></p>',
      solution: '<p>I love <span style="color: red;">CSS</span></p>'
    },
    quiz: [
      { question: 'Is <span> a block-level or inline element?', options: ['Block-level', 'Inline', 'Both', 'Neither'], answer: 'Inline' },
      { question: 'What semantic meaning does <span> have?', options: ['Important', 'Highlighted', 'Absolutely none', 'Paragraph'], answer: 'Absolutely none' },
      { question: 'What is the main difference between <div> and <span>?', options: ['<div> is inline, <span> is block', '<div> is for text, <span> is for images', '<div> is block-level, <span> is inline', 'There is no difference'], answer: '<div> is block-level, <span> is inline' },
      { question: 'Can you put a <div> inside a <span>?', options: ['Yes, it is recommended', 'No, block elements should not go inside inline elements', 'Only in HTML4', 'Yes, but it deletes the text'], answer: 'No, block elements should not go inside inline elements' },
      { question: 'When should you use a <span>?', options: ['To create a new section', 'To style a specific word or phrase inside a line of text', 'To create a list', 'To insert a video'], answer: 'To style a specific word or phrase inside a line of text' }
    ],
    interviewQuestions: [
      { q: 'If you want to emphasize a word, should you use `<span>` or `<em>`?', a: 'You should use `<em>`. Both can be styled with CSS, but `<em>` provides semantic meaning to screen readers and search engines, while `<span>` is purely a generic, meaningless container.' }
    ],
    summary: ['<span> is a generic inline container.', 'Used to style parts of text.', 'Does not force a new line.'],
    references: commonReferences
  }
};

Object.assign(htmlContent, htmlContentBatch2);
