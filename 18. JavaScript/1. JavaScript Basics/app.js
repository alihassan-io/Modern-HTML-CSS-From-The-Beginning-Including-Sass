//////////////////// Log To Console //////////////////////////

// console.log('Hello Web World!');
// console.log(1);
// console.log([1, 2, 3]);
// console.log(false);

// var welcome = 'Hello Web World!';
// console.log(welcome);

// console.log({
//     a: 1,
//     b: 2
// });

// console.table({
//     a: 1,
//     b: 2
// });

// console.error("This is an error!");
// console.warn("This is a warning!");

// console.time('Hello');
// console.log('Hello Web World!');
// console.log(1);
// console.log([1, 2, 3]);
// console.log(false);
// console.timeEnd('Hello');

// console.clear();

////////////////////// Variables //////////////////////////////

// // var, let, const

// var name = 'Tech Guy';
// console.log(name);
// name = 'Guy';
// console.log(name);

// // Init Var
// var greet;
// greet = 'Welcome';
// console.log(greet);

// // Naming Convictions of Variables
// var x; // Letters
// var x1; // Numbers
// var _x; // Underscore
// var $x; // Dollar Sign

// var firstName; // Camel Case
// var first_name; // Underscore
// var FirstName; // Pascal Case
// var firstname;

// // let
// let name;
// name = 'Tech Guy';
// console.log(name);
// name = 'Guy';
// console.log(name);

// // Const
// const name = 'Tech Guy';
// console.log(name);
// // name = 'Guy'; // const variable can not be reassigned
// // console.log(name);

// // Const with array | we can not change array but we can mutate
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.push(6);
// console.log(arr);

// // Const with object | we can not change object but we can mutate
// const person = {
//     name: 'Techi',
//     age: 20
// }

// console.log(person);
// person.age = 23;
// console.log(person);

////////////////////  DATA TYPES /////////////////////////////

// // PRIMITIVE DATA TYPES

// // Number
// const age = 10;
// // String
// const name = 'Starring Guy';
// // Null
// const satisfiedYet = null;
// // Boolean
// const willBeOkay = true;
// // Undefined
// let kujWi;
// // Symbols | ES6
// const sym = Symbol();

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof satisfiedYet);
// console.log(typeof willBeOkay);
// console.log(typeof kujWi);
// console.log(typeof sym);

// // Non Primitive | Reference Types - Objects

// // Array
// const arr = [1, 2, 3];
// // Object
// const game = {
//     cards: true,
//     player: 2
// }
// // Date
// const today = new Date();

// console.log(typeof arr);
// console.log(typeof game);
// console.log(today);
// console.log(typeof today);

/////////////// Type Conversion ////////////////////

// let val;

// // Number to String
// val = String(125);
// // Boolean to String
// val = String(true);
// // Array to String
// val = String([1, 2, 3]);
// // Date to String
// val = String(new Date);

// // toString Method
// val = (150).toString();
// val = (false).toString();
// val = ([5, 6, 7]).toString();
// val = (new Date).toString();

// // String to Number
// val = Number('160');
// // Boolean to Number
// val = Number(true);
// // Array to Number (Not a Number | Not Possible)
// val = Number([7, 8, 9]);
// // Null to Number
// val = Number(null);
// // String of letters to Number (Not a Number | Not Possible)
// val = Number('hello');

// val = parseInt('150');
// val = parseFloat('175.70');

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// // Type Coercion
// let x = '5';
// let y = 9;
// let sum = x + y;

// console.log(sum);
// console.log(typeof sum);

/////////////// Numbers & The Math Object ////////////////////

// const x = 55;
// const y = 10;
// let result;

// // Basic Math Operations
// result = x + y;
// result = x - y;
// result = x * y;
// result = x / y;
// result = x % y;

// // Math Object (Properties & Methods)
// result = Math.PI;
// result = Math.E;
// result = Math.round(2.2);
// result = Math.ceil(4.1);
// result = Math.floor(7.9);
// result = Math.abs(-9);
// result = Math.min(8, 43, 5, -1, 65, -47, 122);
// result = Math.max(8, 43, 5, -1, 65, -47, 122);
// result = Math.random();
// result = Math.floor(Math.random() * 7 + 1);
// result = Math.sqrt(64);
// result = Math.pow(7, 2);

// console.log(result);

/////////////// String Methods & Concatenations /////////////

