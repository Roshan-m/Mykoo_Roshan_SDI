/*
 Roshan Mykoo
 1-22-2015
 
 */

//alert('test');

//User leaves it blank?
//Returns an empty text string "
var movie = prompt("What is your favorite movie?");

while(movie===""){
    //Then the user left the prompt blank
    //Repormpt the user
    movie=prompt("Please dont leave this blank.\nWhat is your favorite movie?");
}

//Test to see if the use typed in a number or not
//isNaN() - Is not a number
//text strings ruten true
//numbers retuns false

var ticketPrice= prompt("How much is a movie ticket?");

while(isNaN(ticketPrice)){
    //User did not type in a number
    //Reprompt for a number
    ticketPrice=prompt("Please type is a number\n How much is a movie ticket?");
    
}

//Use both validation is the same while loop
var age = prompt("To get into R rated movies, we must know your age.\nHow old are you?");

//Validate that the prompt is not a blank and is a number

while (isNan(age) || age===""){
    //The user typed in a text string or left it blank
    console.log("Inside of while loop ")
    
    //Test to see what went wrong
    if (isNaN(age)) {
        age=prompt("Please only enter a number, What is your age?");
    } else {
        age=prompt("Please do not leave it blank, what is your age?");
    }
    
}



var movieGenre= prompt("Do you want to see and action movie or comedy?");
//Validate thae the user typed in one of the 2 genres

//Change to lower case
movieGenre= movie.toLowerCase();

while(movieGenre !="action" && movieGenre !="comedy"){
    
    movieGenre= prompt("Only type in action or comedy. what genrea do you prefer");
    
}