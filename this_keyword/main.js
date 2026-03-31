// 1. this in global scope --> window

console.log("in scope global", this) // (i) window in browser, (ii) global in node

// 2. this in function --> window

function outer() {
    console.log("inside a function", this);
}

outer(); // window

// 3. inside a method --> 

let obj = {
    name: "Amit",
    greet: function () {
        console.log(this.name);
    }
};

obj.greet(); // Amit

// 4. Arrow Function --> not have their own this, takes from outer scope

let obj1 = {
    name: "Amit",
    greet: () => {
        console.log(this.name);
    }
};

obj1.greet(); // undefined

// 5 Construction --> When a function is used as a constructor with new, this refers to the newly created instance.

function Person(name) {
    this.name = name;
}
const p = new Person("Bob");
console.log(p.name); // "Bob"

// 6. Event Handling -->   this refers to the element that received the event.

let button = document.getElementById("submit");
button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this); // the button element
});

