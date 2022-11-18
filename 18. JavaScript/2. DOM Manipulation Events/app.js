// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

//////////////////////  DOCUMENT OBJECT ///////////////////////

// let value;

// value = document;
// value = document.all;
// value = document.all[1];
// value = document.all.length;
// value = document.title;
// value = document.head;

// value = document.forms;
// value = document.forms[0];
// value = document.forms[0].id;
// value = document.forms[0].name;
// value = document.forms[0].action;
// value = document.forms[0].method;

// value = document.images;

// value = document.links;
// value = document.links[0];
// value = document.links[0].className;
// value = document.links[0].classList[1];

// value = document.scripts;
// value = document.scripts[0];
// value = document.scripts[0].type;
// value = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function (script) {
//   console.log(script);
// })

// console.log(value);

////////////// DOM Selectors For Single Elements /////////////

// console.log(document.getElementById("task-title"));

// // Getting things from element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").class);

// const taskTitle = document.getElementById("task-title");

// // Changing Styling
// taskTitle.style.color = "red";
// taskTitle.style.background = "#ccc";
// taskTitle.style.padding = "1rem";

// // Changing content
// taskTitle.textContent = "Hacked By JS";
// taskTitle.innerText = "Hacked By JS through InnerText";
// taskTitle.innerHTML = "<hr />";

// document.querySelector

// console.log(document.querySelector("li"));
// console.log(document.querySelector("h5"));
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";

//////////// DOM Selectors For Multiple Elements /////////////

// // document.getElementsByClassName
// let items = document.getElementsByClassName("collection-item");
// items[0].style.color = "red";
// items[2].textContent = "red";

// console.log(items);

// // Non Global Selection
// let nonGlobalItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(nonGlobalItems);

// // document.getElementsByTagName
// const lis = document.getElementsByTagName("li");
// lis[0].style.color = "red";
// lis[2].textContent = "red";

// // converting HTML Collection into Array
// let arr = Array.from(lis);

// arr.forEach(function (item, index) {
//   item.textContent = index;
//   console.log(item);
// });

// console.log(lis);
// console.log(arr);

// // QuerySelectorAll
// const items = document.querySelectorAll("ul.collection li");

// items.forEach(function (item, index) {
//   item.textContent = index;
// });

// let liOdd = document.querySelectorAll("li:nth-child(odd)");
// let liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function (item) {
//   item.style.background = "#ccc";
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = "f4f4f4";
// }

// console.log(items);

////////////////////// Traversing The DOM ////////////////////
// let value;

// let list = document.querySelector("ul.collection");
// let listItem = document.querySelector("li.collection-item");

// value = list;
// value = listItem;

// // Get Child Nodes
// value = list.childNodes;
// value = list.childNodes[0];
// value = list.childNodes[0].nodeName;
// value = list.childNodes[0].nodeType;

// // Node Types
// // 1 - Element
// // 2 - Attribute (Deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get Children Element Nodes
// value = list.children;
// value = list.children[0];
// list.children[1].textContent = "Oh ja pai";
// list.children[1].style.background = "#333";
// list.children[1].style.color = "#fff";

// // Children of Children
// value = list.children[0].children[0];
// list.children[0].children[0].style.color = "blue";

// // First Child
// value = list.firstChild;
// value = list.firstElementChild;

// // Last Child
// value = list.lastChild;
// value = list.lastElementChild;

// // Count Child Elements
// value = list.childElementCount;

// // Get Parent Node
// value = listItem.parentNode;
// value = listItem.parentElement;
// value = listItem.parentElement.parentElement;

// // Get Next Sibling Node
// value = listItem.nextSibling;
// value = listItem.nextElementSibling;
// value = listItem.nextElementSibling.nextElementSibling;

// // Get Previous Sibling Node
// value = listItem.previousSibling;
// value = listItem.previousElementSibling;

// console.log(value);

///////////////////// Creating Elements //////////////////////

// // Create Element <li></li>
// const li = document.createElement("li");

// // Adding class
// li.className = "collection-item";

// // Adding id
// li.id = "item";

// // Adding Attribute
// li.setAttribute("title", "list-item");

// // Creating text node and append
// li.appendChild(document.createTextNode("Acha Ji"));

// // Creating anchor element
// const link = document.createElement("a");

// // Adding classes to anchor element
// link.className = "delete-item secondary-content";

// // Adding favicon inside anchor
// link.innerHTML = `<i class="fa fa-remove"></i>`;

// // Adding anchor tag inside li
// li.appendChild(link);

// // Adding li into ul as child
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

