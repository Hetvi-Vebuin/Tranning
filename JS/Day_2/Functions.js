// function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// const cube = function (x) {
//     return x * x * x;
// };

// const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


// function A(x) {
//     function B(y) {
//         function C(z) {
//             console.log(x + y + z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);


// function outside() {
//     const x = 5;
//     function inside(x) {
//         return x * 2;
//     }
//     return inside(x);
// }

// console.log(outside());

// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`; // Return value
}
console.log(greet("Alice")); // Calling the function with an argument

// Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(`Sum: ${add(5, 3)}`); // Output: 8

// Parameters and Arguments
function introduce(name = "Guest", age = 0) { // Default parameters
    console.log(`Name: ${name}, Age: ${age}`);
}
introduce("Bob", 30); // Passing arguments
introduce(); // Using default parameters

// Arrow Function (=>)
const multiply = (a, b) => a * b; // Implicit return for single expressions
console.log(`Product: ${multiply(4, 2)}`); // Output: 8

// Arrow function with multiple lines
const describe = (name, hobby) => {
    return `${name} loves ${hobby}.`;
};
console.log(describe("Eve", "painting"));

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function (x, y) {
    console.log(`Difference: ${x - y}`);
})(10, 5);
