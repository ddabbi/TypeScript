"use strict";
//타입스크립트도 자바스크립트와 동일하게 export /import
Object.defineProperty(exports, "__esModule", { value: true });
exports.함수10 = exports.num = exports.글자변수 = void 0;
//js10.js에서 만든 변수나 함수를 내보내고 싶으면 앞에 exrport
//가져올때는 import{변수명, 함수명} from '파일명';
//export로 내보내줘야 다음파일에서 추가가능
exports.글자변수 = 'variable';
exports.num = 3;
function 함수10() {
    return 10;
}
exports.함수10 = 함수10;
