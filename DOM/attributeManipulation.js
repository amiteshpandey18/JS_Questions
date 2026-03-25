// Give directly

let a = document.querySelector("a");
a.href = "https://www.google.com";

// 1. setAttribute(name, value)

let img = document.querySelector("img");
img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1774101137844-b863c3de0613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"

);

// 2. getAttribute(name);

let get = document.querySelector("img");
console.log(get.getAttribute("src"));

// 3. removeAttribute(name) 

let remove = document.querySelector("input");

remove.removeAttribute("placeholder");

