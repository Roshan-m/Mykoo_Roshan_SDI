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

