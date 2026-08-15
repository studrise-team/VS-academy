const fs = require('fs');

let subjectsContent = fs.readFileSync('src/data/subjects.js', 'utf8');

// Insert import if not exists
if (!subjectsContent.includes("import { devopsContent }")) {
  subjectsContent = "import { devopsContent } from './devopsContent';\n" + subjectsContent;
}

const chapters = JSON.parse(fs.readFileSync('devops_chapters.json', 'utf8'));

const devopsObjectStr = `
  devops: {
    id: 'devops',
    name: 'DevOps',
    chapters: ${JSON.stringify(chapters, null, 6).replace(/\n/g, '\n    ')},
    content: devopsContent
  }
};
`;

// Replace the final "};" with the new object + "};"
subjectsContent = subjectsContent.replace(/\n\s*};\s*$/, ',\n' + devopsObjectStr);

fs.writeFileSync('src/data/subjects.js', subjectsContent);
console.log('Successfully updated subjects.js');
