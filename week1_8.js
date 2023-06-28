function errfun(number) {
    if (number < 0) {
      throw new Error("Number must be positive...");
    }
  
    return number;
  }
  
  try {
    var result = errfun(-5);

    document.write("Result: " + result);
    document.write("<br>");

  } catch (error) {

    document.write("Error: " + error.message);
    document.write("<br>");

  }