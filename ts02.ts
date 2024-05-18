function 내함수(num: (number | string)) : number{
    // 모호한 상황일때는 if문으로 나눠서 자료형을 확인하고 계산한다
    if(typeof num === 'number'){
        return num*2;
    }else if(typeof num === 'string'){
        let temp = Number(num);
        return temp * 2;
    }else{
        return 0;  
    }
    
}
내함수(3)
내함수('3');