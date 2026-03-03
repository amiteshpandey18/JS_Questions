let price = prompt("Enter the price of the item:");

let discount = 0;

if (isNaN(price)) {
    console.log("Please enter a valid number for price.");
}

else if (price > 0 && price <= 5000) {
    discount = 0;
}

else if (price > 5000 && price <= 7000) {
    discount = 0.5;
}

else if (price > 7000 && price <= 9000) {
    discount = 10
}

else if (price > 9000) {
    
    discount = 0.20;
}

console.log("You get a discount Final price is: ", price - Math.floor(discount * price) / 100);