"use strict";
// ===================> Object Oriented Programming with Typescript <======================
class Animal {
    constructor(name, sound, age) {
        this.name = name;
        this.sound = sound;
        this.age = age;
    }
    getSound() {
        console.log(`The name of this animal is ${this.name} and sound is ${this.sound}`);
    }
}
const dog = new Animal("Bellu", "Ghew Ghew", 4);
// dog.getSound();
// <<_________________>> (Method tow) <<__________________>>
class AnimalTow {
    constructor(name, sound, age) {
        this.name = name;
        this.sound = sound;
        this.age = age;
    }
    getSound() {
        console.log(`The name of this animal is ${this.name} and sound is ${this.sound}`);
    }
}
const cat = new AnimalTow("Shukla", "Mew Mew", 3);
// cat.getSound();
// <<_________________>> (Inheritance Concept with Typescript) <<__________________>>
class Parent {
    constructor(name, age, label) {
        this.name = name;
        this.age = age;
        this.label = label;
    }
    getIdentity() {
        console.log(`Name : ${this.name}, Age: ${this.age}, Label: ${this.label}`);
    }
}
class Student extends Parent {
    constructor(name, age, label, class_name) {
        super(name, age, label);
        this.class_name = class_name;
    }
    getStudentInfo() {
        console.log(`${this.name} is read in class ${this.class_name}`);
    }
}
const dolon = new Student("Dolon Roy", 22, "University", "Degree 1st Year");
function getProduct(product) {
    if ("size" in product) {
        product.size = 353;
        return product;
    }
    return product;
}
const mobile = {
    name: "Walton S8 Mini",
    model: "S8 Mini",
    brand: "Walton"
};
const s8Mini = getProduct(mobile);
// console.log(s8Mini);
// <<_________________>> (Instanceof and is gourd with Typescript) <<__________________>>
class JobHolderStudent extends Parent {
    constructor(name, age, label, job_role) {
        super(name, age, label);
        this.job_role = job_role;
    }
    getJobPosition() {
        console.log(`${this.name} is a student with a job of ${this.job_role}!`);
    }
}
class FourTwenteStudent extends Parent {
    constructor(name, age, label, crime_role) {
        super(name, age, label);
        this.crime_role = crime_role;
    }
    getCrimePosition() {
        console.log(`${this.name} is a student with a crime role of ${this.crime_role}!`);
    }
}
const dolonRoy = new JobHolderStudent("Dolon Chandra Roy", 22, "BSC 1st year", "Frontend Developer");
const jasimUddin = new FourTwenteStudent("Jasim Uddin", 24, "Houners 3rd Year", "Ganja Sebon");
const isFourTwente = (student) => {
    return student instanceof FourTwenteStudent;
};
const isJobHolder = (student) => {
    return student instanceof JobHolderStudent;
};
function showingWorking(student) {
    if (isJobHolder(student)) {
        student.getJobPosition();
    }
    else if (isFourTwente(student)) {
        student.getCrimePosition();
    }
}
showingWorking(dolonRoy);
showingWorking(jasimUddin);
