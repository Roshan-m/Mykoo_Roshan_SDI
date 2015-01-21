/*
Roshan Mykoo
SDI Campus
While Loop
1/20/2015
*/

//alert("test");

var userInput= parseInt(prompt("We are testing a While Loop,\n Please enter a random number!"));

while(userInput === ""){
    userInput = parseInt(prompt("You did not enter the proper information, please enter again."));
}

while(userInput)