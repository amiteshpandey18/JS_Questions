let prompt = require("prompt-sync")();

let row = prompt("Enter num of row ");
let col = prompt("Enter number od coloum ");

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
