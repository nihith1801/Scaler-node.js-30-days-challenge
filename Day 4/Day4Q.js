const path = require('path');

function resolvePath(relativePath) {
    const absolutePath = path.resolve(relativePath);
    console.log(`Resolved Path: ${absolutePath}`);
}

// Test the function
resolvePath('Day 4/file1.txt');
resolvePath('nonexistent-folder/file.txt');
