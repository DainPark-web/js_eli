'use strict';

//variable

//constants
//const


//Class: template
//Object: instance of a class

//javascript classes

let test;
class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    dain() {
       console.log(`${this.name}: hello!`);

    }

    get age(){  //get 을 사용하는 순간 this.age 가 작동되는게 아니라 바로 get이 작동 // this.age 의 age가 여기 로옴
        return this._age;
    }

    set age(value){ //그리고 여기 value는 this.age = age의 값이 들어옴 return을 통해
        // if(value<0){
        //     throw Error('error');
        // }
        this._age = value < 0 ? 0 : value;

    }

    
}

test = new Person("dain",-1);
const ppark = new Person("Eli", 10);
console.log(ppark.name);
console.log(test.age);
console.log(test.name);
test.dain();



//public & private
class Dain{
    dnumber = 1;
    #dpark = 1;
}

const dain = new Dain();

console.log(dain.dpark);//private 이기때문에 출력안됨
console.log(dain.dnumber); // public 이기때문에 constructor 없이 지정가능 대신 외부에서 접근함

//instanceof  
// 어떤 class가 자기에게 할당되는지 boolean으로 보여줌

console.log(test instanceof Person);
console.log(test instanceof Dain);




//오브젝트는 key: value 의 집합체
// object = {key: value};
//Object
const ellie = {
    name: 'dain',
    age: 4
};
// 선언하는법
console.log(ellie.name);

//or 이렇게 새로운 오브젝트를 빈통으로 만들 수 있음 class 
//선언하는 거처럼 생김 하지만 object의 이름을 직접선언보단 new Object()로 만듬


const obnew = new Object();
obnew.name = "daindain";
console.log(obnew.name);
//오브젝트는 추가도 가능함 중간에 자바스크립트 에선!

ellie.hasjob = true;
console.log(ellie.hasjob);
ellie.sex = 'man';
console.log(ellie.sex);

//삭제도 가능함 
delete ellie.sex;
console.log(ellie.sex);


//2. Computed properties
//key should be always string type
//object 선언할때 . 로 할 수 도 있지만 array 처럼 []로도 가능
//하지만 할때 안의 key value는 항상 string이여야 한다.
console.log(ellie.name);
console.log(ellie['name']);
// . 처럼 추가도 가능함
ellie["sex"] = "man";
console.log(ellie["sex"]);


// 3. Property value shorthand
// 이렇게 함수안에 오브젝트 넣어서도 가능함.
// 오브젝트를 여러개 만들때 class같은 목적
// 함수안에 값만넣어 변경 가능하게 만들어서 그 함수로 각각 변수에 선언.
function makeperson(name, age){
    return {
        name, //name = name; // 이름이 같다면 이렇게 생략가능
        age //age = age;
    }

}
// person4에 선언 person3 person2..... 함수만 만들어서 적용하면됨.
const person4 = makeperson('dain', 28);
console.log(person4);

// 5. in operator: property existence check(key in obj)
// object 의 key value가 obj 에 있는지 없는지 확인 
// class 의 instanceof랑 비슷
console.log('sex' in ellie);

//6. for..in vs for..of
// for (key in obj) // 모든 오브젝트의 키를 받아와 읽고 내보냄

console.clear();// 이전꺼 콘솔 다지움
for (const key in ellie) {
    console.log(`${key} : ${ellie[key]}`); // 여기서 왜 object[]가 사용되는이유
    // 만약 ellie.key하면 작동안됨 입력안됨 이럴땐 ellie[] 해줘야함
}

// for (value of interable)
const array = [1,2,3,4];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// 이렇게 해도 되겠지만 이렇게 array 배열을 value에 넣어서 순서대로 실행.
for(let value of array){
    console.log(value);
}


//7. cloning
//Object.assign(dest, [obj]1, obj2, obj3...)
const user = {name:'ellie', age: '20'};
const user2 = user;
console.log(user2);
user2.name = 'dain'; // user2 가 user 의 obj를 받아와서 변경가능함
console.log(user);

// 그럼 obj 만 복제 어케하지? user2가 변경해도 user에 영향이 가지 않게.
// old way
const user3 = {};
for(const key2 in user){
   user3[key2] = user[key2];
}
console.clear();
user3.name = 'dapain';
console.log(user);
console.log(user3);

// new way
// 1)target 만든ek

const user4 = {};
// 또는 return 바로 받아서 하는 방법도 있음
// const user4 = Object.assign({},user);
// Object.assign(dest, obj1,obj...)//여러가지 obj의 값을 dest의 넣을때 뒤쪽에 있는 값을 덮어 씌움
// 예를들어 obj1 obj2동일한 Key 값이 다른 Value를 가질때 뒤쪽에 있는게 우선시됨 더하기 개념
Object.assign(user4,user);
console.log(user4);
user4.name = "changed";
console.log(user4);









