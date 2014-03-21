//Kawika Valentine 3/20/14 Expressions Industry Specific//
//Wacky Conditionals Calculator//

//This prompt will ask for the user's shoe size//
var shoeSize = prompt("This wacky calculator will determine if you will die today.\nPlease enter your shoe size:");

//This prompt will ask for the user's mom's age//
var momAge = prompt("Please enter your mom's age:");

//This formula will calculate the age the user will die//
var deathCalc = shoeSize + momAge + 10;

var die;
var willDie = ("You're going to die today, best stay indoors.");
var willLive = ("You'll live to see another day. But be careful.");

/*if(deathCalc >= 80)
    console.log("You're going to die today, best stay indoors.");

if(deathCalc <= 79)
    console.log("You'll live to see another day. But be careful.");*/
   
die = (deathCalc >= 80) ? willDie : willLive;
console.log(die);

