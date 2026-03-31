/**  (i)    --> Function name starts with capital letter
 *   (ii)   --> Use this to assign properties
 *   (iii)  --> always call with new
*/

function Person(name) {
    this.name = name;

   this.subject = function() {
        console.log(this.name , "is learning Javascript");
    }
}

const p1 = new Person("Rohit");
const p2 = new Person("Ajith");

p1.subject();
p2.subject();