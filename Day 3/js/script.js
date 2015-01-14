/*
Roshan Mykoo
1/10/2015
Day 3 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see is this is connected!");

//Console.log - allows programmers to see information
console.log("This is the console.");


// Declare a variable
// Use the Keyword var
var whatever1;  // Declaration of a variable
whatever1 = 42; //Definition of a variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
a = a+3;
console.log(a);

var b;
b= a+3;
console.log(b);
console.log(a);

//Find our age
//Declare and define a variable
var yearOfBirth = 1995;
//age is calculated by current year minus year born
var currentYear = 2015;
var age = currentYear-yearOfBirth-1;
console.log(age);

//Math
// +, -, *, /

//Find area of triangle
// 1/2 * base * height
var base = 8;
var height = 10;
var areatriangle = 1/2*base*height;
console.log(areatriangle);


//Modulo - %
//Gives remainder
var remainder = 32%10
console.log(remainder);

//Find if even or odd
//Modulo by 2
//1 if it is odd
//0 if even
var evenOrOdd =  67%2;
console.log(evenOrOdd);



//Assignment Operators
/*
= Assignment
++ Adds 1 to the variable
-- Subtracts 1 from the variable
+= #number Addition Assignment
-+ #number Subtraction assignment
/+ #number Division assignment
*= #number Multiplication assignment

 */

//Formula for expression
counter++; // counter = counter + 1;
console.log(counter);

counter--; // -- is the same thing as counter - 1;
console.log(counter);

counter +=3; // counter = counter +3;
console.log(counter);

counter -=2; // counter = counter -2;
console.log(counter);

counter /= 2; // counter = counter /2;
console.log(counter);

counter *= 4; // counter = counter *4;
console.log(counter);


//String - is any text variable
// "Is used at the beginning and end of the string'
//Used to distinguish between variable name and random text
// single quotes ' double quotes " are both used, But both match ;

var kermit = "light green";
var frogName = "kermit";

console.log(frogName);


//Double quote or single quote?
// can use an escaping character \ blackslash in from od the apostrophe
var phrase =  'I don\'t know!';
console.log(phrase);


// Multi-lines by using \n - new line character
var phrase2 = "I don't know!\nYou never know!";
console.log(phrase2);


// Boolean
// Kind of like a light switch - either on or off
// true or false - Not "true" or "false"

var yes = true;
var nope = false;

// This is not a boolean
var wrong= "true";

//Order of operations
//PEMDAS
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction;

// Find quiz AVG
var quiz1 =87;
var quiz2 =100;
var quiz3 =70;

// Average - add them and then divide by how many there are
var average = (quiz1+quiz2+quiz3)/3;
console.log(average);

//Concatenation - combining text strings
// use the + plus sign for text and not just numbers

var firstName = "Kermit";
var lastName  = "The Frog";

//Concatenate the first and last name into a full name
var fullName = firstName+" "+lastName;
console.log(fullName);

console.log(fullName+" is my favorite muppet!");

var d = "6";
var e = "7";

var combine = d+e;
console.log(combine);

//Constant values are always uppercase
var PI = 3.14;


//Round to a decimal place
// toFixed(#) - # how many decimal places we want

var num = 5.123654789;
num = num.toFixed(2);
console.log(num);
