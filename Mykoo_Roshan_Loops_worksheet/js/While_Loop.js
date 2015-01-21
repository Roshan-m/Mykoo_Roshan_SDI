/*
Roshan Mykoo
SDI Campus
While Loop
1/20/2015
*/

//alert("test");

var userInput= parseInt(prompt("We are testing a While Loop,\n Please enter a random number between 0 and 100!"));
console.log(userInput);

while(userInput==="" || userInput>100){
    userInput=parseInt(prompt("You did not enter a number between 0 and 100 please try again"));
}
while(userInput<=100) {
    console.log(userInput + " While loop example");
    userInput++;
}