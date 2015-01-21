/*
Roshan Mykoo
SDI Campus
For Loop
1/20/2015
*/

//alert("test");

//A salesman hires and recruits 10 other salesmen every hour long seminar he does.
//All salesmen he hires will also present their own hour long seminars
//How many salesmen will there be after 6 seminars?


var salesmen = 1;
var salesRecruits = 10;
var seminars = 6;


for(var semCompleted=1; semCompleted<=seminars; semCompleted+=1){

 var newRecruited = salesmen * salesRecruits;

    salesmen += newRecruited;

 console.log("There "+salesmen+" at the end of "+ semCompleted +" seminars!");



}