//Kawika Valentine 3/20/14 Expressions Industry Specific//
//Industry Specific Conditionals Calculator//

//This prompt will collect the hours worked by the employee//
var hoursWorked = prompt("This Calculator will determine how many more projects you can do based on the number of hours left in your week. \nPlease enter the numer of hours you've already worked this week in whole numbers:");

//This prompt will collect the number of hours the emplyee is allowed to work//
var hoursAllowed = prompt("Please enter the number of hours you are permitted to work each week:");


//This prompt will remind the user to enter information if they have left a prompt blank//
if(hoursWorked == ""){
    var firstColor = prompt("Ahem! You've forgotten something! \nPlease enter the number of hours you've worked this week:");
}

//This prompt will remind the user to enter information if they have left a prompt blank//
if(hoursAllowed == ""){
    var more = prompt("Ahem! You've forgotten something! \nPlease center the number of hours you are allowed to work each week:");
}

//This formula will calculate the hours remaining//
var hoursRemain = hoursAllowed - hoursWorked;

//If hours worked and hours allowed equal less than 32 hours, one project will be allowed//

if(hoursRemain




if( = Red, Blue, Green && secColor = Yellow, Green, Orange){
    console.log("Your font color should be White.");
    //This alert displays the result of the calculation//
    alert("Your font color should be White.");
}else if(firstColor = Yellow, Orange, Blue && secColor = Blue, Green, Red){
    console.log("Your font should be Black.");
    //This alert displays the result of the calculation//
    alert("Your font color should be Black.");
}
