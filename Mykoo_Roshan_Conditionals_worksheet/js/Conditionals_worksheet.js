 /*
Roshan Mykoo
SDI Campus
Conditionals worksheet
1-15-2015
*/

//alert("test");
/*
//Last Chance for Gas!
//A driver has to determine if they can make it across the desert with their current fuel.
//They are about to past the last gas station for the next 200 miles and they need to determine
//whether they should stop now for gas or not.

var mpg=prompt("Let's see if your car can make it to the next gas station with out refueling. \nEnter MPG of Vehicle");
var tankCapacity=prompt("Enter fuel tank capacity.");
var gasPercent=(prompt("Enter the current fuel level(%)")/100);
var fuelLeft=(tankCapacity*gasPercent);//Formula
var milesLeftInTank=(fuelLeft*mpg);


console.log(fuelLeft);
console.log(milesLeftInTank);
(milesLeftInTank>200)? console.log("Yes, you can make it without stopping for gas!"):console.log("You only have "+milesLeftInTank.toFixed(2)+" gallons of gas in your tank, better get gas now while you can!");
*/


/*
 //Grade Letter Calculator
 // Asking user for grade
 // If #>= 90 then A
 // If #>= 80 then B
 // If #>=70 then C
 // if #<70 then F

 var grade =prompt("Enter your number current grade to \n calculate your current letter grade.");

 if(grade>=90){
  console.log("You have a "+grade+"%, which means you have earned a(n) A in the class!");
 }
 else if(grade>=80){
  console.log("You have a "+grade+"%, which means you have earned a(n) B in the class!");
 }
 else if(grade>=70){
  console.log("You have a "+grade+"%, which means you have earned a(n) C in the class!");
 }
 else {
  console.log("You have a "+grade+"%, which means you have earned a(n) F in the class!");
 }
*/

//Movie Ticket Price
//Age of viewer
// Time of movie
// Provide ticket price

var ageOfView = prompt("To view the price of your ticket please enter\n The age of viewer");
 var timeOfMovie= parseInt(prompt("Enter your time of movie"));

 if(ageOfView>=55){
  console.log("Your movie ticket will be $7.00");
 }
 else if(ageOfView<10) {
  console.log("Your movie ticket will be $7.00");
 } else {
  console.log("Your movie ticket will be $12.00");
 }

 if(timeOfMovie>5){
  console.log("Your movie ticket will be $12.00");
 }
 else if(timeOfMovie<3){
  console.log("Your movie ticket will be $12.00");
 }
 else{
  console.log("Your movie ticket will be $7.00")
 }