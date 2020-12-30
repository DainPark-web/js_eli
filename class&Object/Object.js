"use strict";

//primitive type은 value 하나만 선언 가능

const name = 'dain';
const age = 28;
// 이렇게 계속 쓰다보면 너무 복작해짐 그래서 Object 사용

//1. Literals and properties
//Object = { key: value };
//obj1   //'object literal' syntax
const obj1 = {
    name: 'dain',
    age: 28
}

obj1.hasjob = true; //🌕 // 추가 가능
delete obj1.hasjob; // 🟠 //삭제 가능
console.log(obj1); 



//obj2 class 를 이용해 만드는 방법  //'object constructor' syntax
const obj2 = new Object();
obj2.name = 'dain';
console.log(obj2);

// 2. Computed properties
// 이렇게 obj를 array 처럼 할수 있는데 할때 string 형태로 해야함
console.log(obj1.name); 
console.log(obj1['name']);

obj1['hasJob'] = true;
console.log(obj1['hasJob']);


// 언제 어떤걸 사용해야 하는지?🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣 
// Literals and properties: 원하는 키를 받아 올때(대부분 이걸 씀)
// Computed properties: 원하는 키를 뭔지 확실히 모를때, 런타임에서 결정될때

// 실시간으로 원하는 키를 받아 올때 : Computed properties
// ex)
function printValue(obj, key){
    console.log(obj.key);
}
printValue(obj1, 'name'); // undefined
// 이렇게 literals 를 사용하면 실시간으로 받아올때 작동안됨 왜냐하면 아직 뭐가 들어갈지 모르기 때문

// 하지만 이렇게 computed 사용하면 작동함
function printValue2(obj, key){
    console.log(obj[key]);
}
printValue2(obj1, 'name');

// 3. Property value shorthand
// class 와 비슷
function makePerson(name, age){
    return {
        name: name, // 이렇게 들어가는 Key value가 같다면 줄여쓸 수 있다
        age // 이렇게
    }
}
const person1 = makePerson('dainc', 28);
console.log(person1);

// // 4. Constructor Function // class처럼 쓰는 함수
// function serson(name, age){
//     // this = {} 즉 return 필요 없음 이미 클래스로 인식
//     this.name = name;
//     this.age = age;
//     // return this;
// }

// const person2 = serson('dainb', 29);
// console.log(person2);

// 5. in operator: property existence check (key in obj)
//key 값이 해당 obj 들어 있는지 boolean 으로 보여줌
console.log('name' in person1);


console.clear();
// 6. for..in vs for..of 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡
// for(key in obj) 🟡 🟡 🟡
for(let key in obj1){
    console.log(key);
}
// obj의 key 값을 다 내보냄


//for(value of iterable) 🟡 🟡 🟡
const array = [1,2,3,4,5];
for(let v of array){
    console.log(v);
}


//cloning 🍎
//primitive type을 제외하고는 
//link되어 있어서 오리지널 변경하면 다변경됨
const user = {name:'code', age:'20'};
const user2 = user;
console.log(user);
console.log(user2);

//obj copy method
//old way
console.clear();
const user3 = {}
for(let key in user){
  user3[key] = user[key];
}
console.log(user3);

//new way
//Object.assign()🎹
const user4 ={};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

const fruits1 = {color: "red"};
const fruits2 = {color: "green", size: "big"};
const mixed = Object.assign({}, fruits1, fruits2);
console.log(mixed);