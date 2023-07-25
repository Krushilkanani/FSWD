const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractDirectoryAndBaseName(filePath) {
  // Using the path.dirname() method to get the directory name
  const directoryName = path.dirname(filePath);

  // Using the path.basename() method to get the base name
  const baseName = path.basename(filePath);

  return { directoryName, baseName };
}

rl.question('Enter the file path: ', (filePath) => {
  const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);
  console.log('Directory name:', directoryName);
  console.log('Base name:', baseName);
  rl.close();
});
