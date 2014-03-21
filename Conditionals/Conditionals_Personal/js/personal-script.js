//Kawika Valentine 3/20/14 Conditionals Personal
//Personal Conditional Calculator Script

//This prompt will collect how many drinks the user has had//
var drinkAmount = prompt("This Calculator will determine whether or not you're permitted to have another alcoholic drink. \nPlease enter how many alcoholic drinks you've had so far:");

//This prompt will collect the number or drinks the user wants to continue to have//
var more = prompt("Please enter the number of drinks you'd like to contnue to drink:");

//This prompt will remind the user to enter information if they have left a prompt blank//


//If the drink amount is 3 or greater, display "How about some water?"//
if(drinkAmount >= 3){
    console.log("How about some water ther slugger?");
    //This alert displays the result of the calculation//
    alert("How about some water ther slugger?");
}else{
//If the drink amount is 2 or less, display "Perhaps just one more drink"//
    console.log("Perhaps you've got room for just one more drink.");
    alert("Perhaps you've got room for just one more drink.");
}