// const firstName = "Tech";
// const lastName = "Guy";
// let value;

// value = firstName + lastName;

// // Concatenation
// value = firstName + " " + lastName;
// value = "I am " + firstName + " " + lastName;

// // Append
// value = value + " So Called";
// value += " So Called";

// // Length
// value = firstName.length;

// // Escape (use of backslash "\")
// value = "I'm pretty sure that you won't end up there";

// // concat()
// value = firstName.concat(" ", lastName);

// // charAt()
// value = "Tech Guy";
// value = value.charAt(5);

// // indexOf()
// value = "Tech Guy";
// value = value.indexOf("u");

// // replace()
// value = "Tech Guy";
// value = value.replace("Guy", "Boy");

// // includes()
// value = "Tech Guy";
// value = value.includes("boy");

// // toUpperCase()
// value = "Tech Guy";
// value = value.toUpperCase();

// // toLowerCase()
// value = "Tech Guy";
// value = value.toLowerCase();

// // subString()
// value = "Tech Guy";
// value = value.substring(0, 4);

// // subStr()
// value = "Tech Guy";
// value = value.substr(0, 6);

// // slice
// value = "Tech Guy";
// //value = value.slice(0, 3);
// value = value.slice(-3);

// // trim()
// value = " Tech Guy ";
// value = value.trim();

// // split()
// value = "The Tech Guy";
// value = value.split(" ");

// console.log(value);

///////////////////// Template Literals / Strings //////////////

// const name = "Tech Guy";
// const age = 23;
// const star = "Gemini";
// let html;

// // Without Template String (ES5)
// html =
//   "<ul><li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   "</li><li>Star: " +
//   star +
//   "</li></ul>";

// html =
//   "<ul>" +
//   "<li>Name: " +
//   name +
//   "</li>" +
//   "<li>Age: " +
//   age +
//   "</li>" +
//   "<li>Star: " +
//   star +
//   "</li>" +
//   "</ul>";

// // With Template Literals (ES6)
// html = `
// <ul>
// <li>Name: ${name} </li>
// <li>Age: ${age} </li>
// <li>Star: ${star} </li>
// <li>Testing: ${1 + 5} </li>
// `;

// document.body.innerHTML = html;

////////////////////  Date & Times  ////////////////////////

// const today = new Date();

// let value = today;

// value = today.getDate();
// value = today.getDay();
// value = today.getFullYear();
// value = today.getHours();
// value = today.getMinutes();
// value = today.getMilliseconds();
// value = today.getMonth();
// value = today.getSeconds();
// value = today.getTime();

// let birthday = new Date("05/30/1996");
// birthday.setFullYear(1997);
// birthday.setDate(10);
// birthday.setMonth(5);

// console.log(birthday);

//////////// If Statements & Comparison Operators ////////////

// const value = 786;

// EQUAL TO
// if (value == 786) {
//   console.log("YES!!!");
// } else {
//   console.log("NOPE!");
// }

// // NOT EQUAL TO
// if (value != 786) {
//   console.log("YES!!!");
// } else {
//   console.log("NOPE!");
// }

// // EQUAL TO VALUE & TYPE
// if (value === 786) {
//   console.log("YES!!!");
// } else {
//   console.log("NOPE!");
// }

// // NOT EQUAL TO VALUE & TYPE
// if (value !== 786) {
//   console.log("YES!!!");
// } else {
//   console.log("NOPE!");
// }

// // IF ELSE IF
// const gender = "male";

// if (gender === "female") {
//   console.log("YES!!!");
// } else if (gender === "male") {
//   console.log("NOPE!");
// } else {
//   console.log("OOPS!");
// }

// Check UNDEFINED
//let unjEe = 5;
// if (typeof unjEe === "undefined") {
//   console.log(`Not defined pai jeee`);
// } else {
//   console.log(`${unjEe} hai wy wich`);
// }

// GREATER & LESS THAN
// if (value < 786) {
//   console.log("NOPE!");
// } else if (value >= 786) {
//   console.log("YES!!!");
// }

// LOGICAL OPERATORS
// if (value === 0 || value < 786) {
//   console.log("NOPE!");
// } else if (value === 786 && typeof value === "number") {
//   console.log("YES!!!");
// }

// // TERNARY OPERATOR
// console.log(value === 785 ? "NOPE!" : "YES!!!");

// // WITHOUT BRACES
// if (value < 786) console.log("NOPE!");
// else console.log("YES!!!");

