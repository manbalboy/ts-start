interface User {
    age : number; 
    name : string;
}

//변수에 활용한 인터페이스 
var seho : User = {
    age : 2,
    name : 'z'
}

// 함수에 인터페이스 활용
function getUser(user : User) {
    console.log(user);
}

getUser({age : 12 , name:'d'});

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b:number):number;
}

var sum : SumFunction;

sum = function (a:number, b:number) {
    return a + b;
}