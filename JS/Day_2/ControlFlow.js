// Conditional Statements
const weather = "rainy";

if (weather === "sunny") {
    console.log("It's a sunny day. Wear sunglasses!");
} else if (weather === "rainy") {
    console.log("It's raining. Don't forget your umbrella!");
} else {
    console.log("Weather is unpredictable. Stay prepared!");
}

// Using switch for multiple conditions
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend! Relax and enjoy.");
        break;
    default:
        console.log("It's a regular weekday.");
}

// Loops

// for loop
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("Countdown from 5:");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

// do-while loop
console.log("At least one iteration:");
let number = 0;
do {
    console.log(`Number: ${number}`);
    number++;
} while (number < 3);

// for...of loop (for arrays)
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits using for...of:");
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in loop (for objects)
const user = { name: "Alice", age: 25, city: "Wonderland" };
console.log("User details using for...in:");
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Break and Continue
console.log("Break and Continue Example:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Breaking the loop at 6.");
        break; // Exit the loop when i is 6
    }
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue; // Skip even numbers
    }
    console.log(`Number: ${i}`);
}
