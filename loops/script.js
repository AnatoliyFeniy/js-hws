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
let minn = n1 < n2 ? n1 : n2;
let nsd = 0;
for (let i = 1; i <= minn; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
        nsd = i;
    }
}

//3
let numb = parseInt(prompt("Введіть число:"))
for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
        console.log(i);
    }
}

//4
let nom = parseInt(prompt("Введіть число:"));
let count = 0;
while (nom > 0) {
    count++
    nom = Math.floor(nom / 10);
}
alert(count);

//5
let num;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
for (let i = 0; i < 10; i++) {
    num = parseInt(prompt("Введіть число:"));
    if (num > 0) {
        count1++;
    }
    else if (num < 0) {
        count2++;
    }
    else {
        count3++;
    }
    if (num % 2 === 0) {
        count4++;
    }
    else {
        count5++;
    }
}
alert(`${count1} додатніх, ${count2} від'ємних, ${count3} нулів, ${count4} парних, ${count5} не парних`);

//6
let restart = true;
while (restart === true) {
    let num1 = parseInt(prompt("Введіть перше число:"));
    let num2 = parseInt(prompt("Введіть друге число:"));
    let znak = prompt("Введіть знак для дії:");
    switch (znak) {
        case "+":
            alert(num1 + num2);
            break;
        case "-":
            alert(num1 - num2);
            break
        case "/":
            if (num2 === 0) {
                alert("на нуль ділити не можна");
            } else {
                alert(num1 / num2);
            }
            break;
        case "*":
            alert(num1 * num2);
            break;
        default:
            alert("Введіть інший знак");
    }
    let ask;
    do {
        ask = prompt("Хочете ще один приклад? Так/Ні");
    } while (ask !== "Так" && ask !== "Ні");
    if (ask === "Так") {
        restart = true;
    }
    else if (ask === "Ні") {
        restart = false;
    }
}

//7

//8
let askDay = prompt("Введіть день тижня");
let answer = confirm("Бажаєте побачити наступний день тижня?");
do {
    switch (askDay) {
        case "Понеділок":
            askDay = "Вівторок";
            break;
        case "Вівторок":
            askDay = "Середа";
            break;
        case "Середа":
            askDay = "Четвер";
            break;
        case "Четвер":
            askDay = "П'ятниця";
            break;
        case "П'ятниця":
            askDay = "Субота";
            break;
        case "Субота":
            askDay = "Неділя";
            break;
        case "Неділя":
            askDay = "Понеділок";
            break;
        default:
            askDay = "Понеділок";
    }
    alert(askDay);
} while (confirm("Бажаєте побачити наступний день тижня?"))

//9
for (let a = 2; a <= 9; a++) {
    for (let b = 1; b <= 10; b++) {
        alert(`${a} x ${b} = ${(a * b)}`);
    }
}

//10
let guess = parseInt(prompt("Загадайте число від 1 до 100:"));
let N;
let min = 0;
let max = 100;
let answ;
while (true) {
    N = Math.floor((min + max) / 2);
    answ = prompt(`Ваше число >, < чи = ${N}?`);
    if (answ === "<"){ 
        max = N - 1;
    }
    else if (answ === ">"){
        min = N + 1;
    }
    else if(answ === "="){
        break;
    }
}