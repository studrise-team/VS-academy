const fs = require('fs');
const path = require('path');

async function fixBatch(batchNum) {
    const fileName = `javaContentBatch${batchNum}.js`;
    const filePath = path.join(__dirname, 'src', 'data', fileName);
    
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${fileName}, does not exist.`);
        return;
    }

    try {
        // Use dynamic import to load the module
        const moduleUrl = `file://${filePath}`;
        const imported = await import(moduleUrl);
        const exportName = `javaContentBatch${batchNum}`;
        const data = imported[exportName];

        if (!data) {
            console.error(`Export ${exportName} not found in ${fileName}`);
            return;
        }

        // Iterate through all topics in the batch
        for (const [topicId, content] of Object.entries(data)) {
            // Fix commonMistakes
            if (typeof content.commonMistakes === 'string') {
                const mistakes = content.commonMistakes.split('\n').map(m => m.replace(/^❌\s*/, '').trim()).filter(m => m);
                content.commonMistakes = mistakes.map(m => ({ error: m, code: '', suffix: '' }));
            }

            // Fix bestPractices
            if (typeof content.bestPractices === 'string') {
                content.bestPractices = content.bestPractices.split('\n').map(m => m.trim()).filter(m => m);
            }

            // Fix practiceExercise
            if (typeof content.practiceExercise === 'string') {
                const expectedOutput = content.expectedPracticeOutput || 'Expected output not provided';
                content.practiceExercise = {
                    task: content.practiceExercise,
                    solution: expectedOutput
                };
            }
            
            // Fix summary
            if (typeof content.summary === 'string') {
                content.summary = content.summary.split('\n').map(s => s.trim()).filter(s => s);
            }

            // Delete expectedPracticeOutput as it's now in solution
            if (content.expectedPracticeOutput !== undefined) {
                delete content.expectedPracticeOutput;
            }
        }

        // Write back to file
        const newFileContent = `export const ${exportName} = ${JSON.stringify(data, null, 2)};\n`;
        fs.writeFileSync(filePath, newFileContent, 'utf8');
        console.log(`Successfully fixed ${fileName}`);

    } catch (err) {
        console.error(`Error processing ${fileName}:`, err);
    }
}

async function run() {
    for (let i = 1; i <= 13; i++) {
        await fixBatch(i);
    }
    console.log("Done fixing all batches!");
}

run();
