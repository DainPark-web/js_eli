//Don't give up


//함수 선언
//함수 호출

"use strict";

//함수 선언
function doSomething(){
    console.log("hello");
}

//함수 호출
doSomething();

//함수 리턴
function add(a,b){
    const sum = a + b;
    return sum;
}

//여기서는 그냥 호출만 했기 때문에 리턴이 일어나지 않는다.
//리턴은 그 데이터 값을 다른 곳에 줄때!⭐️
add(1,3);

//이렇게 값을 변수에 저장
const result = add(1,3);
console.log(result);

//3.언어 공부 방법
//console.log를 이용해 계속 확인하면서 작업


//4.함수를 인자로 전달
function dain(add){
    console.log(add);
    const result = add(1,3); //함수에 함수 넣어 호출
    console.log(result);
}
dain(add); //이렇게 함수에 함수를 넣을 수 도 있다.

//6. 함수를 변수에 할당
const addFun = add(1,2);


//함수는 항상 선언 => 호출 
//또는
//함수는 항상 선언 => 리턴 => 호출