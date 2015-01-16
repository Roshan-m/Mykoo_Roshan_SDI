
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
Basic Structure of if statement, else statement

if(condition to test){
Code to run if the condition is true
} else {
 Code it run if condition is false
}
 */

 if(oldEnough){
  // Code inside of{} will run if the test is true
  // THis code will be skipped if test is false
  console.log("You can ride the coaster!");
 }

 console.log("What comes after the if statement.");

// If the kid is over 48 inches tall, then he can ride
 var kidHeight= 47;
// Create a variable for minimn height
 var minimumHeight = 48;
 // create a variable for shoe lift
 var shoeLift = 2;

 if(kidHeight + shoeLift > minimumHeight){
  console.log("You are tall enough to ride!");
 } else{
  // This code will run if the test is false
  console.log("Sorry you are not tall enough!");
 }


 // Whats ride can the kid go on based on his height?
 // If the kid is 48 + then Space Mountain
 // If 40+ then Buzz Lightyear ride
 // If anything short -Winnie the Pooh

 var childHeight = 50;

 if(childHeight>=48){
  console.log("You can ride the Space Mountain, Buzz Lightyear, & and Whinnie the Pooh!")

 }
 else if(childHeight>=40){
  console.log("You can ride the Buss Lightyear Ride & and Whinnie the Pooh!")

 }
else {
  console.log("You can only ride Whinnie the Pooh!")
 }

 /*
 If, else if, else statement

 if(condition1 to test){
 Code to run if condition1 is true.
 } else if(condition2 to test){

 Code to run if condition 2 is true.
 } else {

 }
  */