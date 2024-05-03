"use strict";
// type assertion of typescript -------------->
const multiplying = (value) => {
    if (typeof value === "number") {
        return value * 100;
    }
    else if (typeof value === "string") {
        return `The multiply of ${value} is ${parseFloat(value) * 100}`;
    }
};
const result1 = multiplying(100);
const result2 = multiplying("200");
const myFunc = (num1, num2) => {
    console.log(num1 + num2);
};
// myFunc(2 ,5);
const numArr = [1, 2, 3, 4, 5];
// const rollNumbers: number[] = [3, 6, 8];
const rollNumbers = [3, 6, 8];
// const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const mentors = ["Mr. X", "Mr. Y", "Mr. Z"];
// const boolArray: boolean[] = [true, false, true];
const boolArray = [true, false, true];
const user = [
    {
        name: "Mezba",
        age: 100,
    },
    {
        name: "Jhankar Mahbub",
        age: 110,
    },
];
const add = (x, y) => x + y;
const manush = ["Mr. X", "Mr. Y"];
const UserWithID = [
    1234,
    { name: "persian", email: "a@gmail.com" },
];
const dolon = {
    name: "Dolon Chandra",
    age: 22,
    computer: {
        name: "Walton",
        model: "Tamarind ZX 10",
        price: 75000
    },
    smartWatch: {
        name: "Hul",
        model: "34laskd",
        price: 343344
    },
    bike: {
        name: "Yeahmaha",
        price: 34334,
        ingine: "V6 Ingine"
    }
};
// console.log(dolon);
// generics with function in typescript --------------------------------->
const sendMoney = (money, info) => {
    const course = "Next level web development course.";
    return Object.assign(Object.assign({ money }, info), { course });
};
const moneySending = sendMoney(343, { name: "Dolon", age: 34, profession: "Web developer" });
console.log(moneySending);
