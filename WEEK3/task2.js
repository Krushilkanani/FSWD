// Example with chalk module
const chalk = require('chalk');

function displayColoredText() {
  console.log(chalk.blue('This is a blue text.'));
  console.log(chalk.green.bold('This is a bold green text.'));
  console.log(chalk.yellow.bgRed('This is a yellow text on a red background.'));
}

// Call the function to display colored text
displayColoredText();

console.log('--------------------------------------');

// Example with upper-case module
// const upperCase = require('upper-case');

// const text = 'convert me to uppercase';

// const uppercasedText = UpperCase(text);

// console.log(`Original Text: ${text}`);
// console.log(`Uppercased Text: ${uppercasedText}`);
