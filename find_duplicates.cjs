const fs = require('fs');
const content = fs.readFileSync('d:/src/Antigravity/Swarnandhra-accadamy/src/data/subjects.js', 'utf8');

const match = content.match(/java: \{[\s\S]*?content: javaContent/);
if (match) {
    const ids = [];
    const regex = /"id": "(.*?)"/g;
    let r;
    while ((r = regex.exec(match[0])) !== null) {
        ids.push(r[1]);
    }
    const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
    console.log('Duplicates in Java:', duplicates);
} else {
    console.log('No match for java object found');
}
