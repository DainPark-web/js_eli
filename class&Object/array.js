"use strict";

//Array🥇🥇🥇🥇🥇🥇🥇
//obj vs array 차이점
//obj 특징 행동을 묶어놈
//array 는 색, 등등 
//Array has INDEX  ex) array[0], array[1]



//1. Declaration🌟
const arr1 = new Array();
const arr2 = [1,2];
console.log(arr1);
console.log(arr2);



//2. Index position🌟
const fruits = ['🍎', '🍏'];
console.log(fruits[0]);
//.length🌟🌟🌟
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);



console.clear();
//3. Looping over an array🌟
//   print all fruits.
// a. for of..
for(let result of fruits){
    console.log(result);
}

// b. forEach(f) 🧑‍💻forEach 는 array api로 callback 을 받아옴
fruits.forEach((value , index, array) => {
    console.log(value ,index, array);z
});

// c. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



console.clear();
//4. Addition. deletion, copy🌟
//push: add an item to the end
fruits.push('🍊','🍋');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍊','🍋');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//shift, unshift는 pop, push보다 느리다 🧑‍💻push pop은 기존 배열 뒤에 계속 추가 하는 거지만
//                                    shift, unshift는 기존 앞에 배열을 뒤로 한칸씩 뒤로 밀고 지우고 하기 때문

//splice: remove an item by index position
fruits.push('🍑','🥭','🥝');
console.log(fruits);
fruits.splice(0,1); //(start: Number, deleteCount) 🧑‍💻deleteCount를 입력하지 않으면 선택된 인덱스 부터 뒤에 있는 인덱스 다지움
console.log(fruits);
fruits.splice(0,1,'😆');// 지운뒤 그 자리에 value 추가
console.log(fruits);

//총 push, pop, unshift, shift, splice⭐️⭐️⭐️

//combine two arrays⭐️⭐️⭐️
//.concat()
const fruits2 = ['🎹','🏆'];
const fruits3 = fruits.concat(fruits2); //🧑‍💻함해진뒤 리턴!
console.log(fruits3);



console.clear();
//5. Searching⭐️
//indexOf()  🧑‍💻index number 를 return 해서 알려줌 몇번째에 있는지, 없을땐 -1 출력
console.log(fruits);
console.log(fruits.indexOf('🥭'));

//includes() 🧑‍💻boolean 으로 알려줌 
console.log(fruits);
console.log(fruits.includes('🥭'));

//lastIndexOf
//🧑‍💻만약 같은 값이 두개 들어 있다면 indexOf는 앞에 있는 것만 찾고 중단함 lastIndexOf는 뒤에서부터 시작함
fruits.push('🍑');
console.log(fruits.indexOf('🍑')); //1
console.log(fruits.lastIndexOf('🍑')); //4



