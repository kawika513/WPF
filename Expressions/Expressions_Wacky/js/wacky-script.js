//Kawika Valentine 3/14/14 Expressions Industry Specific//
//Wacky Calculator//

//User picks favorite color//
var colors = prompt ("This Wacky Calculator will determine just which Spongebob character you are most like. \nPlease choose your favorite color: \n 0: Yellow | 1: Red | 2: Green | 3: Pink"); //0,1,2,3

//User picks favorite food//
var food = prompt ("Select your favorite food. \n 0: Pizza | 1: Krabby Patties | 2: Peanuts | 3: Haute Cusine"); //0,1,2,3

//User picks swim ability//
var swim = prompt ("On a scale from 0-3, how well can you swim?");

//Array for results//
var names = ["null", "null", "Mr. Crabs", "Mr. Crabs", "Spongebob", "Patrick", "Patrick", "Squidward", "Squidward"];

//Results calculator//
var result = colors + food + swim;

//This alert displays the result of the calculation. All roads lead to Spongebob.//
if (result = 4) {alert("Your Result is: " + names [4] );}


//This will print the result to the console. All roads lead to Spongebob.//
console.log("Your Result is: " + names [4] );

