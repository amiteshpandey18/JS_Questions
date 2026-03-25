
// 1. createElement() --> create HTML element

let h1 = document.createElement("h1");

h1.innerText = "Amitesh Pandey";
document.body.append(h1); 

// 2. appendChild()  -->  add element at the end (inside parent)

let li = document.createElement("li");
li.innerText = "List 1";

let list = document.getElementById("list");
list.appendChild(li);

// 3. prepend()  --> add element at the beginning

let l = document.createElement("li");
l.innerHTML = "First List";
list.prepend(l);

// 4. removeChild() --> remove child from parent

list.removeChild(l); // remove element

// 5. remove() modern way(ES6+) --> remove element

li.remove(); // removed element

// 6. append --> add element at last

      // it's same as appendChild() 