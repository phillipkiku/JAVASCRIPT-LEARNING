/*
function greet(){
    console.log("Hello World");
}
greet();
greet();
greet();

function greetUser(username){
 console.log(`Hello ${username}, happy to see you.`);
}

greetUser("Laban");
greetUser("LabanAnana");
greetUser("abc");

*/

/*
let string1 = prompt("Please Enter First String");
let string2 = prompt("Please Enter Second String");
string1 = String(string1);
string2 = String(string2);
*/

/*
let fizzBuzz;
let Fizz;
let words;
function fizzBuzz(words){
    if ((words.length % 3) === 0){        
        return Fizz; 

        } 
}


// let dateOfBirth = prompt("Please Enter Date of Birth");
//1997console.log(typeof dateOfBirth);
// dateOfBirth = Number(dateOfBirth);
//(dateOfBirth < 13) ? console.log(dateOfBirth,"Is a Minor") : console.log("Is not Minor") ; (dateOfBirth>=13 && dateOfBirth<=19) ? console.log(dateOfBirth, "Is a Teen") : (dateOfBirth>=20 && dateOfBirth<=35) ? console.log(dateOfBirth, "Is a Youth") : console.log(dateOfBirth,"Is an Adult")
//dateOfBirth = Number(dateOfBirth);

let dateOfBirth = prompt("Please Enter Date of Birth");

if (dateOfBirth > 2006){
  console.log(dateOfBirth ,"This is a Minor");
} 
else if ( 2006 > dateOfBirth && dateOfBirth > 1988){
  console.log(dateOfBirth, "This is an Youth")
} 
else {
    console.log(dateOfBirth,"This is an Elder");
}


/*

create function called fizzBuzz
check if the parameters are of type strings
string 1 lenght + string 2 lenght = combined length
if combined length is divisible by 3 = FIZZ
if combined length is divisible by 5 = BUZZ
if divisible by both 5 and 3 = FIZZBUZZ

*/

//let fizzBuzz =prompt(string1, string2);

function fizzBuzz(string1, string2) {
if (typeof string1 === "string" && typeof string2 === "string"){
  let combinedLength = string1.length + string2.length;
  if(combinedLength % 3 === 0){
    console.log("FIZZ");
  }else if(combinedLength % 5 === 0){
    console.log("BUZZ");
  } else if (combinedLength % 5 === 0 && combinedLength % 3){
    console.log("FIZZBUZZ");
  } else {
    console.log("Not divisible by any")
  }
  
} else {
  console.log("Please enter Strings");
}

}

fizzBuzz("man", "menrrrr");