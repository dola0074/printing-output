/* global confirm, console, prompt*/

/*
//prompt ()
var name = prompt("Please enter your name.");
console.log("Hello " + name);



//confirm()
var deleted = confirm("Do you really want to delete this file?");
console.log("Deleted = " + deleted);



//conditonals

// example:
var today = prompt("Enter a day.");
var temerature = -20;

if ((today === "Saturday") && (temperature > -15)) {
    console.log("I will go skiing!");

} else if ((today === "Saturday") && (temperature < -15)) {
    console.log("I will go hiking!");
} else {
    console.log("I will watch a movie");
}




//typical exmaple in programming 
var a;

console.log("!a = "  + !a); //true 

// assign variable with value: 

if (!a) {
    a = prompt("Assign value to variable a!");
}

console.log("!a = "  + !a); //false



// switch() 
//example 

var product = prompt("Please enter a fruit.");

switch (product) {
  case "Oranges" == product:
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples" == product:
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas" == product:
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries" == product:
    console.log("Cherries are $3.00 a pound.");
    break;
  case ("Mangoes" == product) ||
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + product + ".");
}
*/

// TASK 1 

var a = 3;
var b = 5; 
var c; 

alert("var a = 3;\nvar b = 5;\nvar c;\n-------------\n\n" + 
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "a += 1 = " + (a += 1) + "\n" +
    "a -= 1 = " + (a -= 1) + "\n" +
    "a *= b = " + (a *= b) + "\n" +
    "a %= b = " + (a %= b) + "\n" +
    "a == b = " + (a == b) + "\n" +
    "a != b = " + (a != b) + "\n" +
    "a > b = " + (a > b) + "\n" +
    "a < b = " + (a < a) + "\n" +
    "!a && !c = " + (!a && !c) + "\n" +
    "!a || !c = " + (!a || !c ) + "\n");

// TASK 2 
var first_name = "Christine";
var last_name = "Dolan";
var email = "dola0074@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + "." + " You can contact me at " + email;
    
alert(output);
console.log(("My name is " + first_name + " " + last_name + "." + " You can contact me at " + email));


// TASK 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];
 

console.log(numbers[0]); // first array element 
console.log(numbers[4]); // second array element 

console.log(numbers[0] + " + " + numbers[4] + " = " + sum);

if (sum % 2 === 1) {
    console.log("This is an odd number");

} else if (sum % 2 === 0) {
    console.log("This is an even number"); 
}

var output = (if (sum % 2 === 1) + "\n" + "This is an odd number");
            (}else if (sum % 2 === 0){ + "\n" + "This is an even number");

alert(output);
               
/*
//check if number is even or odd?
5 % 2 = 1 //means a number is odd
6 % 2 = 0 // means a number is even 

*/
