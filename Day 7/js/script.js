/*
 Roshan Mykoo
 1-20-15
 SDI Campus
 While loops
*/

//alert("test");

//Basic while loop
//The while loop. loops throught a black code as long as a condition is ture.

/*
var i = 0;
while(condition){
    Code that runs while condition is ture
    incremental change to the counting variable -
    OR infite loop;
}

*/

var counter = 0;//Initializing  counter

while(counter<20){
    //Code that will run as long as counter <20
    console.log(counter+" Something just never end");
    
    //Change for the counter variable
    counter++;
}


//Do while loop
//The code will run AT LEAST once before checking the contidion.

var i = 0;
do{
    //THis code will run before the condidtion is checked
    // it will slao as long as the condition is ture
    console.log("The number is "+i);
    i++;
    
}while(i<=10);