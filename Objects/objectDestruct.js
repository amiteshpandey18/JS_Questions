
// 1. Normal Example

let user = {
    name: "Rohit",
    age: 25
};

// Destructuring
let { name, age } = user;

console.log(name); // Rohit
console.log(age);  // 25

// 2. Rename Variables

let { name: userName, age: userAge } = user;

console.log(userName); // Rohit
console.log(userAge); // 25

// 3. Default Values

let user2 = {
    name1: "Amitesh"
}
let { name1, city = "Bangalore" } = user;

console.log(city); // Bangalore

// 4. Nested Object Destructuring ⭐ (Important)-------------------------------

let user3 = {
    name3: "Utkarsh",
    details: {
        roll: 23,
        marks: 90
    }
};

let { details: { roll, marks } } = user;

console.log(roll);  // 23
console.log(marks); // 90


// 5. Destructuring in Function Parameters

function printUser({ name, age }) {
    console.log(name, age);
}

printUser({ name: "Amitesh", age: 25 });


// 6. With Rest Operator

let user4 = {
    name4: "Amitesh",
    age: 25,
    city: "Delhi"
};

let { name4, ...rest } = user;

console.log(rest);  // { age: 25, city: "Delhi" }
