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

/*
let string1 = prompt("Please Enter First String");
let string2 = prompt("Please Enter Second String");
string1 = String(string1);
string2 = String(string2);
*/


let fizzBuzz;
let Fizz;
let words;
function fizzBuzz(words){
    if ((words.length % 3) === 0){        
        return Fizz; 

        } 
}





//

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





