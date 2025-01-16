const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

// document.getElementById("demo1").innerHTML = fruits.push("Kiwi");
// document.getElementById("demo2").innerHTML = fruits;



// Array.from()
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];


// Array.fromAsync
Array.fromAsync(
    new Map([
        [1, 2],
        [3, 4],
    ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]


// isArray()
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false


// entries()
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
