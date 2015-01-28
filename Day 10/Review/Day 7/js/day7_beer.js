/*
Roshan Mykoo
SDI Campus
1-20-2015
Beer Counting
*/

//alert('test');


//99 bottles of beer on the wall


for(var i=99; i>0; i--){


    //Add a check for the last round of beers
    if (i===1) {
        console.log(i+" Bottles of beer on the wall. "+i+" Bottles of beer. You take one down and pass it around, No more ottles of beer on the wall.\nThe End!");
    }
else{
    console.log(i+" Bottles of beer on the wall. "+i+" Bottles of beer. You take one down and pass it around, "+(i-1)+" Bottles of beer on the wall.");
}}
