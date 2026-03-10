// If char is lowercase convert into uppercase,  if char is uppercase convert into lowercase


let str = "aMiTesH";

let toggle = "";

for(let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        toggle += str.charAt(i).toLowerCase(); 
    } else {
        toggle += str.charAt(i).toUpperCase();
    }
}

console.log(toggle);

//  --------------- Second Approch -----------------------------------------------------------------------

// let str = "aMiTesH";

// let toggle = "";

// for (let ch of str) {
//     toggle += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
// }

// console.log(toggle);