
 /*
Roshan Mykoo
SDI Campus - Lab
Expressions Assignment.
*/

//alert("test");


 //User prompts asking for the sides of a trapezoid
var height = parseInt(prompt("We are calculating the area of a trapezoid.\n Please provide one side of a trapezoid."));

 var base = parseInt(prompt("Please enter in a base for the trapezoid"));

 var base2 = parseInt(prompt("Please enter a width for the trapezoid"));


 //Array
 var areaFormula = [height,base,base2];



//Assignment operators
 var x;
 var y;// used as variable for formula
 var total;
 x = areaFormula[1]+= areaFormula[2];
y = x /= 2;
 total = y * areaFormula[0];

 //total = areaFormula[1]*areaFormula[0]
console.log(total);
//console.log(total);
 console.log(alert("The area of your trapezoid is"+" "+total+" "+"Units squared"));
