let arr = [10, 30, 56, 43, 29, 64, 49, 60];

let min = arr[0];
let smin = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        smin = min;
        min = arr[i];
    } else if (arr[i] < smin && arr[i] != min) {
        smin = arr[i];
    }
}

console.log("Second minimum number is", smin);