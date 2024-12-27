//loops
// While
let myNumber = 2;
while (myNumber <= 10){
    console.log(myNumber);
    myNumber += 2;    
}

// don't creat an endless loop
//Do while 
let myNumber1 = 1;
do {
    console.log(myNumber1);
    myNumber1 += 2;
} while (myNumber1 <= 10);

// for loop
for (let i = 0; i <= 10; i++){
console.log(i);
i+=2;
}

let name2 = "dave";
for (let i= 0; i <= name2.length; i++)
{
    console.log(name2.charAt(i));
}
/*
let name3 ="Dave,thjerjksdskldls";
let counter = 0;
let myLetter;
while (true){
    myLetter = name3[counter];
    console.log(myLetter);
    if(myLetter === "j") break;
    counter++;
}
*/
let name3 ="Davethjerjksdskldls";
let counter = 1;
let myLetter;
while (counter <=5){
    myLetter = name3[counter];
    console.log(myLetter);
    if (counter === 3){
        counter += 2;
        continue
    }
    if(myLetter === "j") break;
    counter++;
}
console.log(counter);

let countLimit = 10;
for(let i=0; i <=10; i++ ){
console.log(` Count is ${i}`)
}

let count = 10;
while (count >= 0){
    console.log(`count is ${count}`)
    count --
}

