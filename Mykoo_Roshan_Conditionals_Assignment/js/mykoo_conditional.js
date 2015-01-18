 /*
Roshan Mykoo
SDI Campus
Conditionals Assignment
1-17-2015
*/

//alert("test");

//Can you afford an Xbox One, adding your money saved from  of work and from your last birthday,
// after you paid your rent?

 var payCheck = parseInt(prompt("Let's see if you can afford and Xbox One!\nPlease enter the amount of money you saved from your last paycheck."));
 var birthday = parseInt(prompt("Please enter the money saved from your birthday."));
 var rent = parseInt(prompt("What is your total rent for the month?"));


var totalSaved = payCheck  +birthday;
var moneyToSpend = totalSaved-rent;

var moneyLeft = moneyToSpend-350;

 if(moneyToSpend>350){
  console.log(alert("You are able to buy an Xbox One with"+" $"+moneyLeft+" "+"to spare!"));
 }else if (moneyToSpend<350 && moneyToSpend<rent) {
  console.log(alert("Sorry you cannot buy an Xbox One"));
 }

 (payCheck == "")? alert("You Did not input part of your information correctly,\n Please refresh and try again "):birthday;