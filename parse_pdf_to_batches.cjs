const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'C:/Users/ganes/.gemini/antigravity-ide/brain/6a3bccf7-b18d-4c3b-9516-e4f0574366f1/.user_uploaded/media_1786800243033.pdf';
const chapters = require('./devops_chapters.json');

let pdfData = null;

async function parse() {
    let dataBuffer = fs.readFileSync(pdfPath);
    try {
        pdfData = await pdf(dataBuffer);
        const text = pdfData.text;
        
        let allTopics = {};
        
        for (let i = 0; i < chapters.length; i++) {
            const chap = chapters[i];
            const currentTitleMatch = chap.title; 
            const nextChap = chapters[i+1];
            
            // Find start of current chapter
            const startIndex = text.indexOf(currentTitleMatch + '\nDifficulty');
            let endIndex = text.length;
            if (nextChap) {
                const nextTitleMatch = nextChap.title;
                endIndex = text.indexOf(nextTitleMatch + '\nDifficulty', startIndex);
                if (endIndex === -1) {
                    endIndex = text.indexOf(nextTitleMatch, startIndex + 10);
                }
            }
            
            if (startIndex === -1) {
                console.log("Could not find:", currentTitleMatch);
                continue;
            }
            
            if (endIndex === -1) endIndex = text.length;
            
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
            const refRaw = extract('13. References\n', null);
            
            // Build the object
            const obj = {
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
                references: refRaw.split('\n').filter(x => x.trim() && x.includes('http'))
            };
            
            allTopics[chap.id] = obj;
        }

        // Now save to 13 batches
        const BATCH_SIZE = 25;
        const batchCount = Math.ceil(chapters.length / BATCH_SIZE);

        for (let i = 0; i < batchCount; i++) {
            const batchTopics = chapters.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE);
            const batchName = 'devopsContentBatch' + (i + 1);
            
            let content = 'export const ' + batchName + ' = {\n';
            
            for (const topic of batchTopics) {
                const tData = allTopics[topic.id];
                if (tData) {
                    content += `  "${topic.id}": ${JSON.stringify(tData, null, 4)},\n`;
                }
            }
            
            content += '};\n';
            fs.writeFileSync(`src/data/${batchName}.js`, content);
        }
        
        console.log("SUCCESSFULLY EXTRACTED AND WRITTEN PDF TO BATCHES!");
    } catch (e) {
        console.error(e);
    }
}

parse();
