let h = document.querySelector("h1");


setInterval(() => {
    let time = new Date().toLocaleTimeString();
    h.textContent = time;
}, 1000);