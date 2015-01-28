/*
 Roshan Mykoo
 1-22-2015
 Functions
 
 */
//alert('test');

//function fuctionName(){code to be run}
//function call - "go button" = functionName();

//Creating a function that logs on to console "hello"

function printHello(){
    console.log("hello! you are inside the print hello function!");
    
}

//Function call to start our printHello function
printHello();

printHello();

printMore();
//Create a function to print more text
function printMore() {
    console.log("Inside of print more. Here is more text!");
}

printMore();

//Create a function that calculates the area of a rectangle

function calcArea() {
    //Creates variables for width, height and area
    var width = 20;
    var height= 30
    var area = width*height;
    console.log('The area is '+area);
}
calcArea();