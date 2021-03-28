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