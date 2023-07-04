//traversing dom
var itemList = document.querySelector("#items");
//parentNodes
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ="gray";

//parentElement

console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor ="coral";

//childNodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);

itemList.children[1].style.backgroundColor="yellow";

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello 1";

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 4";

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";


// createElements

//create a div
var newDiv = document.createElement("div");
console.log(newDiv);
newDiv.className ="hello";
newDiv.id ="hello1";

// add Attribute
newDiv.setAttribute("title", "Hello Div");
console.log(newDiv);


// create text node
var newDivText = document.createTextNode("Hello World");

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var  h1 = document.querySelector("header h1");


console.log(newDiv);

container.insertBefore(newDiv, h1); 