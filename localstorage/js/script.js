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
        tp1.textContent = "60с";
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
const search = document.getElementById("search");
const s0 = document.getElementById("s0");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const sbtn = document.getElementById("sbtn");
const arr = JSON.parse(localStorage.getItem("searched")) || [];
s0.textContent = arr[0] || "";
s1.textContent = arr[1] || "";
s2.textContent = arr[2] || "";
s3.textContent = arr[3] || "";
s4.textContent = arr[4] || "";
sbtn.addEventListener("click", ()=>{
    const val = search.value;
    if(!val) return;
    const idx = arr.indexOf(val);
    if(idx !== -1){
        arr.splice(idx, 1);
    }
    arr.unshift(val);
    arr.splice(5);
    localStorage.setItem("searched", JSON.stringify(arr));
    s0.textContent = arr[0] || "";
    s1.textContent = arr[1] || "";
    s2.textContent = arr[2] || "";
    s3.textContent = arr[3] || "";
    s4.textContent = arr[4] || "";
});
