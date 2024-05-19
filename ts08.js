var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
var _a = ["hello", 300], 변수1_08 = _a[0], 변수2_08 = _a[1];
var arr08 = ["hello", 300];
var _b = { key1: true, key2: 30 }, key1 = _b.key1, key2 = _b.key2;
var obj08 = { key1: true, key2: 30 };
var props = { id: '1', data: 30 };
console.log(변수2_08);
console.log(arr08[1]);
console.log(props.id);
