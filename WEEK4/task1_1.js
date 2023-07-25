const url = require('url');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (urlString) => {
  // Parse the URL
  const parsedUrl = new URL(urlString);

  // Extract the protocol, host, path, and query parameters
  const protocol = parsedUrl.protocol;
  const host = parsedUrl.host;
  const path = parsedUrl.pathname;
  const query = parsedUrl.searchParams;

  // Display the parsed components
  console.log('Protocol:', protocol);
  console.log('Host:', host);
  console.log('Path:', path);
  console.log('Query Parameters:', query.toString());

  rl.close();
});
