let str = "Amitesh";

for(let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    // console.log(str.charAt(i));
}

// Print reverse----------------

let rev = "";

for(let i = str.length-1; i >= 0; i--) {
    rev += str.charAt(i);
}

console.log(rev);