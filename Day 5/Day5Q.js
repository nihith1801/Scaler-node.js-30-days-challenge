const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    const ext = path.extname(filePath);
    //Checking the extention of the file...
    if (ext === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${ext}`);
    }
}

//Tesing our function...
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.jpg', '.png');
