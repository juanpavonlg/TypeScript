// Basic Example
// 1. Select the div element using the id property
const app = document.getElementById("app");

// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");

// 3. Add the text content
p.textContent = "Hello, World!";

// 4. Append the p element to the div element
app?.appendChild(p);

// Difference between children and childNodes
const div = document.getElementsByTagName("div")[1];

console.log(div.children);
// HTMLCollection(2) [p, p]

console.log(div.childNodes);
// NodeList(2) [p, p]

const div2 = document.getElementsByTagName("div")[2];

console.log(div2.children);
// HTMLCollection(1) [p]

console.log(div2.childNodes);
// NodeList(2) [p, text]

// The querySelector and querySelectorAll methods
const first = document.querySelector("li"); // returns the first li element
console.log(first);
const all = document.querySelectorAll("li"); // returns the list of all li elements
console.log(all);
