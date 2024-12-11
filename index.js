// console.log("Java is fun")
// window.alert("Yello Customer....")
// document.write("Hello Write ");
// document.write("Kayongo");



/*
let celsius = 20;
console.log(celsius);

const cToF = (celsius) =>{
return (celsius *9) /5 + 32;

};
console.log("Result in Fahrenheit", cToF(24));

//
const fToC = (fahrenheit) =>{
    return (fahrenheit -32)* 5/9;
    
    };
    console.log("Result in Celius", fToC(24));




let cel;
   let aTor = (cel)  =>{
    return (cel * 9);
   };

   console.log(aTor(40));
   cel = 90
   console.log(aTor);

function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("hello world"));
  console.log(WordCount("I am Java 2024"))

/*
  function WordRead(str) {
    return str.split(' ')
           .filter(function(n) { return n != '' })
           .length;
}

console.log(WordRead("I am a "));
*/
/*
const fahrenFormula = ((cels * 9) / 5 + 32);
const celsiusFormula = ((fahr * 9) / 5 + 32);

let value;

function calculateTemp(temperature) {
    let temp;
    if (temperature) {
        temp = fahrenFormula

    } else if (temperature){
        temp = celsiusFormula
    }
    console.log('Degree i' ${temp})
}

cel = 13
calculateTemp(value);

*/


// Temperature conversion
// convert to celsius
//let celsius = 20;
//console.log(celsius);



/*
const cToF = (celsius) =>{
return (celsius * 9) /5 + 32;

};
console.log("Result in Fahrenheit", cToF(36.67));
console.log(" Result in ", cToF(40));



// convert to fahrenheit
const fToC = (fahrenheit) =>{
    return (fahrenheit -32)* 5/9;
    
    };
    console.log("Result in Celsius", fToC(98.01));
    console.log("Result in Celsius", fToC(104));




    // Word Counter 
    function WordCount(str) { 
        return str.split(" ").length;
      }
      
      console.log(WordCount("hello world"));
      console.log(WordCount("I am Java 2024"));
      console.log(WordCount("I am Java 2024 five"));





      // Word counter with Spaces

      function WordCountSpace(str) { 
        return str.split('').length;
      }
      
      console.log(WordCountSpace("ab "));
      console.log(WordCountSpace("ab c d "));
      
      // 

      function number(digits){ 
        return typeof(digits);
      }
      console.log("this is a",number(0));


let value = 8;
let digit;
let neg;
let pos;
if (value > 0){
  digit = neg
} 
else if (value < 0){
 digit = pos
}
else {
  digit = 0
}
console.log("This number is" +  digit);
*/
//

let num;
function checkNumber(num){
  if (num > 0) {
    console.log(num + " is positive");
  } 
  else if (num < 0){
    console.log(num + " is negative");
  } 
  else {
    console.log(num + " is Zero");
  }
}

console.log(checkNumber(4));
console.log(checkNumber(-4));
console.log(checkNumber(0));
console.log(checkNumber(904));
console.log(checkNumber(- - 4));
console.log(checkNumber(- + 904));
2+2
console.log();





/*

let age = prompt("Please Enter age");
age = Number(age);
if (age <= 13){
  console.log(typeof +age ,"Is a Minor");
} else if (age <= 19){
  console.log(age ,"Is a Teenager");
} else if ( 20 <= age >= 35){
  console.log(age, "Is a Youth")
} else{
  console.log(age,"Is an Adult")
}
*/
/*
let age = prompt("Please Enter age");
age = Number(age);
 switch(true){
  case (age < 13): 
  console.log(age, "Is a Minor");
  break;

  case (age>=13 && age<=19):
  console.log(age, "Is a Teen");
  break;

  case (age>=20 && age<=35):
  console.log(age, "Is a Youth");
  break;

  default:
    console.log(age,"Is an Adult");
    break;

 }
*/

 let age = prompt("Please Enter age");
 age = Number(age);
(age < 13) ? console.log(age,"Is a Minor") : console.log("Is not Minor") ; (age>=13 && age<=19) ? console.log(age, "Is a Teen") : (age>=20 && age<=35) ? console.log(age, "Is a Youth") : console.log(age,"Is an Adult")

