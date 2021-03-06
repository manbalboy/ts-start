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
let sum : SumFunction;
sum = function (a:number, b:number) {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index:number]: string;
}
var arr : StringArray =['a','b','c'];
arr[0] = '100';

//딕셔너리 패턴
interface StringRegexDictionary {
    [key : string] : RegExp;
}

let obj : StringRegexDictionary = {
    sth : /abc/,
}

interface StringAnyDictionary {
    [key : string] : any;
}

let obj2 : StringAnyDictionary = {
    sth : 'fdsa',
}

interface Person  {
    name : string; 
    age : number;
}


interface Developer extends Person{
    language:string;
}

let capt : Developer = {
    language : 'ts',
    age : 10,
    name : 'd'
}

