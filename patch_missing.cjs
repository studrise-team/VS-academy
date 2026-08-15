const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'C:/Users/ganes/.gemini/antigravity-ide/brain/6a3bccf7-b18d-4c3b-9516-e4f0574366f1/.user_uploaded/media_1786800243033.pdf';
const chapters = require('./devops_chapters.json');

const missingIds = ['devops_ssl_tls', 'devops_package', 'devops_vulnerability_scanning', 'devops_fault_tolerance'];

async function parse() {
    let dataBuffer = fs.readFileSync(pdfPath);
    try {
        const pdfData = await pdf(dataBuffer);
        const text = pdfData.text;
        
        const allTopics = {};
        
        for (const missingId of missingIds) {
            const chap = chapters.find(c => c.id === missingId);
            const currentTitleMatch = chap.title;
            
            // Find start of current chapter loosely
            const startIndex = text.indexOf(currentTitleMatch + '\nDifficulty') !== -1 
                ? text.indexOf(currentTitleMatch + '\nDifficulty')
                : text.indexOf(currentTitleMatch + '\n\nDifficulty') !== -1 
                    ? text.indexOf(currentTitleMatch + '\n\nDifficulty')
                    : text.indexOf(currentTitleMatch);
            
            let endIndex = text.indexOf('13. References', startIndex) + 200; // Just grab enough text
            
            const chunk = text.substring(startIndex, endIndex);
            
            const extract = (startTag, endTag) => {
                const s = chunk.indexOf(startTag);
                if (s === -1) return '';
                const e = endTag ? chunk.indexOf(endTag, s) : chunk.length;
                if (e === -1) return chunk.substring(s + startTag.length).trim();
                return chunk.substring(s + startTag.length, e).trim();
            };
            
            const difficultyMatch = chunk.match(/Difficulty:\s*([^\n]+)/);
            const readingTimeMatch = chunk.match(/Reading time:\s*([^\n]+)/);
            
            const def = extract('1. What is this topic?\n', '\n2. Why do we use it?');
            const why = extract('2. Why do we use it?\n', '\n3. Syntax / workflow');
            const syntaxRaw = extract('3. Syntax / workflow\n', '\n4. Output / expected result');
            const outputRaw = extract('4. Output / expected result\n', '\n5. Explanation');
            const stepsRaw = extract('5. Explanation\n', '\n6. Real-world example');
            const realWorld = extract('6. Real-world example\n', '\n7. Common mistakes');
            const mistakesRaw = extract('7. Common mistakes\n', '\n8. Best practices');
            const bestRaw = extract('8. Best practices\n', '\n9. Practice exercise');
            const practiceRaw = extract('9. Practice exercise\n', '\n10. Interview questions');
            const questionsRaw = extract('10. Interview questions\n', '\n11. Quick quiz');
            const quizRaw = extract('11. Quick quiz\n', '\n12. Quick revision');
            const revRaw = extract('12. Quick revision\n', '\n13. References');
            const refRaw = extract('13. References\n', '\n');
            
            allTopics[chap.id] = {
                id: chap.id,
                title: chap.title,
                difficulty: difficultyMatch ? difficultyMatch[1].trim() : 'Beginner',
                readingTime: readingTimeMatch ? readingTimeMatch[1].trim() : '5-8 min',
                osSpecific: false,
                definition: def.replace(/\n/g, ' '),
                whyUseIt: why.replace(/\n/g, ' '),
                keyConcepts: [{ term: "Syntax / Workflow", desc: "Understanding the command or workflow steps." }, { term: "Output", desc: "Verifying the expected result." }],
                codeExample: syntaxRaw.replace(/\n/g, '\\n'),
                expectedOutput: outputRaw.replace(/\n/g, '\\n'),
                explanation: [{ code: 'Explanation', desc: stepsRaw.replace(/\n/g, ' ') }],
                realWorldExample: realWorld.replace(/\n/g, ' '),
                commonMistakes: mistakesRaw.split(';').filter(x => x.trim()).map(x => ({ error: x.trim().replace(/\n/g, ' '), code: '', suffix: '' })),
                bestPractices: bestRaw.split('\n').filter(x => x.trim()),
                practiceExercise: { task: practiceRaw.replace(/\n/g, ' '), expectedOutput: "Completed successfully", solution: "See explanation" },
                interviewQuestions: questionsRaw.split('•').filter(x => x.trim()).map(x => ({ q: x.trim().replace(/\n/g, ' '), a: '' })),
                quiz: [
                    {
                        question: (quizRaw.split('\n')[0] || '').replace('Q. ', ''),
                        options: quizRaw.match(/[A-D]\.\s*([^\n]+)/g) || [],
                        answer: (quizRaw.match(/Answer:\s*([A-D])/) || [])[1] || '',
                        explanation: ''
                    }
                ],
                quickRevision: revRaw.split('\n').filter(x => x.trim()),
                references: [refRaw.trim()]
            };
        }

        // Now read, append, and rewrite the batch files
        const batchesToUpdate = {
            'devopsContentBatch6': ['devops_ssl_tls', 'devops_package'],
            'devopsContentBatch12': ['devops_vulnerability_scanning', 'devops_fault_tolerance']
        };

        for (const [batchName, ids] of Object.entries(batchesToUpdate)) {
            const batchPath = `./src/data/${batchName}.js`;
            const currentExports = require(batchPath)[batchName];
            
            for (const id of ids) {
                currentExports[id] = allTopics[id];
            }
            
            let content = `export const ${batchName} = {\n`;
            for (const [id, tData] of Object.entries(currentExports)) {
                content += `  "${id}": ${JSON.stringify(tData, null, 4)},\n`;
            }
            content += '};\n';
            
            fs.writeFileSync(batchPath, content);
            console.log(`Updated ${batchName}`);
        }
        
    } catch (e) {
        console.error(e);
    }
}

parse();
