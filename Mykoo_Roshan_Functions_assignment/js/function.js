/*
 Roshan Mykoo
 SDI Campus lab
 1-24-2015
 Functions Assignment
 */

//Calculate the volume of a rectangular pyramid

var baseLength = prompt("We are calculating the Volume of a Pyramid\nPlease enter in the Base length of the pyramid.");
//validate
while(isNaN(baseLength)|| baseLength===""){
    //Reprompt user for correct information
    baseLength = prompt("Please do not leave blank and only use numbers.\nEnter the Base Length of the pyramid.");
}

var baseWidth = prompt("Please enter in the Base Width of the pyramid.");
//validate
while(isNaN(baseWidth)|| baseWidth===""){
    //Reprompt user for correct information
    baseWidth = prompt("Please do not leave blank and only use numbers.\nEnter the Base Width of the pyramid.");
}

var height = prompt("Please enter in the Height of a pyramid.");
//validate
while(isNaN(height)|| height===""){
    //Reprompt user for correct information
    height = prompt("Please do not leave blank and only use numbers.\nEnter the Height of the pyramid.");
}

//Create function
function volumePyr(l,w,h){
    //formula
    var multiply= l*w*h;
    //Return variable
    return multiply;
}
var product = volumePyr(baseLength,baseWidth,height);
//console.log(product);

var formulaPart2 = function (x){
    var divide= x/3;
    return divide;
}

var result= formulaPart2(product);
console.log("The Volume of the pyramid is"+" "+result+" "+"Units Cubed."); 





