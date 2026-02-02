//1
const compare=function(a,b){
    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else if(a === b){
        return 0;
    }
}
alert(compare(2,1));

//2
const fact = n => n === 1 ? 1 : n * fact(n - 1);
console.log(fact(5));

//3
const unsplit = (n1,n2,n3) => console.log(`${n1}${n2}${n3}`)
unsplit(4,2,3)

//4
const trsq=function(a, b){
    if(a != undefined && b != undefined){
        return `Площа трикутника: ${(a * b) / 2}`;
    }
    else if(b === undefined){
        return `Площа квадрату: ${(a * a) / 2}`;
    }
    else if(a === undefined){
        return `Площа квадрату: ${(b * b) / 2}`;
    }
}
console.log(trsq(5,4));

//5
const perfect=function(x){
    for(let i = 1; i < x; i++){
        if(x % i === 0){
            console.log(i);
        }
    }
}
perfect(28);

//6
const minmax=function(a,b){
    for(let i = a; i <= b; i++){
        let sum = 0
        for(let j = 1; j < i; j++){
            if(i % j === 0){
                sum += j;
            }
        }
        if(sum === i){
            console.log(i, "є досконалим числом");
        }
    }
}
minmax(10,10000);