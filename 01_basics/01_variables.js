// Defining some variables/constants and displaying them

const constantAssign = 123 // This is a constant variable and it cant be changed

let userName = "Sam"

var userAge = "19" //' var ' should not be used, instead ' let ' is supposed to be used

userCity = "Islamabad" // We can define variables like this sometimes but we shouldnt be assigning variables like this

let userBalance; // Its upto us whether to put semi-colon or not, it doesnt matter. Also, we can left variables unattended like this and JavaScript would call them as "undefined"

console.log(constantAssign, userName, userAge, userCity, userBalance);

// Now testing them by changing them now

// constantAssign = 456 //This cant be done as its a constant

userName = "Nina"

userAge = "23"

userCity = "Lahore"

// Using a table to display the output
console.table([constantAssign, userName, userAge, userCity, userBalance]) 

/* This program would give an error because we tried to change the constant, so I am going to comment it out and run the program again (Also this is multi-line comment. If I remeber correctly, its the same as 'C' comments) */

/* After commenting out the line trying to change the comment, the program works fine and we can see all other variables are changed to the new values.

We dont use the ' var ' variable because the issue of block scope and functional scope ( scope =  ' { } ' these curly brackets are called scopes. Examples:  The ones being used in ' IF ' and ' FOR ' loops etc ) */

