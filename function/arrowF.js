//Function

//input = parameters
//output

//API(application Programming Interface)

//Function
//fundamental building block in the program

//for one function one task🦁
//function is a type of obj

//2. Parameters
// premitive parameters: passed by value
// obj parameters: passed by reference

//3. Default parameters🐹
function showMessage(message, from = 'unknown'){ // from 에 아무 것도 안들어 왔을때 'unknown'불러냄
    console.log(`${message} by ${from}`);
}
showMessage("dain");

//4. Rest parameters🐮
function printAll(...dain){
    for(let i = 0; i<dain.length; i++){
        console.log(dain[i]);
    }
    //or
    for(const dai of dain){
        console.log(dai+" for of");
    }
}
//(...Name)은 value가 array 형태로 들어간다 
printAll("din","ps","adf","addf");


//5. function은 obj의 일종이기 때문에 function.(obj의 속성값들) 확인가능

//6. Scope🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇
//밖에서는 안이 보이지 않고 안에서만 밖이 보인다.
//함수안에서 선언된 변수는 밖에서 적용안되고
//밖에서 선언된 변수는 안에서 적용됨
//함수 안에서의 함수는 부모 함수의 변수 적용됨

//7. Return🚣‍♂️

//8 Early Return
//조건이 맞지 않을때 바로 바로 return 해라

//9. First-class function🏵
//functions are treated link any other variable
//can be assigned as a value to variable
//can be passed as an argument to other function
//can be returned by another function

//1. function expression
//.a function declaration can be called earlier than it is defiend(hoisted)
// a function expression is created when the execution reaches it

const print = function(){ //anonymous function
    console.log('print');
};

print();

const print2 = function printt(){ //named function
    console.log('print');
};

print2();

const printAgain = print; // function을 function에 가능


//8. Callback🅰️
// callback 이란 함수에서 조건이 맞을 땐 A함수 틀릴땐 B함수를 호출해 

function callBack(answer, Yes, No){
    if(answer === 'dain'){
        Yes();
    }else{
        No();
    }
}
function Yes(){
    console.log("yess");
}
function No(){
    console.log("nooo");
}
callBack('daidn', Yes, No);


//9. Arrow Function ☢️☢️☢️☢️☢️☢️📒
// const simplePrint = function(){
//     console.log('simple right?');
// }

const simplePrint = () => console.log('simple Right?');
simplePrint();

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
