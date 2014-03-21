//Kawika Valentine 3/20/14 Expressions Industry Specific//
//Industry Specific Conditionals Calculator//

//This prompt will collect the primary color choice//
var firstColor = prompt("This Calculator will determine which color your font should be based on your primary and secondary color choice. \nPlease choose Red, Orange, Yellow, Blue, or Green for your primary color:");

//This prompt will collect the secondary color choice//
var secColor = prompt("Please choose Red, Orange, Yellow, Blue, or Green for your secondary color color:");


//This prompt will remind the user to enter information if they have left a prompt blank//
if(firstColor == ""){
    var firstColor = prompt("Ahem! You've forgotten something! \nPlease choose Red, Orange, Yellow, Blue, or Green for your primary color:");
}

//This prompt will remind the user to enter information if they have left a prompt blank//
if(secColor == ""){
    var more = prompt("Ahem! You've forgotten something! \nPlease choose Red, Orange, Yellow, Blue, or Green for your secondary color color:");
}

//If the drink amount is 3 or greater and the more amount is 1 or greater, display "How about some water?"//
if(firstColor = Red, Blue, Green && secColor = Yellow, Green, Orange){
    console.log("Your font color should be White.");
    //This alert displays the result of the calculation//
    alert("Your font color should be White.");
}else if(firstColor = Yellow, Orange, Blue && secColor = Blue, Green, Red){
    console.log("Your font should be Black.");
    //This alert displays the result of the calculation//
    alert("Your font color should be Black.");
}
