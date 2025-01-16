const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

const obj2 = {};
const parent = { foo: 'bar' };

console.log(obj2.foo);
// Expected output: undefined

Object.setPrototypeOf(obj2, parent);

console.log(obj2.foo);
// Expected output: "bar"
