const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractFileExtension(filePath) {
  // Using the path.extname() method to get the file extension
  const extension = path.extname(filePath);

  return extension;
}

rl.question('Enter the file path: ', (filePath) => {
  const extension = extractFileExtension(filePath);
  console.log('File extension:', extension);
  rl.close();
});
