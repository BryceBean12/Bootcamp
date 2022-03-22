/*

Variables and Datatypes in JavaScript

Types of Data

Primitive Datatypes:
Strings - strings of characters
Numbers- numbers are numbers no matter if there isa  decimal or not
Booleans - true or false

Rules of naming variable names
1. No spaces
2. No dashes (hyphens)
3. You cannot start with a number

The accepted casing of JavaScript is Camel Case - every name begins with a lowercase letter, and every word thereafter beings with an uppercase letter.

*/

//string
var stuffy = "koala bear";

//numbers
var age = 34;
var percentage = 35.9;

//boolean
var isRaining = true

// Keep your code D.R.Y.
//Don't Repeat Yourself

// For Loop
// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

// boolean statement to tell sentry when to stop
// boolean statements evaluate to true or false
// as long as

// shorthand for i = i + 1
// i+= 1

// Order of operations
// 1. Creation of sentry and value assignment
// 2. Test the boolean statement, if true, enter the code block
// 3. Execute the code block
// 4. Perform the change
// 5. Go back to step 2 and repeat until false

for (var i = 1; i<= 100; i++) {
    console.log(i);
}

//Problem Number 1

var a = 25;
a = a - 13;
// 25-13 = 12
console.log(a/2);

// 12/2=6 
    
a = "hello";
console.log(a + " hello");

//6 hello hello

//Problem number 2

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

//outputs: 0,4,8 Outside of loop would be 12

//Problem 3

function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
