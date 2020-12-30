"use strict";

// Class🐹 
// template 
// 붕어빵 틀과 같다.


// Object⭐️
// class를 이용해 새로운 instance of a class를 만들면 obj
// 팥 붕어빵, 피자 붕어빵, 크림 붕어빵


// How to make Class?

class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    update(){

    }

    show(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

// Class를 이용하여 Obj 만들기
let dain;
dain = new Person("dain", 28);
dain.show();

// Getter & Setter
// C언어는 함수형
// Java는 객체지향형 obj
// 인켐슐레이션 이란??

// 2.Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get set안의 변수를 조금씩 바꿔줘야함
    get age(){
        return this._age;
    }
    //set은 값을 지정해야 하기 때문에 value를 받아와야함.
    set age(v){
        // if(v < 0){
        //     // throw Error('age can not be negative');
        //     console.log('error');
        // }
        this._age = v < 0 ? 0 : v;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Public & Private
class Experiment{
    publicField = 2;
    #privaterField = 0;
}

// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(name){
        this.name = name;
    }

    static printPublisher(){
        console.log(this.name);
    }
}

const article1 = new Article(1);
console.log(article1.publisher); //not working
console.log(Article.publisher); // working

//즉 static은 class 에게만 부여된것
// 공통적으로 class에서만 사용하는 것



// 상속과 다양성⭐️

// 네모 삼각형 원을 만들때
// 공통되는 부분만 class를 만듬
// 즉 1. 공통된 부분의 class
// 2. 각 도형의 class
// 3. 연결
// class 사각형 extends 공통부분{}⭐️⭐️⭐️⭐️⭐️⭐️

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color}`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{

}

// overriding⭐️⭐️⭐️⭐️
// 공통되는 부분만 받아와 사용하지만 삼각형은 높이 와 밑변 곱한후 나눠야 한다 이부분만을 고칠때
class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 값도 생성🌟 super.
        console.log(`🏄🏻‍♂️`);
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

console.clear();

const rectangle = new Rectangle(10, 8, 'red');
const triangle = new Triangle(10, 8, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());



//6. Class checking: instanceof
// 왼쪽의 obj 가 오른쪽의 class의 instance 인지 boolean으로 결과 도출
console.log(rectangle instanceof Rectangle); //T
console.log(triangle instanceof Rectangle); //F
console.log(triangle instanceof Triangle); //T


