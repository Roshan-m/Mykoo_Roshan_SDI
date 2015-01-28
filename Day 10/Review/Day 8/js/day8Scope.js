/*
 Roshan Mykoo
 1-22-2015
 scopes
 */
//alert('test');

//Variable Scope
//Variables inside & outside of a function

//Try not to use the same variable names
//HOWEVER in large files this is going to be impossible

//Variables created inside of functions can only be seen inside of those functions

//create a variable for width in out main code
var width = 5; //scoped outside of the function - main rectangle
function calcPeri(){
    
    var width = 10;//Scoped to the function calcPeri
    console.log("Inside of the function the value of width is "+width);
    
    var height = 20;
    var perimeter= width*2 + height*2;
    console.log("Inside of function the perimeter is "+perimeter);
    
    
}

console.log("Before call "+width);

calcPeri();

console.log("After call "+width);

//Will not work!
//Can not access a variable declared inside of a function from you main code.
console.log("after call the perimeter is "+perimeter);