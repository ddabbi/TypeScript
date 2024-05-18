// .ts: 타입스크립트 파일
// .tsx: jsxdyd xkdlqtmzmflqxm vkdlf

// npm install -g typescript
// tsconfig.json 파일을 생성

//tsc -w 로 실행 (.js 파일로 변환)
// index.ts => index.js로 생성
// 자바스크립트에 type검사를 강화한 버전

let myName = '홍길동'
myName = '유관순'
//myName = 33           자료형이 달라서 에러(타입스크립트 특징)

// String, number, boolean, null, undefined, [], {}, bigint
let 이름 : String = '사과'
let 숫자 : number = 123.4;
let 숫자배열 : number[] = [1,2,3]
let 문자배열 : string[] = ['a', 'b','c']
let 객체 : {이름 : string, 나이: number} = {이름: '김유신', 나이: 33}

let 오브젝트 = {
    name : '이름',
    age : 14,
    adult: true
}