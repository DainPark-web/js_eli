"use strict";


// 0 -0은 false
// 그외 모든 숫자 true

//'' false
//null false

// 즉 0, -0, '', null, undefined, false, NaN are all false;
let num=1;

if(null){
    console.log('true');
}else{
    console.log('false');
}

num && console.log('ture'); // 이렇게 많이 씀 num이 true라면 && 뒤에 실행
// 이유 &&는 앞에 인자가 true일때 뒤에 인자 실행.

