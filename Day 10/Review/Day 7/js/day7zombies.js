/*
Roshan Mykoo
SDI Campus
1-20-2015
Zombie attack
*/

//alert('test');

//Zombie attack
//There is a zombie at full sail
//It can bite 4 people a day and turn them into zombies
//The cdc wants to know how many zombies there will be in 8 days

var numZombies= 1; //How many zombies do we have?
var numBites= 4; //Number of bites per zombie per day
var days = 8; //Number of days
var dayTakes = 0;

for(var i=1; i<=days; i++){
    //How many new zombies get maid and when do they go bite people
    //they get bitten and then the next day they can bite
    //new zombies made everyday

var newZombies = numBites*numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    
    //Report at the end of the day
    console.log("There are "+numZombies+" zombies at the end of day #"+i+"!");
}


/*
//How many days will it take to reach a million zombies?
while(numZombies <=1000000){
    var newZombies = numZombies*numBites;
    
    numZombies += newZombies;
    
    dayTakes++;
}
console.log("It will take "+dayTakes+" days for 1,000,000");
    */