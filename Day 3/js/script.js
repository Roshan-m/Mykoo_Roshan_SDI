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

var counter = 1;
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
