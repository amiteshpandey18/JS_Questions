let arr = [1, 2, 3, 4, 5];

// let temp = arr[arr.length - 1];                  // First

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[0] = temp;

// console.log(arr);

// rotation using user input  k times ---------------------------------

//let k = 2;

//k = k % arr.length; // Handle unneccesory rotation

// for (let i = 0; i < k; i++) {                                      // Second
//    let temp = arr[arr.length - 1];
//    for (let j = arr.length - 1; j > 0; j--) {
//       arr[j] = arr[j - 1]
//    }
//    arr[0] = temp;
// }

// console.log(arr);



// ------ Best for Time Complexity------------------------------------- 

// let temp = new Array(arr.length);

// let k = 1;                                               // Third

// for(let i = 0; i < arr.length; i++) {
//    temp[(i + k) % arr.length] = arr[i];
// }

// console.log(temp);


// -------------------- Best approch for rotation (Interview also) ------------------------------

let k = 3;

k = k % arr.length;

rotate(0, arr.length - 1);
rotate(0, k - 1);
rotate(k, arr.length - 1);

console.log(arr);       // [ 3, 4, 5, 1, 2 ]

function rotate(i, j) {

   while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j--;
   }
}