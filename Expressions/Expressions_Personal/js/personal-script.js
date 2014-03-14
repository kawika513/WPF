//Kawika Valentine 3/14/14 Expressions Personal
//Personal Calculator Script

//This prompt will collect how many chocolates are eaten per day//
var candyAmount = prompt("This Calculator will determine how much money you spend on Ferrero Rocher chocolates each year. \nPlease enter how many Ferrero Rocher Chocolates you eat per day:");

//This prompt will collect how many days per week the chocolates are eaten//
var perWeek = prompt("Please enter how many days per week you eat Ferrero Rochers:");

//This prompt will collect  how much each pack costs//
var costPerPack  = prompt("Please enter the cost per pack of Ferrero Rochers:");

//This formula will calculate the annual cost//
var annualCost = candyAmount * perWeek * 52 * costPerPack;

//This alert displays the result of the calculation//
alert("Your annual cost for Ferrero Rocher Chocolates is: $" + annualCost );

//This will print the result to the console//
console.log("Your annual cost for Ferrero Rocher Chocolates is: $" + annualCost );

