const btn1 = document.getElementById("btn1");
const wrap = document.getElementById("wrap");
btn1.addEventListener('click', function(){
    wrap.classList.toggle("dark")  
    if (wrap.classList.contains("dark")) {
        btn1.textContent = "change to light mode";
    } else {
        btn1.textContent = "change to dark mode";
    }
})
const numButtons = document.querySelectorAll(".btnn, .btnn0");
const pole = document.getElementById("pole");
const btne = document.getElementById("=");
numButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        pole.textContent += btn.textContent;
    });
});
btne.addEventListener('dblclick', function(){
    pole.textContent = "";
})
const inpt = document.getElementById("input");
const btn2 = document.getElementById("btn2");
btn2.addEventListener('click', function(){
    if(inpt.value === "" || inpt.value.length < 3){
        inpt.value = "error";
    }
    else{
        inpt.value = "accepted"
    }
})
const btn3 = document.getElementById("btn3");
const txt = document.getElementById("txt");
let count = 0;
btn3.addEventListener('click', function(){
    count++;
    txt.textContent = count;
})