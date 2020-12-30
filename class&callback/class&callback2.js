"use strict";

class Counter{


constructor(runEveryFiveTimes){
    this.counter = 0;
    this.callBack = runEveryFiveTimes; //(1)
}

increase(){
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0){

        this.callBack ? this.callBack(this.counter) : this.callBack('error');
        // or
        // this.callBack && console.log(this.counter);
        // or
        // if(this.callBack){
        //     this.callBack(this.counter); //(2)
        // }else{
        //     console.log('error');
        // }
       
    }
}
}

//call back 으로 사용법

function printSomething(num){//(4)
    console.log(`${num} Yo!`);
}

function divid(num){
    console.log(`${num} Divid`);
}

let Dain = new Counter(printSomething);//(3)
for(let i = 0; 10>i; i++){
    Dain.increase();
}

let Park = new Counter(divid);
for(let i = 0; 10>i; i++){
    Park.increase();
}






