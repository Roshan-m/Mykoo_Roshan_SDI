/*
 Roshan Mykoo
 1/10/2015
 MDV2330L - Lab Instructional Assignment: Expressions
 */
console.log('Roshan Mykoo \n 1/10/15');

//Problem 1 : Slice	of	Pie	part	1;
var slicesPerPizza;
slicesPerPizza= 8;
var peopleAtParty;
peopleAtParty= 7;
var numberOfPies;
numberOfPies= 5;

var numberOfSlicesPerPerson;
numberOfSlicesPerPerson =(slicesPerPizza*numberOfPies)/7;//Equation
console.log("Each person ate"+" "+numberOfSlicesPerPerson.toFixed(2)+" "+"slices of pizza at the party")//Answer

//Problem 1 : Slice	of	Pie part	II;
var slicesPerPizza;
slicesPerPizza= 8;
var peopleAtParty;
peopleAtParty= 7;
var numberOfPies;
numberOfPies= 5;

var slicesPerPerson;
slicesPerPerson= 5.71

var numberOfSlicesForSparky;
numberOfSlicesForSparky=(slicesPerPizza*numberOfPies)/slicesPerPerson-peopleAtParty;//Equation

console.log("Sparky	got"+" "+numberOfSlicesForSparky.toFixed(4)+" "+"slices of pizza.");//Answer

