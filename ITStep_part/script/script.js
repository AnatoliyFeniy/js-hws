const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const Dbtn = document.getElementById("Dbtn");
const Dp = document.getElementById("Dp");
const D = function(){
    let aVal = +a.value;
    let bVal = +b.value;
    let cVal = +c.value;
    let d = bVal**2 - 4 * aVal * cVal;

    if (d < 0) {
        Dp.textContent = "Рішення немає";
    } else if (d === 0) {
        let x = -bVal / (2 * aVal);
        Dp.textContent = `x = ${x}`;
    } else {
        let x1 = (-bVal + Math.sqrt(d)) / (2 * aVal);
        let x2 = (-bVal - Math.sqrt(d)) / (2 * aVal);
        Dp.textContent = `x1 = ${x1}, x2 = ${x2}`;
    }
}
Dbtn.addEventListener('click', D);
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const op = document.getElementById("op");
const Cbtn = document.getElementById("Cbtn");
const Cp = document.getElementById("Cp");
Cbtn.addEventListener('click', function(){
    let n1Val = +n1.value;
    let n2Val = +n2.value;
    switch(op.value) {
        case "+":
            Cp.textContent = n1Val + n2Val;
            break;
        case "-":
            Cp.textContent = n1Val - n2Val;
            break;
        case "*":
            Cp.textContent = n1Val * n2Val;
            break;
        case "/":
            if(n2Val !== 0) {
                Cp.textContent = n1Val / n2Val;
            } else {
                Cp.textContent = "На 0 ділити не можна";
            }
            break;
    }
});
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const Pbtn = document.getElementById("Pbtn");
const Pp = document.getElementById("Pp");
Pbtn.addEventListener('click', function(){
    let p1Val = +p1.value;
    let p2Val = +p2.value;
    if(p1Val === p2Val){
        return Pp.textContent = `${p1Val} = ${p2Val}`;
    }
    return p1Val > p2Val ? Pp.textContent = `${p1Val} > ${p2Val}` : Pp.textContent = `${p1Val} < ${p2Val}`;
});
const g = document.getElementById("g");
const Gbtn = document.getElementById("Gbtn");
const Gp = document.getElementById("Gp");
const Gp2 = document.getElementById("Gp2");
let count = 0;
let n = Math.floor(Math.random() * 100) + 1;
Gbtn.addEventListener('click', function(){
    let gVal = +g.value;
    count++
    Gp2.textContent = count;
    if(gVal === n){
        Gp.textContent = "Ви вгадали!";
        n = Math.floor(Math.random() * 100) + 1;
        count = 0
    }
    else if(gVal < n){
        Gp.textContent = "Більше!";
    } else {
        Gp.textContent = "Менше!";
    }
});
const knp = document.getElementById("knp");
const KNPbtn = document.getElementById("KNPbtn");
const KNPp = document.getElementById("KNPp");
let choices = ["камінь", "ножиці", "папір"];
let r = choices[Math.floor(Math.random() * 3)];
KNPbtn.addEventListener('click', function(){
    if(knp.value.toLowerCase() === "камінь" && r === "ножиці"){
        KNPp.textContent = "Ви виграли!";
    }
    else if(knp.value.toLowerCase() === "камінь" && r === "папір"){
        KNPp.textContent = "Ви програли!";
    }
    else if(knp.value.toLowerCase() === "камінь" && r === "камінь"){
        KNPp.textContent = "Нічия!";
    }
    if(knp.value.toLowerCase() === "ножиці" && r === "папір"){
        KNPp.textContent = "Ви виграли!";
    }
    else if(knp.value.toLowerCase() === "ножиці" && r === "камінь"){
        KNPp.textContent = "Ви програли!";
    }
    else if(knp.value.toLowerCase() === "ножиці" && r === "ножиці"){
        KNPp.textContent = "Нічия!";
    }
    if(knp.value.toLowerCase() === "папір" && r === "камінь"){
        KNPp.textContent = "Ви виграли!";
    }
    else if(knp.value.toLowerCase() === "папір" && r === "ножиці"){
        KNPp.textContent = "Ви програли!";
    }
    else if(knp.value.toLowerCase() === "папір" && r === "папір"){
        KNPp.textContent = "Нічия!";
    }
    if(knp.value.toLowerCase() !== "папір" && knp.value.toLowerCase() !== "камінь" && knp.value.toLowerCase() !== "ножиці"){
        KNPp.textContent = "Неправильне введення";
    }
    r = choices[Math.floor(Math.random() * 3)];
});
const h = document.getElementById("h");
const w = document.getElementById("w");
const IMTbtn = document.getElementById("IMTbtn");
const IMTp = document.getElementById("IMTp");
IMTbtn.addEventListener('click', function(){
    let hVal = +h.value / 100;
    let wVal = +w.value;
    return IMTp.textContent = `Ваш ІМТ: ${wVal / (hVal ** 2)}`;
});