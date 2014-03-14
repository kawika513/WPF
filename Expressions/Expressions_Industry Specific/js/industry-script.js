//Kawika Valentine 3/14/14 Expressions Industry Specific//
//Industry Specific Calculator//

//This prompt will collect how many pages the user wishes their site to be//
var pages = prompt("This Calculator will determine how much it will cost to have your basic website designed. \n Please enter how many pages you wish your site to be:");

//This prompt will collect how many days the user would like their site to be worked on//
var days = prompt("Please enter how many days youin which you would like this project to be completed (ex: 1, 2, 3, etc...:");

//This prompt will collect  how many videos will be added//
var videos = prompt("Please enter the number of videos you would like added to your site:");

//This formula will calculate design cost//
var cost = (pages * 50) + (days * 8 * 65.00) + (videos * 15.00);

//This alert displays the result of the calculation//
alert("Your Website Design quote amount is: $" + cost );

//This will print the result to the console//
console.log("Your Website Design quote amount is: $" + cost );