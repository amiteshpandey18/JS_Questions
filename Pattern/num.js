let prompt = require("prompt-sync")();

let row = Number(prompt("Enter row "));

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5