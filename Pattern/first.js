let prompt = require("prompt-sync")();

let row = Number(prompt("Enter num of row "));
let col = Number(prompt("Enter number od coloum "));

for(let i = 1; i <= row; i++) {
    for(let j = 1; j <= col; j++) {
       process.stdout.write(" *");
    }
    console.log();
}

//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
