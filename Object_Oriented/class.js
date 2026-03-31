class Person {

    constructor(name, city, gender, color) {
        this.name = name;
        this.city = city;
        this.gender = gender;
        this.color = color;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        console.log(h1);
        document.body.append(h1);
    }

    erase() {
        document.querySelectorAll("h1").forEach((ele) => {
            if (ele.style.color === this.color) {
               ele.remove();
            }
        })
    }
}

const p1 = new Person("Sumit", "Puri", "Male", "red");
const p3 = new Person("Sakshi", "Mumbai", "female", "blue");
const p2 = new Person("Avinash", "Pune", "Male", "black");
