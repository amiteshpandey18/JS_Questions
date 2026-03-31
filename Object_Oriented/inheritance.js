class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Inside Parent class")
    }
}


class Child extends Parent {     // take properties and method of parent class using extends keyword

    constructor(name, age) {
        super(name);            // call parent class constructor
        this.age = age
    }

    greet() {
        console.log("Inside child class");

        super.greet();  // call parent class method
    }
}


const c1 = new Child("Ajith", 24);
c1.greet();