////////////////////////// Switch ////////////////////////////
// const color = "orange";

// switch (color) {
//   case "violet":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "indigo":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "blue":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "green":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "red":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "yellow":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   case "orange":
//     console.log(`${color} belongs to Rainbow`);
//     break;
//   default:
//     console.log(`${color} does not belong to Rainbow`);
//     break;
// }

////////////// Function Declaration & Expressions ////////////

// Function Declaration

// function fun() {
//   console.log("Fun My Foot!");
// }

// fun();

// function well(status = "Kuj Na Puch") {
//   // Before ES6 Default Values
//   //if (typeof status === "undefined") {
//   //  status = "chill";
//   //}

//   console.log("Aaj kal tou: " + status);
// }

// well("MAST");
// well();

// Function Expression

// const acha = function () {
//   return "Jiya Ji";
// };

// console.log(acha());

// Immediately Invoked Function Expressions - IIFEs

// (function () {
//   console.log("This is IIFE at your service.");
// })();

// (function (value) {
//   console.log("This is IIFE with parameters at your service. " + value);
// })("Parameter");

// Property Methods

// const obj = {
//   display: function () {
//     console.log("Displaying...");
//   },
// };

// obj.noDisplay = function () {
//   console.log("Won't Display, Don't Force ME");
// };

// obj.display();
// obj.noDisplay();

/////////////////////// Loops //////////////////////////////

// // FOR LOOP
// for (let i = 0; i < 5; i++) {
//   for (let j = i; j >= 0; j--) {
//     console.log("* ");
//   }
//   console.log("\n");
// }

// // WHILE LOOP
// let x = 0;

// while (x < 7) {
//   console.log("* ");
//   x++;
// }

// // DO WHILE
// let y = 0;

// do {
//   console.log("* ");
//   y++;
// } while (y < 7);

// // FOR LOOP FOR ARRAY
// let arr = ["yes", "no", "may be"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// FOR EACH
// let arr2 = ["yes", "no", "may be", "I don't know"];

// arr2.forEach(function (i, index, array) {
//   console.log(`${index}: ${i}`);
//   console.log(array);
// });

// // MAP
// let arr3 = [
//   {
//     id: 0,
//     name: "a",
//   },
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "a",
//   },
//   {
//     id: 3,
//     name: "a",
//   },
// ];

// let arr4 = arr3.map(function (i) {
//   console.log("returning " + i.id);
//   return i.id;
// });

// console.log(arr4);

// FOR IN (used for objects)
// let person = {
//   securityID: 1,
//   name: "Techi",
//   age: 23,
//   inLove: true,
// };

// for (let i in person) {
//   console.log(`${i}: ${person[i]}`);
// }

////////// WINDOWS PROPERTIES / METHODS / OBJECTS ////////////

let value;

// ALERT
// alert("Hello Web World!");

// PROMPT
//value = window.prompt("Okay?.. Okay!");

// CONFIRM
// if (window.confirm("Toper, are you sure?")) {
//   console.log("okay");
// } else {
//   console.log("Not Okay");
// }

// HISTORY
//value = window.history;
//value = window.history.go(-1);

// HEIGHT AND WIDTH
// value = window.outerHeight;
// value = window.outerWidth;
// value = window.innerHeight;
// value = window.innerWidth;

// LOCATION
// value = window.location;
// value = window.location.href;
// value = window.location.origin;
// value = window.location.pathname;
// value = window.location.port;
// value = window.location.protocol;
// value = window.location.host;

// REDIRECT
//window.location.replace("https://www.google.com/");

// RELOAD
// window.location.reload();

// NAVIGATOR
// value = window.navigator;
// value = window.navigator.appCodeName;
// value = window.navigator.appVersion;
// value = window.navigator.appName;
// value = window.navigator.geolocation;
// value = window.navigator.language;
// value = window.navigator.vendor;
// value = window.navigator.onLine;

// MENUBAR
// value = window.menubar;

// SCROLL POINTS
// value = window.scrollX;
// value = window.scrollY;

// console.log(value);

/////////////////////// SCOPE ////////////////////////////////

// Global Scope
// var x = 1; // var has wired scope issues
// let y = 2;
// const z = 3;

// if (true) {
//   var x = 4;
//   let y = 5;
//   const z = 6;
//   console.log("IF Scope: ", x, y, z);
// }

// console.log("Global Scope: ", x, y, z);
