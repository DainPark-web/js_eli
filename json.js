"use strict";
//JSON 서버통신

//request response 요청과 응답의 반복
//AJAX 동적으로 서버에게 요청을 받는것
//XHR
//XML
//fetch() API  서버통신
//XML httpRequest 서버 통신

//하지만 요즘은 JSON 사용 (javaScript Object Notation)
//json 도 object처럼 key: value로 이루워져 있음



//Json은(text summary)⭐️
//1. simplest data interchange format
//2. lightweight text-based structure
//3. easy to read
//4. key-value pairs
//5. used for serialization and transmission of data between the
//network the network connection
//6. independent programming language and platform

// Client ---> server⭐️
// ex) 토끼를 client ---> server로 보낼때
//     {key: value}로 넣어 서버로 보냄 받아 올때도 같음

//Json 공부 포인트⭐️⭐️⭐️
// 1. Serialize(직렬화) Object -> String
// 2. Deserialize  String -> Object

console.clear();

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true); // boolean -> string
console.log(json);//boolean 값도 가능

json = JSON.stringify(['apple', 'banana']); //array -> string
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit); // Object -> string Json으로 변화
console.log(json); //함수는 포함안됨 오브젝트의 데이터가 아니기 때문에

json = JSON.stringify(rabbit,["name", "color"]);  //replacer 원하는 부분만 string으로 변환한뒤 소환.
console.log(json);

console.clear();

json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});  
console.log(json);


//2. JSON to Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
console.log(json);

// const obj = JSON.parse(json);🌦
// console.log(obj);

// rabbit.jump(); rabbit안에는 jump함수가 있었지만
// obj.jump();  obj는 json에서 변환과정에 함수를 포함할 수 없어서 변환할때 걸러져버림 그래서 없음

// console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());  이것도 마찬가지 getDate()메소드를 못받아옴
// 이유 new Date() 가 string으로 변화됨 -> 그후 다시 value로 string으로 다시 들어옴 new Date()기능 상실
// 그냥 string value가 됨

// 하지만 reviver 기능 있음⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

// 이렇게 key 값이 이미 스트링이기 때문에 조건문 써서 다시 new Date object 작성

console.log(obj);
console.log(obj.birthDate.getDate());


// JSON 공부 사이트
// jSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator



