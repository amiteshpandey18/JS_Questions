
// 1. Inline .style CSS -------------------------------------------------------------

let box = document.getElementById("box");

box.style.backgroundColor = "yellow";

box.style.color = "green";

// 2. Using classList --> Best usecase --------------------------------------------------

// 2.1 add() --> add class one or more

let head1 = document.getElementById("heading");
head1.classList.add("color");

let head2 = document.getElementById("heading");
head2.classList.add("color2");


// 2.2 remove() --> remove class

head2.classList.remove("color");

// 2.3 toogle() --> Adds class if not present, removes if present

head2.classList.toggle("color");

// 2.4 contains() --> check class is exist or not

console.log(head2.classList.contains("color"));

// 2.5 replace() --> replace one class with another

head2.classList.replace("color1", "color3");

// 2.6 item() --> get's classes by indexes

console.log(head1.classList.item(0));

// 2.7 length --> number of classes

console.log(head1.classList.length);