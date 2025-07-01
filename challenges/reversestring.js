let myString = "hello";
const newArr = myString.split("");
const revArray = newArr.reverse();
let text = revArray.join("");
console.log(text);


// one liner code

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));