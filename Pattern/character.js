let prompt = require("prompt-sync")();

let row = Number(prompt("Enter row "));

for (let i = 1; i <= row; i++) {
    let ascii = 65;
    for (let j = 0; j < i; j++) {

        process.stdout.write(String.fromCharCode(ascii) + " "); // It will convert a ascii or unicode value into character.
        ascii++;
    }
    console.log();
}

// A
// A B
// A B C
// A B C D
// A B C D E


// for (let i = 1; i <= row; i++) {

//     let ascii = 'A'.charCodeAt(0); // string method used to get the Unicode (ASCII) value of a character.

//     for (let j = 0; j < i; j++) {
//         process.stdout.write(String.fromCharCode(ascii) + " ");
//         ascii++;
//     }

//     console.log();
// }