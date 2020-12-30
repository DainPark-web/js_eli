"use strict";

//CallBack 이란
//비동기 프로그램



//01 동기와 비동기 (Javascript is synchronous).동기적 이다
//Execute the code block by orger after hoisting.
//hoisting: var. function declaration 자동적으로 제일 위로 올라감
console.log('1');
setTimeout(() => console.log('2'),1000);//callback: 여기선 setTimeout으로 1초뒤에 함수 불러줘 call
    //그뒤에 불러줌 back 그래서 callback 즉 비동기
console.log('3');


//Synchronous callback (언제 시작 할지 예상가능)
function printImmediately(print){
    print();
}
printImmediately(() => console.log("hello"));

//Asynchronous callback (예상 불가능)
function printWithDealy(print, timeout){
    setTimeout(print, timeout);
}

printWithDealy(() => console.log('async callback'), 2000);




console.clear();
//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') || 
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user == 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            } else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password, user => {
    userStorage.getRoles(user, userWithRole =>{
        alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`);
    },
    error => {
        console.log(error);
    }
    );
},error => {
    console.log(error);
});

// call back 연습!!!


