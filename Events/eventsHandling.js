
// addEventListener() -->  used to attach an event handler to an element

let add = document.querySelector("#add");

add.addEventListener("click", sayHello);

function sayHello() {
    console.log("Hello world");
}

// removeEventListener() --> "removeEventListener only works when the exact same function reference is passed."

add.removeEventListener("click", sayHello);

// input listener-----------------------

let ipt = document.querySelector("input");

ipt.addEventListener("input", function (dt) {
    if (dt.data !== null) {
        console.log(dt.data);
    }
});

// change event---------------

let select = document.querySelector("select");
let device = document.querySelector("h3");

select.addEventListener("change", function (dt) {
    device.textContent = `${dt.target.value} device selected`;
});

// Key down event----------------

let key = document.querySelector("#key");

window.addEventListener("keydown", function (dt) {
    if (dt.key === " ") {
        key.textContent = "SPC";
    } else {
        key.textContent = `${dt.key}`;
    }
})


// submit---------------

let a = document.createElement("p");
let b = document.createElement("p");
let c = document.createElement("p");
let d = document.createElement("p");

let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function (dt) {
    dt.preventDefault(); // its stop your submit request

    a.textContent = input[1].value;
    b.textContent = input[2].value;
    c.textContent = input[3].value;
    d.textContent = input[4].value;
    document.body.append(a, b, c, d);

    input.forEach(ele => {
        if (ele.type !== "submit") {
            ele.value = "";
        }
    })
});


// MouseOver MouseOut--------------

let mouse = document.querySelector(".box");

// mouse.addEventListener("mouseover", function (){
//     mouse.style.backgroundColor = "yellow";
// });

// mouseout-----------

// mouse.addEventListener("mouseout", function (){
//     mouse.style.backgroundColor = "red";
// });

// mouseMove--------------

window.addEventListener("mousemove", function(e) {
mouse.style.top = e.clientY  + "px";
mouse.style.left = e.clientX + "px"; 
});

// key up --------------------------------

let box = document.getElementById("box");

box.addEventListener("keyup", function(e) {
    console.log("Key released:", e.key);
});