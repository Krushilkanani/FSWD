const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkFileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Error: File '${filePath}' does not exist.`);
    } else {
      console.log(`Success: File '${filePath}' exists.`);
    }
    rl.close();
  });
}

rl.question('Enter the file path: ', (filePath) => {
  checkFileExists(filePath);
});
