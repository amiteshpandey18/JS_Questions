let arr = [10, 30, 56, 43, 29, 64, 49, 60];

let max = arr[0];
let smax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i];
    } else if (smax < arr[i] && smax != arr[i]) {
        smax = arr[i];
    }
}

console.log("Second largest", smax);