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
