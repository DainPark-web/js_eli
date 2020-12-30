"use strict";

//Difference Between Primitive type and Object 

//primitive data type
//number, string. boolean, null. undefined 이런 것을 제외한 모든것들은 object
let age = 2;
let age2 = age;
console.log(age);//2
console.log(age2);//2

age = 3;
console.log(age);//3
console.log(age2);//2 primitive data 는 다른 변수에 할당할때 복사해오기 때문에
//이미 복사가 끝나서 변경을해도 복사된 변수에 영향을 안줌 하지만 obj는 주소만 복사해서 링크되어 있음


//object 에는 배열 함수 메소드 등등
//object는 적어도 하나 이상 데이터 가 들어있다

//Object
let obj = {
    name : 'ellie',
    age : 5,
}
let obj2 = obj;
console.log(obj.name);
console.log(obj2.name);

//primitive type은 다른 변수에 할당할때 복사해서 옴
//obj은 주소를 복사해서옴 계속 링크가 연결되있음
obj.name = 'dain';
console.log(obj.name);
console.log(obj2.name);



//let 은 변경가능
//const 는 변경불가능

//근데왜? ojb는 const 해도 안에 reference 는 변경 가능하지?
//이미 할당된것은 가능하지만 obj 전체 자체는 변경 불가능
const text = {
    name: "daintest",
    age: 28
}
text.name="jojo";
text.sex ="man";
// text = {
//     dain: "designer"
// }
// 이렇게 전체 변경 불가능
console.log(text);