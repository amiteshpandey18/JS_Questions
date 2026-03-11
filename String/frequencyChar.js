let str = "hello";

let arr = new Array(256).fill(0);

for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    arr[index] = arr[index] + 1;
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        console.log(String.fromCharCode(i), "frequncy is:", arr[i]);
    }
}
