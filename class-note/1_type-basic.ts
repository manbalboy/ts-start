//문자열 기존 JS
// var str = 'hello';
// TS 문자열
let str: string = 'hello';

//숫자
let num: number = 10;

//Array 
let arr: Array<number> = [1, 2, 3];
let herose: Array<string> = ['a', 'b', 'c'];
let items: number[] = [1, 2, 3];
let items2: any[] = [1, 2, 3, "fdsa"];


//TS 튜플
let address: [string, number] = ['gangnam', 3];


//TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 100
}

let person2: { name: string, age: number } = {
    name: 'dd',
    age: 1
}

//TS 진위값
let show: boolean = true;