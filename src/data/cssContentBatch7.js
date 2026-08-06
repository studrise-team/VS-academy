const commonReferences = [
  { label: 'W3Schools CSS Typography', url: 'https://www.w3schools.com/css/css_text.asp' },
  { label: 'MDN Web Docs: Styling text', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text' },
  { label: 'Google Fonts', url: 'https://fonts.google.com/' }
];

export const cssContentBatch7 = {
  'css_font_family': {
    isStructured: true,
    title: '57. font-family',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The font-family property specifies the font for an element.',
    whyUseIt: 'The default browser font is usually Times New Roman, which looks outdated. Using font-family allows you to apply modern, clean fonts to your website.',
    syntax: `selector {
    font-family: "Arial", sans-serif;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .serif {
    font-family: "Times New Roman", Times, serif;
  }
  
  .sans-serif {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .monospace {
    font-family: "Courier New", Courier, monospace;
  }
  
  /* Fallback system in action */
  .custom-fallback {
    font-family: "ThisFontDoesNotExist", "Comic Sans MS", sans-serif;
  }
</style>
<body>
  <div class="serif">
    <h3>Serif Font</h3>
    <p>Serif fonts have small lines or strokes attached to the ends of letters. They look traditional.</p>
  </div>
  
  <div class="sans-serif">
    <h3>Sans-serif Font</h3>
    <p>Sans-serif fonts do NOT have those lines (sans means without). They look modern and clean.</p>
  </div>
  
  <div class="monospace">
    <h3>Monospace Font</h3>
    <p>Every letter takes up the exact same width. Used for code blocks.</p>
  </div>
  
  <div class="custom-fallback">
    <h3>Fallback Example</h3>
    <p>The first font didn't exist, so it fell back to Comic Sans!</p>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Multiple Fonts (The Stack)', desc: 'You should always list multiple fonts separated by commas. This is a "fallback system". If the user\'s computer does not have the first font installed, it tries the second, then the third.' },
        { code: 'Generic Family', desc: 'The very last font in the stack should ALWAYS be a generic family like "sans-serif" or "serif", which lets the browser pick its default system font in that style if all else fails.' },
        { code: 'Quotes', desc: 'If a font name has a space in it (like "Times New Roman"), it must be wrapped in quotation marks.' }
    ],
    realWorldExample: 'Most modern web developers use Google Fonts to load beautiful, free fonts (like Roboto, Inter, or Open Sans) into their website via a `<link>` tag in the HTML head, and then apply it using `font-family: "Inter", sans-serif;`.',
    commonMistakes: [
      { error: 'Forgetting the generic fallback.', code: 'font-family: "Helvetica";', suffix: 'If a Windows user visits the site, they do not have Helvetica installed. The browser will default to Times New Roman, ruining the design. Always add ", sans-serif".' }
    ],
    bestPractices: [
      'Apply your primary font to the `body` selector so it cascades down to all elements on the page automatically.'
    ],
    practiceExercise: {
      task: 'Set the font of the body to "Verdana". If Verdana is not available, fall back to any generic "sans-serif" font.',
      expectedOutput: 'body { font-family: Verdana, sans-serif; }',
      solution: `body {
    font-family: Verdana, sans-serif;
}`
    },
    quiz: [
      { question: 'Why do we list multiple fonts in the font-family property?', options: ['To mix them together on the screen', 'As a fallback system in case the user does not have the first font installed', 'To make the text bold', 'Because CSS requires at least 3 fonts'], answer: 'As a fallback system in case the user does not have the first font installed' },
      { question: 'What MUST you do if a font name consists of multiple words (like Comic Sans MS)?', options: ['Capitalize every letter', 'Wrap it in quotation marks', 'Remove the spaces', 'Use underscores'], answer: 'Wrap it in quotation marks' },
      { question: 'What should always be the very last item in a font-family stack?', options: ['A generic family name like serif or sans-serif', 'Arial', 'The word "fallback"', 'A web font url'], answer: 'A generic family name like serif or sans-serif' },
      { question: 'Which font type is characterized by small decorative strokes at the ends of letters?', options: ['sans-serif', 'monospace', 'cursive', 'serif'], answer: 'serif' }
    ],
    interviewQuestions: [
      { q: 'What is a "Web Safe" font?', a: 'A web safe font (like Arial, Times New Roman, or Courier) is a font that is pre-installed on virtually all operating systems (Windows, Mac, Linux). Before web fonts (like Google Fonts) existed, developers had to rely exclusively on web safe fonts to ensure their sites looked consistent.' }
    ],
    summary: [
      'font-family changes the typeface.',
      'Always use a fallback stack separated by commas.',
      'Always end the stack with a generic family (sans-serif).',
      'Wrap multi-word font names in quotes.'
    ],
    references: commonReferences
  },

  'css_font_size': {
    isStructured: true,
    title: '58. font-size',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The font-size property sets the size of the text.',
    whyUseIt: 'Different elements need different sizes to establish visual hierarchy. Headers should be large, paragraphs should be medium, and footnotes should be small.',
    syntax: `selector {
    font-size: 16px; /* px, rem, em, %, vw */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  html {
    font-size: 16px; /* The ROOT font size */
  }

  .px-size { font-size: 24px; }
  
  .rem-size { font-size: 2rem; } /* 2 * 16px root = 32px */
  
  .vw-size { font-size: 5vw; } /* 5% of Viewport Width */
</style>
<body>
  <p>Default Body Text (Usually 16px)</p>
  
  <p class="px-size">Fixed: 24px (Does not scale well)</p>
  
  <p class="rem-size">Relative: 2rem (Scales with root settings)</p>
  
  <p class="vw-size">Responsive: 5vw (Resize the browser window to see me grow and shrink!)</p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'px (Pixels)', desc: 'Absolute size. 24px is always 24px. Not recommended for modern accessibility standards.' },
        { code: 'rem (Root EM)', desc: 'Relative size. 1rem equals the font size of the <html> element (which defaults to 16px in all browsers). 2rem = 32px. This is the industry standard.' },
        { code: 'vw (Viewport Width)', desc: 'The font size grows and shrinks dynamically as the user drags their browser window smaller or larger.' }
    ],
    realWorldExample: 'If a visually impaired user changes their browser settings to display text at 24px instead of 16px, a website using `font-size: 14px` will ignore their settings and remain tiny. A website using `font-size: 1rem` will automatically adapt to their 24px preference.',
    commonMistakes: [
      { error: 'Using "em" instead of "rem".', code: 'div { font-size: 2em; }', suffix: 'em is relative to its PARENT, not the root. If you nest 3 divs that all have font-size: 2em, the text inside the third div will be 8 times larger than normal! Use rem to avoid the compounding nightmare.' }
    ],
    bestPractices: [
      'Use `rem` for all text sizing to ensure maximum accessibility and easy scaling.'
    ],
    practiceExercise: {
      task: 'Set the font size of the <p> tag to 1.5 times the size of the root element (using the rem unit).',
      expectedOutput: 'p { font-size: 1.5rem; }',
      solution: `p {
    font-size: 1.5rem;
}`
    },
    quiz: [
      { question: 'Which unit is the modern industry standard for defining font-size?', options: ['px', 'rem', 'em', 'pt'], answer: 'rem' },
      { question: 'If the root html font-size is 16px, how large is 3rem?', options: ['3px', '19px', '48px', '300px'], answer: '48px' },
      { question: 'Why is using px for font-size considered bad for accessibility?', options: ['It is too small', 'It looks blurry on retina screens', 'It overrides the user\'s browser default font-size settings', 'It does not support custom fonts'], answer: 'It overrides the user\'s browser default font-size settings' },
      { question: 'Which unit makes the text dynamically grow and shrink when the user resizes the browser window?', options: ['rem', 'px', 'vw', '%'], answer: 'vw' }
    ],
    interviewQuestions: [
      { q: 'How would you easily scale down EVERY font on a website for mobile devices?', a: 'Because all my fonts are defined using `rem`, they all rely on the root `<html>` font-size. I can simply write a media query for mobile that changes `html { font-size: 14px; }`. Instantly, every `rem` calculation on the entire website adjusts downwards.' }
    ],
    summary: [
      'font-size controls text size.',
      'Use rem instead of px for accessibility.',
      '1rem = 16px (usually).'
    ],
    references: commonReferences
  },

  'css_font_weight': {
    isStructured: true,
    title: '59. font-weight',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The font-weight property sets how thick or thin characters in text should be displayed.',
    whyUseIt: 'Used to create bold text for emphasis or headers, or thin text for elegant sub-headings.',
    syntax: `selector {
    font-weight: bold; /* or a number like 700 */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .light { font-weight: 300; }
  .normal { font-weight: 400; /* or 'normal' */ }
  .bold { font-weight: 700; /* or 'bold' */ }
  .black { font-weight: 900; }
</style>
<body>
  <p class="light">This is light weight text (300).</p>
  <p class="normal">This is normal weight text (400).</p>
  <p class="bold">This is bold weight text (700).</p>
  <p class="black">This is black/heavy weight text (900).</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="font-weight: 300; margin: 5px 0;">This is light weight text (300).</p>
  <p style="font-weight: 400; margin: 5px 0;">This is normal weight text (400).</p>
  <p style="font-weight: 700; margin: 5px 0;">This is bold weight text (700).</p>
  <p style="font-weight: 900; margin: 5px 0;">This is black/heavy weight text (900).</p>
</div>`,
    explanation: [
        { code: 'Keywords', desc: 'normal, bold, bolder, lighter.' },
        { code: 'Numbers', desc: 'Ranges from 100 to 900. 400 is normal, 700 is bold.' }
    ],
    realWorldExample: 'In a blog card, the Title might be `font-weight: 700`, the author name might be `font-weight: 600`, and the excerpt text might be `font-weight: 400`.',
    commonMistakes: [
      { error: 'Using a weight that the font doesn\'t support.', code: 'font-weight: 100;', suffix: 'If you import Google Font "Roboto" but only import the 400 and 700 weights, setting it to 100 will do nothing (or the browser will try to fake it and make it look ugly). You must ensure the font file supports the weight.' }
    ],
    bestPractices: [
      'Use numeric values (400, 700) instead of keywords (normal, bold) for better precision when working with custom web fonts.'
    ],
    practiceExercise: {
      task: 'Set the font weight of the strong tag to the numeric equivalent of bold.',
      expectedOutput: 'strong { font-weight: 700; }',
      solution: `strong {
    font-weight: 700;
}`
    },
    quiz: [
      { question: 'What is the numeric equivalent of the keyword "normal"?', options: ['100', '400', '700', '900'], answer: '400' },
      { question: 'What is the numeric equivalent of the keyword "bold"?', options: ['400', '600', '700', '900'], answer: '700' },
      { question: 'If you set font-weight: 100 but the text looks exactly like normal text, what is the most likely cause?', options: ['The CSS is broken', 'The specific font you are using does not have a 100 weight variant installed', '100 means normal', 'Browsers do not support numbers'], answer: 'The specific font you are using does not have a 100 weight variant installed' }
    ],
    interviewQuestions: [
      { q: 'Why is it recommended to load only the specific font weights you need from a service like Google Fonts?', a: 'Performance. Every font weight (100, 300, 400, 700, 900) is a separate font file. If you load all 9 weights but only use 400 and 700 on your website, you are forcing the user to download megabytes of useless data, slowing down page load times.' }
    ],
    summary: [
      'font-weight controls thickness.',
      '400 is normal, 700 is bold.',
      'Ensure your font file actually supports the weight you ask for.'
    ],
    references: commonReferences
  },

  'css_font_style': {
    isStructured: true,
    title: '60. font-style',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The font-style property is mostly used to specify italic text.',
    whyUseIt: 'Used to emphasize text, display quotes, or stylize secondary information (like a "last updated" date).',
    syntax: `selector {
    font-style: italic; /* normal | italic | oblique */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .normal { font-style: normal; }
  .italic { font-style: italic; }
  .oblique { font-style: oblique; }
</style>
<body>
  <p class="normal">This is normal text.</p>
  <p class="italic">This is italic text (Uses a specially designed cursive version of the font if available).</p>
  <p class="oblique">This is oblique text (Just slants the normal text over).</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="font-style: normal; margin: 5px 0;">This is normal text.</p>
  <p style="font-style: italic; margin: 5px 0;">This is italic text.</p>
  <p style="font-style: oblique; margin: 5px 0;">This is oblique text.</p>
</div>`,
    explanation: [
        { code: 'normal', desc: 'The text is shown normally (Default).' },
        { code: 'italic', desc: 'The text is shown in italics. If the font family has an italic version designed by the typographer, it uses it.' },
        { code: 'oblique', desc: 'The text is slanted. If no true italic version exists, the browser physically slants the normal text.' }
    ],
    realWorldExample: 'A blockquote containing a testimonial from a customer is usually styled with `font-style: italic;` to visually separate it from standard article text.',
    commonMistakes: [
      { error: 'Using font-style instead of font-weight for bold.', code: 'font-style: bold;', suffix: 'This is invalid CSS. Style is for italics, Weight is for boldness.' }
    ],
    bestPractices: [
      'Use `font-style: normal;` to remove default italics from HTML tags like `<em>` or `<i>`.'
    ],
    practiceExercise: {
      task: 'Make the text inside the ".quote" class italicized.',
      expectedOutput: '.quote { font-style: italic; }',
      solution: `.quote {
    font-style: italic;
}`
    },
    quiz: [
      { question: 'Which property is used to make text italic?', options: ['font-weight', 'text-decoration', 'font-style', 'font-variant'], answer: 'font-style' },
      { question: 'What is the default value of font-style?', options: ['italic', 'oblique', 'normal', 'none'], answer: 'normal' },
      { question: 'What is the main difference between italic and oblique?', options: ['Oblique is bolder', 'Italic is a specially designed font face, oblique is just the normal font artificially slanted', 'They are exactly the same', 'Italic is only for serif fonts'], answer: 'Italic is a specially designed font face, oblique is just the normal font artificially slanted' }
    ],
    interviewQuestions: [
      { q: 'If an HTML element like <em> has italics by default, how do you remove it?', a: 'You target the element in CSS and set `font-style: normal;`. This overrides the browser\'s default stylesheet.' }
    ],
    summary: [
      'font-style: italic makes text cursive/slanted.',
      'font-style: normal removes italics.',
      'Oblique is rarely used.'
    ],
    references: commonReferences
  },

  'css_text_align': {
    isStructured: true,
    title: '61. text-align',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The text-align property specifies the horizontal alignment of text within an element.',
    whyUseIt: 'Used to center headings, right-align numbers in a table, or justify text in a newspaper column.',
    syntax: `selector {
    text-align: center; /* left | right | center | justify */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 5px;
  }
  .left { text-align: left; }
  .center { text-align: center; }
  .right { text-align: right; }
  .justify { text-align: justify; }
</style>
<body>
  <div class="left">Left aligned (Default for LTR languages).</div>
  <div class="center">Center aligned.</div>
  <div class="right">Right aligned.</div>
  <div class="justify">
    Justified text stretches the lines so that each line has equal width (like in magazines and newspapers). Notice how the left and right edges are perfectly straight and flush with the borders.
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="border: 1px solid black; margin-bottom: 5px; padding: 5px; text-align: left;">Left aligned.</div>
  <div style="border: 1px solid black; margin-bottom: 5px; padding: 5px; text-align: center;">Center aligned.</div>
  <div style="border: 1px solid black; margin-bottom: 5px; padding: 5px; text-align: right;">Right aligned.</div>
  <div style="border: 1px solid black; margin-bottom: 5px; padding: 5px; text-align: justify; width: 250px;">Justified text stretches the lines so that each line has equal width (like in magazines and newspapers). Notice how the left and right edges are perfectly straight and flush with the borders.</div>
</div>`,
    explanation: [
        { code: 'left / right / center', desc: 'Aligns the text to the respective side.' },
        { code: 'justify', desc: 'Stretches every line so that the left and right edges are perfectly flush.' }
    ],
    realWorldExample: 'In an invoice or a receipt table, the "Description" column is usually `text-align: left`, while the "Price" column is `text-align: right` so the decimals line up perfectly.',
    commonMistakes: [
      { error: 'Trying to center a <div> using text-align.', code: 'body { text-align: center; }', suffix: 'text-align ONLY centers INLINE content (like text and images) inside the block. It does NOT center a block element itself (like a div). To center a div, use margin: 0 auto; or Flexbox.' }
    ],
    bestPractices: [
      'Avoid `text-align: justify` on the web unless the column is very wide. On narrow mobile screens, justify causes massive, ugly gaps of whitespace between words.'
    ],
    practiceExercise: {
      task: 'Center align the text inside all <h1> elements.',
      expectedOutput: 'h1 { text-align: center; }',
      solution: `h1 {
    text-align: center;
}`
    },
    quiz: [
      { question: 'Which value stretches the text so the left and right edges are straight?', options: ['center', 'stretch', 'justify', 'full'], answer: 'justify' },
      { question: 'Can you use text-align: center to center a block-level <div> horizontally on the page?', options: ['Yes', 'No, text-align only aligns the text/inline content inside the div'], answer: 'No, text-align only aligns the text/inline content inside the div' },
      { question: 'What is the default text-align value for English (Left-to-Right) websites?', options: ['right', 'center', 'justify', 'left'], answer: 'left' }
    ],
    interviewQuestions: [
      { q: 'Why is text-align: justify considered bad practice for mobile web design?', a: 'Because mobile screens are narrow, justified text is forced to stretch spaces massively to ensure the edges touch the sides. This creates "rivers of white space" that make reading difficult for users, especially those with dyslexia.' }
    ],
    summary: [
      'text-align aligns text inside a container.',
      'center is heavily used for headers.',
      'It only aligns inline content, not block elements.'
    ],
    references: commonReferences
  },

  'css_text_decoration': {
    isStructured: true,
    title: '62. text-decoration',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The text-decoration property is used to set or remove decorations added to text.',
    whyUseIt: 'The #1 use case in the world is removing the ugly default blue underline from HTML `<a>` links. It is also used to strike through text (e.g., old prices on an e-commerce site).',
    syntax: `selector {
    text-decoration: none; /* none | underline | line-through | overline */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .none { text-decoration: none; }
  .underline { text-decoration: underline; }
  .line-through { text-decoration: line-through; color: gray; }
  .overline { text-decoration: overline; }
  
  /* Advanced: Styling the decoration */
  .fancy {
    text-decoration: underline wavy red;
  }
</style>
<body>
  <a href="#" class="none">Link without underline</a><br><br>
  
  <span class="underline">This text has an underline.</span><br><br>
  
  <span>Original Price: <span class="line-through">$50</span> <strong>$20!</strong></span><br><br>
  
  <span class="overline">This text has a line above it.</span><br><br>
  
  <span class="fancy">This text has a fancy wavy underline!</span>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <a href="#" style="text-decoration: none; color: blue;">Link without underline</a><br><br>
  <span style="text-decoration: underline;">This text has an underline.</span><br><br>
  <span>Original Price: <span style="text-decoration: line-through; color: gray;">$50</span> <strong>$20!</strong></span><br><br>
  <span style="text-decoration: overline;">This text has a line above it.</span><br><br>
  <span style="text-decoration: underline wavy red;">This text has a fancy wavy underline!</span>
</div>`,
    explanation: [
        { code: 'none', desc: 'Removes all decorations. Essential for styling modern links.' },
        { code: 'underline', desc: 'Adds a line below the text.' },
        { code: 'line-through', desc: 'Strikes a line through the middle of the text.' }
    ],
    realWorldExample: 'When you build a navigation bar, the first thing you do is target `.nav-links a { text-decoration: none; }` to make the links look like clean buttons rather than 1990s blue underlined text.',
    commonMistakes: [
      { error: 'Using text-decoration for borders.', code: 'text-decoration: underline;', suffix: 'If you want an underline that sits further away from the text and has padding, do not use text-decoration. Use border-bottom: 2px solid black; instead.' }
    ],
    bestPractices: [
      'Remove underlines from navigation links, but leave them on in-line article links so users know they are clickable.'
    ],
    practiceExercise: {
      task: 'Remove the underline from all anchor <a> tags.',
      expectedOutput: 'a { text-decoration: none; }',
      solution: `a {
    text-decoration: none;
}`
    },
    quiz: [
      { question: 'Which property removes the default underline from a link?', options: ['text-style: none;', 'text-decoration: none;', 'underline: false;', 'font-decoration: none;'], answer: 'text-decoration: none;' },
      { question: 'Which value puts a line directly through the middle of the text?', options: ['strike', 'line-through', 'middle-line', 'cross-out'], answer: 'line-through' },
      { question: 'Can you change the color and style (e.g., wavy) of an underline in CSS?', options: ['Yes', 'No, underlines are always the same color as the text'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why might you use border-bottom instead of text-decoration: underline?', a: '`text-decoration: underline` tightly hugs the text and cuts through descenders (like the tail of a "g" or "y"). `border-bottom` allows you to add `padding-bottom`, pushing the line away from the text for a much cleaner, more legible design.' }
    ],
    summary: [
      'text-decoration: none removes link underlines.',
      'text-decoration: line-through is used for crossed-out prices/tasks.',
      'border-bottom is often a better-looking alternative to underline.'
    ],
    references: commonReferences
  },

  'css_text_transform': {
    isStructured: true,
    title: '63. text-transform',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The text-transform property controls the capitalization of text.',
    whyUseIt: 'Instead of manually re-typing HTML content in ALL CAPS (which is bad for screen readers), you leave the HTML normal and use CSS to visually transform it into uppercase.',
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
  <!-- The original HTML is just normal sentence case -->
  <p class="upper">This text will be forced into all caps.</p>
  <p class="lower">THIS TEXT WAS YELLING BUT NOW IT IS QUIET.</p>
  <p class="cap">this text will have the first letter of each word capitalized.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="text-transform: uppercase; margin: 5px 0;">This text will be forced into all caps.</p>
  <p style="text-transform: lowercase; margin: 5px 0;">THIS TEXT WAS YELLING BUT NOW IT IS QUIET.</p>
  <p style="text-transform: capitalize; margin: 5px 0;">this text will have the first letter of each word capitalized.</p>
</div>`,
    explanation: [
        { code: 'uppercase', desc: 'Transforms all characters to ALL CAPS.' },
        { code: 'lowercase', desc: 'Transforms all characters to all lowercase.' },
        { code: 'capitalize', desc: 'Capitalizes the First Letter Of Every Word.' }
    ],
    realWorldExample: 'A lot of modern UI buttons feature uppercase text (e.g., "SUBMIT" or "LEARN MORE"). The HTML should be `<button>Submit</button>`, and the CSS applies `text-transform: uppercase;`.',
    commonMistakes: [
      { error: 'Typing ALL CAPS in HTML.', code: '<h1>WELCOME TO MY SITE</h1>', suffix: 'Screen readers for visually impaired users might read ALL CAPS HTML letter-by-letter (W-E-L-C-O-M-E). Write normal sentence case in HTML and use CSS text-transform to make it uppercase.' }
    ],
    bestPractices: [
      'Use `text-transform: uppercase` paired with a slight `letter-spacing` increase for clean, modern small-header typography.'
    ],
    practiceExercise: {
      task: 'Force all text inside a <button> to display in all capital letters.',
      expectedOutput: 'button { text-transform: uppercase; }',
      solution: `button {
    text-transform: uppercase;
}`
    },
    quiz: [
      { question: 'Which property controls capitalization?', options: ['text-case', 'font-transform', 'text-transform', 'capitalization'], answer: 'text-transform' },
      { question: 'Which value capitalizes the first letter of EVERY word?', options: ['uppercase', 'title-case', 'capitalize', 'first-letter'], answer: 'capitalize' },
      { question: 'Why should you use CSS for ALL CAPS instead of typing it that way in HTML?', options: ['It uses less memory', 'Screen readers might misinterpret HTML all-caps as an acronym and spell it out letter-by-letter', 'It allows for bold text', 'There is no difference'], answer: 'Screen readers might misinterpret HTML all-caps as an acronym and spell it out letter-by-letter' }
    ],
    interviewQuestions: [
      { q: 'Can text-transform: capitalize fix a sentence that is typed entirely in UPPERCASE?', a: 'No. `capitalize` only changes the *first* letter of a word to uppercase. It leaves the remaining letters alone. If the word is already uppercase, `capitalize` will not lowercase the rest of the letters.' }
    ],
    summary: [
      'text-transform: uppercase makes text ALL CAPS.',
      'text-transform: capitalize acts like Title Case.',
      'Always type normal HTML and use CSS to transform it visually.'
    ],
    references: commonReferences
  },

  'css_line_height': {
    isStructured: true,
    title: '64. line-height',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'The line-height property specifies the space between lines of text.',
    whyUseIt: 'The default line spacing in most browsers is too cramped for long paragraphs, making reading difficult. Increasing the line height drastically improves legibility.',
    syntax: `selector {
    line-height: 1.5; /* Unitless number is best practice */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div { width: 250px; margin-bottom: 20px; border: 1px solid #ccc; }
  
  .tight { line-height: 1; }
  .normal { line-height: 1.5; } /* Standard for body text */
  .loose { line-height: 2; }
</style>
<body>
  <div class="tight">
    <strong>line-height: 1</strong><br>
    The lines of text are very cramped. If this was a long blog post, your eyes would have trouble tracking from the end of one line to the beginning of the next.
  </div>
  
  <div class="normal">
    <strong>line-height: 1.5</strong><br>
    This is the sweet spot for legibility. There is enough breathing room between the lines that the eye easily tracks back to the left margin.
  </div>
  
  <div class="loose">
    <strong>line-height: 2</strong><br>
    This is double spaced. It can feel a bit too disconnected for standard reading, but is sometimes used for artistic effect.
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 250px; margin-bottom: 10px; border: 1px solid #ccc; line-height: 1; padding: 5px;">
    <strong>line-height: 1</strong><br>
    The lines of text are very cramped. If this was a long blog post, your eyes would have trouble tracking from the end of one line to the beginning of the next.
  </div>
  <div style="width: 250px; margin-bottom: 10px; border: 1px solid #ccc; line-height: 1.5; padding: 5px;">
    <strong>line-height: 1.5</strong><br>
    This is the sweet spot for legibility. There is enough breathing room between the lines that the eye easily tracks back to the left margin.
  </div>
</div>`,
    explanation: [
        { code: 'Unitless Number (1.5)', desc: 'This is a multiplier based on the font-size. If font-size is 16px, a line-height of 1.5 means the line height is exactly 24px (16 * 1.5).' }
    ],
    realWorldExample: 'Every blog or news website sets their article `<p>` tags to a `line-height` of 1.5 or 1.6 to ensure users can comfortably read long articles without getting a headache.',
    commonMistakes: [
      { error: 'Using px or % for line-height.', code: 'line-height: 24px;', suffix: 'If you hardcode 24px, and later change the font-size to 30px, the lines of text will literally overlap and crush each other. A unitless number (1.5) scales perfectly automatically!' }
    ],
    bestPractices: [
      'For body paragraphs, `line-height: 1.5` or `1.6` is optimal.',
      'For large headings (h1, h2), a tighter `line-height: 1.1` or `1.2` looks better.'
    ],
    practiceExercise: {
      task: 'Set the line height of all paragraphs to be 1.6 times the font size using a unitless number.',
      expectedOutput: 'p { line-height: 1.6; }',
      solution: `p {
    line-height: 1.6;
}`
    },
    quiz: [
      { question: 'What does line-height control?', options: ['The thickness of a border', 'The vertical space between lines of text', 'The height of an image', 'The height of the entire webpage'], answer: 'The vertical space between lines of text' },
      { question: 'What is the recommended unit to use for line-height?', options: ['px', 'rem', 'A unitless number (like 1.5)', '%'], answer: 'A unitless number (like 1.5)' },
      { question: 'Why is a unitless number (1.5) better than pixels (24px) for line-height?', options: ['It loads faster', 'It automatically scales proportionately if you change the font-size', 'It is the only valid CSS', 'It makes the text bold'], answer: 'It automatically scales proportionately if you change the font-size' },
      { question: 'What is the ideal line-height for reading long paragraphs of body text?', options: ['1', '1.5 to 1.6', '3', '0.5'], answer: '1.5 to 1.6' }
    ],
    interviewQuestions: [
      { q: 'How can you use line-height to vertically center a single line of text inside a button?', a: 'If a button has a fixed height of `50px`, you can set the `line-height` to `50px`. This is an old-school trick that perfectly vertically centers a single line of text (though Flexbox `align-items: center` is preferred today).' }
    ],
    summary: [
      'line-height adds breathing room between lines.',
      'Always use a unitless number (e.g., 1.5).',
      'Headers need tight line-heights (1.2); paragraphs need loose line-heights (1.5).'
    ],
    references: commonReferences
  },

  'css_letter_spacing': {
    isStructured: true,
    title: '65. letter-spacing & word-spacing',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'letter-spacing increases or decreases the space between characters. word-spacing controls the space between words.',
    whyUseIt: 'Used to tweak typography. Expanding letter-spacing on ALL CAPS subheadings looks extremely elegant and modern.',
    syntax: `selector {
    letter-spacing: 2px;
    word-spacing: 5px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .normal { letter-spacing: normal; }
  .wide { letter-spacing: 3px; text-transform: uppercase; }
  .tight { letter-spacing: -1px; }
  
  .word-wide { word-spacing: 15px; }
</style>
<body>
  <p class="normal">This is normal letter spacing.</p>
  
  <!-- Widely spaced all-caps is a massive trend in modern UI -->
  <p class="wide">Elegant Subheading</p>
  
  <p class="tight">This text is squeezed together tightly.</p>
  
  <p class="word-wide">These words are far apart.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <p style="letter-spacing: normal; margin: 5px 0;">This is normal letter spacing.</p>
  <p style="letter-spacing: 3px; text-transform: uppercase; margin: 5px 0; font-size: 14px;">Elegant Subheading</p>
  <p style="letter-spacing: -1px; margin: 5px 0;">This text is squeezed together.</p>
  <p style="word-spacing: 15px; margin: 5px 0;">These words are far apart.</p>
</div>`,
    explanation: [
        { code: 'letter-spacing', desc: 'Adds literal pixels of space between every single character.' },
        { code: 'word-spacing', desc: 'Adds space only where the spacebar was pressed.' }
    ],
    realWorldExample: 'A premium clothing brand website. Their logo and section subheadings ("NEW ARRIVALS") are often `text-transform: uppercase` combined with `letter-spacing: 4px` to create an airy, luxurious feel.',
    commonMistakes: [
      { error: 'Adding letter-spacing to lowercase body text.', code: 'p { letter-spacing: 2px; }', suffix: 'This drastically reduces legibility. Only use letter-spacing on ALL CAPS text, or very sparingly on large headings.' }
    ],
    bestPractices: [
      'Uppercase text ALWAYS looks better with a slight increase in `letter-spacing`.'
    ],
    practiceExercise: {
      task: 'Set the letter spacing of an h3 tag to 2 pixels.',
      expectedOutput: 'h3 { letter-spacing: 2px; }',
      solution: `h3 {
    letter-spacing: 2px;
}`
    },
    quiz: [
      { question: 'Which property adds space between individual characters?', options: ['word-spacing', 'line-height', 'character-spacing', 'letter-spacing'], answer: 'letter-spacing' },
      { question: 'Which typography style heavily benefits from an increase in letter-spacing?', options: ['Normal lowercase paragraphs', 'ALL CAPS headings', 'Italic quotes', 'Code blocks'], answer: 'ALL CAPS headings' },
      { question: 'Can letter-spacing accept negative values to squish text together?', options: ['Yes', 'No'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why might you use "em" units instead of "px" for letter-spacing?', a: 'Using `letter-spacing: 0.1em;` scales the spacing proportionally with the font size. If you use `2px`, the spacing looks huge on small text and microscopic on massive headers. `em` keeps the visual ratio perfect regardless of text size.' }
    ],
    summary: [
      'letter-spacing controls space between characters.',
      'word-spacing controls space between words.',
      'Always add letter-spacing to uppercase UI elements.'
    ],
    references: commonReferences
  }
};
