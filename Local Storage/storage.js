// Working with localStorage
localStorage.setItem('accept-cookies', 'true');
localStorage.setItem('data',JSON.stringify({prop: 1}));
localStorage.setItem('score', 5);
localStorage.setItem('score', '8drev');
localStorage.setItem('nickname', 'Harry');
localStorage.setItem('man', JSON.stringify(89.09));

/*
console.log(localStorage.getItem('nickname'));
console.log(localStorage.getItem('data'));
console.log(localStorage.getItem('score'));
console.log(JSON.parse(localStorage.getItem('data')));
console.log(localStorage.getItem('man'));

console.log({...localStorage});

console.log(Object.values(localStorage));
console.log(Object.keys(localStorage));
console.log(Object.entries(localStorage));

localStorage.setItem('sore', '9023');

if(localStorage.getItem('score') === null){
    localStorage.setItem('score', '9023');
}

*/
localStorage.removeItem('data');
localStorage.removeItem('score');
 localStorage.clear();

 