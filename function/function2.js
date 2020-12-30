"use strict";
//function2

// const num = 1;
// const num2 = 2;
// const result = num + num2;

// console.log(result);

function add(x, y){
    return x + y;
};

let x = 5;
let y = 7;

let sum = add(3,4);
console.log(sum);

//함수에 함수를 선언가능함
const doSomething = add;
console.log(doSomething(2,2));

console.clear();

function divid(x, y){
    return x/y;
}
function surprise(operator){
    const result = operator(2,3);
    console.log(result);
}

surprise(divid);