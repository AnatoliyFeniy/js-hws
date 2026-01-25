//1
let str = "afda adfsafd adf";
let count = 0;
for(const el of str){
    if(el === " "){
        count++;
    }
}
console.log(count);

//2
let arr = [1,2,3,4,5];
let sum = 0;
for(const el of arr){
    sum += el;
}
let res = sum / arr.length;
alert(res);

//3
let max = Math.max(...arr)
let index = arr.indexOf(max) //indexOf визначає індекс чогось конкретного в масиві
arr.splice(index, 1)
let second = Math.max(...arr)
alert(second)