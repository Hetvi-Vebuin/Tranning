class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}
class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
            `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}
class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log("You called me?");
    }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

//   myExample.#somePrivateMethod(); // SyntaxError

const giles = new Professor("Hetvi", "Maths");

giles.introduceSelf();
giles.grade("my grade ");