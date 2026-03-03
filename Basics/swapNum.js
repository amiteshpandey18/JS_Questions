let a = 10;
let b = 20;

// SWAPPING USING THIRD VARIABLE -----------------------------------------------------

let temp = a; // temp = 10
a = b; // a = 20
b = temp; // b = 10 
console.log("After swapping using third variable: ", a, b); // 20 10

// SWAPPING WITHOUT USING THIRD VARIABLE ------------------------------------------------- 

a = a + b; // a = 30
b = a - b; // b = 10
a = a - b; // a = 20    
console.log("After swapping without using third variable: ", a, b); // 20 10

// SWAPPING USING XOR OPERATOR 
a = a ^ b; // a = 30
b = a ^ b; // b = 20
a = a ^ b; // a = 10

console.log("After swapping using XOR operator: ", a, b); // 20, 10

// SWAPPING USING DESTRUCTURING ASSIGNMENT ----------
[a, b] = [b, a]; // a = 20, b = 10
console.log("After swapping using destructuring assignment: ", a, b); // 20, 10


