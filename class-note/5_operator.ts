function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100);

function logMessage2(value: string | number) {
    console.log(value);
}

logMessage2('d');
logMessage2(100);


interface Developer {
    name: string;
    skill: string;
}


interface Person {
    name: string;
    age: number;
}

//유니온 타입은 인터페이스를 받을때 공통된 속성만 인지한다.
function askSomeone(someone : Developer | Person) {
    someone.name
}
