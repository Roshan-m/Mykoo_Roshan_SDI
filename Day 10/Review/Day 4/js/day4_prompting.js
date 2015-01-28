/*
Roshan Mykoo
SDI Campus
1-13-2015
Prompting
*/

//alert("test");


//Ask user for input - prompt();
// Save the user's response - by creating a variable
var userInput = prompt("Enter your year of birth");
console.log(userInput);

//Calculate the area of a rectangle
// area = length * with

// Create 2 variables and prompt the user for length and with
var length = prompt("Please enter in length");
var width = prompt("Please enter in with");

//calcukate area
var areaRect = length*width;
console.log(areaRect);

var length2 = prompt("Let's calculate the area of a rectangle. \n Please enter in length");
var width2 = prompt("Please enter in with");

var areaRect2 = length2 * width2;
console.log("The area of your rectangle with a length of"+" "+length+" "+"and a width of"+" "+width+" "+"is"+" "+areaRect2);