const fs = require("fs");

const PATH = "../test-files/non-existing.txt";

function readFileContent(filePath) {
  fs.readFile(filePath,'utf-8',(err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}


readFileContent(PATH);
