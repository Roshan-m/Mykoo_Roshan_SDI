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

//Problem 2: Average shopping bill
//5 Shopping Days
var shoppingDay1;
shoppingDay1 = 101.75;
var shoppingDay2;
shoppingDay2 = 35.00;
var shoppingDay3;
shoppingDay3 = 150.00;
var shoppingDay4;
shoppingDay4 = 20.50;
var shoppingDay5;
shoppingDay5 = 34.00;

var averageWeeklySpent;
averageWeeklySpent = (shoppingDay1+shoppingDay2+shoppingDay3+shoppingDay4+shoppingDay5)/5;

var totalWeeklySpent;                                                                       // Equations
totalWeeklySpent= shoppingDay1 + shoppingDay2 + shoppingDay3 + shoppingDay4 + shoppingDay5; //Answer
console.log("You have spent a total	of"+" $"+totalWeeklySpent+" "+"on groceries over 5 weeks. That is an average of"+" $"+averageWeeklySpent+" "+"per week");
