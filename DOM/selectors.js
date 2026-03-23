
// 1. getElementById() ----------------------------------------------------------

let ele1 = document.getElementById("heading"); // return single element.
ele1.innerHTML = "Rahul Choubey";

// 2. getElementsByClassName() ---------------------------------------------------

let ele2 = document.getElementsByClassName("hello"); // returns HTML Collections. conert into Array then iterate

let d = Array.from(ele2); // Change HTML Collection to Array, method - 1
let d1 = [...ele2];       // Change HTML Collection to Array, method - 2

d1.forEach((ele) => console.log(ele));
d.forEach((ele) => console.log(ele));

// 3. getElementsByName() ---------------------------------------------------------------

let ele3 = document.getElementsByName("username"); // return NodeList but it is live, using forEach loop we iterate over this

ele3.forEach(ele => console.log(ele)); // 
ele3.forEach(ele => console.log(ele.value));

// 4. getElementsByTagName() ------------------------------------------------------------------

let ele4 = document.getElementsByTagName("p"); // return HTML Collection

let e = [...ele4];
e.forEach(ele => console.log(ele));

// 5. querySelector() -----------------------------------------------------------------------------

let ele5 = document.querySelector("#heading"); // return first matching id
console.log(ele5);

let ele5_1 = document.querySelector(".hello"); // return first matching class name
console.log(ele5_1);

let ele5_2 = document.querySelector("p"); // return first matching tag name
console.log(ele5_2);

// 6. querySelectorAll() -----------------------------------------------------------------------------------------

let ele6 = document.querySelectorAll(".hello") // select all tha element class have hello, return NodeList it is static, 
                                               //  using forEach loop we iterate over this
ele6.forEach(ele => console.log(ele));

let ele6_1 = document.querySelectorAll("p"); // return all p tag 
ele6_1.forEach(ele => console.log(ele));