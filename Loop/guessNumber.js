let num = Math.floor(Math.random() * 10) + 1;
console.log(num);

let guess = -1;

while (guess !== num) {
    guess = Number(prompt("Enter num between 1 to 10"));

    if (isNaN(guess) || guess > 10 || guess < 1) {
        console.log("Enter num between 1 to 10");

    } else if (guess > num) {
        console.log("high try again");
    } else if (guess < num) {
        console.log("low try again");
    } else {
        console.log("Matched");
    }
}