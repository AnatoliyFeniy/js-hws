//1
let num1 = parseInt(prompt("Введіть перше число діапазону:"));
let num2 = parseInt(prompt("Введіть друге число діапазону:"));
let sum = 0;
for (let i = num1; i <= num2; i++) {
  sum += i;
}
alert(sum);

//2
let n1 = parseInt(prompt("Введіть перше число:"));
let n2 = parseInt(prompt("Введіть друге число:"));
let min = n1 < n2 ? n1 : n2;
let nsd = 0;
for(let i = 1; i <= min; i++){
    if(n1 % i === 0 && n2 % i === 0){
        nsd = i;
    }
}

//3
let numb = parseInt(prompt("Введіть число:"))
for(let i = 1; i <= numb; i++){
    if(numb % i === 0){
        console.log(i);
    }
}

//4
let nom = parseInt(prompt("Введіть число:"));
let count = 0;
while(nom > 0){
    count++
    nom = Math.floor(nom / 10);
}
alert(count)

//5
