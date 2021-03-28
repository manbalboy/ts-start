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
    someone.name;
    // someone.age;
    // someone.skill;
}


var seho : string | number | boolean;
var capt : string & number &  boolean;


//인터섹션 타입 
function askSomeone2(someone : Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}



// 유니온과 인터섹션의 차이점
// 유니온은 타입의 선택지가 생기지만 안에 타입추론에대한 추가 로직을 해야하지만 선택지가있다
askSomeone({name : '디벨로퍼', skill: '웹개발'});
askSomeone({name : '캡틴', age : 22});


//인터섹션 타입은 두가지를 합한 모든속성을 다 사용해야 사용가능
// askSomeone2({name : '캡틴', age : 22});

