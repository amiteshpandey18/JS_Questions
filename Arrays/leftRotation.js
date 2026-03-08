let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];

// for (let i = 1; i < arr.length; i++) {   // First approch
//     arr[i - 1] = arr[i];
// }
// arr[arr.length - 1] = temp;

// console.log(arr);


// rotation using user input  k times -----------------

// let k = 2;

// k = k % arr.length; // Handle unneccesory rotation

// for (let i = 0; i < k; i++) {            // Second Approch
//    let temp = arr[0];                    
//    for (let j = 1; j < arr.length; j++) {
//       arr[j - 1] = arr[j]
//    }
//    arr[arr.length - 1] = temp;
// }

// rotation without double loop---------------------------------------

let k = 2;
k = k % arr.length;

let temp = new Array(arr.length);
for (let i = 0 ; i < arr.length; i++) {        // third Approch
   temp[i] = arr[(i + k) % arr.length];
}


console.log(temp);