// -------------------------- 1. Shallow Copy --------------------------------
//        (i) Spread Operator(...)

let obj1 = {
    name : "Utkarsh",
    city : "Gorakhpur",
    age : 23
}

let obj2 = {...obj1};
console.log(obj2)
 
//        (ii) Object.assign()

let obj3 = {
    name: "Ajith",
    city: "AP"
}

let obj4 = Object.assign({}, obj3);
console.log(obj4);


// ----------------------------- 2. Deep Copy --------------------------------------------


// ------------------------- (i) structuredClone() Method --------------------------------
let obj5 = {
    name: "Chandu",
    city: "TN"
}

let obj6 = structuredClone(obj5);
console.log(obj6); 

//  --------------------------------- (ii) JSON Method --------------------------------------

let obj7 = {
    name: "Sumit",
    city: "Odisa"
}

let obj8 = JSON.parse(JSON.stringify(obj7));  // 
console.log(obj8); 


// Computed Properties

let key = "name";

let user = {
    [key] : "Amit"
}

console.log(user.name);