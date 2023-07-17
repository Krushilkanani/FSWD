const os = require('os');

function displayUserInfo() {
  // Get the username
  const username = os.userInfo().username;

  // Get the home directory
  const homeDir = os.homedir();

  // Get the operating system platform
  const platform = os.platform();

  // Display the user information
  console.log('Username:', username);
  console.log('Home Directory:', homeDir);
  console.log('Operating System Platform:', platform);
}

// Call the function to display the user information
displayUserInfo();
