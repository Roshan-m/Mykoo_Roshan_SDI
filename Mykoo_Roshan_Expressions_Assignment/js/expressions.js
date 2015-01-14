
 /*
Roshan Mykoo
SDI Campus - Lab
Expressions Assignment.
*/

//alert("test");


 //User prompts asking for the sides of a trapezoid
var height = prompt("We are calculating the area of a trapezoid.\n Please provide one side of a trapezoid.");
 height=parseInt(height);
 var base = prompt("Please enter in a base for the trapezoid");
 base = parseInt(base);
 var base2 = prompt("Please enter a width for the trapezoid");
 width = parseInt(base2);

 //Array
 var volumeFormula = [height,base,base2];


//Assignment operators
 var x; // used as variable for formula
 var total;
 x = volumeFormula[0] *= volumeFormula[1];

 total = x *= volumeFormula[2];

console.log(total);
 console.log(alert("The area of your trapezoid is"+" "+total+" "+"Units squared"));
// (h*b*L)