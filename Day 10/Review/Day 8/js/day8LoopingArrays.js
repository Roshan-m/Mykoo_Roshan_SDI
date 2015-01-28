/*
 Roshan Mykoo
 1-22-2015
 Looping arrays
 
 */
//alert('test');

//Basic Strusture of for lop over array
//for(var i = 0; i<array.length; i++){}

//Create an array of Scooby Doo characters
var names = ["Scooby","Shaggy","Velma","Fred"];

//Loop through the whole array and tell each one that they solved a case

for (var i=0; i<names.length; i++) {
    console.log(i);
    console.log(names[i]);
    console.log("You solved the case "+names[i]);
}


//Create an array of bills and add them up

var bills=[50,10,5,20,10];
var totalBills = 0;

for(var j=0; j<bills.length; j++){
    //Add each individual bill to the total
 
   //totalBills= totalBills = bills[j];

   if (bills[j]>=20) {
    totalBills += bills[j];
   }

}
console.log("the total of the bills is $"+totalBills);