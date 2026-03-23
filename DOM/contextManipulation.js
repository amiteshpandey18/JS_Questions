
// 1. innerHTML

let innerhtml = document.getElementById("demo").innerHTML = "<b>Amitesh Pandey</b>"; // gives complete html.

console.log(innerhtml);

// 2. innerText

console.log(document.getElementById("demo1").innerText); // It gives you text, ignore hidden content.

// 3. textContext

console.log(document.getElementById("demo1").textContent); // it gives you text with hidden also, faster than innerText.
