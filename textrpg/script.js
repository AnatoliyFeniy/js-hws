alert("Ви просинаєтесь в дивному місці. Вас зустрічає загадковий чоловік.");
let name = "";
while (true) {
    name = prompt("Введіть ім'я героя:").trim();
    if (name === "") {
        alert("Ім'я не може бути порожнім!");
        continue;
    } 
    let hasNumber = false;
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== " ") { 
            hasNumber = true;
            break;
        }
    }
    if (hasNumber) {
        alert("Ім'я не може містити цифри!");
        continue;
    } else {
        break;
    }
}
alert(`Тебе чекає довга дорога, ${name}, це 0 поверх вежі, тобі потрібно дістатись вершини`);
let health = 100;
let stamina = 100;
let mana = 100;
let reputation = 0;
let stats = [name, health, stamina, mana, reputation];
let currentWeapon = "";
alert("Ви зайшли на 1 етаж, ви знаходитесь в невеликій кімнатці, де є тільки скриня та вихід з кімнати. ВИ вирішили вікдрити скриню");
let startWeapon;
do{
    startWeapon = prompt("В скрині дерев'яний ніж, дерев'яний меч та чарівна палиця, оберіть зброю:").trim();
    if (startWeapon === "") {
        alert("Ви нічого не ввели, оберіть зброю!");
    } 
    else if(startWeapon != "Дерев'яний ніж" && startWeapon != "Дерев'яний меч" && startWeapon != "Чарівна палиця"){
        alert("Oберіть Звичайний лук/Дерев'яний меч/Чарівна палиця");
    }
    else{
        currentWeapon = startWeapon;
    }
}while(currentWeapon === "");
alert(`Ви обрали: ${currentWeapon}`);
let inventory = [];
const useItem = function(item){
    let damage = 0;
    if(!inventory.includes(item)){
        alert("Такого предмета немає в інвентарі");
        return;
    }
    if(item === "Зілля відновлення"){
        health += 20;
        alert("Ви використали зілля відновлення +20 HP");
    }
    if(item === "Ядерна бомба"){
        damage = 1000000;
    }
    inventory.splice(inventory.indexOf(item), 1);
    return{damage}
}
const checkInventory = function(){
    let checking = true;
    while(checking){
        if(inventory.length === 0){
            alert("Інвентар порожній");
            return;
        }
        let check = prompt(`Оберіть річ з інвентарю:${inventory.join(", ")}`);
        if(!check || check.trim() === ""){
            alert("Введіть назву предмета");
            continue;
        }
        const result = useItem(check);
        if(result && result.damage > 0){
            alert(`Ворог отримав ${result.damage} шкоди`);
        }
        let askToContinue = prompt("Все подивились? так/ні")
        if(askToContinue === "так"){
            checking = false;
        }
        else if(askToContinue === "ні"){
            checking = true;
        }
        else{
            alert("Напишіть так або ні");
        }
    }
}
const getWeaponStats = function(weaponName) {
    let damage = 0;
    let staminaCost = 0;
    let manaCost = 0;
    if (weaponName === "Дерев'яний ніж") {
        damage = 10;
        staminaCost = 5;
        manaCost = 0;
    } else if (weaponName === "Дерев'яний меч") {
        damage = 20;
        staminaCost = 10;
        manaCost = 0;
    } else if (weaponName === "Чарівна палиця") {
        damage = 15;
        staminaCost = 5;
        manaCost = 10;
    }
    return { damage, staminaCost, manaCost };
}
alert("Ви вийшли на велику пусту кімнату, але вас зустрів скелет охоронець, ви вступаєте в бій!");
const battle = function(enemyName, enemyHealth, enemyDamage) {
    alert(`На вас напав ${enemyName}!`);
    while (health > 0 && enemyHealth > 0) {
        let action = "";
        while (true) {
            action = prompt(`Ваш хід! Оберіть дію: атакувати / інвентар 
Статистика:${stats.join(", ")}`).trim().toLowerCase();
            if (action === "атакувати" || action === "інвентар") break;
            alert("Напишіть 'атакувати' або 'інвентар'");
        }
        if (action === "інвентар") {
            checkInventory();
            continue; 
        }
        const weaponStats = getWeaponStats(currentWeapon);
        enemyHealth -= weaponStats.damage;
        stamina = Math.max(0, stamina - weaponStats.staminaCost);
        mana = Math.max(0, mana - weaponStats.manaCost);
        alert(`Ви атакуєте ${enemyName} з ${currentWeapon} і наносите ${weaponStats.damage} урону!
${enemyName} має ${enemyHealth} здоров'я
Стаміни: ${stamina}, Мани: ${mana}`);
        if (enemyHealth <= 0) {
            alert(`${enemyName} переможений!`);
            break;
        }
        health -= enemyDamage;
        alert(`${enemyName} атакує вас і наносить ${enemyDamage} урону!
У вас залишилось ${health} здоров'я`);
        if (health <= 0) {
            alert("Ви програли бій... Кінець вашої історії.");
            break;
        }
    }
}
battle("Скелет", 50, 10);