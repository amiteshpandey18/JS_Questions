let length = 10;
let width = 5;

// AREA OF RECTANGLE
let area = length * width;
console.log("Area of rectangle: ", area); // 50

// PERIMETER OF RECTANGLE 
let perimeter = 2 * (length + width);
console.log("Perimeter of rectangle: ", perimeter); // 30

// Generate OTP (One Time Password)

console.log(Math.floor(Math.random() * 9000 + 1000)); // generates a random number between 10000 and 99999

// Area of triangle by using Heron's formula
let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;

let areaOftri = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of triangle by heron's formula is", areaOftri.toFixed(2));

// Circumference of circle

let radius = 7;

let circumference = 2 * Math.PI * radius;

console.log("Circumference of circle is", circumference.toFixed(2));