/////////////// Removing & Replacing Element /////////////////

// // Creating new element
// const newHeading = document.createElement("h2");

// // Adding ID
// newHeading.id = "task-title";

// // Appending text node
// newHeading.appendChild(document.createTextNode("KamSham"));

// // Getting Old Heading/Element
// const oldHeading = document.getElementById("task-title");

// // Getting Parent
// const card = document.querySelector(".card-action");

// // Replacing Elements
// card.replaceChild(newHeading, oldHeading);

// // Remove Elements
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul.collection");

// // Remove list item
// lis[0].remove();

// // Remove Child element
// list.removeChild(lis[2]);

// // Classes & Attributes
// const firstItem = document.querySelector("li:first-child");
// const link = firstItem.children[0];

// // Class
// let val = link.className;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val = link;

// // Attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href", "https://google.com");
// val = link.setAttribute("target", "_blank");
// val = link.hasAttribute("target");
// link.removeAttribute("target");
// val = link.hasAttribute("target");
// console.log(val);

////////////// Event Listeners & Event Object ////////////////

// // // EventListener with callback function
// // document.querySelector(".clear-tasks").addEventListener("click", function (e) {
// //   console.log("Khayal kar pai");

// // //   e.preventDefault();
// // });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   let val = e;

//   // Event Target Element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   //   Event Type
//   val = e.type;

//   //   Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   //  Coords event relative to the element itself
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

//////////////////// Mouse Events ////////////////////////////

// const btnClear = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// // // Click
// // btnClear.addEventListener("click", event);
// // // Double Click
// // btnClear.addEventListener("dblclick", event);
// // // mouseDown
// // btnClear.addEventListener("mousedown", event);
// // // mouseup
// // btnClear.addEventListener("mouseup", event);
// // // mouseenter
// // card.addEventListener("mouseenter", event);
// // // mouseleave
// // card.addEventListener("mouseleave", event);
// // // mouseover
// // card.addEventListener("mouseover", event);
// // // mouseout
// // card.addEventListener("mouseout", event);
// // mousemove
// card.addEventListener("mousemove", event);

// // Event Handler
// function event(e) {
//   let x, y;
//   if (e.type === "mousemove") {
//     x = e.offsetX;
//     y = e.offsetY;
//     heading.textContent = `MouseX: ${x} MouseY: ${y}`;

//     document.body.style.backgroundColor = `rgb(${x}, ${y}, 50)`;
//   }
//   console.log(`EVENT TYPE: ${e.type}`);
// }

//////////////////// Keyboard & Input Events ////////////////

// const form = document.querySelector("form");
// const input = document.getElementById("task");
// const heading = document.querySelector("h5");

// // Clear input
// input.value = "";

// // Submit (form)
// form.addEventListener("submit", event);

// // Keydown
// input.addEventListener("keydown", event);
// // keyup
// input.addEventListener("keyup", event);
// // Keypress
// input.addEventListener("keypress", event);
// // focus
// input.addEventListener("focus", event);
// // blur
// input.addEventListener("blur", event);
// // cut
// input.addEventListener("cut", event);
// // paste
// input.addEventListener("paste", event);
// // input
// input.addEventListener("input", event);
// // change (dropdown list)
// input.addEventListener("change", event);

// function event(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);
//   heading.textContent = e.target.value;
// }

///////////////// Event Bubbling & Delegation ////////////////

// // Event Bubbling
// document.querySelector(".card-title").addEventListener("click", function (e) {
//   console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", function (e) {
//   console.log("card-content");
// });

// document.querySelector(".card").addEventListener("click", function (e) {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function (e) {
//   console.log("col");
// });

// Event Delegation

// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", function (e) {
//   console.log("Deleting");
// });

// document.body.addEventListener("click", delItem);

// function delItem(e) {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     console.log("Deleting Item");
//     e.target.parentElement.parentElement.remove();
//   }
// }

//////////////////// Local/Session Storage ///////////////////

// Set local storage item
//localStorage.setItem("name", "Ali");

// Clear local storage item
//localStorage.clear();

// Remove item form local storage
//localStorage.removeItem("name");

// Set session storage item
//sessionStorage.setItem("name", "Hassan");

// Get local storage item
//let name = localStorage.getItem("name");

// document.querySelector("form").addEventListener("submit", function (e) {
//   let task = document.getElementById("task").value;
//   let tasks;

//   if (localStorage.getItem("task") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("task"));
//   }

//   tasks.push(task);

//   localStorage.setItem("task", JSON.stringify(tasks));

//   e.preventDefault();
// });
