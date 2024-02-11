const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    let foundExtension = path.extname(filePath);
    if(expectedExtension === foundExtension){
        console.log(`File has the expected extension: ${foundExtension}`)
    }else{
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${foundExtension}`)
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png