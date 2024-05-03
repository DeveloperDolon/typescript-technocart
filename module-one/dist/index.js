"use strict";
const greetings = "Hello world from bangladesh.";
// console.log(greetings)
// tuple concept of typescript <----->
const tupleExample = ["Dolon Chandra Roy", 23, true];
// console.log(tupleExample);
// object type ----->
const myObj = {
    company: "something",
    name: "Dolon",
    age: 33,
    middleName: "Chandra",
    lastName: "Roy"
};
// console.log(myObj);
// function type in typescript
function numberAdd(num1, num2) {
    return num1 + num2;
}
const multiplyNum = (num2, num3) => {
    return num2 * num3;
};
const dolon = {
    name: "Dolon Chandra",
    age: 34,
    className: "BSC 1s Year"
};
const add = (...num1) => {
    let adding = 0;
    num1.forEach((item) => adding = item + adding);
    return adding;
};
const dolond = {
    name: "Dolon Chandra",
    role: "Junior Developer",
    age: 34
};
const dolonr = {
    name: "Dolon Chandra",
    age: 23,
    designation: "Frontend Developer",
    className: "BSC 2nd Year"
};
console.log(dolonr);
