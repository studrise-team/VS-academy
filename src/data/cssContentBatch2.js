const commonReferences = [
  { label: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
  { label: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
];

export const cssContentBatch2 = {
  'css_fonts': {
    isStructured: true,
    title: '15. Fonts',
    difficulty: 'Beginner',
    readingTime: '4 Minutes',
    definition: 'CSS font properties define the font family, boldness, size, and style of text.',
    whyUseIt: 'Typography is one of the most important aspects of web design. Changing fonts makes a website look professional, readable, and aligned with branding.',
    syntax: `selector {
    font-family: "Arial", sans-serif;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<!-- Import a Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<style>
  .default-font {
    font-family: "Times New Roman", Times, serif;
  }
  
  .modern-font {
    font-family: 'Roboto', Arial, sans-serif;
  }
</style>
</head>
<body>
  <h1 class="default-font">This looks like an old newspaper. (Serif)</h1>
  <h1 class="modern-font">This looks clean and modern! (Sans-serif)</h1>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h2 style="font-family: 'Times New Roman', Times, serif;">This looks like an old newspaper. (Serif)</h2>
  <h2 style="font-family: Arial, sans-serif;">This looks clean and modern! (Sans-serif)</h2>
</div>`,
    explanation: [
        { code: 'font-family', desc: 'Specifies the typeface to use.' },
        { code: 'Fallback Fonts', desc: 'Listed after the primary font (e.g., Arial, sans-serif) in case the first font fails to load.' }
    ],
    realWorldExample: 'New York Times uses Serif fonts (like Times New Roman) to mimic print media. Tech companies like Google use Sans-Serif fonts (like Roboto) for a clean, digital look.',
    commonMistakes: [
      { error: 'Forgetting quotes around font names with spaces.', code: 'font-family: Times New Roman;', suffix: 'Should be font-family: "Times New Roman";' },
      { error: 'Not providing a generic fallback.', code: 'font-family: "CustomFont";', suffix: 'If CustomFont fails, the browser uses its ugly default. Always add , sans-serif or , serif.' }
    ],
    bestPractices: [
      'Limit your website to 2 or 3 font families to keep load times fast and design consistent.',
      'Use Google Fonts or other CDN font services to easily import custom fonts.'
    ],
    practiceExercise: {
      task: 'Set the font family of all paragraphs to "Verdana". If Verdana is missing, fall back to "sans-serif".',
      expectedOutput: 'p { font-family: Verdana, sans-serif; }',
      solution: `p {
    font-family: Verdana, sans-serif;
}`
    },
    quiz: [
      { question: 'Which property changes the typeface of text?', options: ['text-style', 'font-family', 'font-type', 'typeface'], answer: 'font-family' },
      { question: 'What is a "fallback" font?', options: ['A font used for mobile devices', 'A backup font the browser uses if the first choice isn\'t available', 'A font used for old browsers', 'A font that is downloaded automatically'], answer: 'A backup font the browser uses if the first choice isn\'t available' },
      { question: 'Which generic font family has "feet" on the edges of the letters?', options: ['sans-serif', 'serif', 'monospace', 'cursive'], answer: 'serif' },
      { question: 'If a font name has a space in it, how should it be written in CSS?', options: ['With hyphens (Times-New-Roman)', 'With underscores (Times_New_Roman)', 'Inside quotes ("Times New Roman")', 'All lowercase (timesnewroman)'], answer: 'Inside quotes ("Times New Roman")' },
      { question: 'Which is a generic font family?', options: ['Arial', 'Helvetica', 'sans-serif', 'Verdana'], answer: 'sans-serif' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between Serif and Sans-Serif fonts?', a: 'Serif fonts have small structural extensions ("feet") at the ends of strokes (e.g., Times New Roman), often used in print. Sans-serif fonts do not have these extensions (e.g., Arial), giving a cleaner look that is easier to read on low-resolution digital screens.' }
    ],
    summary: [
      'Use font-family to change the font.',
      'Always provide a generic fallback (sans-serif, serif).',
      'Use quotes for font names containing spaces.'
    ],
    references: commonReferences
  },

  'css_font_properties': {
    isStructured: true,
    title: '16. Font Properties',
    difficulty: 'Beginner',
    readingTime: '5 Minutes',
    definition: 'CSS provides multiple properties to adjust the weight, style, and size of fonts.',
    whyUseIt: 'Font properties allow you to create visual hierarchy (e.g., making headings bold and large) and emphasize text (e.g., using italics).',
    syntax: `selector {
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .heading {
    font-size: 32px;
    font-weight: 800; /* Extra bold */
  }
  
  .subtitle {
    font-size: 1.2rem; /* Responsive size */
    font-style: italic;
    font-weight: normal;
  }
</style>
<body>
  <h1 class="heading">Super Important Heading</h1>
  <p class="subtitle">This is a subtle, italicized subtitle.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 5px;">Super Important Heading</h1>
  <p style="font-size: 1.2rem; font-style: italic; font-weight: normal; margin-top: 0;">This is a subtle, italicized subtitle.</p>
</div>`,
    explanation: [
        { code: 'font-size', desc: 'Changes how large the text is. Can use px, em, rem, or %.' },
        { code: 'font-weight', desc: 'Sets the thickness. Can use words (bold) or numbers (100 to 900).' },
        { code: 'font-style', desc: 'Usually used to set text to italic.' }
    ],
    realWorldExample: 'In a blog, the Article Title uses `font-size: 2.5rem; font-weight: 700;` to grab attention, while a blockquote might use `font-style: italic;` to differentiate it from normal text.',
    commonMistakes: [
      { error: 'Using px for everything.', code: 'font-size: 16px;', suffix: 'Using "rem" is much better for accessibility, allowing users to scale text via browser settings.' }
    ],
    bestPractices: [
      'Use `rem` for font sizes to ensure accessibility and responsive scaling.',
      'Use numeric font-weights (400 for normal, 700 for bold) if loading custom fonts, as they map directly to font files.'
    ],
    practiceExercise: {
      task: 'Set a class ".bold-text" to have a font weight of 700 and a size of 20px.',
      expectedOutput: '.bold-text { font-weight: 700; font-size: 20px; }',
      solution: `.bold-text {
    font-weight: 700;
    font-size: 20px;
}`
    },
    quiz: [
      { question: 'Which property is used to make text bold?', options: ['font-style', 'font-weight', 'text-thickness', 'font-bold'], answer: 'font-weight' },
      { question: 'Which property is used to make text italic?', options: ['font-weight', 'text-transform', 'font-style', 'text-decoration'], answer: 'font-style' },
      { question: 'Which of the following is a numeric value for "bold"?', options: ['100', '400', '700', '1000'], answer: '700' },
      { question: 'Which unit is recommended for font sizes for better accessibility?', options: ['px', 'rem', 'pt', 'cm'], answer: 'rem' },
      { question: 'What is the default font-weight value?', options: ['100', 'normal (400)', 'bold (700)', 'lighter'], answer: 'normal (400)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between px, em, and rem for font sizes?', a: 'px is absolute and does not scale with user preferences. em is relative to the font-size of its direct parent. rem is relative to the root element (<html>) font-size, making it the most predictable and accessible choice.' }
    ],
    summary: [
      'font-size adjusts text size (prefer rem over px).',
      'font-weight adjusts thickness (normal, bold, 400, 700).',
      'font-style applies italics.'
    ],
    references: commonReferences
  },

  'css_text_color': {
    isStructured: true,
    title: '17. Text Color',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The color property is specifically used to change the color of text.',
    whyUseIt: 'Unlike background-color, the color property directly targets the typography itself. It is essential for readability and conveying status (e.g., red for errors).',
    syntax: `selector {
    color: red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .error-message {
    color: #ef4444; /* Red */
    font-weight: bold;
  }
  .success-message {
    color: rgb(34, 197, 94); /* Green */
  }
</style>
<body>
  <p class="error-message">Password is incorrect!</p>
  <p class="success-message">Login successful!</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="color: #ef4444; font-weight: bold; margin-bottom: 5px;">Password is incorrect!</p>
  <p style="color: rgb(34, 197, 94); margin-top: 0;">Login successful!</p>
</div>`,
    explanation: [
        { code: 'color', desc: 'Despite the generic name, it exclusively colors text and borders (if border color is omitted).' }
    ],
    realWorldExample: 'Alert boxes heavily rely on text colors. A success notification uses green text, while a destructive action (like "Delete Account") uses red text to warn the user.',
    commonMistakes: [
      { error: 'Writing font-color.', code: 'font-color: red;', suffix: 'There is no font-color property in CSS. It is simply "color".' }
    ],
    bestPractices: [
      'Always verify color contrast ratios between the text color and background color to ensure visually impaired users can read your text.'
    ],
    practiceExercise: {
      task: 'Change the text color of all h2 elements to blue.',
      expectedOutput: 'h2 { color: blue; }',
      solution: `h2 {
    color: blue;
}`
    },
    quiz: [
      { question: 'Which property changes text color?', options: ['text-color', 'font-color', 'color', 'bg-color'], answer: 'color' },
      { question: 'If you do not specify a border color, what color will the border inherit by default?', options: ['Black', 'The element\'s text color (currentcolor)', 'White', 'Transparent'], answer: 'The element\'s text color (currentcolor)' },
      { question: 'Which is NOT a valid way to write a color value?', options: ['color: red;', 'color: #f00;', 'color: 255,0,0;', 'color: rgb(255,0,0);'], answer: 'color: 255,0,0;' }
    ],
    interviewQuestions: [
      { q: 'What does the "currentcolor" keyword do?', a: 'currentcolor acts as a variable that holds the current value of the color property. It allows properties like box-shadow or border to automatically match the text color of the element.' }
    ],
    summary: [
      'The property is just color, not text-color.',
      'It controls the color of text.',
      'It dictates the default color of borders if not overridden.'
    ],
    references: commonReferences
  },

  'css_text_alignment': {
    isStructured: true,
    title: '18. Text Alignment',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The text-align property sets the horizontal alignment of text inside a block element.',
    whyUseIt: 'Used to center headings, align text to the right for languages like Arabic, or justify text in articles.',
    syntax: `selector {
    text-align: center; /* left | right | center | justify */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .center { text-align: center; }
  .right { text-align: right; }
  .justify { 
    text-align: justify; 
    width: 300px; 
    border: 1px solid gray; 
    padding: 10px;
  }
</style>
<body>
  <h2 class="center">Centered Heading</h2>
  <p class="right">I am aligned to the right!</p>
  <p class="justify">This is justified text. Notice how the browser adds extra spaces between words so that the text stretches to touch both the left and the right edges of the container, just like text in a printed newspaper.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h2 style="text-align: center;">Centered Heading</h2>
  <p style="text-align: right;">I am aligned to the right!</p>
  <p style="text-align: justify; width: 300px; border: 1px solid gray; padding: 10px;">This is justified text. Notice how the browser adds extra spaces between words so that the text stretches to touch both the left and the right edges of the container, just like text in a printed newspaper.</p>
</div>`,
    explanation: [
        { code: 'text-align: center', desc: 'Centers inline content (like text and images) inside a block.' },
        { code: 'text-align: justify', desc: 'Stretches the lines so that every line has equal width (like newspapers).' }
    ],
    realWorldExample: 'In e-commerce, prices in a pricing table are often aligned to the right so the decimal points line up, making it easier for users to read.',
    commonMistakes: [
      { error: 'Trying to use text-align to center a <div>.', code: 'text-align: center;', suffix: 'text-align only centers text/inline elements INSIDE a block. To center a block itself (like a div), use margin: 0 auto;' }
    ],
    bestPractices: [
      'Avoid using `text-align: justify` on the web without hyphenation, as it creates ugly "rivers" of white space between words.'
    ],
    practiceExercise: {
      task: 'Write a CSS rule to align all table data cells (td) to the right.',
      expectedOutput: 'td { text-align: right; }',
      solution: `td {
    text-align: right;
}`
    },
    quiz: [
      { question: 'Which property aligns text horizontally?', options: ['align-items', 'text-align', 'align-content', 'horizontal-align'], answer: 'text-align' },
      { question: 'Which value stretches text to touch both left and right edges?', options: ['center', 'stretch', 'justify', 'fill'], answer: 'justify' },
      { question: 'Will text-align: center; center a <div> block?', options: ['Yes', 'No', 'Only if width is 100%', 'Only on mobile'], answer: 'No' },
      { question: 'What is the default text alignment for left-to-right languages?', options: ['center', 'right', 'justify', 'left'], answer: 'left' }
    ],
    interviewQuestions: [
      { q: 'Why does text-align: center not work to center a div element?', a: 'Because text-align only applies to inline content (like text or spans) inside the block container. To center a block-level element, you must give it a width and use margin: 0 auto (or use Flexbox).' }
    ],
    summary: [
      'text-align moves text left, right, center, or justify.',
      'It only affects inline content, not block elements.',
      'Justify is used for newspaper-style block text.'
    ],
    references: commonReferences
  },

  'css_text_decoration': {
    isStructured: true,
    title: '19. Text Decoration',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The text-decoration property is used to set or remove decorations added to text, such as underlines and strikethroughs.',
    whyUseIt: 'The most common use case is removing the default underline from hyperlinks, or adding a strikethrough to old prices on e-commerce sites.',
    syntax: `selector {
    text-decoration: none; /* none | underline | line-through | overline */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .no-underline { text-decoration: none; color: blue; }
  .strike { text-decoration: line-through; color: gray; }
  .over { text-decoration: overline; }
</style>
<body>
  <a href="#" class="no-underline">This link has no underline</a>
  <p>Original price: <span class="strike">$99.99</span> Now: $49.99!</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <a href="#" style="text-decoration: none; color: blue;">This link has no underline</a>
  <p>Original price: <span style="text-decoration: line-through; color: gray;">$99.99</span> Now: $49.99!</p>
</div>`,
    explanation: [
        { code: 'none', desc: 'Removes all decorations. Mostly used on <a> tags.' },
        { code: 'line-through', desc: 'Strikes a line through the text.' }
    ],
    realWorldExample: 'Amazon uses `text-decoration: line-through` on the original price of an item when it goes on sale, visually proving to the user they are getting a discount.',
    commonMistakes: [
      { error: 'Trying to change the underline color with text-decoration.', code: 'text-decoration: underline red;', suffix: 'While CSS3 supports this (text-decoration-color), many beginners use border-bottom for more control over underline spacing and color.' }
    ],
    bestPractices: [
      'Remove underlines from links in navigation bars, but consider keeping them in body paragraphs so users know they are clickable.'
    ],
    practiceExercise: {
      task: 'Remove the underline from all anchor (a) tags.',
      expectedOutput: 'a { text-decoration: none; }',
      solution: `a {
    text-decoration: none;
}`
    },
    quiz: [
      { question: 'Which property removes the underline from a link?', options: ['text-style: none;', 'text-decoration: none;', 'underline: none;', 'font-decoration: no;'], answer: 'text-decoration: none;' },
      { question: 'Which value creates a strikethrough effect?', options: ['strike', 'line-through', 'cross-out', 'overline'], answer: 'line-through' },
      { question: 'What is the default text-decoration for an <a> tag?', options: ['none', 'overline', 'line-through', 'underline'], answer: 'underline' }
    ],
    interviewQuestions: [
      { q: 'How would you create an underline that sits further below the text than a standard text-decoration: underline?', a: 'I would use text-decoration: none; and apply a border-bottom instead. This allows me to use padding-bottom to adjust the distance between the text and the line.' }
    ],
    summary: [
      'text-decoration adds lines to text.',
      'none removes default link underlines.',
      'line-through is used for discounted prices.'
    ],
    references: commonReferences
  },

  'css_text_transform': {
    isStructured: true,
    title: '20. Text Transform',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The text-transform property controls the capitalization of text.',
    whyUseIt: 'It allows you to style text as uppercase, lowercase, or capitalized without altering the actual HTML source code. This is great for buttons and headings.',
    syntax: `selector {
    text-transform: uppercase; /* uppercase | lowercase | capitalize | none */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .upper { text-transform: uppercase; }
  .lower { text-transform: lowercase; }
  .cap { text-transform: capitalize; }
</style>
<body>
  <p class="upper">this was written in lowercase.</p>
  <p class="lower">THIS WAS WRITTEN IN UPPERCASE.</p>
  <p class="cap">this is a title that needs capitalization.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="text-transform: uppercase; margin:5px 0;">this was written in lowercase.</p>
  <p style="text-transform: lowercase; margin:5px 0;">THIS WAS WRITTEN IN UPPERCASE.</p>
  <p style="text-transform: capitalize; margin:5px 0;">this is a title that needs capitalization.</p>
</div>`,
    explanation: [
        { code: 'uppercase', desc: 'Forces all letters to be caps.' },
        { code: 'capitalize', desc: 'Capitalizes only the first letter of every word.' }
    ],
    realWorldExample: 'Material Design buttons by Google traditionally use ALL CAPS. Instead of typing caps in the HTML, developers use `text-transform: uppercase;` on the button class so the data remains clean.',
    commonMistakes: [
      { error: 'Relying on CSS for proper nouns.', code: '', suffix: 'If a word MUST be capitalized for grammatical reasons (like a person\'s name), capitalize it in the HTML, not via CSS. Screen readers rely on HTML.' }
    ],
    bestPractices: [
      'Use text-transform for styling purposes only (like buttons or subheadings).'
    ],
    practiceExercise: {
      task: 'Write a rule for an h1 tag that capitalizes the first letter of every word.',
      expectedOutput: 'h1 { text-transform: capitalize; }',
      solution: `h1 {
    text-transform: capitalize;
}`
    },
    quiz: [
      { question: 'Which property changes text to all caps?', options: ['font-transform: uppercase;', 'text-style: caps;', 'text-transform: uppercase;', 'text-case: upper;'], answer: 'text-transform: uppercase;' },
      { question: 'What does "capitalize" do?', options: ['Makes everything uppercase', 'Capitalizes the first letter of each word', 'Capitalizes the first letter of the sentence', 'Makes everything lowercase'], answer: 'Capitalizes the first letter of each word' },
      { question: 'Can text-transform alter the actual HTML DOM data?', options: ['Yes', 'No, it only changes how it is visually rendered'], answer: 'No, it only changes how it is visually rendered' }
    ],
    interviewQuestions: [
      { q: 'Why is it better to use text-transform: uppercase rather than typing the text in caps in the HTML?', a: 'Screen readers might read ALL CAPS HTML text letter-by-letter (like an acronym). Keeping normal casing in HTML and using CSS for visual uppercase ensures accessibility and keeps data portable.' }
    ],
    summary: [
      'text-transform modifies text casing visually.',
      'uppercase makes all letters big.',
      'capitalize makes the first letter of each word big.'
    ],
    references: commonReferences
  },

  'css_letter_spacing': {
    isStructured: true,
    title: '21. Letter Spacing',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The letter-spacing property increases or decreases the space between characters in text.',
    whyUseIt: 'Adding space between letters can make ALL CAPS text much more readable and elegant, often used in minimalist design and subheadings.',
    syntax: `selector {
    letter-spacing: 2px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .wide { 
    letter-spacing: 5px; 
    text-transform: uppercase;
    font-size: 14px;
    color: gray;
  }
  .tight { 
    letter-spacing: -1px; 
    font-size: 30px;
    font-weight: bold;
  }
</style>
<body>
  <p class="wide">Elegant Subtitle</p>
  <h1 class="tight">TIGHT HEADING</h1>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="letter-spacing: 5px; text-transform: uppercase; font-size: 14px; color: gray;">Elegant Subtitle</p>
  <h1 style="letter-spacing: -1px; font-size: 30px; font-weight: bold; margin:0;">TIGHT HEADING</h1>
</div>`,
    explanation: [
        { code: 'letter-spacing: 5px', desc: 'Adds 5 pixels of space between every single character.' },
        { code: 'letter-spacing: -1px', desc: 'Pulls characters closer together. Useful for very large, bold headings.' }
    ],
    realWorldExample: 'Apple uses slight negative letter-spacing on their massive hero headings to make them look compact and modern, while using positive letter-spacing on small, uppercase category labels (like "MACBOOK PRO") to increase readability.',
    commonMistakes: [
      { error: 'Adding letter-spacing to paragraph text.', code: 'p { letter-spacing: 3px; }', suffix: 'This drastically reduces readability. Only use on headings or small labels.' }
    ],
    bestPractices: [
      'Always add letter-spacing to ALL CAPS text.',
      'Never add positive letter-spacing to lowercase text.'
    ],
    practiceExercise: {
      task: 'Set the letter spacing of a .label class to 2px.',
      expectedOutput: '.label { letter-spacing: 2px; }',
      solution: `.label {
    letter-spacing: 2px;
}`
    },
    quiz: [
      { question: 'Which property changes the space between characters?', options: ['word-spacing', 'character-spacing', 'letter-spacing', 'text-spacing'], answer: 'letter-spacing' },
      { question: 'Can letter-spacing have negative values?', options: ['Yes', 'No'], answer: 'Yes' },
      { question: 'When is it highly recommended to use positive letter-spacing?', options: ['On standard paragraph text', 'On ALL CAPS text', 'On links', 'On images'], answer: 'On ALL CAPS text' }
    ],
    interviewQuestions: [
      { q: 'In typography, what is the equivalent term for letter-spacing?', a: 'In typography, letter-spacing is known as "Tracking" (adjusting space over a block of text). "Kerning" is adjusting the space between two specific individual characters.' }
    ],
    summary: [
      'letter-spacing controls horizontal space between characters.',
      'Negative values pull letters together (good for giant text).',
      'Positive values push letters apart (good for small uppercase text).'
    ],
    references: commonReferences
  },

  'css_word_spacing': {
    isStructured: true,
    title: '22. Word Spacing',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The word-spacing property increases or decreases the space between words in text.',
    whyUseIt: 'It is less common than letter-spacing, but can be used to tweak the flow of justified text or create specific typographic art effects.',
    syntax: `selector {
    word-spacing: 10px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .wide-words { 
    word-spacing: 15px; 
  }
  .tight-words { 
    word-spacing: -2px; 
  }
</style>
<body>
  <p class="wide-words">This text has large gaps between words.</p>
  <p class="tight-words">This text is crammed together.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="word-spacing: 15px; margin:5px 0;">This text has large gaps between words.</p>
  <p style="word-spacing: -2px; margin:5px 0;">This text is crammed together.</p>
</div>`,
    explanation: [
        { code: 'word-spacing', desc: 'Targets the space character between words, not the letters inside the words.' }
    ],
    realWorldExample: 'Word spacing is rarely used in standard web design, but might be used in poetry websites or digital art where the visual arrangement of words is part of the experience.',
    commonMistakes: [
      { error: 'Confusing word-spacing with letter-spacing.', code: '', suffix: 'letter-spacing is for characters. word-spacing is for entire words.' }
    ],
    bestPractices: [
      'Generally, leave word-spacing alone and let the browser\'s font engine handle word gaps naturally.'
    ],
    practiceExercise: {
      task: 'Increase the space between words in an h3 tag by 5px.',
      expectedOutput: 'h3 { word-spacing: 5px; }',
      solution: `h3 {
    word-spacing: 5px;
}`
    },
    quiz: [
      { question: 'Which property changes the space between entire words?', options: ['letter-spacing', 'word-spacing', 'text-spacing', 'line-height'], answer: 'word-spacing' },
      { question: 'Can word-spacing accept negative values?', options: ['Yes', 'No'], answer: 'Yes' },
      { question: 'What is the default value of word-spacing?', options: ['0px', 'normal', '10px', 'auto'], answer: 'normal' }
    ],
    interviewQuestions: [
      { q: 'How does word-spacing interact with text-align: justify?', a: 'When text is justified, the browser automatically manipulates the word-spacing to ensure lines touch both edges. Setting a strict word-spacing value might interfere with this behavior depending on the browser.' }
    ],
    summary: [
      'word-spacing modifies the width of the space character.',
      'It is rarely used compared to letter-spacing.'
    ],
    references: commonReferences
  },

  'css_line_height': {
    isStructured: true,
    title: '23. Line Height',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The line-height property specifies the height of a line of text.',
    whyUseIt: 'By default, lines of text are often too close together. Increasing line-height gives text room to breathe, vastly improving readability for long articles.',
    syntax: `selector {
    line-height: 1.6;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .cramped { 
    line-height: 1; /* Exactly the height of the text */
  }
  .readable { 
    line-height: 1.6; /* 160% of the text height */
    font-size: 16px;
  }
</style>
<body>
  <p class="cramped">This text is very cramped.<br>If there are multiple lines,<br>they touch each other.</p>
  <br>
  <p class="readable">This text is highly readable.<br>There is comfortable spacing<br>between every single line.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="line-height: 1; margin:0;">This text is very cramped.<br>If there are multiple lines,<br>they touch each other.</p>
  <br>
  <p style="line-height: 1.6; font-size: 16px; margin:0;">This text is highly readable.<br>There is comfortable spacing<br>between every single line.</p>
</div>`,
    explanation: [
        { code: 'line-height: 1.6', desc: 'A unitless number. It multiplies the font-size by 1.6 to determine the line height.' }
    ],
    realWorldExample: 'Medium.com uses a large font size and a generous `line-height` (around 1.5 to 1.6) for their articles. This prevents the user\'s eye from accidentally jumping to the wrong line while reading.',
    commonMistakes: [
      { error: 'Using px for line-height.', code: 'line-height: 24px;', suffix: 'If you change the font-size to 30px later, the text will overlap! Always use unitless numbers.' }
    ],
    bestPractices: [
      'Use unitless numbers (like 1.5) so the line height scales perfectly if the font size changes.',
      'Accessibility guidelines recommend a line-height of at least 1.5 for body text.'
    ],
    practiceExercise: {
      task: 'Set the line height of the body tag to 1.5.',
      expectedOutput: 'body { line-height: 1.5; }',
      solution: `body {
    line-height: 1.5;
}`
    },
    quiz: [
      { question: 'Which property controls the vertical space between lines of text?', options: ['letter-spacing', 'margin-bottom', 'line-spacing', 'line-height'], answer: 'line-height' },
      { question: 'What is the recommended best practice for setting line-height?', options: ['Use px (e.g., 20px)', 'Use unitless numbers (e.g., 1.5)', 'Use percentages (e.g., 150%)', 'Use ems (e.g., 1.5em)'], answer: 'Use unitless numbers (e.g., 1.5)' },
      { question: 'Why are unitless numbers better for line-height?', options: ['They render faster', 'They inherit and scale correctly if child elements change font-size', 'They use less memory', 'They are required by HTML5'], answer: 'They inherit and scale correctly if child elements change font-size' }
    ],
    interviewQuestions: [
      { q: 'Can line-height be used to vertically center text?', a: 'Yes! For single-line elements (like a button or a nav link), if you set the line-height equal to the height of the container (e.g., height: 50px; line-height: 50px;), the text will perfectly vertically center.' }
    ],
    summary: [
      'line-height increases vertical space between lines of text.',
      'Always use unitless values (like 1.5) for responsive scaling.',
      'Standard readable body text uses a line height of 1.5 or 1.6.'
    ],
    references: commonReferences
  },

  'css_text_shadow': {
    isStructured: true,
    title: '24. Text Shadow',
    difficulty: 'Beginner',
    readingTime: '4 Minutes',
    definition: 'The text-shadow property adds shadows to text.',
    whyUseIt: 'Text shadow is used to create cool visual effects (like neon glowing text) or to make white text readable when placed over a light or busy background image.',
    syntax: `selector {
    /* horizontal-offset vertical-offset blur-radius color */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .drop-shadow {
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px 5px black;
  }
  
  .neon-glow {
    font-size: 40px;
    color: white;
    background: black;
    padding: 10px;
    /* Multiple shadows separated by commas! */
    text-shadow: 0 0 10px #0fa, 0 0 20px #0fa;
  }
</style>
<body>
  <h1 class="drop-shadow">Readable on light backgrounds!</h1>
  <h1 class="neon-glow">CYBERPUNK GLOW</h1>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h1 style="font-size: 30px; color: white; text-shadow: 2px 2px 5px black; margin:0 0 10px 0;">Readable on light backgrounds!</h1>
  <h1 style="font-size: 30px; color: white; background: black; padding: 10px; text-shadow: 0 0 10px #0fa, 0 0 20px #0fa; margin:0;">CYBERPUNK GLOW</h1>
</div>`,
    explanation: [
        { code: '2px 2px', desc: 'The first value moves the shadow right. The second moves it down.' },
        { code: '5px', desc: 'The third value is the blur radius. Higher numbers make it softer.' },
        { code: 'black', desc: 'The color of the shadow.' }
    ],
    realWorldExample: 'Netflix uses `text-shadow` heavily. The white titles of movies are placed over varied movie cover images. A dark text shadow ensures the white text is always readable, even if the image behind it is white.',
    commonMistakes: [
      { error: 'Overusing text-shadow.', code: '', suffix: 'Applying heavy black shadows to normal body text makes it look muddy and hard to read. Reserve it for headings or images.' }
    ],
    bestPractices: [
      'Use a semi-transparent RGBA color for the shadow so it blends naturally with the background.'
    ],
    practiceExercise: {
      task: 'Add a red text shadow to an h1 that is offset 3px to the right, 3px down, with no blur.',
      expectedOutput: 'h1 { text-shadow: 3px 3px 0px red; }',
      solution: `h1 {
    text-shadow: 3px 3px 0px red;
}`
    },
    quiz: [
      { question: 'What is the correct order of values for text-shadow?', options: ['blur, horizontal, vertical, color', 'horizontal, vertical, blur, color', 'vertical, horizontal, color, blur', 'color, blur, horizontal, vertical'], answer: 'horizontal, vertical, blur, color' },
      { question: 'How do you create a "glow" effect instead of a drop shadow?', options: ['Set horizontal and vertical offset to 0, and use a high blur radius', 'Use negative blur radius', 'Use glow: true;', 'It is impossible'], answer: 'Set horizontal and vertical offset to 0, and use a high blur radius' },
      { question: 'Can you apply multiple shadows to a single text element?', options: ['No', 'Yes, separated by commas', 'Yes, separated by semicolons', 'Only in CSS4'], answer: 'Yes, separated by commas' }
    ],
    interviewQuestions: [
      { q: 'How would you ensure white text on a dynamically loaded hero image is always readable?', a: 'I would add a dark text-shadow (e.g., text-shadow: 0px 2px 4px rgba(0,0,0,0.8);). Alternatively, I could apply a dark linear-gradient overlay to the background image itself.' }
    ],
    summary: [
      'text-shadow takes 4 values: X-offset, Y-offset, Blur, and Color.',
      'Setting X and Y to 0 creates a glow effect.',
      'It is highly useful for improving readability over images.'
    ],
    references: commonReferences
  }
};
