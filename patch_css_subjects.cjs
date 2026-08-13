const fs = require('fs');

const cssTopics = [
    "1. Introduction to CSS", "2. History of CSS", "3. Why CSS?", "4. Types of CSS (Inline, Internal, External)", "5. CSS Syntax", "6. Comments", "7. CSS Selectors", "8. Colors", "9. Backgrounds", "10. Borders", "11. Margins", "12. Padding", "13. Height & Width", "14. Box Model",
    "15. Fonts", "16. Font Properties", "17. Text Color", "18. Text Alignment", "19. Text Decoration", "20. Text Transform", "21. Letter Spacing", "22. Word Spacing", "23. Line Height", "24. Text Shadow",
    "25. Display Property", "26. Position Property", "27. Float", "28. Clear", "29. Overflow", "30. Z-index", "31. Visibility", "32. Opacity",
    "33. Introduction to Flexbox", "34. display:flex", "35. flex-direction", "36. justify-content", "37. align-items", "38. flex-wrap", "39. align-content", "40. flex-grow", "41. flex-shrink", "42. gap",
    "43. Introduction to Grid", "44. Grid Container", "45. Grid Items", "46. Grid Template Columns", "47. Grid Template Rows", "48. Grid Gap", "49. Grid Area", "50. Grid Alignment",
    "51. Media Queries", "52. Mobile First Design", "53. Responsive Images", "54. Responsive Layout", "55. Viewport", "56. CSS Units (px, %, em, rem, vh, vw)",
    "57. Pseudo Classes", "58. Pseudo Elements", "59. CSS Variables", "60. Gradients", "61. Shadows", "62. Filters", "63. Clip Path", "64. Object Fit", "65. Backdrop Filter",
    "66. Transform", "67. Transition", "68. Keyframes", "69. Animation Properties", "70. Hover Effects", "71. Loading Spinner", "72. Card Animations",
    "73. Glassmorphism", "74. Neumorphism", "75. Dark Mode", "76. CSS Icons", "77. CSS Cards", "78. Buttons", "79. Navigation Bar", "80. Sidebar",
    "81. Personal Portfolio", "82. Login Page", "83. Registration Form", "84. Landing Page", "85. Pricing Cards", "86. Product Card", "87. Dashboard UI", "88. Responsive Website",
    "89. Top 50 CSS Interview Questions", "90. Flexbox Interview Questions", "91. Grid Interview Questions", "92. CSS Cheat Sheet", "93. CSS Best Practices", "94. Common CSS Mistakes", "95. Mini Quiz", "96. CSS Roadmap"
];

const cssChapters = cssTopics.map(topic => {
    let idStr = topic.split('. ')[1].toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '');
    return {
        id: `css_${idStr}`,
        title: topic
    };
});

const cssObject = `
    css: {
    id: 'css',
    name: 'CSS (Cascading Style Sheets)',
    chapters: ${JSON.stringify(cssChapters, null, 4)}
    },
`;

const file = 'd:/src/Antigravity/Swarnandhra-accadamy/src/data/subjects.js';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes("import { cssContent } from './cssContent';")) {
    content = content.replace("import { aiContent } from './aiContent';", "import { aiContent } from './aiContent';\nimport { cssContent } from './cssContent';");
}

if (!content.includes("css: {")) {
    content = content.replace("export const subjectsData = {", "export const subjectsData = {\n" + cssObject);
}

fs.writeFileSync(file, content);
console.log('Successfully patched subjects.js with 96 CSS chapters!');
