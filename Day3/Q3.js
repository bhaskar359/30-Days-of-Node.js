const { exec } = require("child_process");

function executeCommand(command) {
    exec(command,(error,stdout,stderr)=>{
        if(error){
            console.error(`Error Message:\n${error.message}`);
            return;
        }
        if(stderr){
            console.log(`Command Error: \n${stderr}`);
            return;
        }
        console.log(`Command Output: \n${stdout}`);
    })
}

executeCommand("ls -la");
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
