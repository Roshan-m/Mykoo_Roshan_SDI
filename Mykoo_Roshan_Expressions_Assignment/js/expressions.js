
 /*
Roshan Mykoo
SDI Campus - Lab
Expressions Assignment.
*/

//alert("test");


 //User prompts asking for the sides of a rectungular prism
var height = prompt("We are calculating the volume of a Rectangular Prism.\n Please provide one side of a Prism");
 height=parseInt(height);
 var base = prompt("Please enter in a base for the prism");
 base = parseInt(base);
 var width = prompt("Please enter a width for the prism");
 width = parseInt(width);

 //Array
 var volumeFormula = [height,base,width];


//Assignment operators
 var x; // used as variable for formula
 var total;
 x = volumeFormula[0] *= volumeFormula[1];

 total = x *= volumeFormula[2];

console.log(total);
 console.log(alert("The Volume of your rectangular prism is"+" "+total+" "+"Units Cubed"));
// (h*b*L)