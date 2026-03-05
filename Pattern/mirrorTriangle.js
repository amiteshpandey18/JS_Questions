let prompt = require("prompt-sync")();

let n = Number(prompt("Enter n "));

for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write(" ");
    }

    for (let k = 1; k <= i; k++) {
        process.stdout.write("*");
    }
    console.log();
}

//      *
//     **
//    ***
//   ****
//  *****