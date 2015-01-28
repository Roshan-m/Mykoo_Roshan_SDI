/*
 Roshan Mykoo
 SDI Campus Lab
 Do While Loop
 1/20/2015
 */
 //alert('test');

var userInput;
userInput = parseInt(prompt("Please enter a number to test 'Do While Loops'"));

while(userInput==="" || isNaN(userInput)){
    userInput=parseInt(prompt("Whoops something went wrong! Please enter a number"));
}
do{
    console.log("The number you inputted will now be added by 1, your number is now :"+userInput);
    userInput++;

}while(userInput<=1000);