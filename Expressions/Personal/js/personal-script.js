//Kawika Valentine 3/14/14 Expressions Personal
//Personal Calculator Script

var candyAmount = prompt("This Calculator will determine how much money you spend on Ferrero Rocher chocolates each year. \nPlease enter how many Ferrero Rocher Chocolates you eat per day:");

var perWeek = prompt("Please enter how many days per week you eat Ferrero Rochers:");

var costPerPack  = prompt("Please enter the cost per pack of Ferrero Rochers:");

var annualCost = candyAmount * perWeek * 52 * costPerPack;

console.log(annualCost);

