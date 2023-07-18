function operations(a,b){
    var sum = a+b;
    var dif = a-b;
    var mul = a*b;
    var div = a/b;
    
    return{
        sum: sum,
        dif: dif,
        mul: mul,
        div: div
    };

}

var result = operations(10,20);

document.write("Variables are 10, 20");
document.write("<br>");

document.write("sum : " + result.sum);
document.write("<br>");

document.write("dif : " + result.dif);
document.write("<br>");

document.write("mul : " + result.mul);
document.write("<br>");

document.write("div : " + result.div);
document.write("<br>");


