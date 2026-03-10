let str = "malayalam";

let left = 0;
let right = str.length - 1;
let isPalindrome = true;

while (left < right) {
    if (str.charAt(left) != str.charAt(right)) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}