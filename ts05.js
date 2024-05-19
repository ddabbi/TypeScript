//타입스크립트 실행 > tsc -w
// string, number, boolean.. 간단한건 생략 ( 초기값으로 자동으로 type이 정해짐 )
var 문자열 = "str";
// 복잡한 타입에 대해서는 명시
var 문자열과숫자 = 'str';
문자열과숫자 = 12;
var 배열 = [1, 2, 3];
// fetch데이터 받아온다 [] : 비어있음 => [data, data] : 문자열 또는 숫자
var fetch배열 = [1, '2', '3'];
function 데이터사용(x) {
    if (typeof x === "string") {
        return x[0] + 1;
    }
    else if (typeof x === "number") {
        return x[0] + 1;
    }
    else {
        return 1;
    }
}
데이터사용(fetch배열);
// 함수의 return 이 없이면 : void
// void : 숫자를 매개변수로 받아서, 리턴값은 없는 함수
function 리턴없음(num) {
    if (num) {
        console.log(num);
    }
    else {
        console.log("없음");
    }
}
// 타입스크립트는 자바스크립트와는 다르게 매개변수로 만든 만큼 채워줘야 사용가능
리턴없음(3);
//리턴없음();  //해당 매개변수에 대해 비워줘도 되게 하고 싶으면
