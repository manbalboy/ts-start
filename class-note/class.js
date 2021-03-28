// 클래스 Es6 

class Person {
    // 클래스 로직 
    //생성자
    constructor(name , age) {

        this.name = name;
        this.age = age;
        console.log('생성되었습니다.');
    }
}


var test = new Person('정훈', 33);

console.log(test);



//기존 레거시 클래스 코드
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

var test2 = new Person2('정훈', 3223);
console.log(test2);
