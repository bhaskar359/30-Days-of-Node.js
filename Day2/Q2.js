const fs = require('fs')

function writeToFile(filePath, content) {
    let fileName = filePath.split(['/','\\']).pop();
    fs.writeFile(filePath,content,'utf-8',(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log(`Data written to ${fileName}`)
        }
    })
}

writeToFile('../test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('../test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...