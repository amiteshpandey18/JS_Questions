// let ans = prompt("Enter anything");

// while(ans !== 'exit') {
//      ans = prompt("Enter anything");
// }


let num = 1234;

let sum = 0;

while (num != 0) {
    let mod = num % 10;
    sum += mod;
    num = Math.floor(num / 10);
}

console.log("Sum od digit is:", sum);