/*
roshan mykoo
1-22-15
returns

 */

//alert('test');
//Create a function calculate the area for the rectangle
function calcArea(w,h){
    
    var area = w*h;
    //console.log(area);
    //Return the area value to the main code
    return area; 
}

//functioin call
calcArea(77,9);

var returnedArea = calcArea(77,9);

//This Does not work!
//console.log(area);
console.log(returnedArea);


//Create a function to calc the area of a circle
//area = pi*r*r
function circlearea(radius){
    var area = Math.PI * radius*radius;
    //Return this area
    return area;
    
    
}

//functioncall
var result = circlearea(6);

console.log('The are of the circle is '+result);

//Had two circles with the same radius. what is the total area
var twoArea = result*2;

console.log("the area of both circles is "+twoArea.toFixed(2));

var result2= circlearea(3);
console.log("the area of a circle with a radius of 3 is "+result2);


//prompt user for radius then calculate the area

var userRad = prompt("Please type in a radius:");

//Validate prompt
while(isNaN(userRad) || userRad===""){
    userRad= prompt("please only use numbers\n type in a radius");
    
}

//parse the variable
userRad = parseInt(userRad);

//create a variable to catch the results
var userResults = circlearea(userRad);

console.log("The area of your circle with a radius of "+userRad+" is "+userResults);








