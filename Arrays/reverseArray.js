let arr = [1, 2, 3, 4, 5, 6];

let rarr = [];
let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    rarr[j++] = arr[i];
}

console.log("Reverse Array", rarr);