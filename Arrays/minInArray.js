let arr = [3, 4, 5, 2, 8, 9, 4, 2];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Minimum element is", min);