// reduce method using rest operator
function sumNumbers(...sumNumbers) {
return sumNumbers.reduce((x, y) => x + y, 0);
}

console.log(add(2, 3, 5, 6));     //Output: 16

// key-value pairs
const object = {
    a: 'boolean',
    b: 40,
};

for (const [key, value] in Object.entries(object)) {
    console.log('${key} : ${value}');
}

//Rectangle class
class Rectangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }
      
      getArea() {
        return this.width * this.height;
      }
}

const Rectangle = new Rectangle (8,12);

console.log(Rectangle);  // Output: width:8, height:12
Rectangle.getArea();     // Output: 96

// swap using array destructuring
let a = 2;
let b = 6;
[a, b] = [b, a];
console.log(a);   // Output: 6
console.log(b);   // Output: 2

//Function greet
function greet ($name = 'Alice') {
  const [$name, ...hello] = greet;
}

console.log(greet);    // output: "Alice, hello"


// math.js
export function add(x, y) {
  return x + y;
}
export function subtract(x, y) {
  return x - y;
}

import {add as sum} from "./math.js";
console.log(sum(7, 4));     // Output: 11

import {subtract as minus} from "./math.js";
console.log(minus(7, 4));    // Output: 3


//Combined two arrays using spread operator
const array1 = [1, 2, 4, 5];
const array2 = [7, 8, 10, 15];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);    //Output: [1, 2, 4, 5, 7, 8, 10, 15]

//Person class
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
    introduce() {
      console.log('Hello, my name is ${this.name} and i am ${this.age} years old');
    }
}

const person = new Person("Alice, 54");
person.introduce();       // Output: Hello, my name is Alice and i am 54 years old


//object destructuring
function getFullName ({ firstName, lastName}) {
    console.log(firstName);
    console.log(lastName);
}

const name = {firstName: "Alisha", lastName: "Alen"};
getFullName(name);       // Output: Alice Alen


// rest operator using array destructuring
const numbers = [1, 2, 4, 5];
const [x, y, ...rest] = numbers;

console.log(rest);       // Output: [4, 5]