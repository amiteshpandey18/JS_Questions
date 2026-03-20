let obj = {
    name : "Amitesh",
    details: {
        roll : 23,
        grade : 'A',
        marks : 87
    }
}

let key = "details";

console.log(obj.details.grade);
console.log(obj[key].roll);
console.log("---->",obj["name"]);

// -----------------------------------------------------------------------------

let student = {
  name: "Amitesh",
  details: {
    roll: 23,
    marks: {
      math: 90,
      science: 85
    }
  }
};

// 1. DOT Notation ------------------------------------------------------------

console.log(student.details.roll); // 23
console.log(student.details.marks.math);  // 90

// 2. Bracket Notation --------------------------------------------------------

console.log(student["details"]["marks"]["science"]); // 85


// 3. Mixed Notation -----------------------------------------------------------

let key1 = "details";
console.log(student[key1].marks.math); // 90

// 4. Optional Chaining (Safe Access) * -------------------------------------------

console.log(student.details.marks.english); // 

console.log(student.details?.english);  // Undefine

     // Right way to right -->

console.log(student.details?.english) // Undefine
