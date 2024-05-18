// object thrtjd
type objType = {
    [key:string]:number
}

let objvar : objType = {age: 33, height: 172.3}

// 클래스
class MyClass{
    멤버변수: string;

    constructor(매개변수 : string){
        this.멤버변수 = 매개변수;
    }
}

// constructor : 생성자(클래스를 객체화하는 순간 발동되는 함수)
// let 객체1 :  new MyClass(3.1454);
