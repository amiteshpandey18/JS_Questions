let num = prompt("Enter last number");

let sum = 0;

if (num === null) {
    console.log("Cancelled");    // cancel holds null value
}
else {

    let n = Number(num);
    if (isNaN(n)) {
        console.log("Enter a valid number");
    }
    else if (n > 0) {
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        console.log("Total sum is", sum)
    }
    else {
        console.log("Number should be positive");
    }



    //  Formula for sum of n natural number -->  sum = n(n+1)/2

    // console.log(n * (n + 1) / 2);
}
