let str = "Amitesh";

console.log(str.length); // length is not method , it is properties.

console.log(str.slice(2, 4)); // (output -> it), extract a postion of string slice(start, end - 1), also support negative index.
console.log(str.slice(-3, -1)); // (output -> es), its support negative value also.

console.log(str.substring(2,5)) // (output -> ite), return a part of string substring(start, end - 1), does not support negative index.

console.log(str.substr(2, 4)) // (output -> ites), extract charcters from a stringat specefic index substr(start, count) 
                              //  it is depericated now replaced by slice() substring(). 

console.log(str.substr(2)); // (output -> itesh), lenth is not given then extract till last.


console.log(str.indexOf('t')); // (output -> 3), return first index of a specified value. 

console.log(str.includes('esh')); // (output -> true), check whether a string contains a specific value.

let str2 = "Java script";
console.log(str2.replace("script", "lang")); // (output -> Java Lang) replace a value to another.

console.log(str.toUpperCase());  //(output -> AMITESH) convert into uppercase.

console.log(str.toLowerCase());  //(output -> amitesh) convert into lowercase.

let str3 = " Hello ";
console.log(str3.trim()); // (output -> Hello) remove extra spaces from the beginning and last. 

let str4 = "apple, banana, mango";

console.log(str4.split(",")); // (output -> [ 'apple', ' banana', ' mango' ]), Convert string into an array.

let str5 = " Pandey";
console.log(str.concat(str5)); // (output -> Amitesh Pandey), add two string.
console.log(str.concat(" ", "Pandey")); // (output -> Amitesh Pandey), add two or more string also.

console.log(str.charAt(2)); // (output -> i), return char at that position.
