/*
 Roshan Mykoo
 1-24-15
 Procedure
 */

//alert('test');

//This is a basic function
function calcArea(width, height) {
    var area = width*height;
    return area; 
}
//Function call
//create a variable to catch result

var results = calcArea(4,5);
console.log(results);

//This is a procesure
//It does not return a value
//list of steps

function calcAreaP(width, height){
    //Calculation
    var area = width * height
    console.log(area);
    //it will not have a return
    
}
//function call for procedure
calcAreaP(6,7);