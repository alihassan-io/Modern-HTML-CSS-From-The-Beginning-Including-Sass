////////////// Constructor and this keyword ////////////////////

// // Object literal
// let banda = {
//     name: "Ali",
//     age: 23,
// }

// // Constructor and this
// function Banda(name, age) {
//     this.name = name;
//     this.age = age;

//     // Function inside constructor
//     this.getGeneration = function () {
//         let gen;
//         this.age > 22 ? gen = "Y" : gen = "z";
//         return gen;
//     }
// }
// let person = new Banda("Guy", 20);
// console.log(person.getGeneration());

/////////////////  Built in Constructors  //////////////////////

// // string
// const str1 = "Acha Ji";
// const str2 = new String("Acha Jii");

// // Number
// const num1 = 27;
// const num2 = new Number(13);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(false);

// // Function
// const fun1 = function (x, y) {
//     return x + y;
// }
// // Didn't work
// // const fun2 = new function ("x",
// //     "y";
// //     "return 1 + 1");

// // Array
// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 5, 3);

// // Object
// const obj1 = {
//     name: "Guy"
// };
// const obj2 = new Object({
//     name: "Lady"
// });

// // Regular Expressions
// const regExp1 = /\w+/;
// const regExp2 = new RegExp("\\w+");

// console.log(regExp2);

////////////////////  Prototypes (ES5)  //////////////////////

// // Object Prototype
// // Banda Prototype

// // Constructor
// function Banda(name, age) {
//   this.name = name;
//   this.age = age;

//   // Function inside constructor
//   //   this.getGeneration = function () {
//   //     let gen;
//   //     this.age > 22 ? (gen = "Y") : (gen = "z");
//   //     return gen;
//   //   };
// }

// // Function inside Banda Prototype
// Banda.prototype.getGeneration = function () {
//   let gen;
//   this.age > 22 ? (gen = "Y") : (gen = "z");
//   return gen;
// };

// let person = new Banda("Guy", 20);
// console.log(person.getGeneration());
// console.log(person.hasOwnProperty("getGeneration"));

////////////////  Prototypal Inheritance  ////////////////////

// function Banda(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Banda.prototype.greeting = function () {
//   return `Ji aya nu ${name}`;
// };

// function ApnaBanda(name, age, moto) {
//   // Inherit Banda Constructor
//   Banda.call(this, name, age);
//   this.moto = moto;
// }

// // Inherit Banda prototype methods into ApnaBanda prototype
// ApnaBanda.prototype = Object.create(Banda.prototype);

// // Make ApnaBanda.prototype return ApnaBanda()
// ApnaBanda.prototype.constructor = ApnaBanda;

// ApnaBanda.prototype.greeting = function () {
//   return `Jiii aya nu ${name}, Moto is ${this.moto}`;
// };

// const person1 = new Banda("Guy", 20);
// const person2 = new ApnaBanda("Tech Guy", 23, "Brotherhood");

// console.log(person2);
// console.log(person2.greeting());

/////////////////////  Object.create()  //////////////////////

// const personPrototypes = {
//   greetings: function () {
//     return `Welcome ${this.firstName} ${this.lastName}`;
//   },
// };

// // One way
// const person1 = Object.create(personPrototypes);

// person1.firstName = "Guy";
// person1.lastName = "BusGuy";
// person1.age = 20;

// // Another way
// const person2 = Object.create(personPrototypes, {
//   firstName: { value: "Tech" },
//   lastName: { value: "Guy" },
//   age: { value: 20 },
// });

// console.log(person1);
// console.log(person2.greetings());

///////////////////////  ES6 Classes  ////////////////////////

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   whoAmI() {
//     return `You are ${this.gender}, your name is ${this.name} & you are ${this.age} yrs old`;
//   }

//   static doSomething(x, y, z) {
//     if (z % 2 === 0) {
//       return x + y;
//     } else {
//       return x - y;
//     }
//   }
// }

// const person1 = new Person("TechGuy", 20, "Male");

// console.log(person1.whoAmI());

// console.log(Person.doSomething(1, 2, 3));

///////////////////////  Sub Classes  ////////////////////////

// class Species {
//   constructor(type) {
//     this.type = type;
//   }

//   greetings() {
//     return `Hello ${this.type}`;
//   }
// }

// class Human extends Species {
//   constructor(type, gender, name, age) {
//     super(type);

//     this.gender = gender;
//     this.name = name;
//     this.age = age;
//   }

//   static mySpecies() {
//     return `Human is your species`;
//   }
// }

// const maleHuman = new Human("Human", "Male", "TechGuy", 20);

// console.log(maleHuman);
// console.log(maleHuman.greetings());
// console.log(Human.mySpecies());
