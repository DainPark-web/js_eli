"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할때 callback 함수 대신에 사용된다

// 공부 포인트*** 1. state(성공했는지 실패 했는지) 2. Producer vs Customer

// State: pending(실행중인 상태) -> fulfilled(성공적인 상태) or rejected(실패한 상태)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise 라는 독립적인 Object 가 특별히 있음 그안에는 resolve, reject 값이 있어야함
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    // 비동기적으로 하는게 좋다
    // 즉 만드는 순간 바로 실행됨**
    console.log('doing something....');
    setTimeout(() => {
        resolve('ellie'); // 작동이 될때
        // reject(new Error("no network")); // 작동이 안될때 Error 라는 class 사용 js제공하는 
    },2000);
});

// 2. Consumers: then, catch, finally
// then();
// promise에서 값을 잘 받아온다면,, then... 이거 실행할꺼야
// 정상적으로 잘 작동된 case 만을 실행함 즉 promise 온 reject값은 받지 않음
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});
// catch();
// error 발생했을때 대처할 callback 
// then 뒤에 이어 붙인다
// 즉 promise.then().catch() //체이닝이라 부름

// finally(); 성공실패 보단 마지막에 무조건 출력


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
});

const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});


getHen()
.then(hen => getEgg(hen))
.catch(error => {
    return '🥞';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch((error) =>console.log(error));
// 핸들링할때 catch를 어디에 넣어야 할지에 따라 다르게 나온다.