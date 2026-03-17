let arr = [10, 2, 5];
arr.sort();  // It is convert into string and then sort
console.log(arr);

// Sort in accending order---------------------------------------------------

arr.sort((a, b) => {
    return a - b;
}
)
console.log("Accending order sort", arr);

// Sort in decending order-------------------------------------------------------------
arr.sort((a, b) => b - a)

console.log("Decending order sort", arr)

// Print highest two number product--------------------------------------------------

arr.sort((a, b) => {
    return a - b;
});

console.log("Product is",arr[arr.length - 2] * arr[arr.length - 1])