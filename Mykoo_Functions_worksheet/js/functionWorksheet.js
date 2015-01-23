/*
 Roshan Mykoo
 1-22-2015
 SDI Campus Lab
 Function Worksheet
 */
//alert('test');



//Calculate the circumference of a circle.
function circumference(r){
    var formula = 2* Math.PI*r;
    return formula; 
    
}

//Call function
var results = circumference(5);

console.log("The circumfrence of the circle is "+ results.toFixed(2));


//Stung!
//It takes 8.666666667 be stings per pound to kill and animmal. Calculate how many bee stings are needed to kill an animal in function.
 
 function beeStings(p){
    var stingsPerPound = 8.666667; 
    var formula = stingsPerPound*p;
    return formula; 
    
 }
 
 //Prompt user for weight
 var animal = prompt("What animal would like to calculate its death in bee stings?");
 
 var pounds = prompt("Enter weight in Lbs to clacualte how many bee stings are leathal.");
 
 //Validate prompt
 while(isNaN(pounds) || pounds===""){
    prompt("Please type in a number\n What is your weight in Lbs?");
    
 }
 
 
 //parse variable
 pounds = parseInt(pounds);
 
 
 
 var results2 = beeStings(pounds)

console.log("It takes "+results2.toFixed(2)+" bee stings to kill a "+animal );
 
 
 