
const greetings: string = "Hello world from bangladesh.";
// console.log(greetings)


// tuple concept of typescript <----->
const tupleExample : [string, number, boolean] =  ["Dolon Chandra Roy", 23, true];
// console.log(tupleExample);


// object type ----->
const myObj : {
    readonly company: "something"; //String literal type of typescript
    readonly name : string;
    age?: number;
    middleName: string;
    lastName: string;
} = {
    company: "something",
    name: "Dolon",
    age: 33,
    middleName: "Chandra",
    lastName: "Roy"
}

// console.log(myObj);


// function type in typescript
function numberAdd (num1: number, num2: number) : number {
    return num1 + num2;
}

const multiplyNum = (num2: number, num3: number) : number => {
    return num2 * num3;
}

// console.log(multiplyNum(3, 4));


// type alias in typescript ------><
type Student = {
    name: string;
    age: number;
    className: string;
}

const dolon : Student = {
    name: "Dolon Chandra",
    age: 34,
    className: "BSC 1s Year"
}

type AddFunc = (...num1: number[]) => number;
const add: AddFunc = (...num1) => {
    let adding = 0;
    num1.forEach((item) => adding = item + adding);
    return adding;
}
// console.log(add(2, 3, 4, 5));


// ------------------> Typescript union and intersection type <----------------------
type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer";
type FullstackDeveloper = "Frontend Developer" | "Expert Developer"; // union type

type Developer = FrontendDeveloper | FullstackDeveloper;
type DevObj = {
    name: String;
    role: Developer;
    age: number
}
const dolond : DevObj = {
    name: "Dolon Chandra",
    role: "Junior Developer",
    age: 34
}

// intersection type
type StudentType = {
    name: string;
    age: number;
    className: string;
}

type JobHolder = {
    name: string;
    designation: string;
    age: number;
}

type Man = StudentType & JobHolder;
const dolonr : Man = {
    name: "Dolon Chandra",
    age: 23,
    designation: "Frontend Developer",
    className: "BSC 2nd Year"
}
console.log(dolonr);


