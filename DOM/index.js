/* Explore the basics fo DOM manipulation 
- Get elements on the page
- Remove an element 
- Add a new element
- Listen to events
*/

//Get an element from the DOM
let heading = document.getElementById("heading");
console.log(document.getElementById("heading"));

let para = document.querySelector("p");
console.log(document.querySelector("p"));

let body = document.querySelector("body")
let button = document.querySelector("button");

// Removing an element from 
//para.remove ();
//heading.remove();

//Add new element
let newHeading = document.createElement('h1');
console.log(document.createElement('h1'));
newHeading.innerText = "The lord is good";

body.appendChild(newHeading)


// Work with Event listeners
button.addEventListener('click',function(){
    body.style.backgroundColor = "blue";
})