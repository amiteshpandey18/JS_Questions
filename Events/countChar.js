let inp = document.querySelector("input");

let spn = document.querySelector("span");

inp.addEventListener("input", function(ele) {
    spn.textContent = inp.value.length;
    spn.style.color = "red";
});