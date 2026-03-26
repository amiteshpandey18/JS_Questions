let a = document.querySelector("input");


a.addEventListener("click", function (e) {
    console.log(e.target); // element on which event happend
    console.log(e.type); // type of event
    console.log(e.key); // which key was pressed
    console.log(e.clientX, e.clientY); // mouse position

    // console.log(e.timeStamp); // Time when event happened

    // let time = new Date(e.timeStamp); // convert like this
    // console.log(time);

    let time = new Date();
    console.log(time.toLocaleTimeString());  // find actual time when event happend

})

// preventDefault() ---> Stop default browser behavior

let form = document.querySelector("form");

form.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("event stopped");
});