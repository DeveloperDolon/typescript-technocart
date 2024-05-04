
// type assertion of typescript -------------->
const multiplying = (value: string | number) : string | number | undefined => {
    if(typeof value === "number") {
        return value * 100;
    } else if(typeof value === "string") {
        return `The multiply of ${value} is ${parseFloat(value) * 100}`;
    }
}

const result1 = multiplying(100) as number;
const result2 = multiplying("200") as string;
// console.log(result1, result2)


// interfaces in typescript 

interface MyArray {               // ------> array type declare with interfaces
    [ index : number ] : number
}
interface StudentFunc {     // ----> function type declare with interfaces
    (num1: number, num2: number) : void
}

const myFunc : StudentFunc = (num1, num2) => {
    console.log(num1 + num2);
}
// myFunc(2 ,5);
const numArr: MyArray = [1, 2, 3, 4, 5];


// generic type in typescript -------------------->
    // generic type
  
    type GenericArray<T> = Array<T>;
  
    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];
  
    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  
    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];
  
    interface User {
      name: string;
      age: number;
    }
  
    const user: GenericArray<User> = [
      {
        name: "Mezba",
        age: 100,
      },
      {
        name: "Jhankar Mahbub",
        age: 110,
      },
    ];
  
    const add = (x: number, y: number) => x + y;
  
    // add(30, 20);
  
    //generic tuple
  
    type GenericTuple<X, Y> = [X, Y];
  
    const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  
    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
      1234,
      { name: "persian", email: "a@gmail.com" },
    ];

    // generics with interfaces in typescript --------------->
    interface Developer<T, X = null> {
        name: string;
        age: number;
        computer: {
            name: string;
            model: string;
            price: number
        }
        smartWatch: T;
        bike?: X
    }

    interface AppleWatch {
        name: string;
        model: string;
        price: number
    }

    const dolon : Developer<AppleWatch, {name: string, price: number, ingine: string}> = {
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
    }
    // console.log(dolon);


    // generics with function in typescript --------------------------------->
    const sendMoney = <T, Y>(money: T, info: Y) : object => {
        const course = "Next level web development course.";
        return {
            money,
            ...info,
            course
        }
    }
    
    interface Info {
        name: string;
        age: number;
        profession: string;
    }

    const moneySending = sendMoney<number, Info>(343, {name: "Dolon", age: 34, profession: "Web developer"});
    // console.log(moneySending);




    // generics with constraints in typescript -------------------------------------->
    interface EmployType {
        name: string;
        job: string;
        age: number;
    }
    const employFunc = <T extends EmployType>(info: T) : T => {
        return info;
    }

    const dolonEm = {
        name: "Dolon Chandra",
        job: "Software Engineer",
        age: 22,
        salary: "dolon"
    }

    // console.log(employFunc(dolonEm));

    // constrains using keyof
    const getProperty = <T, X extends keyof T> (obj: T, key: X ) => {
        return obj[key];
    }

    const car = {
        name: "x-corolla",
        brand: "X",
        price: 34334
    }

    // console.log(getProperty(car, "price"));



    // generics with promise type in typescript ---------------------------------------------->
    type ResponseDataType = string;

    const getResponseData = () : Promise<ResponseDataType> => {
        return new Promise((resolve, reject) => {
            const data : ResponseDataType = "This is my response.";

            if(data) {
                resolve(data);
            } else {
                reject("There are no data available!");
            }
        });
    };

    const invokeResponseFunc = async () => {
        const response : ResponseDataType = await getResponseData();
        console.log(response, "This");
    }

    // invokeResponseFunc();



    // type condition with typescript -------------------------------------------------->
    interface Seikh {
        car: string;
        bike: boolean;
        name: string;
    }

    type CheckVehicle<T> = T extends keyof Seikh ? true : false;
    type hasCar = CheckVehicle<"car">; 



    // mapped types in typescript -------------------------------------------------------------------->
    type AreaType = {
        height: number;
        width: number;
        name: string;
    }

    type HeightType = AreaType["name"]; // Look up type that's called.
    type AreaString = {
        [key in "height" | "width" | "name"] : string
    }

    const areaInfo : AreaString = { // one way of making mapped types in typescript
        height: "233",
        name: "SOmeting",
        width: "433"
    }

    // method tow <---> <---> <---> <--->
    interface SquireNumberType {
        height: number;
        width: number;
        area: number;
    }

    type SquireStringType <T> = {
        [key in keyof T] : T[key]
    }

    const mySquire : SquireStringType<SquireNumberType> = {
        height: 34,
        width: 34,
        area: 34,
    }

    console.log(mySquire);