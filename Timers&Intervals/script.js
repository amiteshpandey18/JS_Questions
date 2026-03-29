let h = document.querySelector("h1");

let small = document.querySelector("small");

let t1 = setTimeout(function () {  // 1. setTimeout() --> execute a function once after a specific delay
    h.textContent = "After 5 sec";
}, 5000);

// clearTimeout(t1); // 2. clearTimeout() --> stop the timeout before it runs.

let count = 0;

let t2 = setInterval(function () { // 3. setInterval() --> execute a function repeatedly at a fixed time interval
    small.textContent = count++;

    if (count > 10) {
        clearInterval(t2); // 4. clearInterval() --> Stop repeated execution.
    }
}, 1000);
