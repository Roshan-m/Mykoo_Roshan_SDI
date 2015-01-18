//alert("JavaScript works!");

/*
 Roshan Mykoo
 SDI 1501
 Day6
 */

// Is my Steak done?

/*
120 and under is undercoocked
120-124 - steak is rare
125-129 - steak is medium-rare
130-139 - steak is medium
140-149 - steak is meidum-well
150-165 - steak is well done
>165 is burnt to a crisp 
 */

//var steakTemp= 135;
//var steakDone;
//
//
//if(steakTemp<120){
//    steakDone="Steak is not done yet.";
//}
//else if (steakTemp<=124) {
//    steakDone="Rare steak.";
//}
//else if (steakTemp<=129) {
//    console.log("Medium-rare.");
//}
//else if (steakTemp<=139) {
//    console.log("Medium.");
//}
//else if (steakTemp<=149){
//    console.log("Medium-well");
//}
//else if (steakTemp<=165) {
//    console.log("Well done.");
//}
//else {
//    console.log("burn to a crisp");
//    }
//    
//// get outside temperature
//var airTramp = prompt("What's the temperature outisde?","65");
//    
////create the variable for the water temperature
//var waterTemp;
//
//// Conditional to see what we're doing
//if (airTramp>=85) {
//    console.log("lets go to the beach!");
//    waterTemp = parseInt(prompt("what's the temperature of the water?", "75"));
//
//if (waterTemp>= 75){
//    console.log("Let's get in the water!");
//} else {
// console.log("Let's Build a sandcastle");
//}
//    
//}
//else {
//    console.log("we're going to the movies");
//}
//
//waterTemp = parseInt(prompt("what's the temperature of the water?", "75"));
//
//if (waterTemp>= 75){
//    console.log("Let's get in the water!");
//} else {
// console.log("Let's Build a sandcastle");
//}
//
//



//round()
//normal rounding .5up

var num1 = 9.4444
console.log(num1);
num1 = Math.round(num1)
console.log(num1);

//floor()
// rounds down to nearest whole number
var num2 = 6.1
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

//ceil()
// rounds up to next wholenumber
var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

//random()
// returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log(num4);

//Random number betwwen two numbers
// Math.random() * (max-min) + min
var num5 = Math.round(Math.random() * (80 - 50) +50);
console.log(num5);


var arrOfItem = ["Chips Ahoy", "Oreos", "Thin Mints"]
var randomCookie= Math.round(Math.random() * ( arrOfItem.length-1));

console.log("My current favorite is "+ arrOfItem[randomCookie]);
    
    
console.log(Math.PI);

    
    
    
    
    
    