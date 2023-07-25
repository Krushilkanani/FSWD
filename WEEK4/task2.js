const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractQueryParams(urlString) {
  const parsedUrl = url.parse(urlString);
  const queryParams = querystring.parse(parsedUrl.query);
  return queryParams;
}

rl.question('Enter the URL with the query string: ', (inputURL) => {
  const queryParams = extractQueryParams(inputURL);
  console.log('Extracted key-value pairs:');
  console.log(queryParams);
  rl.close();
});
