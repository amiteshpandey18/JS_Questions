
// Objects inherit directly from other objects using the prototype chain.

let animal = {
    eats: true,
    walks() {
        console.log("Animal walk");
    }
};

let dog = Object.create(animal);

dog.bark = function () {
    console.log("Dog Barks");
}

console.log(dog.eats); // true
dog.walks();   // Animal walk
dog.bark();  // Dog barks