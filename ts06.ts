//타입 저장 ( 변수처럼: type alias)
type myType = string | number | undefined;
let myVar : myType = "str";
myVar = 13;

// 객체 타입
type 동물 ={나이:number, 종:string}

// 객체 속성 추가 &
type 강아지 = 동물 & {짖기 : string}

let 멍멍이 : 강아지 = { 나이:4, 종: '강아기', 짖기: '왈왈'}