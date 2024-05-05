

// ===================> Object Oriented Programming with Typescript <======================

class Animal { // method one --<->-<->-<->--
    name: string;
    sound: string;
    age: number;

    constructor(name: string, sound: string, age: number) {
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
    constructor (public name : string, public sound : string, public age : number) {}

    getSound() {
        console.log(`The name of this animal is ${this.name} and sound is ${this.sound}`);
    }   
}

const cat = new AnimalTow("Shukla", "Mew Mew", 3);
// cat.getSound();



// <<_________________>> (Inheritance Concept with Typescript) <<__________________>>
class Parent {
    constructor (public name: string, public age: number, public label: string){}

    getIdentity() {
        console.log(`Name : ${this.name}, Age: ${this.age}, Label: ${this.label}`);
    }
}

class Student extends Parent {
    constructor (name: string, age: number, label: string, public class_name: string) {
        super(name, age, label);
    }

    getStudentInfo() {
        console.log(`${this.name} is read in class ${this.class_name}`);
    }
}

const dolon = new Student("Dolon Roy", 22, "University", "Degree 1st Year");
dolon.getIdentity();
dolon.getStudentInfo();