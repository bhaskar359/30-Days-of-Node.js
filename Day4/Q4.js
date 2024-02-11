const path = require('path');

function resolvePath(relativePath) {
    let obsolutePath = path.resolve(relativePath);
    console.log(`Resolved Path: ${obsolutePath}`);
}

resolvePath('../project/folder/file.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt