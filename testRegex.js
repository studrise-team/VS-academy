const s = "Hello\\nWorld";
console.log("Original:", s);
console.log("With /\\\\n/g:", s.replace(/\\n/g, '\n'));
console.log("With /\\\\\\\\n/g:", s.replace(/\\\\n/g, '\n'));
console.log("With JSON parse:", s.split('\\n').join('\n'));
