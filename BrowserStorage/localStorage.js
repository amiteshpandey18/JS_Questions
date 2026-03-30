let set = localStorage.setItem("name", "Amit"); // add properties in local storage permanantly

let get = localStorage.getItem("name");  // get that properties
console.log(get);


localStorage.removeItem("name"); // remove that properties

// Using JSON.stringify() and JSON.parse()------------------

let user = {
    username: "amit123",
    isLoggedIn: true
};

// store
localStorage.setItem("user", JSON.stringify(user));

// retrieve
let userData = JSON.parse(localStorage.getItem("user"));

if (userData.isLoggedIn) {
    console.log("Welcome", userData.username);
}
