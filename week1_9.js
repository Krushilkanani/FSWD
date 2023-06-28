function simulateAsyncOperation(callback) {
    setTimeout(function() {
      
      var result = "Operation completed.";
  
      callback(result);
    }, 2000); 
  }
  
  function handleResult(result) {
    
    document.write("Result: " + result);
    document.write("<br>");

  }
  
  document.write("Starting asynchronous operation...");
  document.write("<br>");

  simulateAsyncOperation(handleResult);

  document.write("Asynchronous operation initiated.");
  document.write("<br>");
