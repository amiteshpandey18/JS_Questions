
// 1. Event Bubbling

let child = document.querySelector("#child");

child.addEventListener("click", function () {
    console.log("Child clicked");
}, true)

let parent = document.querySelector("#parent");

parent.addEventListener("click", () => console.log("parent click"));

let ic = document.querySelector("#insideChild");

ic.addEventListener("click", (e) => {
    console.log("Inside Child");
    e.stopPropagation(); // stop the event from bubbling to parent
});


// 2. Target Phase

child.addEventListener("click", () => console.log("Target phase (child)"));

// 3. Event Capturing

let parent1 = document.querySelector("div");
let child1 = document.querySelector("button");

parent1.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

child1.addEventListener("click", () => {
    console.log("Child Clicked")
}, true);


// event.target  vs  event.currentTarget


let parent2 = document.getElementById("parent");

parent2.addEventListener("click", function(e) {
    console.log("target:", e.target);
    console.log("currentTarget:", e.currentTarget);
});