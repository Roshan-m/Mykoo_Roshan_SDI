/*
 Roshan Mykoo
 1-24-15
 SDI Campus
 Anon
 
 */

//Anonymous Functions
//Widely used in JS and jQuery
//Important in Object Oriented Program
//Can be used interchangeably with normal functions if done right

//Very quick and easy
// save on memory

/*
 Basic structure of anon function
var functionName= function(parameters){
    code to run goes here
}

 */
//Function call before the normal function is defined

var results2 = triArea(6,7);
console.log("Before the function results2 is "+results2);


//create a normal function for area of triangle
function triArea(b,h){
    //area = 1/2*b*h
    var area = .5*b*h;
    return area; 
    
}
// function call
var results1 = triArea(5,6);
console.log(results1);




// Create an anonymous function that calc the area of a triangle

var triAreaAnon = function (b, h) {
    var area = .5*b*h;
    return area; 
};

//Function call after defined of anon function
var results3 = triAreaAnon(4,5);
console.log("Results of anonymous function after defined is "+results3);










