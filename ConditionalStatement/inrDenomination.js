let inr = Number(prompt ("Enter Rupees"));
let five = 0;
let two = 0
let one = 0;
let fifty = 0;

if(inr >= 500) {
   five = Math.floor(inr / 500);
   inr%=500;
}

if(inr >= 200) {
     two = Math.floor(inr / 200);
     inr%=200;
}

if(inr >= 100) {
     one = Math.floor(inr / 100);
     inr%=100;
}

if(inr >= 50) {
     fifty = Math.floor(inr / 50);
     inr%=50;
}

console.log("500-->", five);
console.log("200-->", two);
console.log("100-->", one);
console.log("50-->", fifty);

console.log("Rest money", inr);
