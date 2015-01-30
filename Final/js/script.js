/*
Roshan Mykoo
SDI Campus
1-29-2015
SDI Final - Practical
*/

//alert("test");

//Prompt the user for the cost of an item
var origianlPrice= prompt("Enter in cost of item");

//Validate the prompt is in fact a number and not left blank
while(origianlPrice ==="" || isNaN(origianlPrice)){
 origianlPrice= prompt("Please do not leave blank and only use numbers.\n Enter in the cost of item");
}

//Prompt the user for a Discount %, this number should be between 0-100
var discountNum= prompt("Enter in a number between 0 & 100 for a discount in percent.");

//Validate the prompt is in fact a number between those values and not left blank
while(discountNum === "" || isNaN(discountNum)){
    discountNum = prompt("Please do not leave blank and only use numbers.");
}
while(discountNum<0 || discountNum>100){
    discountNum = prompt("Please only use a number between 0 and 100");
}

//Create a function that will calculate the discounted cost of an product
//Use the cost and discount as the parameters
function discountPrice(cost, discount){
//Equation is discount = original cost * (discount%/100)
    var percent = cost * (discount/100);

//Discount price is original price - discount
    var price = origianlPrice-percent;
// Have the function return for the discount price
    return price;
}

//Create a function call, remember to use arguments and to catch the return
var results = discountPrice(origianlPrice,discountNum);

// console.log a text string that includes the returned price, original price, and the discount%. "The final cost of an item that cost $"++" with a discount of "++"% is $"++".")

console.log("The final cost of an item that cost $"+origianlPrice+" with a discount of "+discountNum+"% is $"+results+".");