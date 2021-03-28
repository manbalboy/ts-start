class Person {
    private name: string;
    public age: number;
    readonly log : string; // 값을 변경할수 없다.
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('생성되었습니다.');
    }
}