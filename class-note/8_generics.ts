function logText(text) {
    console.log(text);
    return text;
}

logText(10); //숫자
logText('10'); //문자열
logText(true); //진위값



function logText1<T>(text: T): T {
    console.log(text);
    return text;
}
logText1<string>('하이');



//기존 타입 정의 방식 의 문제점
//똑같은 로직이라도 타입별로 선언
function logText2(text: string) {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}

function logText3(text: number) {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}




// input 에대한건 해결 output 은 해결 불가 
function logText4(text: number | string) {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}

logText4('10'); //문자열

function logText5<T>(text: T): T {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}

logText5<string>('10'); //문자열

//interface 에 제너릭을 선언하는방법

interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj2: Dropdown2<string> = { value: 'abc', selected: false };

// 제너릭의 타입제한
function lonTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}

lonTextLength<string>(['hi']);

// 제너릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function lonTextLength2<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

lonTextLength2('hi');




// 제너릭 타입제한 3
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('price');
