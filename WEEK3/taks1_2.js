const os = require('os');

function displayMemoryInfo() {
  // Get the total system memory
  const totalMemory = os.totalmem() / (1024 ** 3);

  // Get the free memory
  const freeMemory = os.freemem() / (1024 ** 3);

  // Calculate the percentage of free memory available
  const percentageFree = (freeMemory / totalMemory) * 100;

  // Display the memory information
  console.log('Total System Memory:', totalMemory.toFixed(2), 'GB');
  console.log('Free Memory:', freeMemory.toFixed(2), 'GB');
  console.log('Percentage of Free Memory Available:', percentageFree.toFixed(2), '%');
}

// Call the function to display the memory information
displayMemoryInfo();
