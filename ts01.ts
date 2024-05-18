// 변수에문자열 혹은 숫자가 올수 있다. > 유니온 타입
let 변수 : (string | number) = '홍길동';
변수 = 33;

//타입스크립트에서는 자료형도 변수로 저장가능
type Type변수 = string | number | undefined;

let 변수2 : Type변수 = 'str';
변수2 = 33;

//배열에서 특징 위치에 오는 값의 데이터를 직접 정해주고 싶음
let 일반배열 : number[] = [1,2,3,4]
//[숫자, 문자열, 불린, 숫자] 배열로 만드려면 튜플
let 튜플배열 : [number, string, boolean, number] = [3, 'str', false, 4];
// 매개변수로는 숫자, 리턴으로도 숫자
function 함수(num : number){
    return num * 2;
}
