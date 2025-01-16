{
    var a=10;
    let b=20;
    const c=30;
    console.log("inside block scope");
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("outside block scope");
console.log(a);
// console.log(b); Get Error
// console.log(c); Get Error