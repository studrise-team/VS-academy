export const htmlContent = {
  'html_intro': {
    isStructured: true,
    title: 'HTML Introduction',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.',
    whyUseIt: 'HTML describes the structure of a Web page and consists of a series of elements. HTML elements tell the browser how to display the content.',
    syntax: '<!DOCTYPE html>\\n<html>\\n<head>\\n<title>Page Title</title>\\n</head>\\n<body>\\n\\n<h1>My First Heading</h1>\\n<p>My first paragraph.</p>\\n\\n</body>\\n</html>',
    codeExample: '<!DOCTYPE html>\\n<html>\\n<head>\\n    <title>Hello HTML</title>\\n</head>\\n<body>\\n    <h1>Welcome to Web Development</h1>\\n    <p>This is where it all begins.</p>\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'HTML', desc: 'HyperText Markup Language' },
      { code: 'Markup', desc: 'Tags used to define elements within the document' }
    ],
    realWorldExample: 'HTML is the skeleton of every single website on the internet, like the foundation and wooden framing of a house.',
    commonMistakes: [
      { error: 'Thinking HTML is a programming language.', code: '', suffix: 'It is a markup language.' }
    ],
    bestPractices: [
      'Learn the basic tags first',
      'Understand the document tree structure'
    ],
    miniExercise: {
      task: 'Write a basic HTML document that says "I am learning HTML!" inside a paragraph.',
      expectedOutput: '<p>I am learning HTML!</p>'
    },
    summary: [
      'HTML is the standard markup language for Web pages.',
      'HTML elements are the building blocks of HTML pages.',
      'HTML elements are represented by tags.'
    ],
    interviewQuestions: [
      'What does HTML stand for?',
      'Is HTML a programming language?',
      'What is a markup language?'
    ],
    quickQuiz: {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Tool Multi Language', 'Hypertext Multiple Language'],
      answer: 'Hyper Text Markup Language'
    },
    references: [
      { label: 'W3Schools', url: 'https://www.w3schools.com/html/html_intro.asp' }
    ]
  },
  'html_editors': {
    isStructured: true,
    title: 'HTML Editors',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A simple text editor is all you need to learn HTML. Professional developers use specialized code editors like VS Code.',
    whyUseIt: 'Editors help you write code faster with features like syntax highlighting, auto-completion, and error checking.',
    syntax: 'No specific syntax. Just write text and save the file with an .html or .htm extension.',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- Write this in Notepad or VS Code and save as index.html -->\\n  <h1>My Page</h1>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '.html', desc: 'The standard file extension for HTML files.' }
    ],
    realWorldExample: 'VS Code, Sublime Text, and Notepad++ are popular tools used by millions of developers daily.',
    commonMistakes: [
      { error: 'Saving the file as .txt instead of .html', code: '' }
    ],
    bestPractices: [
      'Use a modern editor like VS Code.',
      'Install HTML extensions for formatting.'
    ],
    summary: [
      'HTML can be written in any text editor.',
      'Save HTML files with the .html extension.'
    ],
    interviewQuestions: [
      'Do you need a special compiler to run HTML?'
    ],
    quickQuiz: {
      question: 'Which of the following is NOT an HTML editor?',
      options: ['Notepad', 'Visual Studio Code', 'Adobe Photoshop', 'Sublime Text'],
      answer: 'Adobe Photoshop'
    },
    references: [
      { label: 'W3Schools', url: 'https://www.w3schools.com/html/html_editors.asp' }
    ]
  },
  'html_basic_structure': {
    isStructured: true,
    title: 'HTML Basic Structure',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Every HTML page follows a standard structure that tells the browser how to display the webpage.',
    whyUseIt: 'Without this structure, browsers cannot correctly interpret the document. It provides Document Type, Head Section, Body Section, and Metadata.',
    syntax: '<!DOCTYPE html>\\n<html>\\n<head>\\n    <title>My First Web Page</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
    codeExample: '<!DOCTYPE html>\\n<html>\\n<head>\\n    <title>Welcome</title>\\n</head>\\n\\n<body>\\n\\n<h1>Hello World</h1>\\n\\n<p>This is my first webpage.</p>\\n\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<!DOCTYPE html>', desc: 'Tells the browser this document uses HTML5.' },
      { code: '<html>', desc: 'The root element of every HTML page.' },
      { code: '<head>', desc: 'Contains metadata, title, CSS links, fonts, etc.' },
      { code: '<title>', desc: 'Displays the page title in the browser tab.' },
      { code: '<body>', desc: 'Contains all visible webpage content.' }
    ],
    realWorldExample: 'Every website like Google, Amazon, YouTube, Facebook begins with this structure.',
    commonMistakes: [
      { error: 'Forgetting', code: '<!DOCTYPE html>' },
      { error: 'Writing content inside', code: '<head>', suffix: 'instead of <body>' },
      { error: 'Missing closing tags', code: '' }
    ],
    bestPractices: [
      'Always use HTML5 DOCTYPE',
      'Use semantic tags',
      'Indent code properly',
      'Keep head organized'
    ],
    miniExercise: {
      task: 'Create a webpage containing:\\n- Your Name\\n- College Name\\n- One Image\\n- One Link',
      expectedOutput: '<h1>My Portfolio</h1>\\n<h2>Name</h2>\\n<h3>College</h3>\\n<img src="https://via.placeholder.com/150" alt="Image" />\\n<a href="https://github.com">Visit GitHub</a>'
    },
    summary: [
      'HTML pages follow a standard structure.',
      'Head contains metadata.',
      'Body contains visible elements.',
      'DOCTYPE enables HTML5 mode.'
    ],
    interviewQuestions: [
      'What is DOCTYPE?',
      'Difference between head and body?',
      'Is HTML case sensitive?',
      'Can a webpage have multiple body tags?',
      'What happens if DOCTYPE is removed?'
    ],
    quickQuiz: {
      question: 'Which tag contains visible content?',
      options: ['Head', 'Body', 'Title', 'HTML'],
      answer: 'Body'
    },
    references: [
      { label: 'W3Schools', url: 'https://www.w3schools.com/html/html_basic.asp' },
      { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax' }
    ]
  },
  'html_elements': {
    isStructured: true,
    title: 'HTML Elements',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'An HTML element is defined by a start tag, some content, and an end tag.',
    whyUseIt: 'Elements are the foundation of HTML. They represent different types of content like paragraphs, links, and images.',
    syntax: '<tagname>Content goes here...</tagname>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <h1>This is a heading element</h1>\\n  <p>This is a paragraph element.</p>\\n  <br> <!-- This is an empty element (no closing tag) -->\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<tagname>', desc: 'The opening tag marks the start of the element.' },
      { code: '</tagname>', desc: 'The closing tag marks the end of the element. Note the forward slash.' }
    ],
    realWorldExample: 'Just like grammar structures a sentence (nouns, verbs), elements structure a webpage (headings, lists).',
    commonMistakes: [
      { error: 'Forgetting the end tag.', code: '</tagname>' },
      { error: 'Incorrectly nesting elements.', code: '<h1><p>Text</h1></p>' }
    ],
    bestPractices: [
      'Always close your tags (even if the browser forgives you).',
      'Use lowercase tag names (HTML5 allows uppercase, but lowercase is standard).'
    ],
    summary: [
      'HTML elements consist of a start tag and an end tag with content in between.',
      'Some elements are empty (e.g., <br>) and do not have an end tag.'
    ],
    interviewQuestions: [
      'What is an empty HTML element?',
      'Can HTML elements be nested?'
    ],
    quickQuiz: {
      question: 'Which of the following is considered an "empty" element?',
      options: ['<p>', '<h1>', '<br>', '<body>'],
      answer: '<br>'
    },
    references: [
      { label: 'W3Schools', url: 'https://www.w3schools.com/html/html_elements.asp' }
    ]
  },
  'html_attributes': {
    isStructured: true,
    title: 'HTML Attributes',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'Attributes provide additional information about HTML elements. They are always specified in the start tag.',
    whyUseIt: 'They are used to define characteristics of an HTML element, such as linking a URL, defining an image source, or applying a class for styling.',
    syntax: '<tagname attributename="attributevalue">Content</tagname>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <a href="https://www.google.com">Visit Google</a>\\n  <img src="logo.png" alt="Company Logo" width="100" height="100">\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'href', desc: 'Specifies the URL for a link.' },
      { code: 'src', desc: 'Specifies the path to the image to be displayed.' },
      { code: 'alt', desc: 'Provides alternate text for an image if it cannot be displayed.' }
    ],
    realWorldExample: 'If an HTML element is a noun (like an Image), an attribute is an adjective detailing it (like its Source and Size).',
    commonMistakes: [
      { error: 'Forgetting quotes around attribute values.', code: 'href=link.html' },
      { error: 'Missing the alt attribute on images.', code: 'alt=""' }
    ],
    bestPractices: [
      'Always use quotes for attribute values.',
      'Always include the alt attribute for images for accessibility and SEO.'
    ],
    summary: [
      'Attributes provide extra information about elements.',
      'Attributes usually come in name/value pairs like: name="value".'
    ],
    interviewQuestions: [
      'What is the purpose of the alt attribute in an image tag?',
      'Can you use single quotes for attributes?'
    ],
    quickQuiz: {
      question: 'Where are HTML attributes always placed?',
      options: ['In the closing tag', 'In the opening tag', 'Between the tags', 'In the head section'],
      answer: 'In the opening tag'
    },
    references: [
      { label: 'W3Schools', url: 'https://www.w3schools.com/html/html_attributes.asp' }
    ]
  },
  'html_headings': {
    isStructured: true,
    title: 'HTML Headings',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'HTML headings are defined with the <h1> to <h6> tags, used to show the structure and hierarchy of your content.',
    whyUseIt: 'Headings are crucial for SEO and accessibility. Search engines use them to index the structure and content of your web pages.',
    syntax: '<h1>Heading 1</h1>\\n<h2>Heading 2</h2>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <h1>Main Title (H1)</h1>\\n  <h2>Section Title (H2)</h2>\\n  <h3>Subsection (H3)</h3>\\n  <h4>Smaller Section (H4)</h4>\\n  <h5>Minor Title (H5)</h5>\\n  <h6>Smallest Title (H6)</h6>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<h1>', desc: 'The most important heading, usually the page title.' },
      { code: '<h6>', desc: 'The least important heading.' }
    ],
    realWorldExample: 'Think of headings like a newspaper. H1 is the main headline on the front page, H2s are the sub-headlines for different stories, and so on.',
    commonMistakes: [
      { error: 'Using headings just to make text bold or big.', code: '', suffix: 'Use CSS for styling instead.' },
      { error: 'Skipping heading levels (e.g., going from H1 directly to H3).', code: '' }
    ],
    bestPractices: [
      'Use only one <h1> per page.',
      'Maintain a logical hierarchy without skipping levels.'
    ],
    summary: [
      'Headings range from <h1> to <h6>.',
      'They define the semantic structure of the page.',
      'They are heavily used by search engines for SEO.'
    ],
    interviewQuestions: [
      'Why is it bad practice to use an <h2> tag just to make text large?',
      'How many <h1> tags should a webpage ideally have?'
    ],
    quickQuiz: {
      question: 'Which heading tag represents the most important heading?',
      options: ['<h6>', '<head>', '<h1>', '<header>'],
      answer: '<h1>'
    },
    references: [
      { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements' }
    ]
  },
  'html_paragraphs': {
    isStructured: true,
    title: 'HTML Paragraphs',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The <p> element defines a paragraph of text.',
    whyUseIt: 'Browsers automatically add a single blank line before and after each <p> element, making text readable and well-spaced.',
    syntax: '<p>This is a paragraph.</p>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <p>This is a paragraph of text on my website.</p>\\n  <p>This is a second paragraph. Notice the space between them!</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<p>', desc: 'The start tag for a paragraph.' }
    ],
    realWorldExample: 'Any standard block of text you read in a blog post, news article, or book chapter is wrapped in a paragraph tag.',
    commonMistakes: [
      { error: 'Forgetting the closing tag.', code: '</p>' }
    ],
    bestPractices: [
      'Always close your paragraph tags.',
      'Do not use empty paragraphs <p></p> to create space. Use CSS margins instead.'
    ],
    summary: [
      'Paragraphs are defined with the <p> tag.',
      'Browsers add margin around paragraphs automatically.'
    ],
    interviewQuestions: [
      'How does a browser render multiple spaces inside a <p> tag?'
    ],
    quickQuiz: {
      question: 'What tag is used to create a paragraph?',
      options: ['<para>', '<p>', '<text>', '<pg>'],
      answer: '<p>'
    }
  },
  'html_formatting': {
    isStructured: true,
    title: 'HTML Text Formatting',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'HTML contains several elements for defining text with a special meaning, such as bold, italic, and underlined text.',
    whyUseIt: 'Formatting tags provide semantic meaning to the text, telling the browser and screen readers how the text should be treated.',
    syntax: '<b>Bold Text</b>\\n<i>Italic Text</i>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <p>This is normal text.</p>\\n  <p>This is <strong>important text</strong> (Strong).</p>\\n  <p>This is <em>emphasized text</em> (Italic).</p>\\n  <p>This is <mark>highlighted text</mark>.</p>\\n  <p>This is <sub>subscript</sub> and <sup>superscript</sup>.</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<strong>', desc: 'Defines important text (renders as bold).' },
      { code: '<em>', desc: 'Defines emphasized text (renders as italic).' },
      { code: '<mark>', desc: 'Defines marked/highlighted text.' }
    ],
    realWorldExample: 'When quoting a price, you might use <del>$50</del> to cross out the old price and <strong>$40</strong> for the new price.',
    commonMistakes: [
      { error: 'Using <b> and <i> instead of <strong> and <em> when the text has semantic importance.', code: '' }
    ],
    bestPractices: [
      'Use <strong> and <em> for semantic importance (screen readers emphasize them).',
      'Use <b> and <i> only when styling text without adding semantic meaning.'
    ],
    summary: [
      'Formatting elements define special types of text.',
      'There is a difference between visual formatting (b, i) and semantic formatting (strong, em).'
    ],
    interviewQuestions: [
      'What is the difference between <b> and <strong>?'
    ],
    quickQuiz: {
      question: 'Which tag is used to highlight text visually with a yellow background by default?',
      options: ['<highlight>', '<bg>', '<mark>', '<em>'],
      answer: '<mark>'
    }
  },
  'html_comments': {
    isStructured: true,
    title: 'HTML Comments',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Comments are not displayed in the browser but can help document your HTML source code.',
    whyUseIt: 'Comments are used to explain the code, making it easier for you or others to understand when returning to the code later. You can also use them to temporarily hide code during debugging.',
    syntax: '<!-- Write your comments here -->',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- This is a comment. The browser will ignore it. -->\\n  <p>This is visible text.</p>\\n  \\n  <!-- \\n  You can also have \\n  multi-line comments!\\n  -->\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<!--', desc: 'Starts the comment.' },
      { code: '-->', desc: 'Ends the comment.' }
    ],
    realWorldExample: 'Developers often leave comments like <!-- Navigation Bar Starts Here --> to organize large HTML files.',
    commonMistakes: [
      { error: 'Using the wrong syntax (e.g., // or /* */ which belong to JavaScript/CSS).', code: '' }
    ],
    bestPractices: [
      'Use comments to structure your document.',
      'Remove unnecessary or redundant comments before deploying to production.'
    ],
    summary: [
      'Comments help document code.',
      'The browser completely ignores comments.'
    ],
    interviewQuestions: [
      'Are HTML comments visible to the end user?'
    ],
    quickQuiz: {
      question: 'What is the correct syntax for an HTML comment?',
      options: ['// Comment //', '/* Comment */', '<!-- Comment -->', '<comment> Comment </comment>'],
      answer: '<!-- Comment -->'
    }
  },
  'html_colors': {
    isStructured: true,
    title: 'HTML Colors',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'Colors in HTML can be specified using color names, RGB values, HEX values, HSL values, RGBA, or HSLA values.',
    whyUseIt: 'Colors bring life to a webpage. They are used for backgrounds, text color, and borders.',
    syntax: '<h1 style="color:red;">Text</h1>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <h1 style="color:Tomato;">Tomato Text (Color Name)</h1>\\n  <p style="background-color:DodgerBlue; color:white;">White Text on DodgerBlue Background</p>\\n  <p style="color:#ff0000;">Red Text using HEX (#ff0000)</p>\\n  <p style="color:rgb(0, 255, 0);">Green Text using RGB</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'style="color:..."', desc: 'Changes the text color.' },
      { code: 'style="background-color:..."', desc: 'Changes the background color of the element.' }
    ],
    realWorldExample: 'Brand colors on a website (like Facebook Blue or YouTube Red) are defined using precise HEX or RGB values to ensure consistency.',
    commonMistakes: [
      { error: 'Forgetting the # symbol in a HEX code.', code: 'color: FF0000;' }
    ],
    bestPractices: [
      'Use HEX or RGB for precise color matching.',
      'Ensure high contrast between text and background colors for readability (Accessibility).'
    ],
    summary: [
      'HTML supports 140 standard color names.',
      'HEX and RGB are the most common ways to define colors in modern web development.'
    ],
    interviewQuestions: [
      'What does RGB stand for?',
      'How do you add opacity to an RGB color?'
    ],
    quickQuiz: {
      question: 'Which of the following is a valid HEX color code?',
      options: ['rgb(255,0,0)', '#FF0000', 'red', 'hsl(0, 100%, 50%)'],
      answer: '#FF0000'
    }
  },
  'html_links': {
    isStructured: true,
    title: 'HTML Links',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'HTML links are hyperlinks. You can click on a link and jump to another document or web page.',
    whyUseIt: 'Links connect the World Wide Web together. Without links, webpages would be isolated documents.',
    syntax: '<a href="url">link text</a>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <p>Visit <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> in a new tab.</p>\\n  <p>Send an email to <a href="mailto:someone@example.com">John</a>.</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<a>', desc: 'The anchor tag defines the hyperlink.' },
      { code: 'href', desc: 'Specifies the destination URL of the link.' },
      { code: 'target="_blank"', desc: 'Opens the linked document in a new window or tab.' }
    ],
    realWorldExample: 'Navigation menus at the top of websites are just styled lists of <a> links.',
    commonMistakes: [
      { error: 'Forgetting the href attribute, rendering the link unclickable.', code: '' },
      { error: 'Missing the https:// for external links.', code: 'href="www.google.com"' }
    ],
    bestPractices: [
      'Use descriptive link text instead of "Click Here".',
      'Use target="_blank" when linking to external websites.'
    ],
    summary: [
      'Links are created using the <a> tag.',
      'The most important attribute is href, indicating the destination.'
    ],
    interviewQuestions: [
      'How do you make a link open in a new tab?',
      'What is an absolute URL vs a relative URL?'
    ],
    quickQuiz: {
      question: 'Which attribute in the <a> tag specifies the destination address?',
      options: ['src', 'href', 'link', 'dest'],
      answer: 'href'
    }
  },
  'html_images': {
    isStructured: true,
    title: 'HTML Images',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The <img> tag is used to embed an image in an HTML page.',
    whyUseIt: 'Images improve the design and the appearance of a web page.',
    syntax: '<img src="url" alt="alternatetext">',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150">\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<img>', desc: 'The image tag is empty, it contains attributes only, and does not have a closing tag.' },
      { code: 'src', desc: 'Specifies the path (URL) to the image.' },
      { code: 'alt', desc: 'Provides an alternate text for an image, if the user for some reason cannot view it.' }
    ],
    realWorldExample: 'Profile pictures, product photos on Amazon, and logos are all rendered using the <img> tag.',
    commonMistakes: [
      { error: 'Forgetting the alt attribute, which hurts accessibility and SEO.', code: '' },
      { error: 'Using very large image files, causing the page to load slowly.', code: '' }
    ],
    bestPractices: [
      'Always use the alt attribute.',
      'Specify width and height to prevent layout shifts while the image loads.'
    ],
    summary: [
      'Images are not technically inserted into a web page; they are linked to it.',
      'The <img> tag creates a holding space for the referenced image.'
    ],
    interviewQuestions: [
      'Why is the alt attribute important?',
      'Does the <img> tag have a closing tag?'
    ],
    quickQuiz: {
      question: 'Which attribute specifies the image URL in the <img> tag?',
      options: ['href', 'src', 'link', 'url'],
      answer: 'src'
    }
  },
  'html_favicon': {
    isStructured: true,
    title: 'HTML Favicon',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A favicon is a small image displayed next to the page title in the browser tab.',
    whyUseIt: 'It helps users easily identify your website when they have multiple tabs open.',
    syntax: '<link rel="icon" type="image/x-icon" href="favicon.ico">',
    codeExample: '<!DOCTYPE html>\\n<html>\\n<head>\\n  <title>My Page with Favicon</title>\\n  <link rel="icon" type="image/x-icon" href="https://via.placeholder.com/16">\\n</head>\\n<body>\\n  <h1>Look at the browser tab!</h1>\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<link>', desc: 'Links the external favicon to the document.' },
      { code: 'rel="icon"', desc: 'Specifies the relationship between the document and the linked file.' }
    ],
    realWorldExample: 'The small Google "G" or Facebook "f" on your browser tabs are favicons.',
    commonMistakes: [
      { error: 'Placing the link tag inside the <body> instead of the <head>.', code: '' }
    ],
    bestPractices: [
      'Use a simple, recognizable image.',
      'Provide multiple sizes for different devices (e.g., Apple Touch Icons).'
    ],
    summary: [
      'Favicons are small icons for your website.',
      'They are added in the <head> section using a <link> tag.'
    ],
    interviewQuestions: [
      'Where should the favicon link tag be placed?'
    ],
    quickQuiz: {
      question: 'Which tag is used to add a favicon to a website?',
      options: ['<meta>', '<icon>', '<favicon>', '<link>'],
      answer: '<link>'
    }
  },
  'html_tables': {
    isStructured: true,
    title: 'HTML Tables',
    difficulty: 'Intermediate',
    readingTime: '7 min',
    definition: 'The <table> element allows web authors to arrange data into rows and columns.',
    whyUseIt: 'Tables are perfect for displaying tabular data like schedules, pricing plans, and financial reports.',
    syntax: '<table>\\n  <tr>\\n    <th>Header</th>\\n  </tr>\\n  <tr>\\n    <td>Data</td>\\n  </tr>\\n</table>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <table border="1">\\n    <tr>\\n      <th>Firstname</th>\\n      <th>Lastname</th>\\n      <th>Age</th>\\n    </tr>\\n    <tr>\\n      <td>Jill</td>\\n      <td>Smith</td>\\n      <td>50</td>\\n    </tr>\\n    <tr>\\n      <td>Eve</td>\\n      <td>Jackson</td>\\n      <td>94</td>\\n    </tr>\\n  </table>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<table>', desc: 'Defines the table.' },
      { code: '<tr>', desc: 'Defines a table row.' },
      { code: '<th>', desc: 'Defines a table header (bold and centered by default).' },
      { code: '<td>', desc: 'Defines standard table data/cell.' }
    ],
    realWorldExample: 'An Excel spreadsheet displayed on a webpage is typically rendered using an HTML table.',
    commonMistakes: [
      { error: 'Using tables for webpage layout.', code: '', suffix: 'Use CSS Flexbox or Grid instead.' }
    ],
    bestPractices: [
      'Use <thead>, <tbody>, and <tfoot> to group table content.',
      'Use CSS to style tables instead of HTML attributes like "border".'
    ],
    summary: [
      'Tables consist of the table, tr, th, and td elements.',
      'Data is organized in a grid format.'
    ],
    interviewQuestions: [
      'What is the difference between <th> and <td>?',
      'How do you merge two columns in a table?'
    ],
    quickQuiz: {
      question: 'Which tag defines a table row?',
      options: ['<td>', '<table>', '<tr>', '<th>'],
      answer: '<tr>'
    }
  },
  'html_lists': {
    isStructured: true,
    title: 'HTML Lists',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'HTML lists allow web developers to group a set of related items in lists.',
    whyUseIt: 'Lists organize information in a readable, structured way. There are unordered lists (bullets) and ordered lists (numbers).',
    syntax: '<ul>\\n  <li>Item</li>\\n</ul>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <h3>Unordered List</h3>\\n  <ul>\\n    <li>Coffee</li>\\n    <li>Tea</li>\\n    <li>Milk</li>\\n  </ul>\\n  \\n  <h3>Ordered List</h3>\\n  <ol>\\n    <li>First Step</li>\\n    <li>Second Step</li>\\n    <li>Third Step</li>\\n  </ol>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<ul>', desc: 'Defines an unordered (bulleted) list.' },
      { code: '<ol>', desc: 'Defines an ordered (numbered) list.' },
      { code: '<li>', desc: 'Defines a list item (used inside both ul and ol).' }
    ],
    realWorldExample: 'Recipe ingredients use unordered lists, while the step-by-step cooking instructions use ordered lists.',
    commonMistakes: [
      { error: 'Putting text directly inside <ul> without using an <li>.', code: '<ul>Text</ul>' }
    ],
    bestPractices: [
      'Use lists for navigation menus (styled with CSS).',
      'Nest lists correctly (a nested <ul> must go inside an <li>).'
    ],
    summary: [
      'Use <ul> for items where order does not matter.',
      'Use <ol> for sequential items.'
    ],
    interviewQuestions: [
      'Can you put a list inside another list?'
    ],
    quickQuiz: {
      question: 'Which tag is used to create a numbered list?',
      options: ['<ul>', '<nl>', '<ol>', '<list>'],
      answer: '<ol>'
    }
  },
  'html_block_inline': {
    isStructured: true,
    title: 'Block and Inline Elements',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Every HTML element has a default display value, depending on what type of element it is. The two most common are block and inline.',
    whyUseIt: 'Understanding block vs inline is crucial for page layout and CSS styling.',
    syntax: '<!-- Concept, no specific syntax -->',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <div style="border: 1px solid red;">\\n    This is a block-level element. It takes up the full width.\\n  </div>\\n  <div style="border: 1px solid red;">\\n    This is another block-level element. It starts on a new line.\\n  </div>\\n  <br>\\n  <span style="border: 1px solid blue;">This is an inline element.</span>\\n  <span style="border: 1px solid blue;">It only takes up as much width as necessary.</span>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'Block-level', desc: 'Always starts on a new line and takes up the full width available (e.g., <div>, <h1>, <p>).' },
      { code: 'Inline', desc: 'Does not start on a new line and only takes up as much width as necessary (e.g., <span>, <a>, <img>).' }
    ],
    realWorldExample: 'Paragraphs (<p>) stack on top of each other like building blocks. Links (<a>) flow naturally within text like words in a sentence.',
    commonMistakes: [
      { error: 'Trying to set width or height on an inline element.', code: '', suffix: 'It will have no effect unless changed to block or inline-block via CSS.' }
    ],
    bestPractices: [
      'Do not place block-level elements inside inline elements.'
    ],
    summary: [
      'Block elements take full width and force new lines.',
      'Inline elements flow with the text and take only necessary width.'
    ],
    interviewQuestions: [
      'Name 3 block-level elements and 3 inline elements.',
      'Can an inline element contain a block-level element?'
    ],
    quickQuiz: {
      question: 'Which of the following is a block-level element?',
      options: ['<span>', '<a>', '<div>', '<img>'],
      answer: '<div>'
    }
  },
  'html_div': {
    isStructured: true,
    title: 'HTML Div',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'The <div> element is often used as a container for other HTML elements.',
    whyUseIt: 'It has no special meaning at all. It represents its children. It is used heavily with CSS to layout web pages and style blocks of content.',
    syntax: '<div>\\n  Content\\n</div>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px;">\\n    <h2>London</h2>\\n    <p>London is the capital city of England.</p>\\n  </div>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<div>', desc: 'A block-level generic container.' }
    ],
    realWorldExample: 'A "Card" component showing a user profile (image, name, bio) is usually wrapped inside a single <div> container.',
    commonMistakes: [
      { error: 'Using <div> for everything (Divitis).', code: '', suffix: 'Use semantic tags like <header>, <article>, and <section> when appropriate.' }
    ],
    bestPractices: [
      'Use <div> primarily for styling and layout purposes.',
      'Always prefer semantic tags over <div> if a semantic tag exists for your use case.'
    ],
    summary: [
      'The <div> element is a block-level container.',
      'It is the most commonly used HTML element for CSS layouts.'
    ],
    interviewQuestions: [
      'What does the <div> tag do on its own?'
    ],
    quickQuiz: {
      question: 'Is <div> a block-level or inline element?',
      options: ['Inline', 'Block-level', 'Both', 'Neither'],
      answer: 'Block-level'
    }
  },
  'html_span': {
    isStructured: true,
    title: 'HTML Span',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'The <span> element is an inline container used to mark up a part of a text, or a part of a document.',
    whyUseIt: 'Like <div>, it has no special meaning. It is used to apply CSS or JavaScript to a specific chunk of text without breaking the line.',
    syntax: '<span>Text</span>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <p>My mother has <span style="color:blue; font-weight:bold;">blue</span> eyes and my father has <span style="color:darkolivegreen; font-weight:bold;">dark green</span> eyes.</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<span>', desc: 'An inline generic container.' }
    ],
    realWorldExample: 'If you want to highlight a single word in a paragraph with a yellow background, you wrap that word in a <span>.',
    commonMistakes: [
      { error: 'Using <span> to group block-level elements.', code: '<span><p>Text</p></span>' }
    ],
    bestPractices: [
      'Use <span> for styling small portions of text inline.'
    ],
    summary: [
      'The <span> element is an inline container.',
      'It does not start a new line.'
    ],
    interviewQuestions: [
      'What is the main difference between <div> and <span>?'
    ],
    quickQuiz: {
      question: 'Which tag would you use to style a single word inside a paragraph without causing a line break?',
      options: ['<div>', '<span>', '<p>', '<block>'],
      answer: '<span>'
    }
  },
  'html_classes': {
    isStructured: true,
    title: 'HTML Classes',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The class attribute is used to specify a class for an HTML element.',
    whyUseIt: 'Multiple HTML elements can share the same class. It is heavily used by CSS and JavaScript to select and style multiple elements at once.',
    syntax: '<tagname class="classname">',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <style>\\n  .city {\\n    background-color: tomato;\\n    color: white;\\n    padding: 10px;\\n    margin-bottom: 5px;\\n  }\\n  </style>\\n  \\n  <h2 class="city">London</h2>\\n  <p>London is the capital of England.</p>\\n  \\n  <h2 class="city">Paris</h2>\\n  <p>Paris is the capital of France.</p>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'class="city"', desc: 'Assigns the class "city" to the element.' },
      { code: '.city { ... }', desc: 'In CSS, a period (.) before the name selects all elements with that class.' }
    ],
    realWorldExample: 'If you have 10 buttons on a webpage that should all look the same, you give them all the same class (e.g., class="btn-primary").',
    commonMistakes: [
      { error: 'Starting a class name with a number.', code: 'class="1stItem"' },
      { error: 'Using spaces in a single class name.', code: 'class="my class"' }
    ],
    bestPractices: [
      'Use meaningful class names (e.g., "error-message" instead of "red-text").',
      'You can assign multiple classes to one element by separating them with a space.'
    ],
    summary: [
      'The class attribute identifies one or more elements.',
      'CSS uses the period (.) selector to style classes.'
    ],
    interviewQuestions: [
      'Can an HTML element have multiple classes?',
      'Is the class attribute unique?'
    ],
    quickQuiz: {
      question: 'How do you assign multiple classes to an HTML element?',
      options: ['class="class1, class2"', 'class="class1 class2"', 'classes="class1 class2"', 'class="class1+class2"'],
      answer: 'class="class1 class2"'
    }
  },
  'html_ids': {
    isStructured: true,
    title: 'HTML IDs',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The id attribute is used to specify a unique id for an HTML element.',
    whyUseIt: 'You cannot have more than one element with the same id in an HTML document. It is used to uniquely identify a single element for CSS or JavaScript, or to create bookmark links.',
    syntax: '<tagname id="idname">',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <style>\\n  #myHeader {\\n    background-color: lightblue;\\n    color: black;\\n    padding: 40px;\\n    text-align: center;\\n  }\\n  </style>\\n  \\n  <h1 id="myHeader">My Header</h1>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'id="myHeader"', desc: 'Assigns the unique ID "myHeader" to the element.' },
      { code: '#myHeader { ... }', desc: 'In CSS, a hash (#) before the name selects the element with that specific ID.' }
    ],
    realWorldExample: 'The main navigation bar of a website might have id="navbar" because there is only one main navigation bar on the page.',
    commonMistakes: [
      { error: 'Using the same ID on multiple elements on the same page.', code: '' }
    ],
    bestPractices: [
      'Use classes for styling in CSS, reserve IDs for JavaScript targeting and page anchors (bookmarks).',
      'ID names must be unique within the document.'
    ],
    summary: [
      'The id attribute must be unique in the whole document.',
      'CSS uses the hash (#) selector to style an ID.'
    ],
    interviewQuestions: [
      'What is the primary difference between a class and an id in HTML?'
    ],
    quickQuiz: {
      question: 'What character is used in CSS to select an element by its ID?',
      options: ['. (period)', '# (hash)', '* (asterisk)', '$ (dollar sign)'],
      answer: '# (hash)'
    }
  },
  'html_iframe': {
    isStructured: true,
    title: 'HTML Iframe',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'An HTML iframe is used to display a web page within a web page.',
    whyUseIt: 'Iframes are widely used to embed third-party content like YouTube videos, Google Maps, or advertising banners into a webpage.',
    syntax: '<iframe src="url" title="description"></iframe>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <iframe src="https://example.com" width="100%" height="200" title="Example Website" style="border: 2px solid gray;"></iframe>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<iframe>', desc: 'Defines an inline frame.' },
      { code: 'src', desc: 'Specifies the URL of the page to embed.' },
      { code: 'title', desc: 'Always include a title attribute for screen readers (Accessibility).' }
    ],
    realWorldExample: 'Whenever you watch a YouTube video directly on a blog or news website, you are watching it through an iframe.',
    commonMistakes: [
      { error: 'Forgetting the title attribute.', code: '' },
      { error: 'Not setting width and height, leading to a tiny default iframe.', code: '' }
    ],
    bestPractices: [
      'Use the title attribute for accessibility.',
      'Remove the default border using CSS (border: none;).'
    ],
    summary: [
      'Iframes embed another document within the current HTML document.',
      'They are heavily used for media and ads.'
    ],
    interviewQuestions: [
      'What are the security implications of using iframes?',
      'How do you remove the border from an iframe?'
    ],
    quickQuiz: {
      question: 'Which tag is used to embed a YouTube video in an HTML page?',
      options: ['<video>', '<embed>', '<iframe>', '<youtube>'],
      answer: '<iframe>'
    }
  },
  'html_forms': {
    isStructured: true,
    title: 'HTML Forms',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'The <form> element is used to create an HTML form for user input.',
    whyUseIt: 'Forms are essential for collecting data from users, such as login details, survey responses, and search queries.',
    syntax: '<form action="/submit" method="post">\\n  <!-- input elements -->\\n</form>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <form>\\n    <label for="fname">First name:</label><br>\\n    <input type="text" id="fname" name="fname" value="John"><br>\\n    <label for="lname">Last name:</label><br>\\n    <input type="text" id="lname" name="lname" value="Doe"><br><br>\\n    <input type="submit" value="Submit">\\n  </form>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<form>', desc: 'Defines the form container.' },
      { code: '<input>', desc: 'The most important form element. Can be text, checkbox, radio button, submit button, etc.' },
      { code: '<label>', desc: 'Defines a label for an input element.' }
    ],
    realWorldExample: 'Every time you log into Facebook or Instagram, you are using an HTML form.',
    commonMistakes: [
      { error: 'Forgetting the name attribute on inputs.', code: '', suffix: 'Without it, the input data will not be sent when submitted.' }
    ],
    bestPractices: [
      'Always use <label> for accessibility.',
      'Group related inputs with <fieldset> and <legend>.'
    ],
    summary: [
      'Forms collect user input.',
      'The action attribute defines where to send the data.'
    ],
    interviewQuestions: [
      'What is the difference between GET and POST methods in a form?'
    ],
    quickQuiz: {
      question: 'Which tag is used to create a drop-down list in a form?',
      options: ['<input>', '<list>', '<select>', '<dropdown>'],
      answer: '<select>'
    }
  },
  'html_input_types': {
    isStructured: true,
    title: 'HTML Input Types',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The <input> element is the most used form element. It can be displayed in many ways depending on the type attribute.',
    whyUseIt: 'Different input types provide different user interfaces and built-in validation (e.g., date pickers, color pickers, email validation).',
    syntax: '<input type="type">',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <form>\\n    <input type="text" placeholder="Text Input"><br><br>\\n    <input type="password" placeholder="Password"><br><br>\\n    <input type="email" placeholder="Email"><br><br>\\n    <input type="date"><br><br>\\n    <input type="checkbox" id="check"> <label for="check">Checkbox</label><br><br>\\n    <input type="radio" id="radio" name="r"> <label for="radio">Radio</label>\\n  </form>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'type="text"', desc: 'Default. Defines a single-line text field.' },
      { code: 'type="password"', desc: 'Masks the characters (bullets or asterisks).' },
      { code: 'type="email"', desc: 'Validates that the input is an email address format.' }
    ],
    realWorldExample: 'When booking a flight, the departure date uses <input type="date"> to show a calendar.',
    commonMistakes: [
      { error: 'Using type="text" for emails or numbers.', code: '', suffix: 'Use the correct type to trigger the appropriate mobile keyboard (e.g., number pad).' }
    ],
    bestPractices: [
      'Use HTML5 input types (email, url, tel) to get free validation and better mobile keyboards.'
    ],
    summary: [
      'The <input> tag\'s behavior changes drastically based on the type attribute.',
      'There are over 20 different input types in HTML5.'
    ],
    interviewQuestions: [
      'What happens if a browser does not support a specific HTML5 input type (like date)?'
    ],
    quickQuiz: {
      question: 'Which input type is used for a multi-line text input?',
      options: ['<input type="text">', '<textarea>', '<input type="multiline">', '<input type="longtext">'],
      answer: '<textarea>'
    }
  },
  'html_form_validation': {
    isStructured: true,
    title: 'HTML Form Validation',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'HTML5 introduced built-in form validation, which checks user input without needing JavaScript.',
    whyUseIt: 'It improves user experience by giving immediate feedback if they forget a field or enter incorrect data.',
    syntax: '<input type="text" required>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <form>\\n    <label>Email (Required):</label><br>\\n    <input type="email" required><br><br>\\n    \\n    <label>Age (18-99):</label><br>\\n    <input type="number" min="18" max="99"><br><br>\\n  \\n    <input type="submit" value="Submit">\\n  </form>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'required', desc: 'Specifies that an input field must be filled out before submitting the form.' },
      { code: 'min / max', desc: 'Specifies the minimum and maximum value for an input field.' }
    ],
    realWorldExample: 'When creating an account, if you forget to type the "@" in your email, the browser automatically stops you and highlights the error.',
    commonMistakes: [
      { error: 'Relying solely on HTML validation.', code: '', suffix: 'Always validate data on the server side as well, because HTML validation can be easily bypassed.' }
    ],
    bestPractices: [
      'Use the required attribute for mandatory fields.',
      'Combine HTML validation with custom CSS (:valid and :invalid pseudo-classes).'
    ],
    summary: [
      'HTML5 can automatically validate inputs like emails, numbers, and required fields.',
      'It provides instant feedback before the form is sent to the server.'
    ],
    interviewQuestions: [
      'How can a user bypass HTML5 form validation?'
    ],
    quickQuiz: {
      question: 'Which attribute prevents a form from being submitted if the input field is empty?',
      options: ['validate', 'mandatory', 'required', 'important'],
      answer: 'required'
    }
  },
  'html_semantic': {
    isStructured: true,
    title: 'Semantic HTML',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Semantic HTML introduces meaning to the web page rather than just presentation. A semantic element clearly describes its meaning to both the browser and the developer.',
    whyUseIt: 'It improves accessibility (for screen readers) and Search Engine Optimization (SEO).',
    syntax: '<article>\\n  <header>Title</header>\\n  <p>Content</p>\\n</article>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- Semantic Structure -->\\n  <header>\\n    <h1>My Website</h1>\\n    <nav>\\n      <a href="#">Home</a> | <a href="#">About</a>\\n    </nav>\\n  </header>\\n  \\n  <main>\\n    <article>\\n      <h2>Breaking News</h2>\\n      <p>This is a semantic article.</p>\\n    </article>\\n  </main>\\n  \\n  <footer>\\n    <p>&copy; 2024 My Website</p>\\n  </footer>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<header>', desc: 'Defines a header for a document or section.' },
      { code: '<nav>', desc: 'Defines a set of navigation links.' },
      { code: '<article>', desc: 'Defines independent, self-contained content.' },
      { code: '<footer>', desc: 'Defines a footer for a document or section.' }
    ],
    realWorldExample: 'Instead of using <div id="footer">, using <footer> allows screen readers to instantly find the footer of the page.',
    commonMistakes: [
      { error: 'Using <section> just as a wrapper for styling.', code: '', suffix: 'Use <div> for generic styling. Use <section> when the content groups a thematic block.' }
    ],
    bestPractices: [
      'Replace excessive <div> tags with semantic tags like <main>, <aside>, and <article>.'
    ],
    summary: [
      'Semantic tags have built-in meaning.',
      'Non-semantic tags: <div> and <span>.',
      'Semantic tags: <form>, <table>, <article>.'
    ],
    interviewQuestions: [
      'Why should you use semantic HTML?',
      'What is the difference between <article> and <section>?'
    ],
    quickQuiz: {
      question: 'Which semantic tag is best used for a website\'s main navigation menu?',
      options: ['<menu>', '<nav>', '<header>', '<navigation>'],
      answer: '<nav>'
    }
  },
  'html_audio': {
    isStructured: true,
    title: 'HTML Audio',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The <audio> element is used to play an audio file on a web page.',
    whyUseIt: 'Allows playing music, podcasts, or sound effects directly in the browser without third-party plugins.',
    syntax: '<audio controls>\\n  <source src="file.mp3" type="audio/mpeg">\\n</audio>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <audio controls>\\n    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">\\n    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">\\n    Your browser does not support the audio element.\\n  </audio>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'controls', desc: 'Adds audio controls, like play, pause, and volume.' },
      { code: '<source>', desc: 'Allows you to specify alternative audio files which the browser may choose from.' }
    ],
    realWorldExample: 'Spotify\'s web player and podcast websites use the HTML5 audio API to play streams.',
    commonMistakes: [
      { error: 'Not providing fallback text for older browsers.', code: '' }
    ],
    bestPractices: [
      'Provide both MP3 and OGG formats for maximum browser compatibility.',
      'Avoid autoplaying audio as it annoys users and is blocked by most modern browsers.'
    ],
    summary: [
      'The <audio> element embeds sound.',
      'Use the controls attribute to let the user play/pause.'
    ],
    interviewQuestions: [
      'Why is it recommended to provide multiple <source> elements?'
    ],
    quickQuiz: {
      question: 'Which attribute adds play, pause, and volume buttons to the audio element?',
      options: ['buttons', 'ui', 'play', 'controls'],
      answer: 'controls'
    }
  },
  'html_video': {
    isStructured: true,
    title: 'HTML Video',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'The <video> element is used to show a video on a web page.',
    whyUseIt: 'Allows native video playback directly in the browser without needing Flash or external plugins.',
    syntax: '<video controls width="320" height="240">\\n  <source src="movie.mp4" type="video/mp4">\\n</video>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <video width="320" height="240" controls>\\n    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">\\n    <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg">\\n    Your browser does not support the video tag.\\n  </video>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'controls', desc: 'Adds video controls, like play, pause, and volume.' },
      { code: 'width / height', desc: 'Sets the dimensions of the video player.' }
    ],
    realWorldExample: 'Netflix and YouTube use customized HTML5 video players to stream movies.',
    commonMistakes: [
      { error: 'Autoplaying videos with sound.', code: '', suffix: 'Browsers will block autoplay unless the video is muted.' }
    ],
    bestPractices: [
      'Always include the controls attribute so users can pause.',
      'If using autoplay, you MUST include the muted attribute.'
    ],
    summary: [
      'The <video> element embeds video.',
      'MP4, WebM, and Ogg are the supported formats.'
    ],
    interviewQuestions: [
      'How do you make a video play automatically in the background?'
    ],
    quickQuiz: {
      question: 'Which format is most widely supported by all browsers for the <video> tag?',
      options: ['AVI', 'MP4', 'FLV', 'WMV'],
      answer: 'MP4'
    }
  },
  'html_canvas': {
    isStructured: true,
    title: 'HTML Canvas',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The <canvas> element is used to draw graphics, on the fly, via JavaScript.',
    whyUseIt: 'Canvas is used for drawing graphs, making photo compositions, creating animations, or doing real-time video processing/gaming.',
    syntax: '<canvas id="myCanvas" width="200" height="100"></canvas>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- HTML -->\\n  <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>\\n  \\n  <!-- JavaScript -->\\n  <script>\\n  var c = document.getElementById("myCanvas");\\n  var ctx = c.getContext("2d");\\n  ctx.fillStyle = "#FF0000";\\n  ctx.fillRect(0, 0, 150, 75);\\n  </script>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<canvas>', desc: 'A container for graphics. It has no drawing abilities of its own.' },
      { code: 'getContext("2d")', desc: 'A JavaScript object containing drawing methods and properties.' }
    ],
    realWorldExample: 'Browser-based games (like Agar.io or Slither.io) and charting libraries (like Chart.js) render heavily on the Canvas.',
    commonMistakes: [
      { error: 'Trying to draw on the canvas using HTML or CSS.', code: '', suffix: 'Canvas drawing MUST be done with JavaScript.' }
    ],
    bestPractices: [
      'Always specify an id attribute (to be referred to in a script).',
      'Provide fallback text inside the canvas tag for older browsers.'
    ],
    summary: [
      'Canvas is a rectangular area on an HTML page.',
      'By default, it has no border and no content.',
      'You must use JavaScript to actually draw the graphics.'
    ],
    interviewQuestions: [
      'What is the difference between Canvas and SVG?'
    ],
    quickQuiz: {
      question: 'Which language is required to draw graphics on an HTML <canvas>?',
      options: ['HTML', 'CSS', 'JavaScript', 'Python'],
      answer: 'JavaScript'
    }
  },
  'html_svg': {
    isStructured: true,
    title: 'HTML SVG',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'SVG stands for Scalable Vector Graphics. It defines vector-based graphics in XML format.',
    whyUseIt: 'Unlike images (JPG, PNG), SVGs do not lose any quality if they are zoomed or resized. They are perfect for logos and icons.',
    syntax: '<svg width="100" height="100">\\n  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\\n</svg>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <svg width="100" height="100">\\n    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />\\n  </svg>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<svg>', desc: 'The container for SVG graphics.' },
      { code: '<circle>', desc: 'An SVG element used to draw circles.' },
      { code: 'cx and cy', desc: 'Define the x and y coordinates of the center of the circle.' }
    ],
    realWorldExample: 'The icons used in modern web apps (like the Lucide icons used in this academy) are actually SVGs.',
    commonMistakes: [
      { error: 'Using SVG for complex photographs.', code: '', suffix: 'SVGs are meant for flat graphics, logos, and icons. Use JPG/WEBP for photos.' }
    ],
    bestPractices: [
      'Use SVGs for icons, logos, and simple illustrations to keep page size small and crisp on high-res displays.'
    ],
    summary: [
      'SVG stands for Scalable Vector Graphics.',
      'Every element and every attribute in SVG files can be animated.'
    ],
    interviewQuestions: [
      'When should you use Canvas vs SVG?'
    ],
    quickQuiz: {
      question: 'What happens when you zoom in on an SVG image?',
      options: ['It becomes pixelated', 'It loses color', 'It remains perfectly sharp', 'It disappears'],
      answer: 'It remains perfectly sharp'
    }
  },
  'html_meta_tags': {
    isStructured: true,
    title: 'HTML Meta Tags',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but is machine parsable.',
    whyUseIt: 'Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.',
    syntax: '<meta name="name" content="content">',
    codeExample: '<!DOCTYPE html>\\n<html>\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="description" content="Free Web tutorials">\\n  <meta name="keywords" content="HTML, CSS, JavaScript">\\n  <meta name="author" content="John Doe">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n</head>\\n<body>\\n  <p>Meta tags are hidden in the head.</p>\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'charset="UTF-8"', desc: 'Defines the character set used.' },
      { code: 'name="viewport"', desc: 'Makes the website look good on all devices (mobile responsiveness).' }
    ],
    realWorldExample: 'When you share a link on Twitter or WhatsApp, the preview image and description are fetched from specific <meta> tags in the head section.',
    commonMistakes: [
      { error: 'Forgetting the viewport meta tag.', code: '', suffix: 'Your website will look like a tiny desktop site on mobile phones.' }
    ],
    bestPractices: [
      'Always include the viewport meta tag for responsive design.',
      'Use descriptive meta descriptions for better SEO click-through rates.'
    ],
    summary: [
      'Meta tags live inside the <head>.',
      'They provide information to search engines and browsers.'
    ],
    interviewQuestions: [
      'What does the viewport meta tag do?'
    ],
    quickQuiz: {
      question: 'Where must all <meta> tags be placed in an HTML document?',
      options: ['Inside the <body>', 'Inside the <head>', 'Inside a <div>', 'At the very end of the document'],
      answer: 'Inside the <head>'
    }
  },
  'html_seo_basics': {
    isStructured: true,
    title: 'HTML SEO Basics',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'SEO (Search Engine Optimization) in HTML refers to using specific tags and structure to help search engines like Google understand your content.',
    whyUseIt: 'Good HTML structure directly impacts your website ranking on search engines, leading to more organic traffic.',
    syntax: '<title>Descriptive Title</title>\\n<meta name="description" content="Clear description.">',
    codeExample: '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <title>Best Pizza Recipe | John&apos;s Kitchen</title>\\n  <meta name="description" content="Learn how to make the best homemade pizza from scratch with easy-to-find ingredients.">\\n</head>\\n<body>\\n  <h1>Ultimate Homemade Pizza</h1>\\n  <img src="pizza.jpg" alt="A delicious slice of homemade pepperoni pizza">\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<title>', desc: 'The most important SEO tag. It shows up as the clickable link in search results.' },
      { code: 'meta description', desc: 'The summary text below the title in search results.' },
      { code: 'alt attribute', desc: 'Helps Google Images understand what the image is about.' }
    ],
    realWorldExample: 'If you search for "Best Pizza Recipe", the search engine reads the <title> and <h1> of pages to decide which one matches best.',
    commonMistakes: [
      { error: 'Keyword stuffing.', code: '<title>Pizza pizza best pizza cheap pizza</title>', suffix: 'Write for humans first, search engines second.' }
    ],
    bestPractices: [
      'Ensure every page has a unique <title>.',
      'Use only one <h1> tag per page.',
      'Always use descriptive alt text for images.'
    ],
    summary: [
      'HTML structure is the foundation of SEO.',
      'Titles, descriptions, headings, and alt text are critical.'
    ],
    interviewQuestions: [
      'How does the <h1> tag affect SEO compared to an <h2> tag?'
    ],
    quickQuiz: {
      question: 'Which tag has the most direct impact on how your page appears in search engine results?',
      options: ['<h1>', '<meta name="keywords">', '<title>', '<footer>'],
      answer: '<title>'
    }
  },
  'html_accessibility': {
    isStructured: true,
    title: 'HTML Accessibility',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Web accessibility (a11y) means designing websites so that people with disabilities can use them (e.g., screen readers).',
    whyUseIt: 'It is a moral and often legal requirement to make the web accessible to everyone, regardless of hardware, software, language, location, or ability.',
    syntax: '<html lang="en">\\n<button aria-label="Close">X</button>',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <html lang="en">\\n  <body>\\n    <img src="graph.png" alt="Sales increased by 20% in Q3">\\n    \\n    <form>\\n      <label for="username">Username:</label>\\n      <input type="text" id="username">\\n    </form>\\n    \\n    <button aria-label="Close Menu">X</button>\\n  </body>\\n  </html>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'lang="en"', desc: 'Tells screen readers which language to use for pronunciation.' },
      { code: '<label for="...">', desc: 'Links text to an input so screen readers can announce it.' },
      { code: 'aria-label', desc: 'Provides a label for elements that lack visible text (like an X button).' }
    ],
    realWorldExample: 'A visually impaired user relies on a screen reader to read the website aloud. If an image lacks alt text, the screen reader just says "image".',
    commonMistakes: [
      { error: 'Using <div> for buttons.', code: '<div onclick="submit()">Submit</div>', suffix: 'Use <button> because it is accessible by keyboard by default.' }
    ],
    bestPractices: [
      'Use semantic HTML.',
      'Ensure a high contrast ratio between text and background colors.',
      'Ensure all interactive elements can be reached using the Tab key.'
    ],
    summary: [
      'Accessibility makes the web usable for everyone.',
      'Semantic tags, alt text, and ARIA attributes are the main tools.'
    ],
    interviewQuestions: [
      'What does ARIA stand for in web accessibility?'
    ],
    quickQuiz: {
      question: 'Which attribute connects a <label> to an <input> for screen readers?',
      options: ['class', 'name', 'for', 'id'],
      answer: 'for'
    }
  },
  'html_best_practices': {
    isStructured: true,
    title: 'HTML Best Practices',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A set of coding standards and rules that ensure your HTML is clean, maintainable, and standard-compliant.',
    whyUseIt: 'Following best practices prevents bugs, improves loading speed, and makes it easier for other developers to read your code.',
    syntax: '<!-- Use proper indentation and lowercase tags -->',
    codeExample: '<!-- BAD -->\\n<HTML>\\n<TITLE>My Page</TITLE>\\n<BODY>\\n<DIV class="container">\\n<p>Hello<br>\\n</DIV>\\n</BODY>\\n</HTML>\\n\\n<!-- GOOD -->\\n<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <title>My Page</title>\\n</head>\\n<body>\\n  <div class="container">\\n    <p>Hello</p>\\n  </div>\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'Indentation', desc: 'Properly indent nested elements (usually 2 or 4 spaces).' },
      { code: 'Lowercase', desc: 'Use lowercase for tag names and attributes.' }
    ],
    realWorldExample: 'In large tech companies, automated tools (linters) will reject your code if you don\'t follow these strict best practices.',
    commonMistakes: [
      { error: 'Leaving out the DOCTYPE.', code: '' },
      { error: 'Not quoting attribute values.', code: '<a href=index.html>' }
    ],
    bestPractices: [
      'Close all HTML elements.',
      'Use lowercase element names.',
      'Quote attribute values.',
      'Never skip the <title> tag.'
    ],
    summary: [
      'Write clean, indented code.',
      'Always use lowercase tags and quoted attributes.',
      'Validate your HTML using the W3C Validator.'
    ],
    interviewQuestions: [
      'Why is it bad practice to omit quotation marks around attributes?'
    ],
    quickQuiz: {
      question: 'Which of the following is considered an HTML best practice?',
      options: ['Using uppercase tags', 'Omitting the DOCTYPE to save space', 'Using double quotes for attributes', 'Nesting block elements inside inline elements'],
      answer: 'Using double quotes for attributes'
    }
  },
  'html_mini_project': {
    isStructured: true,
    title: 'HTML Mini Project',
    difficulty: 'Advanced',
    readingTime: '15 min',
    definition: 'It is time to put everything you have learned together! You will build a complete, semantic Personal Portfolio page.',
    whyUseIt: 'Building projects is the best way to solidify your understanding of HTML structure, links, images, and forms.',
    syntax: '<!-- Combining all learned tags -->',
    codeExample: '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <title>My Portfolio</title>\\n</head>\\n<body>\\n\\n  <header>\\n    <h1>Jane Doe</h1>\\n    <nav>\\n      <a href="#about">About</a> | \\n      <a href="#projects">Projects</a> | \\n      <a href="#contact">Contact</a>\\n    </nav>\\n  </header>\\n\\n  <main>\\n    <section id="about">\\n      <h2>About Me</h2>\\n      <img src="profile.jpg" alt="Jane Doe" width="150">\\n      <p>I am a web developer learning HTML.</p>\\n    </section>\\n\\n    <section id="projects">\\n      <h2>My Projects</h2>\\n      <ul>\\n        <li>Portfolio Website</li>\\n        <li>Weather App</li>\\n      </ul>\\n    </section>\\n\\n    <section id="contact">\\n      <h2>Contact Me</h2>\\n      <form>\\n        <label>Name:</label>\\n        <input type="text" required><br>\\n        <button type="submit">Send</button>\\n      </form>\\n    </section>\\n  </main>\\n\\n  <footer>\\n    <p>&copy; 2024 Jane Doe</p>\\n  </footer>\\n\\n</body>\\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: '<nav>', desc: 'Used for the navigation menu.' },
      { code: '<section id="...">', desc: 'Used to group content. The IDs are used by the navigation links to scroll to that section.' }
    ],
    realWorldExample: 'This is the exact skeleton of a modern, one-page personal portfolio website.',
    commonMistakes: [
      { error: 'Forgetting to link the nav href to the section IDs.', code: 'href="#about"' }
    ],
    bestPractices: [
      'Use semantic tags (<header>, <main>, <footer>).',
      'Use anchor links to create a seamless one-page navigation experience.'
    ],
    summary: [
      'You can build a complete webpage using just HTML.',
      'Semantic structure is critical for organization.'
    ],
    interviewQuestions: [
      'How does an anchor link (href="#id") work on a single page?'
    ],
    quickQuiz: {
      question: 'In the project, how do the navigation links jump to specific sections of the page?',
      options: ['By using JavaScript', 'By linking the href to the section ID', 'By using the scroll attribute', 'By using the name attribute'],
      answer: 'By linking the href to the section ID'
    }
  },
  'html_interview_questions': {
    isStructured: true,
    title: 'HTML Interview Questions',
    difficulty: 'Advanced',
    readingTime: '10 min',
    definition: 'A collection of the most commonly asked HTML interview questions to prepare you for frontend developer interviews.',
    whyUseIt: 'While HTML seems simple, interviewers use it to gauge your understanding of accessibility, SEO, and semantic structure.',
    syntax: '<!-- No specific syntax, conceptual knowledge -->',
    codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>HTML Example</title>\n</head>\n<body>\n\n  <!-- Question: What is the difference between span and div? -->\\n  <div>I am a block element. I start on a new line.</div>\\n  <span>I am an inline element. I flow with text.</span>\n\n</body>\n</html>',
    hasLiveOutput: true,
    explanation: [
      { code: 'Q: What is Semantic HTML?', desc: 'A: HTML that introduces meaning to the web page rather than just presentation (e.g., <article> instead of <div>).' },
      { code: 'Q: What are data- attributes?', desc: 'A: They allow you to store extra information on standard, semantic HTML elements without other hacks.' }
    ],
    realWorldExample: 'In an interview, you might be handed a printed sheet of bad HTML and asked to "fix the structure and accessibility." Knowing these answers prepares you for that.',
    commonMistakes: [
      { error: 'Answering that HTML is a programming language.', code: '', suffix: 'It is a Markup Language.' }
    ],
    bestPractices: [
      'Always relate HTML questions back to Accessibility (a11y) and SEO. Interviewers love this.'
    ],
    summary: [
      'Know the difference between Block and Inline.',
      'Understand the importance of Semantic HTML.',
      'Be able to explain DOCTYPE and Meta tags.'
    ],
    interviewQuestions: [
      'What are Web Workers?',
      'How do you optimize website assets using HTML?'
    ],
    quickQuiz: {
      question: 'If an interviewer asks "Why do we use the alt attribute?", what is the BEST answer?',
      options: ['To style the image', 'For accessibility and SEO', 'To make the image load faster', 'To add a border to the image'],
      answer: 'For accessibility and SEO'
    }
  },
  'html_cheat_sheet': {
    isStructured: true,
    title: 'HTML Cheat Sheet',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'A quick reference guide containing the most essential HTML tags and their syntax.',
    whyUseIt: 'Use this sheet to quickly look up syntax while you are building projects without having to search the internet.',
    syntax: '<!-- Save this page! -->',
    codeExample: '<!-- BASIC STRUCTURE -->\\n<!DOCTYPE html>\\n<html>\\n<head>...</head>\\n<body>...</body>\\n</html>\\n\\n<!-- TEXT -->\\n<h1>Largest Heading</h1>\\n<p>Paragraph</p>\\n<strong>Bold/Important</strong>\\n<em>Italics/Emphasis</em>\\n\\n<!-- LINKS & IMAGES -->\\n<a href="url">Link</a>\\n<img src="url" alt="text">\\n\\n<!-- LISTS -->\\n<ul><li>Bullet List</li></ul>\\n<ol><li>Numbered List</li></ol>\\n\\n<!-- TABLES -->\\n<table>\\n  <tr><th>Header</th></tr>\\n  <tr><td>Data</td></tr>\\n</table>\\n\\n<!-- FORMS -->\\n<form>\\n  <input type="text">\\n  <button>Submit</button>\\n</form>\\n\\n<!-- SEMANTIC -->\\n<header>, <nav>, <main>, <article>, <section>, <footer>',
    hasLiveOutput: true,
    explanation: [
      { code: 'Reference', desc: 'Bookmark this page to quickly recall tags during your development.' }
    ],
    realWorldExample: 'Even Senior Developers use cheat sheets and documentation daily. You do not need to memorize everything, you just need to know where to find it.',
    commonMistakes: [
      { error: 'Trying to memorize every single tag.', code: '', suffix: 'Learn the concepts and rely on cheat sheets for the syntax.' }
    ],
    bestPractices: [
      'Practice by building small projects instead of just reading the tags.'
    ],
    summary: [
      'This completes the HTML module!',
      'You are now equipped with the foundation of Web Development.'
    ],
    interviewQuestions: [
      'Congratulations on completing the HTML track!'
    ],
    quickQuiz: {
      question: 'Are you ready to start building your own websites?',
      options: ['Yes!', 'Absolutely!', '100% Yes!', 'All of the above'],
      answer: 'All of the above'
    }
  }
};
