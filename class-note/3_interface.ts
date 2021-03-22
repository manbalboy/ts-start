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