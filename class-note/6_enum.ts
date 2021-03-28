//숫자형이넘 선언하고 아무값도 주지않으면 순서대로 index 값을 부여함
enum Shoes {
    Nike, 
    Adidas
}


let MyShoes = Shoes.Nike; // 0
let MyShoes2 = Shoes.Adidas; // 1



//문자형 이넘
enum Shoes2 {
    Nike = 'is Nike', 
    Adidas = 'is Adis' 
}


let MyShoes3 = Shoes2.Nike; // 0
let MyShoes4 = Shoes2.Adidas; // 1


//예제 

//잘못된 예
function askQuestion (answer : string) {
    if(answer === 'yes' ) {
        console.log('정답입니다.');
    }

    if(answer === 'no' ) {
        console.log('오답입니다.');
    }
}

askQuestion('예스')



//이넘의 좋은 예
enum Anser{
    Yes = 'Y',
    No = 'N'
}

function askQuestion2 (answer : Anser) {
    if(answer === Anser.Yes ) {
        console.log('정답입니다.');
    }

    if(answer === Anser.No ) {
        console.log('오답입니다.');
    }
}

askQuestion2(Anser.Yes);
