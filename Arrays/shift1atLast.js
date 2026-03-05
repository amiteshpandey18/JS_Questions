let arr = [0,1,0,1,0,0,1,0,1];

let i = 0;
let j = 0;


// Two pointer approch -----------------

while (i < arr.length - 1) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j++;
    } else {
        i++;
    }
}

console.log(arr);