const { exec } = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Command Output:\n${stdout}`);
    });
}

executeCommand(`ls  -la`);  

executeCommand('echo "Hello, Node.js!"');
