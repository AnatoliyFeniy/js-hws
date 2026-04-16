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