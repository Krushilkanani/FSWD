const path = require('path');
const readline = require('readline');
const fs = require('fs').promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function areFilesSame(file1, file2) {
  try {
    // Get the absolute paths of the files
    const absolutePath1 = path.resolve(file1);
    const absolutePath2 = path.resolve(file2);

    // Check if the files exist
    const exists1 = await fs.access(absolutePath1).then(() => true).catch(() => false);
    const exists2 = await fs.access(absolutePath2).then(() => true).catch(() => false);

    if (!exists1) {
      console.log(`File '${file1}' does not exist.`);
      return;
    }

    if (!exists2) {
      console.log(`File '${file2}' does not exist.`);
      return;
    }

    // Check if the paths are the same
    const isSame = absolutePath1 === absolutePath2;
    console.log(`The files ${file1} and ${file2} ${isSame ? 'refer to the same file.' : 'do not refer to the same file.'}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
  
  rl.close();
}

rl.question('Enter the first file path: ', async (file1) => {
  rl.question('Enter the second file path: ', async (file2) => {
    await areFilesSame(file1, file2);
  });
});
