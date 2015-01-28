/*
 Roshan Mykoo
 1-24-15
 SDI Campus
 Multiple
 */

//Prompt the user for a width and height
//calculate both area and perimeter of a rectangle

//First set up the area of rectagle functio

function areaRect (w,h) {
    //area of a rectangle if width*height
    var area =w*h;
    return area; 
    
}

//Setup perimeter function

function periRect(w,h){
    //perimeter is 2*w + 2*h;
    var perimeter = 2*w + 2*h;
    return perimeter; 
    
}

//Prompt the user for width and height
var width = prompt ("Please enter the width o your rectangle.");

while(width==="" || isNaN(width)){
    width = prompt("Please do not leave blank and only use numbers. \n what is the width.");
    
}

var height = prompt ("Please enter the height of your rectangle.");

while(height ==="" || isNaN(height)) {
    height = prompt("Please do not leave blan and only use numbers.\nWhat is the height.");
    
}

//Function call both function, one at a time

var resultArea = areaRect(width, height);
var resultPeri = periRect(width, height);

//report to user
console.log("the area of the rectangle is "+resultArea+" and the perimeter is "+resultPeri+".");


//Combines function ro calculate the perimenter and the area

function combinedRect(w,h){
    //calculate area
    var area = w*h;
    
    //calculate perieter
    var peri = 2*w + 2*h;
    
    // return both values.
    return [area, peri];
    
}

var combinedResults = combinedRect(width,height);
console.log(combinedResults[0]);