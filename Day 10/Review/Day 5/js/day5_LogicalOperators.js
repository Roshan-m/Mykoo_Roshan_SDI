/*
Roshan Mykoo
SDI Campus
1/15/2015
Logical Operators
*/

//alert("test");

/*
&& operator
t && t = t
t&&f=f
f&&t=f
f&&f=f

|| operator
t||t=t
t||f=t
f||t=t
f||f=f

!operator
!(true)=false
!(false)=ture
 */

//If the price of the 3DS is less than out budget, lets buy it
//And if our paycheck is over 500
var budget = 300;
var dsPrice = 169;
var payCheck= 600;

if(dsPrice<budget && payCheck > 500){
 console.log("Buy the 3DS!");

}else {
 console.log("Do not buy the 3DS!");
}

//Lets buy a smart tv if it is less than out budget OR we won the lottery

var tvPrice = 540;
var tvBudget = 500;
var wonLottery = false;

if(tvPrice<tvBudget || wonLottery){
 console.log("Let's go buy a tv");

} else {
 console.log("Stick with your small TV");
}