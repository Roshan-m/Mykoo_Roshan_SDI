
 /*
Roshan Mykoo
SDI Campus
Conditional
1/15/2015
*/

//alert("test");

// Basic Condition Statement
// Create a boolean variable to test
var oldEnough = true;

// If the child is old enough, then print to the console, You can Ride!

/*
Basic Structure of if statement

if(condition to test){
Code to run if the condition is true
}
 */

 if(oldEnough){
  // Code inside of{} will run if the test is true
  // THis code will be skipped if test is false
  console.log("You can ride the coaster!");
 }

 console.log("What comes after the if statement.");

// If the kid is over 48 inches tall, then he can ride
 var kidHeight= 30;

 var minimumHeight = 48;

 if(kidHeight> minimumHeight){
  console.log("You are tall enough to ride!");
 } else{
  // This code will run if the test is false
  console.log("Sorry you are not tall enough!");
 }
