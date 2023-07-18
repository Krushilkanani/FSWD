function myFunction() {
    var localVar = "Local variable";
    let localLet = "Local let";
    const localConst = "Local const";

    document.write(localVar);
    document.write("<br>");

    document.write(localLet);
    document.write("<br>");

    document.write(localConst);
    document.write("<br>");
  
    
  }
  
  myFunction();
  
//   document.write(localVar);
//   document.write("<br>");

//   document.write(localLet);
//   document.write("<br>");

//   document.write(localConst);
//   document.write("<br>");

  console.log(localVar);    // Error: localVar is not defined
  console.log(localLet);    // Error: localLet is not defined
  console.log(localConst);  // Error: localConst is not defined