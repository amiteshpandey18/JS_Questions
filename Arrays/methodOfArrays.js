// 1. Filter even numbers from an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let res = arr.filter(num => num % 2 == 0);

console.log(res);

// 2. Map prices to include GST (18%)

let amount = [120, 200, 80, 420, 180];

let totalAmount = amount.map(amount => {
    let gst = (amount * 18) / 100;
    return amount + gst;
})

console.log(totalAmount);


// 3. Reduce salaries to calculate total payroll

let salary = [12000, 15000, 11000, 23000];

let totalPayroll = salary.reduce((acc, curr) => acc + curr, 0)

console.log(totalPayroll);

// 4. Find the first student with grade A

let student = [{
    name: "Rohit",
    grade: "A",
}, {
    name: "Amit",
    grade: "B",
}, {
    name: "Sumit",
    grade: "A",
}]

let out = student.find((a) => a.grade === 'A');
console.log(out);

// 5. Write a function to reverse an array

let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);

// 6. Sort array of ages in ascending order

let age = [43, 12, 45, 65, 3, 21, 33, 45, 11];

let aceAge = age.sort((a, b) => a - b);
console.log(aceAge);

// 7. Destructure first two elements of an array

let exe = [1, 2, 3, 4, 5];
let [a, b] = exe;
console.log("a->", a, "b->", b);

// 8. Use some() to check if any student failed

let studentf = [{ name: "Amit", result: "fail" }, { name: "Sumit", result: "pass" }, { name: "Avinash", result: "fail" }];

let result = studentf.some((student) => student.result === "fail");
console.log(result);

// 9. Use spread to copy and add new item

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7];
console.log(arr2);

// 10. Use every() to check element is even

let ele = [2, 4, 3, 6, 8, 10];

let even = ele.every((ele) => ele % 2 === 0);
console.log(even);