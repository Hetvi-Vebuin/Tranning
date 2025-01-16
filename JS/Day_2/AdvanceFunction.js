// Higher-Order Function: Creates a multiplier with memoization
function createMultiplier(multiplier) {
    // Closure: Keeps the multiplier and cache private
    const cache = new Map();

    return function curriedMultiplier(num) {
        // Memoization: Check if result is already cached
        if (cache.has(num)) {
            console.log(`Fetching from cache: ${num} * ${multiplier}`);
            return cache.get(num);
        }

        // Perform the calculation and cache it
        const result = num * multiplier;
        cache.set(num, result);

        console.log(`Calculating: ${num} * ${multiplier}`);
        return result;
    };
}

// Function Currying: Specialize the multiplier
const double = createMultiplier(2); // Closure holds multiplier as 2
const triple = createMultiplier(3); // Closure holds multiplier as 3

// Usage
console.log(double(5)); // Calculating: 5 * 2 -> 10
console.log(double(5)); // Fetching from cache: 5 * 2 -> 10
console.log(triple(5)); // Calculating: 5 * 3 -> 15
console.log(triple(5)); // Fetching from cache: 5 * 3 -> 15
console.log(triple(10)); // Calculating: 10 * 3 -> 30
console.log(double(10)); // Calculating: 10 * 2 -> 20
console.log(double(10)); // Fetching from cache: 10 * 2 -> 20
