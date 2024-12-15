
let names = ["Roland" , "Allan" , "Edgar", "Mark", "John"]
// Pop and Push
 //names.pop();
 //console.log(names);

 //names.push( "Tim")
 //console.log(names);


 //Shift & Unshift
 //names.shift()
 //console.log(names);


 //names.unshift("Norah")
 //console.log(names);

 //Slice
 //let newNames = names.slice(0,3);
 //console.log(newNames);

 //Splice
 //names.splice(2,1)
 //console.log(names);

 //indexof
//console.log(names[2]);
//console.log(names.indexOf("John"))
/*
Filter
ForEach
Find 
*/




// OBJECTS
// Student
let student = {
    name: "Kim Dareen",
    studentId: "123-mk",
    course: "Computer",
    grades: [24,50,70,80],
    getTuitionBalnce: function(text){
        return "UGK 100k";  
    
    }
}
console.log(student);
console.log(student.name);

delete student.name
console.log(student);
console.log(student.getTuitionBalnce());

console.log(names.length);
console.log(names.indexOf("John"));


let user ={

    name : "Roland",
    age : 40,
    userId: "Nin-2024",
    favmovi: ["men", "boy", "cat"],
    capital : function(text){
        return text.toUpperCase()
    }
}
console.log(user.capital("men"))
console.log(user.capital("atomes"))



// Array has integers, Floats, Strings
// Takes an array as parameter
// Returns an object with keys evens, odds,and chars
// even sorted numbers 
// odd sorted numbers
// sorted single char strings

/*

function testArray(Arr){
    let  newArray= [];
    for (let i=0; i % 2 === 0; i++){
    //console.log(newArray.splice(0.9))
    newArray.splice(Arr[i]);
}
     return newArray;
    }
let Arr = ['1','2','4','av'];
console.log(Arr,0);
    
*/

 

/*
function arrayValuesTypes(arr) {
	let newArray = [];
	for(let i=0; i<arr; i++) {
	newArray.push(typeof arr[i]);
	}
	return newArray;
}

// in JS, object is a super-type of functions, 

let arr = ['1', '2', '3','A' ,"5643", null];

// console.log(arr.0);

console.log([1, "a"]);
*/


// Arrays
const myArray = [ "a", "b", "c", "d", "e", "f", "g"];

/*

// add elemets to an array

myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;
myArray[3] = "man"

//refer to the array
console.log(myArray);

//length property
console.log(myArray.length);

//last item in the array 
console.log(myArray[myArray.length - 1]);
console.log(myArray[2]);

//Push and Pop
myArray.push("school");
console.log(myArray);

myArray.pop();
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);


//unshift and shift
myArray.unshift(42);
console.log(myArray);

const newLength = myArray.unshift(34);

console.log(newLength);

let newwer = myArray.unshift(90);
console.log(newwer);
console.log(myArray);

const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

console.log(myArray[1]);
console.log(myArray[6]);


delete myArray[3];
console.log(myArray);
console.log(myArray[3]);

//splice 
myArray.splice(1,0, 44, 43);
//myArray.splice(1,1);
console.log(myArray);

*/


let newArray = myArray.slice(2,5)  
console.log(newArray);

let change = myArray.reverse();
console.log(myArray);
 
let join1 =  myArray.join();
console.log(join1);

let newString = join1.split(",");
console.log(newString);

let myArray1 = [ "a", "b", "c", "d"]; 
let myArray2 = [ "e", "f", "g", "h", "i"];

let combine1 = myArray1.concat(myArray2);
let combine2 = [...myArray2, ...myArray1 ];
let combine3 = [myArray2, myArray1];

console.log(combine1);
console.log(combine2);
console.log(combine3);


const eqip1 = ["BALL", "SHOES", "BAG" ,"RACK"];
const eqip2 = ["snake", "LUDO", "CHESS", "GOLF","volley"];

const shelf1 = ["pants", "shirts", "laces"] 
const shelf2 = ["tops", "sweater", "hoodies", "pins"]

console.log(eqip1[1])
console.log(shelf2[3])

const dept1 = [eqip1,eqip2]
const dept2 = [shelf1,shelf2]

console.log(dept1);
console.log(dept2);

console.log(dept1[0][0]);
console.log(dept2[1][0]);
console.log(dept1[1][2]);


const store = [dept1, dept2]
console.log(...store);
console.log(store);
console.log(store[1][1][0]);
console.log(store[0][0][0]);
console.log(store[0][1][3]);
console.log(store[1][0][2]);
console.log(store[1][1][1]);




let someArray = [3.0,'a',7,'x','20','d',4,'f', 8];
/*
function takers(someArray) {
    for(i= [0]; i <= [10]; i++){
        if(1%2 === 0){
            return someArray
        }
        console.log(takers);
    }
}
*/

function sortArray(array){
    let evens = [];    
    let odds = [];
    let chars = [];
/*
    for (let i=0; i<array.length; i++){
        let currentElement = array[i];
        if (currentElement % 2 ===0 ){
            evens.push(currentElement);
        }
         else if (currentElement % 2 === 1 ){
            odds.push(currentElement);
        } else if (typeof currentElement === "string"){
            chars.push(currentElement);
        }
         else {
            console.log("Doesnot belong anywhere");
        }
    }
        */

    for (let element of array){
        
        if (element % 2 ===0 ){
            evens.push(element);
        }
         else if (element % 2 === 1 ){
            odds.push(element);
        } else if (typeof element === "string"){
            chars.push(element);
        }
         else {
            console.log("Doesnot belong anywhere");
        }
    }


 return {
    evenNumbers : evens,
    oddNumbers : odds,
    charaters : chars,
 }
 
}
console.log(sortArray(someArray));