
// ------------------------------ 1. For... in loop ---------------------------------------------

//   -> iterate over Keys
//   -> use object[key] to get the value

let user = {
    name: "Ajith",
    age: 25,
    city: "Nellore"
}

for (let key in user) {
    console.log(key);  // name, age, Nellore
    console.log(user[key]); // Ajith, 25, Nellore
}


// ------------------------   2. Object.keys() method -----------------------------------------

// -> Returns array of keys → ["name", "age", "city"]
//  -> Can use array methods like forEach, map

let keys = Object.keys(user);

keys.forEach((key) => {
    console.log(key, user[key]);
})

// ------------------------------ 3. Object.values() method ----------------------------------------

// -> Returns only values → ["Amitesh", 25, "Delhi"]

let values = Object.values(user);

values.forEach(values => {
    console.log(values);
});

// ------------------------------ 4. Object.entries() -----------------------------------------------

// -> Returns key values pairs -> [["name","Ajith"], ["age", 25], ["city", "Nellore"]]
// -> Best for Destructuring

let entries = Object.entries(user);

entries.forEach(([key, value]) => {
    console.log(key, value);
});

