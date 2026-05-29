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




const obj1 = {name: "James"}
const obj2 = {name: "Dexter"} 
const merged = {...obj1, ...obj2}
console.log(merged)


let nums = [1,2,3]
const result = nums.map(num => num * 2)
console.log(result)


let nums2= [1,2,3]
nums2.forEach(num => num * 2)
console.log(nums2)

let test: number | boolean
test = true
console.log(typeof test)