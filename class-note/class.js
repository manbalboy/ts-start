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