let arr = [3, 4, 5, 2, 8, 9, 4, 2];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum element is", max)