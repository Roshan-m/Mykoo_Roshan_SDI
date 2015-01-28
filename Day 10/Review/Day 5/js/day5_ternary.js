 /*
Roshan Mykoo
SDI Campus
Ternary
1/15/2015
*/

//alert("test");


//IF your GPA is grater than 2.0 you can graduate!
//(condition to test)? true code:false code;

 //Normal if else statement
 var gpa = 3.8;

 if(gpa>2){
  console.log("Congrats, you can graduate!");
 }else{
  console.log("Sorry your GPA is too low");
 }

//Ternary way
 (gpa>2)? console.log("Congrats, you can graduate!"):console.log("Sorry your GPA is too low");


 //Decide what book a kid will read
 var age = ;
 var book;


//If the child is under 10 - they read green eggs and ham
//Otherwise they can read the time machine
//If the kid is older than 15, then they read twilight


 book = (age<10)? "Green Eggs & Ham": "The Time Machine";


 var book2 = (age<10)? "Green Eggs & Ham": (age<15)? "The Time Machine" : "Twilight";
 console.log("You Should read "+book2);
