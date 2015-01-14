/*
Roshan Mykoo
SDI Campus
1/13/2015
Day 4 In class assignment
 */

//alert("test")

//Let's create a basic array

var avengersNames = ["Thor","Hulk","Captain America","Iron Man"];
console.log(avengersNames);

console.log(avengersNames[1]);

//Switch a team member - iron man for spiderman
avengersNames[2] ="Spiderman";
console.log(avengersNames);

//Add team member
avengersNames[4] = "Black Widow";
console.log(avengersNames);

// use a variable as a index#
var num = 2;
console.log(avengersNames[num]);

//Length property
//Dot syntax - Fancy for use a period
console.log(avengersNames.length);

//Last index number is the length -1 of an array

avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);


var orangeBins = [12, 20, 14];

//how many bins did we pick in total

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log("Total number of orange bins is"+" "+total);

//Advanced array
var fruitBowl = ["orange", "tomato", "strawberry"];

//Property - length - how many items are in the array
console.log(fruitBowl.length+" "+"items in our fruit bowl");

//Method of arrays

//Push - inserts item at the end of our array
// arrayName.push(item to push);

fruitBowl.push("apple");
console.log(fruitBowl);

fruitBowl.push("kiwi");
console.log(fruitBowl);

//pop - takes off the last item in an array and returns it
// arrayName.pop()
var caught = fruitBowl.pop();
console.log(fruitBowl);

console.log(caught);

fruitBowl.pop();
console.log(fruitBowl);

var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

//splice - used for removing or adding items into an exsisting array
//arrayName.splice(index# position to start from, # of items to remove, items to put in
fruitBowl.splice(2,0,"banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"kiwi");
console.log(fruitBowl);

//Adding more items
fruitBowl.splice(1,0,"tangerine","babbo","Grapes");
console.log(fruitBowl);
