let prompt = require("prompt-sync")();

let row = Number(prompt("Enter row "));

for (let i = 1; i <= row; i++) {
    for (let j = row; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

// * * * * *
// * * * *
// * * *
// * *
// *