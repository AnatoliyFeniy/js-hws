const container=document.getElementById('container');
const btnText = document.getElementById('btnText');
const remove = function() {
    container.classList.remove("add");
    btnText.textContent = "Клас видалено";
    btnText.classList.add("hidden");
}
const change = function() {
    container.classList.add("add");
    btnText.textContent = "Клас додано";
    btnText.classList.remove("hidden");
}