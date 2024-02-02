const fs = require('fs');

function writeToFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        console.log(`Data written to ${filePath}`);
    } catch (err) {
        console.error(`Error writing to file: ${err}`);
    }
}
 
writeToFile('Day 2/test-files/output1.txt', "Day 2 of Scaler Node.js challenge!");
writeToFile('Day2/test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
