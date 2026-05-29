let message: string = "Hello from TypeScript Web Console!";
let age: number = 21;
let isStudent: boolean = true;
let album: any = 12 + "233";

console.log(`${message} ${age} ${isStudent} ${album}`);

let union: number | string;
let union2: number | string | boolean;

union = 22;
union2 = false;

console.log(`${union} ${union2}`);

const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum(1, "2"));

let re: RegExp = /\w+/g;

console.log(re);

//=======================================================

//Arrays

let stringArr = ["one", "two", "three"];

let stringArr2 = [4, 5, 6];

stringArr2[stringArr2.length] = 2;

let stringArr3 = ["seven", 8, false];

stringArr3.unshift(true);

const merge = [...stringArr, ...stringArr2];
const merge2 = [...stringArr, ...stringArr2, ...stringArr3];

console.log(merge);
console.log(merge2);

let stringArr4 = ["john", "smith", "mark"];
let stringArr5 = ["wonka", 8, false];

stringArr5 = stringArr4;

console.log(stringArr5);

let bands: (string | number | boolean)[] = [];
bands.push(false);

console.log(bands);

//Tuples

let tuple: [string, number, boolean] = ["dave", 22, false];

let mixed = ["dave1", 23, true];

mixed = tuple;

console.log(mixed);

// Objects

let obj: { name: string; age: number } = {
  name: "didyeey",
  age: 22,
};

obj.name = "test";

// obj = [];
console.log(obj);
console.log(typeof obj);

let value: string | number;
value = 50;
value = "didyeey";
console.log(typeof value);

let value1: any = 5;
value1 = "hello";
console.log(value1);

const obj1 = { name: "James" };
const obj2 = { name: "Dexter" };
const merged = { ...obj1, ...obj2 };
console.log(merged);

let nums = [1, 2, 3];
const result = nums.map((num) => num * 2);
console.log(result);

let nums2 = [1, 2, 3];
nums2.forEach((num) => num * 2);
console.log(nums2);

let test: number | boolean;
test = true;
console.log(typeof test);

const username1: string = "Didyeey";
console.log(username1);

const price1: number = 99.99;
console.log(price1);

const isAdmin: boolean = false;
console.log(isAdmin);

let union1: string | number;
union1 = "testing";
console.log(union1);

const product = (a: number, b: number) => {
  return a * b;
};

console.log(product(2, 2));

const arr1: string[] = ["apple", "banana", "orange"];
console.log(arr1);

const mixType: (string | number | boolean)[] = ["hello", 22, false];
console.log(mixType);

const tuple1: [string, number, boolean] = ["testing", 32, false];
console.log(tuple1);

const obj12: { name: string; age: number } = {
  name: "test name",
  age: 21,
};

console.log(obj12);

function subtract(a: number, b: number) {
  return a - b;
}
console.log(subtract(2, 1));

const array: number[] = [1, 2, 3, 4, 5];

const produce = array.map((element) => {
  return element * 2;
});

console.log(produce);

const array1: number[] = [50, 56, 98, 32, 97, 55, 23];

const product1 = array1.filter((element) => {
  return element > 50;
});

console.log(product1);

const array2: number[] = [1, 2, 3, 4, 5];

const total = array2.reduce((acc, element) => {
  return acc + element;
}, 0);

console.log(total);

const find = array.find((element) => element == 4);

console.log(find);

const some = array1.some((element) => element >= 50);
console.log(some);

const positive = array1.every((element) => element > 1);
console.log(positive);

function info(name: string, age: number) {
  return console.log(`${name} is ${age} years old`);
}

info("dexter", 2);

//Interface!

interface User {
  readonly id: string;
  name: string;
  age?: number;
  greet?(): void;
  status?: Status;
}

const user1: User = {
  id: "66576d45e4b0c2a3f1234567",
  name: "Didyeey",
  age: 21,
};

const user2: User = {
  id: "66576d45e4b0c2a3f1234123",
  name: "John Smith",
  age: 39,

  greet() {
    return `hello my name is ${this.name} and my age is ${this.age}`;
  },
};

console.log(user2.greet?.());

//modifying properties
user1.age = 22;

console.log(user1);

interface add {
  (a: number, b: number): number;
}

interface multiply {
  (a: number, b: number): number;
}
const sum1: add = (a, b) => a + b;

console.log(sum1(1, 2));

const product2: multiply = (a, b) => {
  return a * b;
};

console.log(product2(2, 3));

interface birds {
  fly: string;
}

interface eagle extends birds {
  name: string;
  eat: true;
}

const phEagle: eagle = {
  name: "eagle 1",
  eat: true,
  fly: "yes",
};

phEagle.fly = "false";

console.log(phEagle);

// Type Alias

type Status = "active" | "inactive" | "pending";

type UserID = string | number;

type User1 = {
  readonly id?: UserID;
  name: string;
  isAdmin: boolean;
  age: number;
  greet(name: string, age: number): void;
  status: Status;
};

const user3: User1 = {
  id: 12312,
  name: "didyeey",
  isAdmin: true,
  age: 21,
  greet() {
    return `Hello my name is ${this.name} i am ${this.age} years old (Status: ${this.status})`;
  },
  status: "active",
};

console.log(user3.greet?.(user3.name, user3.age));

type add1 = (a: number, b: number) => number;

const sum3: add1 = (a, b) => {
  return a + b;
};

console.log(sum3(2, 3));

type admin = User1 & {
  lastname: string;
  firstname: string;
};

const person1: admin = {
  id: 12312,
  name: "didyeey",
  isAdmin: true,
  age: 21,
  greet() {
    return `Hello my name is ${this.name} i am ${this.age} years old (Status: ${this.status})`;
  },
  status: "active",
  firstname: "dexter",
  lastname: "quins"
};

console.log(person1)

// enums

enum Role {
  admin = "Admin",
  user = "User",
  customer = "Customer"
}

interface User2 {
  readonly id: UserID;
  name: String;
  age: number;
  role: Role;
  isStudent: boolean
  introduce(): void
}

const user4: User2 = {
  id: "NMBS-001",
  name: "Didyeey",
  age: 23,
  role: Role.user,
  isStudent: true,
  introduce(){
    return `I am ${this.name} ${this.age} years old my role here is ${this.role} and if you're thinking im a student ? yes its ${this.isStudent} `
  }
}

console.log(user4)


const arr2 = [1,2,3,4,5,6]
const target = 10;

function result1(arr: number[], target: number){

  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      
      if(arr[i] + arr[j] == target){
        console.log(`Found match Elements: ${arr[i]} and ${arr[j]}`)
      }
    }
  }
}

result1(arr2,target)

//reversing string
const str = "i am Didyeey"

function reverse(element: string): string {
  return element.split("").reverse().join("")
}

console.log(reverse(str))