let _유니온 : (number | string) = 123;
let _어레이 : (number | string)[] = [1, '2', 3]
let _오브젝트 : {str? : (number | string)} = {str: '33'};
let _숫자또는문자열 : string | number;
let 모두 : unknown;     // 모든타입가능

// 1. 타입을 정해서 에러를 없애기
let 객체04 :{num? : (number | boolean)[], str? : string, name? : (string | string[])} = {
    num : [100, 102, 104],
    str : "str",
    name : "son"
}

객체04.num[4] = false;
//객체04.name = {'lee', 객체04.str}

//2. 타입정하기
let 사람04 = "홍길동"
let 나이04 = undefined;
let 성인04 =false;

나이04 = 33;

let 친구04 = [사람04, 나이04, 성인04];
