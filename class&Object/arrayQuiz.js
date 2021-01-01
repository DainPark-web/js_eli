"use strict";

//Array Quiz


// Q1. make a string out of an array
// .join();⭐️
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join(" "));
  }
  
  // Q2. make an array out of a string
  //.split();⭐️
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(","));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  //.reverse();⭐️
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    //.slice(indexnumber, until indexnumber - 1) ⭐️
    const array = [1, 2, 3, 4, 5];
    console.log(array);
    const result = array.slice(2,5);
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  //find(value, index, ..)⭐️ callback
  {
      const result1 = students.find((students) => {
        return students.score === 90;
      });
      console.log(result1);
  }
  
  // Q6. make an array of enrolled students
  //filter(value, index, ..)⭐️ callback
  {
      const result2 = students.filter((students) => {
        return students.enrolled == true;
      });
      console.log(result2);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  //map(value, index,..)⭐️ callback
  {
      const result3 = students.map((students) => {
        return students.score * 2;
      });
      console.log(result3);
  }
  
  // Q8. check if there is a student with the score lower than 50
  //some(value, index,..)⭐️ callback
  //every(value, index...)⭐️ callback every는 모든 값이 충족할때
  {
      const result4 = students.some((students) => {
       return students.score < 50;
      });
      console.log(result4);
      
      const result5 = students.every((students) => {
        return students.score < 50;
       });
       console.log(result5);
  }
  console.clear();
  // Q9. compute students' average score
  //reduce(previouseValue, currentValue,..)⭐️ callback
  {
    // const result6 = students.map((students) => {
    //    return students.score;
    // });

    
    // console.log(result6.reduce((previouse, current) => {
    //     return previouse + current;
    // }));

    const result6 = students.reduce((prev, curr) => {
        console.log('0000000');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    },0);

    console.log(result6 / students.length);
    
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      //callback ⭐️⭐️⭐️
      const result7 = students
      .map((students) => {
        return students.score;
      })
      .filter((v) => {return v > 80})
      .join(", ");
      console.log(result7);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // sort()⭐️
  {
      const result8 = students
      .map((students) => students.score)
      .sort((a,b) => a - b) //반대로 하고 싶으면 b - a;
      .join();

      console.log(result8);
  }
  