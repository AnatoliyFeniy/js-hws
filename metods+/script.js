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
let max = Math.max(...arr);
let index = arr.indexOf(max);
arr.splice(index, 1);
let second = Math.max(...arr);
alert(second);

//4
const arr1 = []
for (let i = 0; i < 15; i++) {
    arr1.push(Math.floor(Math.random() * 20) + 1);
}
for(const el of arr1){
    if(el % 2 === 0){
        console.log(el);
    }
}

//5
let newArr = [];
for(const el of arr){
    newArr.unshift(el)
}
alert(newArr)

//6
let sorted = true;
for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[i - 1]){
        sorted = false;
        break;
    }
}
console.log(sorted);

//7
let array = [];
let a = "";
for(const el of str){
    if(el === " "){
        array.push(a);
        a = "";
    }
    else{
        a += el;
    }
}
if (a !== "") {
    array.push(a);
}
let longest = array[0];
for(const el of array){
    if(el.length > longest.length){
        longest = el;
    }
}
alert(longest);