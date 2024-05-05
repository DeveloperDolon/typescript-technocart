

// ===================> Object Oriented Programming with Typescript <======================
class Animal { // method one <->-<->-<->
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

// <<_________________Method tow__________________>>
class AnimalTow { 
    constructor (public name : string, public sound : string, public age : number) {}

    getSound() {
        console.log(`The name of this animal is ${this.name} and sound is ${this.sound}`);
    }   
}

const cat = new AnimalTow("Shukla", "Mew Mew", 3);
cat.getSound();