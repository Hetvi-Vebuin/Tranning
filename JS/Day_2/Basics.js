// Variables
var userName = "Alice"; // 'var' can be re-declared and has function scope
let userAge = 25;       // 'let' can be reassigned and has block scope
const isAdmin = true;   // 'const' cannot be reassigned

// Data Types
let message = "Hello, World!"; // String
let year = 2023;               // Number
let isJavaScriptFun = true;    // Boolean
let notDefined;                // Undefined
let emptyValue = null;         // Null
let uniqueID = Symbol("id");   // Symbol
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Operators
let sum = 10 + 5; // Arithmetic: Addition
let diff = 10 - 5; // Arithmetic: Subtraction
let product = 10 * 5; // Arithmetic: Multiplication
let quotient = 10 / 5; // Arithmetic: Division
let remainder = 10 % 3; // Arithmetic: Modulus

sum += 10; // Assignment: Add and assign
let isEqual = (10 === 10); // Comparison: Strict equality
let isNotEqual = (10 !== 5); // Comparison: Strict inequality

let andOperation = true && false; // Logical: AND
let orOperation = true || false;  // Logical: OR
let notOperation = !true;         // Logical: NOT

let bitwiseAnd = 5 & 3;  // Bitwise: AND
let bitwiseOr = 5 | 3;   // Bitwise: OR
let bitwiseXor = 5 ^ 3;  // Bitwise: XOR

// Input/Output
alert("Welcome to the JavaScript Basics Demo!"); // Alert
let userInput = prompt("What's your favorite programming language?"); // Prompt
console.log("User's favorite programming language:", userInput); // Console log

// Display data types in the console
console.log("Data Types Example:");
console.log("String:", message);
console.log("Number:", year);
console.log("Boolean:", isJavaScriptFun);
console.log("Undefined:", notDefined);
console.log("Null:", emptyValue);
console.log("Symbol:", uniqueID);
console.log("BigInt:", bigNumber);

// Display operations in the console
console.log("Operations Example:");
console.log("Sum:", sum);
console.log("Difference:", diff);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

console.log("Comparison Examples:");
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);

console.log("Logical Operations:");
console.log("AND Operation:", andOperation);
console.log("OR Operation:", orOperation);
console.log("NOT Operation:", notOperation);

console.log("Bitwise Operations:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:", bitwiseXor);
