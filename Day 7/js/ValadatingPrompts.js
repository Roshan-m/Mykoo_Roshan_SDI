/*
Roshan Mykoo
SDI Campus
Valadationg Prompts
1-20-15
*/
//alert('test');
var userInput = prompt('Please type in your name:');


//Validating prompt with an conditional
if (userInput === "") {
    //User did not type anything is
    userInput= prompt("Please do not leave a blank, Type in you name?");
}

//Instead use a while loop!
//Check the input multiples as many as it takes

var firstName = prompt("Please type in your first name:");

while(firstName===""){
    //The user typed in nothing
    //Reprompt for first name
    firstName = prompt("please type in your first name and last name");
    
}

//Test to see if it is a number
//is NaN() - test what is inside of (). is it not a number?
//Numbers retuen false, everything else returns true


console.log(isNaN("monkey")); // Returns true
console.log(isNaN(7)); //Returns false


//Lets ask the user their age
var age = prompt("please enter your age");
//Validate that the user typed in a number
while(isNaN(age) || age ==="") {
    //This code runs anytime that the age is not a number
    //Reprompt the user for a number
    age=prompt("only enter in a number, please type in your age")
    
}


var choice = prompt("Please type in yes or no:")
//convert to lower case
choice = choice.toLowerCase();

while (choice !="yes" && choice!="no") {
    choice = prompt("Please type in yes or no")
}





