/*
Roshan Mykoo
SDI Campus
Casting
*/
//alert("test");

//Casting one variable type to be another variable type
var stringVar = "6";
var reaults = 7 + stringVar;
console.log(reaults);

//Number(variable or value to cast) _ treats anything
var castingResults = 7 + Number(stringVar);
console.log(castingResults);

//String() - anything inside () is treated as a text string
var areaCode = 407;
var firstPart = 203;
var secondPart = 1234;

var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
console.log(phoneNumber);

var phoneNumber2 = "(" + String(areaCode)+")-"+String(firstPart)+"-"+String(secondPart);
console.log(phoneNumber2);

var phoneNumber3 = "("+areaCode+ ")-"+firstPart+ "-"+secondPart;
console.log(phoneNumber3);


// Parsing Integers
//parseInt() - it looks through a text string and returns an Integer.
// Only the first number in the string is returned.
//Text string has to start with a number
// Leading and trailing spaces are allowed
// if it can't find the integer then it returns NaN
//NaN - Not a Number

var a = parseInt("40 years old");
console.log(a);
var b = parseInt("I am 40 years old");
console.log(b);

var c = Number("40 years old");
console.log(c);


//Prompts ONLY return strings
var shoesHad = prompt("How many pairs of shoes did you own before?");
var shoesBought = prompt("How many pairs of shoes did you buy?");
var totalshoes = parseInt(shoesHad) + parseInt( shoesBought);
console.log(totalshoes);


5%2;
console.log(5%2);
