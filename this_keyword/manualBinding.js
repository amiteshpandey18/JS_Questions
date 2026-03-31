// 1. call() --> Call function immediately and sets this

function greet(a, b, c) {
    console.log(this.name, a, b, c);
}

let obj = {
    name: "Rohit",
    marks: 86
}

greet.call(obj, 1, 2, 3);


// 2. apply() --> same as call, but argumaents is in array.

function greet1(a) {
    console.log(this.name, a);
}

let obj1 = {
    name: "Ajith",
    marks: 86
}

greet1.call(obj1, [1, 2, 3]);

// 3. bind() --> Returns a new function with fixed this (does NOT call immediately)

function greet(city) {
    console.log(this.name, city);
}

let user = { name: "Sumit" };

let fn = greet.bind(user);

fn("Pune"); // Sumit Pune