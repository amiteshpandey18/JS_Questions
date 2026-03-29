let form = document.querySelector("form");

let error = document.querySelector("#error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        error.textContent = "Name is required";
        error.style.display = "block";
        alert("All fields are required");
    } else if (!email.includes("@")) {
        alert("Invalid email");
    } else {
        alert("Form submitted successfully");
        form.reset();
    }


    // Using regex
    // let regex = /^[A-Za-z]{3,}$/;

    // if (regex.test("Amit")) {
    //     console.log("Valid");
    // }
});