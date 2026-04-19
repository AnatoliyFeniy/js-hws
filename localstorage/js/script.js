const ta = document.getElementById("ta");
const tab = document.getElementById("tab");
ta.value = localStorage.getItem("txt") || "";
ta.addEventListener("input", () => {
    localStorage.setItem("txt", ta.value);
});

tab.addEventListener("click", () => {
    ta.value = "";
    localStorage.removeItem("txt");
});
const items = document.querySelectorAll(".item");
const lp = document.getElementById('lp');
items.forEach((item) => {
    let itm = localStorage.getItem("itm");
    item.addEventListener("click", ()=>{
        localStorage.setItem("itm", item.textContent);
        lp.textContent = `Останній преглянутий: ${item.textContent}`
    })
});
lp.textContent = localStorage.getItem("itm") 
    ? `Останній переглянутий: ${localStorage.getItem("itm")}` 
    : "";
const tp1 = document.getElementById("tp1");
const tp2 = document.getElementById("tp2");
const tbtn = document.getElementById("tbtn")
const startTimer = function(){
    const interval = setInterval(()=>{
    const startTime = localStorage.getItem("startTime");
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const timeLeft = 60 - elapsed;
    if(timeLeft <= 0){
        tp1.textContent = "60";
        tp2.textContent = "Час вийшов";
        clearInterval(interval);
        localStorage.removeItem("startTime");
    }
    else{
        tp1.textContent = `Часу залишилося: ${timeLeft}с`
    }
}, 1000);
if (localStorage.getItem("startTime")) {
    startTimer();
}
}
tbtn.addEventListener('click', ()=>{
    localStorage.setItem("startTime", Date.now());
    startTimer();
});