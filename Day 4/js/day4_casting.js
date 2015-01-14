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