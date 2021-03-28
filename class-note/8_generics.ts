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






//
function logText5<T>(text:T) :T {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}

logText5<string>('10'); //문자열