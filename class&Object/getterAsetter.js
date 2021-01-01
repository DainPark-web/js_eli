"use strict";
//getter setter 연습

//1. 가상 property 라고 생각하면됨
//2. get은 획득자 코드 밖에서 get을 일반 property처럼 사용가능 즉 get을 사실상 불러다 사용함
//  그리고 get은 안에 있는 코드들을 불러 사용함 가상으로 만듬
//즉
let user = {
    get fullName(){
        return "dain park";
    }
}
console.log(user.fullName);
// user.fullName = "sein park"; //이렇게 하면 오류가남 왜냐하면 get이라는 가상의코드가 자기만 fullName이라는
//Value를 가지고 있기 때문.
//여기서 이문제를 해결하기 위하여 setter가 있다


//3. set은 설정자
//즉 setter에서 값을 받아와 작업을 한뒤 get으로 보낸다음 소환.
const dain = {
    name: 'dain',
    get age(){
        return this._age;
    },
    set age(v){
        this._age = v < 0 ? 0 : v;
    }
}
dain.age = -10;
console.log(dain);

//연습
class Dain{
    constructor(name, hasJob, age){
        this.name = name;
        this.job = hasJob;
        this.age = age;
    }

    //2 여기서 받아와서 외부에서 볼 수 있게함.
    get age(){
        return this._age;
    }

    //1 여기서 1차 작업
    set age(v){
        if(v < 0){
            this._age = 0;
        }else{
            this._age = v;
        }
    }

}

const dainClass = new Dain("dainPark", true, 1);
dainClass.age = -10;
console.log(dainClass.age);

//연습2

let obj2 = {
    firstName: "park",

    get name(){
        return `${this._name}`;
    },

    set name(v){
        if(v.length < 4){
            return this._name = "too short";
        }{
            this._name = v;
        }
    }
}
obj2.name = "kd";
console.log(obj2.name);


class Get1{

    constructor(id,password){
        this.id = id;
        this.pass = password;
    }

    get pass(){
       return this._pass;
    }

    set pass(v){
       this._pass = v === "12345" ? "right" : "wrong";
    }

    
}

const result1 = new Get1('dain', '12345');
console.log(result1.pass);

class Get2{

    constructor(age){
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(v){
        this._age = v < 0 ? 0 : v;
    }
}

const result2 = new Get2(-4);
console.log(result2.age);

class Get3{
    constructor(age){
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(v){
        this._age = v < 0 ? "hey who the fuck are you" : v;
    }
}

const result3 = new Get3(10);
console.log(result3.age);