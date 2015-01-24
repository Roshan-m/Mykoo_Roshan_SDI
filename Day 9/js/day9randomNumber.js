/*
 *Roshan Mykoo
 *1-24-15
 *SDI Camups
 *Random Number
 */

//alert('test');

//Create variables for min and max value
var min = prompt("Please enter a min #");

//Validate our min prompt
while(isNaN(min)|| min===""){
    //Reprompt user for correct information
    min = prompt("Please do not leave blank and only use numbers.\nEnter a min #");
    
}

var max = prompt("Please enter a max #");
while(isNaN(max)|| max==="" || max<=min){
    
    if (isNaN(max)) {
        max = prompt("Please only use numbers.\nEnter a max #");
        
    }
    else if (max ==="") {
        max = prompt("Please do not leave blank.\nEnter a max #");
        
    } else {
        max = prompt("Max must be greater than Min.\nEnter a max #");
        
    }
    
    //Reprompt user for correct information
    max = prompt("Please do not leave blank and only use numbers.\nEnter a max #");
    
}


//Create function
function randomizer(mn,mx) {
    //Generate our random number
    var randomNum= Math.round(Math.random()*(mx-mn)+Number(mn));
    
    
    //Return that random number to our main code
    return randomNum;
}


//Function call but create a variable to catch the return value
var ranNum= randomizer(min, max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum);


//15 random numbers bweteen our min and max
//Create for loop
for (var i =0; i<15; i++){
    console.log(randomizer(min,max));
}


