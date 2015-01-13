/*
Roshan Mykoo
SDI Campus
1/13/2015
Day 4 In class assignment
 */

//alert("test")

//Let's create a basic array

var avengersNames = ["Thor","Hulk","Captain America","Iron Man"];
console.log(avengersNames);

console.log(avengersNames[1]);

//Switch a team member - iron man for spiderman
avengersNames[2] ="Spiderman";
console.log(avengersNames);

//Add team member
avengersNames[4] = "Black Widow";
console.log(avengersNames);

// use a variable as a index#
var num = 2;
console.log(avengersNames[num]);

//Length property
//Dot syntax - Fancy for use a period
console.log(avengersNames.length);

//Last index number is the length -1 of an array

avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);
