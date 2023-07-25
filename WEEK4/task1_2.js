// const url = require('url');

// function resolveAbsoluteURL(baseURL, relativePath) {
//   // Using the url.resolve() method to combine the base URL and relative path
//   const absoluteURL = url.resolve(baseURL, relativePath);

//   console.log('Absolute URL:', absoluteURL);
// }

// // Example usage:
// const baseURL = 'https://www.example.com';
// const relativePath = 'subdirectory/page.html';
// resolveAbsoluteURL(baseURL, relativePath);

const url = require('url');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function resolveAbsoluteURL(baseURL, relativePath) {
  // Using the url.resolve() method to combine the base URL and relative path
  const absoluteURL = url.resolve(baseURL, relativePath);

  console.log('Absolute URL:', absoluteURL);
  rl.close();
}

// Get user input for the base URL and relative path
rl.question('Enter the base URL: ', (baseURL) => {
  rl.question('Enter the relative path: ', (relativePath) => {
    resolveAbsoluteURL(baseURL, relativePath);
  });
});
