let prompt = require("prompt-sync")();

let row = Number(prompt("Enter number of row "));


for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *