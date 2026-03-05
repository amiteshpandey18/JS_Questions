let arr = [1, 2, 3, 4, 5, 6];

// let rarr = [];
// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//     rarr[j++] = arr[i];
// }

// console.log("Reverse Array", rarr);

// Using While Loop ------- (Best Approch) --------------------

let i = 0;
let j = arr.length - 1;


while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}

console.log("Reverse Array", arr);
