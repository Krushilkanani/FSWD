function findMinMaxSalary(salary) {
  
    var min = salary[0];
    var max = salary[0];
  
    for (var i = 1; i < salary.length; i++) {
      if (salary[i] < min) {
        min = salary[i];
      }
  
      if (salary[i] > max) {
        max = salary[i];
      }
    }
  
    return {
      min: min,
      max: max
    };
  }
  
  var salary = [50000, 60000, 45000, 70000, 55000];
  var result = findMinMaxSalary(salary);
  

  document.write("Minimum Salary: " + result.min);
  document.write("<br>");

  document.write("Maximum Salary: " + result.max);
  document.write("<br>");

  
