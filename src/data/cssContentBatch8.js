const commonReferences = [
  { label: 'W3Schools CSS Backgrounds', url: 'https://www.w3schools.com/css/css_background.asp' },
  { label: 'MDN Web Docs: Backgrounds and borders', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders' }
];

export const cssContentBatch8 = {
  'css_background_color': {
    isStructured: true,
    title: '66. background-color',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The background-color property sets the background color of an element.',
    whyUseIt: 'Used to create visually distinct sections on a webpage, style buttons, or define the overarching theme of the site (like Light Mode vs Dark Mode).',
    syntax: `selector {
    background-color: lightblue; /* Color Name, HEX, RGB, or HSL */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    padding: 20px;
    margin-bottom: 10px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  
  .name { background-color: tomato; }
  .hex { background-color: #4CAF50; }
  .rgb { background-color: rgb(0, 140, 255); }
  .rgba { background-color: rgba(0, 0, 0, 0.5); } /* 50% transparent */
</style>
<body>
  <div class="name">Color Name (tomato)</div>
  <div class="hex">HEX Code (#4CAF50)</div>
  <div class="rgb">RGB rgb(0, 140, 255)</div>
  
  <!-- The RGBA box allows the background pattern to show through -->
  <div style="background-image: repeating-linear-gradient(45deg, #ccc 0, #ccc 10px, #eee 10px, #eee 20px); padding: 20px;">
    <div class="rgba">RGBA (Transparent Black!)</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="background-color: tomato; padding: 15px; margin-bottom: 5px; color: white; text-align: center; font-weight: bold;">Color Name (tomato)</div>
  <div style="background-color: #4CAF50; padding: 15px; margin-bottom: 5px; color: white; text-align: center; font-weight: bold;">HEX Code (#4CAF50)</div>
  <div style="background-color: rgb(0, 140, 255); padding: 15px; margin-bottom: 5px; color: white; text-align: center; font-weight: bold;">RGB</div>
  <div style="background-image: repeating-linear-gradient(45deg, #ccc 0, #ccc 10px, #eee 10px, #eee 20px); padding: 15px;">
    <div style="background-color: rgba(0, 0, 0, 0.7); padding: 15px; color: white; text-align: center; font-weight: bold;">RGBA (Transparent)</div>
  </div>
</div>`,
    explanation: [
        { code: 'HEX (#ff0000)', desc: 'The most common way developers copy/paste colors from design tools like Figma.' },
        { code: 'RGBA (Red, Green, Blue, Alpha)', desc: 'The "Alpha" channel controls transparency. `rgba(0,0,0, 0.5)` is a 50% see-through black background. This is crucial for UI overlays.' }
    ],
    realWorldExample: 'A "Danger" or "Delete" button uses `background-color: #dc3545` (a specific shade of red), while a "Success" or "Save" button uses `background-color: #28a745` (green).',
    commonMistakes: [
      { error: 'Using opacity instead of RGBA.', code: 'opacity: 0.5;', suffix: 'If you use opacity on a div, the text inside it ALSO becomes transparent. If you only want a transparent background, you MUST use background-color: rgba().' }
    ],
    bestPractices: [
      'Define your main website colors as CSS Variables (`:root { --primary-color: #3498db; }`) so you can change the theme of the entire site by updating just one line of code.'
    ],
    practiceExercise: {
      task: 'Set the background color of the body to black using a HEX code.',
      expectedOutput: 'body { background-color: #000000; }',
      solution: `body {
    background-color: #000000;
}`
    },
    quiz: [
      { question: 'Which property changes the background color?', options: ['color', 'bg-color', 'background-color', 'bgcolor'], answer: 'background-color' },
      { question: 'What does the "A" in RGBA stand for, and what does it do?', options: ['Aqua (adds blue tint)', 'Alpha (controls transparency)', 'Absolute (locks the color)', 'Auto (browser picks color)'], answer: 'Alpha (controls transparency)' },
      { question: 'If you want a 50% transparent background, but want the text to remain 100% solid, which should you use?', options: ['opacity: 0.5', 'background-color: rgba(0,0,0, 0.5)', 'transparent: 50%'], answer: 'background-color: rgba(0,0,0, 0.5)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between the "background" shorthand property and "background-color"?', a: '`background` is a shorthand property that can set the color, image, position, size, and repeat all in one line. `background-color` strictly sets just the color. Using the shorthand can sometimes accidentally overwrite an existing background image if you aren\'t careful.' }
    ],
    summary: [
      'background-color accepts names, HEX, RGB, or HSL.',
      'RGBA allows you to create transparent backgrounds.',
      'Do not use opacity to create transparent backgrounds if you have text inside the element.'
    ],
    references: commonReferences
  },

  'css_background_image': {
    isStructured: true,
    title: '67. background-image',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The background-image property sets one or more background images for an element.',
    whyUseIt: 'While `<img>` tags are used for content (like a photo in an article), background images are used for decoration, textures, or large full-screen "Hero" banners that have text sitting on top of them.',
    syntax: `selector {
    background-image: url("image.jpg");
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .hero {
    /* Set the image URL */
    background-image: url("https://picsum.photos/id/1015/600/200");
    
    height: 200px;
    color: white;
    text-align: center;
    
    /* We use Flexbox to center the text ON TOP of the image */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
</style>
<body>
  <div class="hero">
    I am text sitting ON TOP of a background image!
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="background-image: url('https://picsum.photos/id/1015/600/200'); height: 150px; color: white; display: flex; justify-content: center; align-items: center; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">
    I am text sitting ON TOP of a background image!
  </div>
</div>`,
    explanation: [
        { code: 'url("")', desc: 'The function used to point to the image file path.' },
        { code: 'Multiple Images', desc: 'You can actually comma-separate multiple URLs to layer images on top of each other! (e.g. `background-image: url("top.png"), url("bottom.jpg");`)' }
    ],
    realWorldExample: 'A "Hero Section" at the top of a landing page usually has a massive, beautiful photograph. Instead of placing an `<img>` tag and trying to awkwardly position text over it using `position: absolute`, developers use `background-image` on a `<div>` and simply type the text naturally inside the div.',
    commonMistakes: [
      { error: 'Putting content in background images.', code: '', suffix: 'If an image contains important information (like a chart or a logo with text), it should be an <img> tag so screen readers can read the alt text. Background images are strictly for decoration.' }
    ],
    bestPractices: [
      'Always set a fallback `background-color`. If the user has a slow connection, the color will load instantly and allow the text to be readable while the heavy image downloads in the background.'
    ],
    practiceExercise: {
      task: 'Set the background image of the body to "stars.png".',
      expectedOutput: 'body { background-image: url("stars.png"); }',
      solution: `body {
    background-image: url("stars.png");
}`
    },
    quiz: [
      { question: 'What is the syntax for loading an image in CSS?', options: ['background-image: "img.jpg";', 'background-image: url("img.jpg");', 'background-image: src("img.jpg");', 'image: "img.jpg";'], answer: 'background-image: url("img.jpg");' },
      { question: 'Why use a background-image instead of an <img> tag?', options: ['It loads faster', 'It is easier to put text on top of it', 'It is required for mobile', 'It makes the image interactive'], answer: 'It is easier to put text on top of it' },
      { question: 'Should you use background-image for a picture of a product in a shopping cart?', options: ['Yes', 'No, use an <img> tag because it is important content, not decoration'], answer: 'No, use an <img> tag because it is important content, not decoration' }
    ],
    interviewQuestions: [
      { q: 'How would you apply a dark overlay tint to a background image so white text is easier to read?', a: 'I can use CSS Gradients as a background image! I would layer a semi-transparent black gradient ON TOP of the actual URL: `background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("photo.jpg");`' }
    ],
    summary: [
      'background-image loads decorative images via url().',
      'It is the easiest way to place text over an image.',
      'Always set a fallback background-color.'
    ],
    references: commonReferences
  },

  'css_background_size': {
    isStructured: true,
    title: '68. background-size',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'The background-size property specifies the size of the background image.',
    whyUseIt: 'By default, a background image will render at its exact pixel dimensions. If the div is smaller than the image, the image gets cut off. `background-size` forces the image to shrink, stretch, or perfectly cover the div.',
    syntax: `selector {
    background-size: cover; /* auto | length | cover | contain */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    width: 250px;
    height: 150px;
    border: 2px solid black;
    margin-bottom: 10px;
    /* A 600x400 image loaded into a 250x150 box */
    background-image: url("https://picsum.photos/id/1018/600/400");
    background-repeat: no-repeat;
    color: white; font-weight: bold; text-shadow: 1px 1px 2px black; padding: 5px;
  }
  
  .auto { background-size: auto; } /* Image is huge, gets chopped off! */
  .contain { background-size: contain; } /* Shrinks to fit wholly inside */
  .cover { background-size: cover; } /* Scales to completely cover the box, cropping edges if needed */
</style>
<body>
  <div class="auto">Auto (Default - Cut Off)</div>
  <div class="contain">Contain (Fits, but leaves empty space)</div>
  <div class="cover">Cover (Perfectly fills the box without stretching!)</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 250px; height: 100px; border: 2px solid black; margin-bottom: 5px; background-image: url('https://picsum.photos/id/1018/600/400'); background-size: auto; background-repeat: no-repeat; color: white; padding: 5px;">Auto (Cut Off)</div>
  <div style="width: 250px; height: 100px; border: 2px solid black; margin-bottom: 5px; background-image: url('https://picsum.photos/id/1018/600/400'); background-size: contain; background-repeat: no-repeat; color: white; padding: 5px;">Contain (Leaves empty space)</div>
  <div style="width: 250px; height: 100px; border: 2px solid black; margin-bottom: 5px; background-image: url('https://picsum.photos/id/1018/600/400'); background-size: cover; background-repeat: no-repeat; color: white; padding: 5px;">Cover (Fills perfectly!)</div>
</div>`,
    explanation: [
        { code: 'auto', desc: 'The default. Renders the image at its natural size.' },
        { code: 'cover', desc: 'The most popular value. It scales the image to completely fill the container. If the aspect ratios do not match, it safely crops the edges of the image. It never stretches/distorts the image.' },
        { code: 'contain', desc: 'Scales the image so the ENTIRE image is visible, but this usually leaves empty letterbox space on the sides.' },
        { code: '100% 100%', desc: 'Forces the image to exactly match the width and height of the box. WARNING: This will squish and distort the image if the aspect ratio doesn\'t match.' }
    ],
    realWorldExample: 'Every full-screen "Hero" section uses `background-size: cover;`. This guarantees that whether the user is on a tall, narrow phone or a wide, short monitor, the image will always fill the screen entirely without looking distorted.',
    commonMistakes: [
      { error: 'Using 100% 100%.', code: 'background-size: 100% 100%;', suffix: 'Never stretch images. Squished photos look incredibly unprofessional. Always use cover or contain.' }
    ],
    bestPractices: [
      'Almost universally, `background-size: cover;` is the correct choice for web design.'
    ],
    practiceExercise: {
      task: 'Set the background size so that the image completely fills its container without being stretched or distorted.',
      expectedOutput: 'background-size: cover;',
      solution: `background-size: cover;`
    },
    quiz: [
      { question: 'Which value scales the image to perfectly fill the container without stretching it, cropping edges if necessary?', options: ['contain', 'auto', 'cover', '100% 100%'], answer: 'cover' },
      { question: 'Which value ensures the ENTIRE image is visible, even if it leaves empty blank space in the container?', options: ['contain', 'cover', 'fill', '100%'], answer: 'contain' },
      { question: 'Why should you avoid background-size: 100% 100%?', options: ['It breaks on mobile', 'It stretches and distorts the image\'s aspect ratio', 'It loads slower', 'It is deprecated'], answer: 'It stretches and distorts the image\'s aspect ratio' }
    ],
    interviewQuestions: [
      { q: 'When building a responsive website, why is background-size: cover paired with background-position: center so common?', a: 'Because `cover` will crop the image to fit varying screen sizes. By adding `background-position: center`, you guarantee that the browser will crop the outer edges of the photo evenly, keeping the focal point of the image perfectly centered on the screen.' }
    ],
    summary: [
      'background-size controls how the image fits.',
      'cover completely fills the box (safely cropping edges).',
      'contain shows the whole image (leaving blank space).'
    ],
    references: commonReferences
  },

  'css_background_position': {
    isStructured: true,
    title: '69. background-position & repeat',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'background-position specifies the starting position of a background image. background-repeat specifies if/how the image repeats.',
    whyUseIt: 'If you use `background-size: cover`, the image will crop. `background-position` tells the browser WHICH part of the image to keep (e.g., keep the top, crop the bottom). `repeat` controls whether small texture images tile across the screen.',
    syntax: `selector {
    background-position: center; /* center | top | bottom | left | right */
    background-repeat: no-repeat; /* repeat | repeat-x | repeat-y | no-repeat */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    width: 250px;
    height: 150px;
    border: 2px solid black;
    margin-bottom: 10px;
    color: white; font-weight: bold; text-shadow: 1px 1px 2px black; padding: 5px;
  }
  
  /* The image is a tall portrait, but our box is short and wide */
  .top { 
    background-image: url("https://picsum.photos/id/1025/400/600");
    background-size: cover;
    background-position: top; /* Keeps the dog's head! */
  }
  
  .bottom { 
    background-image: url("https://picsum.photos/id/1025/400/600");
    background-size: cover;
    background-position: bottom; /* Crops the head, keeps the paws! */
  }
  
  .pattern {
    background-image: url("https://picsum.photos/50"); /* Tiny 50px image */
    background-repeat: repeat; /* Tiles infinitely */
  }
</style>
<body>
  <div class="top">Position: Top (Focal point saved)</div>
  <div class="bottom">Position: Bottom (Focal point lost)</div>
  
  <div class="pattern">Repeat: Repeat (Creates a tiled texture)</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'background-position: center', desc: 'The safest and most common value. It centers the image perfectly, cropping all 4 sides evenly when resizing.' },
        { code: 'background-repeat: no-repeat', desc: 'By default, if an image is smaller than the container, CSS will tile (repeat) it infinitely. `no-repeat` forces it to show only once.' }
    ],
    realWorldExample: 'If a photographer uploads a portrait (tall) photo of a person to be used as a wide Desktop banner, the browser will chop off the person\'s head by default. Setting `background-position: top center;` forces the browser to anchor the top of the photo, ensuring the face is always visible.',
    commonMistakes: [
      { error: 'Forgetting no-repeat.', code: '', suffix: 'If you are not using background-size: cover, always add background-repeat: no-repeat to prevent your single logo or icon from tiling infinitely across the screen.' }
    ],
    bestPractices: [
      'The holy trinity of modern background images is: `background-size: cover; background-position: center; background-repeat: no-repeat;`'
    ],
    practiceExercise: {
      task: 'Set the background position to center and prevent the background image from repeating.',
      expectedOutput: 'background-position: center; background-repeat: no-repeat;',
      solution: `background-position: center;
background-repeat: no-repeat;`
    },
    quiz: [
      { question: 'What does background-position: center do when paired with background-size: cover?', options: ['It centers the div on the page', 'It ensures the focal point of the image stays in the middle, cropping the edges evenly', 'It shrinks the image to the center', 'It stretches the image'], answer: 'It ensures the focal point of the image stays in the middle, cropping the edges evenly' },
      { question: 'What is the default behavior of a background image if it is smaller than its container?', options: ['It stretches to fit', 'It centers itself', 'It repeats (tiles) in both directions', 'It disappears'], answer: 'It repeats (tiles) in both directions' },
      { question: 'Which property prevents an image from tiling?', options: ['background-size: none', 'background-repeat: no-repeat', 'tile: false', 'background-position: fixed'], answer: 'background-repeat: no-repeat' }
    ],
    interviewQuestions: [
      { q: 'What is the "background-attachment: fixed" property used for?', a: 'It creates a "Parallax" effect. By setting `background-attachment: fixed`, the background image locks physically to the screen viewport. When the user scrolls down the webpage, the content scrolls normally, but the background image stays perfectly still, creating a neat 3D depth effect.' }
    ],
    summary: [
      'background-position anchors the focal point of an image.',
      'background-repeat stops images from tiling.',
      'The combination of size:cover, pos:center, and no-repeat is standard.'
    ],
    references: commonReferences
  },

  'css_borders': {
    isStructured: true,
    title: '70. Borders',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The border property allows you to specify the style, width, and color of an element\'s border.',
    whyUseIt: 'Borders define the boundaries of elements, separate content, and are a key component of styling form inputs (like text boxes) and buttons.',
    syntax: `selector {
    /* Shorthand: width | style | color */
    border: 2px solid black; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    width: 250px;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .solid { border: 2px solid black; }
  .dashed { border: 3px dashed coral; }
  .dotted { border: 4px dotted blue; }
  
  /* Targeting a single side */
  .underline { 
    border-bottom: 4px solid green; 
    background: #f1f1f1;
  }
</style>
<body>
  <div class="solid">2px solid black</div>
  <div class="dashed">3px dashed coral</div>
  <div class="dotted">4px dotted blue</div>
  
  <div class="underline">Bottom border only! (Great for headers)</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="border: 2px solid black; padding: 10px; margin-bottom: 10px; text-align: center;">2px solid black</div>
  <div style="border: 3px dashed coral; padding: 10px; margin-bottom: 10px; text-align: center;">3px dashed coral</div>
  <div style="border: 4px dotted blue; padding: 10px; margin-bottom: 10px; text-align: center;">4px dotted blue</div>
  <div style="border-bottom: 4px solid green; background: #f1f1f1; padding: 10px; text-align: center;">Bottom border only!</div>
</div>`,
    explanation: [
        { code: 'border-style', desc: 'REQUIRED. If you do not specify a style (like solid or dashed), the border will not appear at all, even if you set a width and color.' },
        { code: 'border-bottom', desc: 'You can target specific sides: border-top, border-right, border-bottom, border-left.' }
    ],
    realWorldExample: 'Modern UI design uses very subtle borders. Instead of `border: 1px solid black;`, a clean dashboard card will use `border: 1px solid #e2e8f0;` (a very light gray) to separate the card from the background without visually overwhelming the user.',
    commonMistakes: [
      { error: 'Forgetting the style.', code: 'border: 5px red;', suffix: 'This will render nothing. You MUST include the word "solid" (or dashed/dotted).' }
    ],
    bestPractices: [
      'Use `border-bottom` on headers (h1, h2) instead of `<hr>` tags or text underlines for cleaner, more controllable section dividers.'
    ],
    practiceExercise: {
      task: 'Write the shorthand property to create a 3px, solid, red border.',
      expectedOutput: 'border: 3px solid red;',
      solution: `border: 3px solid red;`
    },
    quiz: [
      { question: 'What are the three components of the border shorthand property?', options: ['size, type, color', 'width, style, color', 'height, solid, hex', 'padding, margin, color'], answer: 'width, style, color' },
      { question: 'Which border property is absolutely REQUIRED for the border to be visible?', options: ['border-width', 'border-color', 'border-style (e.g., solid)', 'border-radius'], answer: 'border-style (e.g., solid)' },
      { question: 'How do you add a border ONLY to the bottom of an element?', options: ['border: bottom 2px solid;', 'border-bottom: 2px solid black;', 'bottom-border: 2px solid;', 'border: 0 0 2px 0;'], answer: 'border-bottom: 2px solid black;' }
    ],
    interviewQuestions: [
      { q: 'How does a border affect the overall width of an element?', a: 'By default (in the standard CSS box model), adding a 5px border to a 100px wide box makes the total width 110px (100 + 5 left + 5 right), which often breaks layouts. Applying `box-sizing: border-box;` to the element forces the border to draw INSIDE the 100px width, solving this issue.' }
    ],
    summary: [
      'The border shorthand is: width style color.',
      'border-style (solid) is required.',
      'You can target individual sides (border-top, etc).'
    ],
    references: commonReferences
  },

  'css_border_radius': {
    isStructured: true,
    title: '71. border-radius',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The border-radius property is used to add rounded corners to an element.',
    whyUseIt: 'Harsh, sharp 90-degree corners look like computer programs from 1995. Rounded corners are the hallmark of modern, friendly web design (like iOS interfaces).',
    syntax: `selector {
    border-radius: 10px; /* Applies 10px rounding to all 4 corners */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    width: 150px;
    height: 50px;
    background: #2196F3;
    color: white;
    text-align: center;
    line-height: 50px;
    margin-bottom: 15px;
  }
  
  .subtle { border-radius: 5px; } /* Modern Buttons */
  
  .pill { border-radius: 50px; } /* Pill-shaped Buttons */
  
  .circle { 
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%; /* Perfect Circle! */
  }
</style>
<body>
  <div class="subtle">5px Radius</div>
  
  <div class="pill">50px (Pill Shape)</div>
  
  <!-- For a perfect circle, the box MUST be a perfect square first! -->
  <div class="circle">50% (Circle)</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 150px; height: 50px; background: #2196F3; color: white; text-align: center; line-height: 50px; margin-bottom: 10px; border-radius: 5px;">5px Radius</div>
  <div style="width: 150px; height: 50px; background: #2196F3; color: white; text-align: center; line-height: 50px; margin-bottom: 10px; border-radius: 50px;">50px (Pill)</div>
  <div style="width: 100px; height: 100px; background: #2196F3; color: white; text-align: center; line-height: 100px; border-radius: 50%;">50% Circle</div>
</div>`,
    explanation: [
        { code: 'border-radius: 5px', desc: 'Applies a subtle rounding. The standard for modern UI cards and buttons.' },
        { code: 'border-radius: 50%', desc: 'Creates a perfect circle. IMPORTANT: The element must have equal width and height (a perfect square) for this to create a circle. If it is a rectangle, 50% creates an oval.' }
    ],
    realWorldExample: 'User Profile Avatars. You upload a square photo of yourself. The CSS applies `border-radius: 50%; overflow: hidden;` to the image, instantly turning your square photo into the perfect circular avatar seen on Twitter, Instagram, and LinkedIn.',
    commonMistakes: [
      { error: 'Applying border-radius to an image without overflow.', code: '', suffix: 'If you apply rounded corners to a parent <div>, but put a square image inside it, the square corners of the image will stick out! You must add overflow: hidden; to the parent div to clip the image to the curves.' }
    ],
    bestPractices: [
      'Keep it subtle. 4px to 8px is the sweet spot for modern, professional designs. Over 15px starts to look cartoonish (unless you are going for a full pill-shape).'
    ],
    practiceExercise: {
      task: 'Turn a perfectly square 100x100px <div> into a perfect circle.',
      expectedOutput: 'border-radius: 50%;',
      solution: `border-radius: 50%;`
    },
    quiz: [
      { question: 'What does border-radius do?', options: ['Changes the thickness of a border', 'Rounds the corners of an element', 'Makes the element circular automatically', 'Adds a shadow'], answer: 'Rounds the corners of an element' },
      { question: 'How do you create a perfect circle in CSS?', options: ['border-radius: circle;', 'border-radius: 100px;', 'Make a perfect square, then apply border-radius: 50%;', 'shape: circle;'], answer: 'Make a perfect square, then apply border-radius: 50%;' },
      { question: 'What happens if you apply border-radius: 50% to a rectangle (where width is 200px and height is 100px)?', options: ['It becomes a perfect circle', 'It becomes an oval/ellipse', 'An error occurs', 'It remains a rectangle'], answer: 'It becomes an oval/ellipse' }
    ],
    interviewQuestions: [
      { q: 'Can you round just ONE corner of an element?', a: 'Yes! The `border-radius` property can take up to 4 values (Top-Left, Top-Right, Bottom-Right, Bottom-Left). For example: `border-radius: 10px 0 0 0;` will only round the top-left corner.' }
    ],
    summary: [
      'border-radius rounds corners.',
      'Small px values (4px-8px) create modern subtle curves.',
      '50% applied to a perfect square creates a perfect circle.'
    ],
    references: commonReferences
  },

  'css_box_shadow': {
    isStructured: true,
    title: '72. box-shadow',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'The box-shadow property attaches one or more drop-shadows to the box.',
    whyUseIt: 'Shadows create depth and hierarchy (the Z-axis). By adding a soft shadow to a card, it lifts off the page, making the UI feel tactile, interactive, and premium.',
    syntax: `selector {
    /* x-offset | y-offset | blur-radius | spread-radius | color */
    box-shadow: 2px 4px 10px 0px rgba(0,0,0, 0.2);
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  div {
    width: 200px;
    height: 100px;
    background: white;
    margin: 20px;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
  }
  
  /* Ugly, harsh 90s shadow */
  .bad-shadow {
    box-shadow: 5px 5px 0px black;
  }
  
  /* Modern, soft UI card shadow */
  .good-shadow {
    border-radius: 8px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  /* Hover Effect: The card lifts up! */
  .hover-card {
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  
  .hover-card:hover {
    transform: translateY(-5px); /* Moves it up physically */
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2); /* Shadow gets bigger/softer */
  }
</style>
<body style="background: #f8f9fa;">
  <div class="bad-shadow">Harsh Shadow (Bad)</div>
  <div class="good-shadow">Soft UI Shadow (Good)</div>
  <div class="hover-card">Hover over me!</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'X and Y offsets', desc: 'The first two numbers. 0px 10px means the shadow does not move left/right, but moves down 10px.' },
        { code: 'Blur Radius', desc: 'The 3rd number. A high blur (15px) makes the shadow soft and realistic. 0px makes it sharp and solid.' },
        { code: 'Spread', desc: 'The 4th number (optional). A negative spread shrinks the shadow slightly so it doesn\'t peek out the sides.' },
        { code: 'Color', desc: 'ALWAYS use RGBA. Solid black shadows look terrible. rgba(0,0,0, 0.1) creates a beautiful 10% transparent shadow.' }
    ],
    realWorldExample: 'Modern UI Cards (like a Facebook post or a Twitter card) have no borders. Instead, they have a white background, rounded corners, and a very soft `box-shadow` to separate them from a light gray page background.',
    commonMistakes: [
      { error: 'Using solid black colors.', code: 'box-shadow: 5px 5px 10px black;', suffix: 'In the real world, shadows are rarely pitch black. Use rgba(0,0,0, 0.1) for a realistic, subtle drop shadow.' }
    ],
    bestPractices: [
      'Animate `box-shadow` on `:hover` to create buttons and cards that "lift" towards the user when moused over.'
    ],
    practiceExercise: {
      task: 'Write a box-shadow rule that has 0px X-offset, 4px Y-offset, 8px Blur, and uses a black color at 15% opacity (0.15).',
      expectedOutput: 'box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);',
      solution: `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);`
    },
    quiz: [
      { question: 'What does the third value in the box-shadow shorthand control (e.g., 2px 4px 10px black)?', options: ['X offset', 'Y offset', 'Blur radius', 'Spread'], answer: 'Blur radius' },
      { question: 'Why should you use RGBA colors for box shadows?', options: ['Because it is the only format CSS accepts', 'To make the shadow slightly transparent for a softer, realistic look', 'To add a blue tint', 'To make it load faster'], answer: 'To make the shadow slightly transparent for a softer, realistic look' },
      { question: 'What visual effect is achieved by increasing the blur radius and the Y-offset of a shadow?', options: ['It looks like the element is glowing', 'It looks like the element is lifting higher off the page', 'It makes the element look flat', 'It hides the element'], answer: 'It looks like the element is lifting higher off the page' }
    ],
    interviewQuestions: [
      { q: 'How do you create an "inner" shadow (like a sunken button or an inset text field)?', a: 'You add the keyword `inset` to the beginning or end of the box-shadow declaration. (e.g., `box-shadow: inset 0px 4px 10px rgba(0,0,0,0.1);`). This forces the shadow to render inside the edges of the box, rather than outside.' }
    ],
    summary: [
      'box-shadow adds depth (Z-axis).',
      'Order: X-offset, Y-offset, Blur, Spread, Color.',
      'Always use low-opacity RGBA black for realistic shadows.'
    ],
    references: commonReferences
  }
};
