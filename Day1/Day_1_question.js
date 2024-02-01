//importing fs module
const fs=require('fs');

//defining the function
function readFileContent(filePath)
{
    fs.readFile(filePath, 'utf8', (err,data)=>
    {
        //if error is found...
        if (err)
        {
            console.error(`File ${err} reading error!!!`);
        }
        //else continue and display the file data...
        else
        {
            console.log(`File content:\n${data}`);
        }
    });
}


readFileContent('file1.txt')
readFileContent('empty-file.txt')
readFileContent('non-existent-file.txt')