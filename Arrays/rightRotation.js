let arr = [1, 2, 3, 4, 5];

// let temp = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[0] = temp;

// console.log(arr);

// rotation using user input  k times ----------------

let k = 2;

k = k % arr.length; // Handle unneccesory rotation

// for (let i = 0; i < k; i++) {
//    let temp = arr[arr.length - 1];
//    for (let j = arr.length - 1; j > 0; j--) {
//       arr[j] = arr[j - 1]
//    }
//    arr[0] = temp;
// }

// console.log(arr);



// ------ Best for Time Complexity-------------------- 


let temp = new Array(arr.length);
for (let i = 0; i < arr.length; i++) {
   temp[i] = arr[(i + k) % arr.length];
}

console.log(temp);