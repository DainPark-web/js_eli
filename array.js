'use strict';

//Array 배열👶
//how to use array?

//토끼와 당근이 있다고 예시를 들면
//오브젝트는 토키와 당근이 될 수 있다
//예를들면 토끼는 귀가 두개, 뛴다 등등

//자료구조는 여기서 토끼 끼리, 당근끼리 묶어줌

//자료구조 알고리즘 공부 나중에 따로
//검색 삽입 정렬 삭제 공부

//1. Declaration🧑‍🦱

const arr1 = new Array();
const arr2 = [1,2,3,4];

//Index 기준으로 데이터 저장됨

//2.Index position🧑‍🦱
console.clear();
let fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length -1]);

//3. Looping over an array🧑‍🦱 //전부다 선언하는법
console.clear();
// a. for
for(let i = 0; i < fruits.length; i++){ //for loop
    console.log(fruits[i]);
}
// b. forEach
fruits.forEach(function(value, index, array){ //forEach(function)
    console.log(value, index, array);
});
// arrow function으로 짧게 적을 수 도 있음
fruits.forEach((value, index) => console.log(value, index)
);

// c. for of
for(let fruit of fruits){
    console.log(fruit);
}

//4. Addition, deletion, copy👶

//push: add an item to the end
fruits.push('straberry', 'peach');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('melon');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push💾

// splice: remove an item by index position🔴
fruits.push('😄','😳');
console.log(fruits);

fruits.splice(2); // 시작하는 index에서 몇개 지울지 지정하지 않으면 지정한 index부터 뒤에 까지 싹 지움
console.log(fruits);
fruits.splice(0,2); //(시작하는 index, 몇개지울것인지)
console.log(fruits);
fruits.push('🍏','🍒','🍑','🥬','🍌');
console.log(fruits);
fruits.splice(1,1,'🥚','🍖'); // 지정한 인덱스 부터 지정한 수만큼 지우고 그자리에 입력한 값 넣어줌
console.log(fruits);

// concat: combine two arrays 배열에 배열 합치기🌕
const fruits2 = ['🍔','🍟'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//indexOf: find the index
console.clear();
fruits = fruits.concat(fruits2);
console.log(fruits);

console.log(fruits.indexOf('🍔'));//index number
console.log(fruits.indexOf('🌮'));//false -1
//includes
console.log(fruits.includes('🍔'));//true
console.log(fruits.includes('🌮'));//false

//lastIndexOf
console.clear();
console.log(fruits);
// 만약 배열안에 같은 값들이 각각 다른 Index에 있을대 indexOf으로 
// 몇번재 인덱스에 있는지 출력하면 맨앞에 있는걸 출력함
fruits.push('🍏');
console.log(fruits.indexOf('🍏'));
//그래서 lastIndexOf는 맨마지막 껄 출력함
console.log(fruits.lastIndexOf('🍏'));


console.clear();
//quiz
//01. join: make a string out of an array
const quiz = ['apple', 'banana', 'orange'];
console.log(quiz.join());
console.log(quiz.join(''));
console.log(quiz.join('-'));

//02. split: make an array out of a string
const quiz2 = '🍐, 🍑, 🍋';
console.log(quiz2.split(','));
console.log(quiz2.split(',', 2)); //limit 배열로 변경뒤 앞 두개 value를 얻고싶다.

//03. reverse: mkae this array look like this: [5, 4, 3, 2, 1] 순서를 거꾸로
const quiz3 = ['🍐', '🍑', '🍋'];
quiz3.reverse();
console.log(quiz3);

//04. slice: make new array without the frist two elements
const quiz4 = [1,2,3,4,5];
// quiz4.splice(0,2); // splice array 자체에서 삭제 하기때문에 안됨.
// console.log(quiz4);
const result4 = quiz4.slice(2,5);
console.log(result4);
console.log(quiz4);

//05. filter: find a student with the score 90
//    find: find a student with the score 90 // find(value, index, )
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 88),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('F', 18, true, 88),
]

const result5_1 = students.find((value) => value.score === 90);
    // 배열안 value를 내보냄
console.log(result5_1);

const result5 = students.filter(function(value){ // 배열로 내보냄
    return value.score === 90;
});
console.log(result5);
console.log(students);

//06. filter: make an array of enrolled students
const result6 = students.filter((value) => value.enrolled == true);
console.log(result6);

//07. map: make an array containing only the students'scores
// result should be: [45, 80, 90, 66, 88]
const result7 = students.map((value) => value.score);
console.log(result7);

//08. some: check if there is a student with the score lower than 50
const result8 = students.some((value) => value.score < 50);
console.log(result8); //some은 배열중 하나
//every 는 배열모두가 충족
const result8_1 = students.every((value) => value.score < 50);
console.log(result8_1);

//09. reduce: compute students' average score
// reduceRight 도 있는데 이건 배열 뒤에서 부터 시작
const result9 = students.reduce((prev, curr) => {
    return prev + curr.score;
    
}, 0)

// prev는 curr의 다음 리턴될때 기존의 리턴이 prev로 들어감
console.log(result9 / students.length);

//10. make a string contraining all the scores
//retrun should be '45,33,34,25,53'
const result10 = students.map((value) => value.score).filter((score) => score>=70).join();
console.log(result10);

//Bounu!sort: do q10 sorted in ascending order
//result should be: '1,2,3,4,5'; 예를들어 숫자 작은순으로 정리

const result11 = students.map((value) => value.score).sort((a,b) => b -a);
console.log(result11);
