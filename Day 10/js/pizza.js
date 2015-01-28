/*
Roshan Mykoo
SDI Campus
1-27-2015
Pizza functions
*/

//alert("test");

//Calculate how much pizza cost per sq inch and how much per slice
//propmt the use for
//radius of pizza
//cost of pizza
//# of slice per pizza

var pizzaRadius = prompt("What is the radius of your pizza?");
//validate prompt
while(pizzaRadius ==="" || isNaN(pizzaRadius)){
  //reprompt the user
 pizzaRadius = prompt("pleae do not leave blank and only use numbers\nwhat is the radius of your pizza");
}

//do while validation
do{
 //prompt user
 var pizzaCost= prompt("How much does your pizza cost in total?");
}while(pizzaCost ==="" || isNaN(pizzaCost));

var pizzaSlices = prompt("how many slices are in your pizza?");

while(pizzaSlices ==="" || isNaN(pizzaSlices)){
 pizzaSlices = prompt("Please do not leave blank and only answer in numbers,\n how many slices are in your pizza?");
}


//function call that starts lord function
var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);


console.log("Your pizza per sq in cost "+results[0]+" that comes out to "+results[1]+" per slice");

//Create function that will start all other function
function lordFunction(radius,cost,slices){
 //calculate area
  var area = pizzaArea(radius);
 //calculate cost per area
  var areaCost = pizzaSqInCost(cost, area);
 //calculate price per slice
  var slicePrice= pricePerSlice(cost, slices);

 //return area cost and slice per price
 return [areaCost,slicePrice];
}




//Create function that calculates the area of the pizza
function pizzaArea(r){
   //area PI * r * r
   var area = Math.PI*r* r;
       return area;
}

//create function that calculates the price per square inch of pizza
function pizzaSqInCost(price,area){
   //price / area
   var costPerIn = price/area;
   //round to 2 decimal
   costPerIn = costPerIn.toFixed(2);
 return costPerIn;
}

//Function that calculates the price per slice
function pricePerSlice(price, slice){
 var costPerSlice = price/slice;
  costPerSlice = costPerSlice.toFixed(2);
 return costPerSlice;

}







