let view1 = document.getElementById("view1");
console.log(view1);
let view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "none";
view1.style.display = "flex";

let views = document.getElementsByClassName("view");
console.log(views);

let sameViews = document.querySelectorAll('.view');
console.log(sameViews);


let divs = view1.querySelectorAll("div");
console.log(divs);

let sameDivs = view1.getElementsByClassName("div");
console.log(divs);

let evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i =0; i < evenDivs.length; i++){
    evenDivs[i].style.color = "red";
    evenDivs[i].style.width = "20px";
}

let navText = document.querySelector("nav, h1");
console.log(navText);
navText.textContent = "Hello World!";

let navbar = document.querySelector("nav");
//navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right `;
//console.log(navbar);
//navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);


//view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


while (view2.lastChild){
    view2.lastChild.remove();
}

let creatDivs = (parent, iter) => {
    let newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000"
    newDiv.style.width = "100px";
    newDiv.style.display = "100px";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};

// creatDivs(views2, 10)
for (let i = 1; i <= 12; i++){
    creatDivs(view2 ,i)
}
