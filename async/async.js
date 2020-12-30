"use strict";

// async & await
// clear style of using promise 😝


// 1.async 👑
// promise 방법
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         resolve('dain'); //비동기적 수행;
//     });
// }

// const user = fetchUser();
// console.log(user);

// async 방법
// async 를 함수 앞에 붙이면 자동적으로 promise라고 생각함.
async function fetchUser(){
    return 'dain';
}

const user = fetchUser();
console.log(user);


// 2.await ⛑
// async 가 붙은 함수안에서만 사용가능!!!
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000); // 기다림 끝날때까지
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍗';
}


// Promise로 호출한 결과( 너무 많이 사용하면 callback hell처럼 가독성 문제 생김)
// function pickFruits(){
//     return getApple()
//     .then(apple => {
//        return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits(){
    //하지만 여기서 apple banana각각의 순서대로 기다리지말고 동시에 기다리고 싶을땐?
    //병렬 배치 바나나 사과 총 1초기다림
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    //


    //직렬 배치 사과 1초 기다린후 바나나 1초기다림
    // const apple = await getApple();
    // const banana = await getBanana();

    return `${apple} + ${banana}`;
}


pickFruits().then(value => console.log(value));

//3. useful Promise APIs
//Promise.all(); 배열로 들어감
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

//Promise.race(); 가장빨리 호출되는 값을 소환함
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
    
}
pickOnlyOne().then(console.log);