let alive = true;
let name = "";
let health = 100;
let stamina = 100;
let mana = 100;
let reputation = 0;
let currentWeapon = "";
let inventory = [];
const useItem = function(item){
    let damage = 0;
    if(!inventory.includes(item)){
        alert("Такого предмета немає в інвентарі");
        return;
    }
    if(item === "Зілля відновлення"){
        health = Math.min(health + 20, 140);
        alert("Ви використали зілля відновлення +20 HP");
    }
    if(item === "Ядерна бомба"){
        damage = 1000000;
    }
    inventory.splice(inventory.indexOf(item), 1);
    return {damage};
}
const checkInventory = function(){
    let checking = true;
    let totalDamage = 0;
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
        let askToContinue = prompt("Все подивились? так/ні");
        if(askToContinue === "так") 
        checking = false;
        else if(askToContinue === "ні") 
        checking = true;
        else 
        alert("Напишіть так або ні");        
    }
    return totalDamage;
}
const getWeaponStats = function(weaponName){
    let damage = 0, staminaCost = 0, manaCost = 0;
    if(weaponName === "Дерев'яний ніж"){ 
        damage=10; 
        staminaCost=5; 
        manaCost=0; 
    }
    else if(weaponName === "Дерев'яний меч"){ 
        damage=20; 
        staminaCost=10; 
        manaCost=0; 
    }
    else if(weaponName === "Чарівна палиця"){ 
        damage=15; 
        staminaCost=5; 
        manaCost=10; 
    }
    return {damage, staminaCost, manaCost};
}
const getStats = function(){
    return [name, health, stamina, mana, reputation];
}
const battle = function(enemyName, enemyHealth, enemyDamage){
    alert(`На вас напав ${enemyName}!`);
    while(health>0 && enemyHealth>0){
        let action="";
        while(true){
            action = prompt(`Ваш хід! Оберіть дію: атакувати / інвентар\nСтатистика: ${getStats().join(", ")}`).trim().toLowerCase();
            if(action==="атакувати" || action==="інвентар") break;
            alert("Напишіть 'атакувати' або 'інвентар'");
        }
        if(action==="інвентар"){ 
            const itemDamage = checkInventory();
            enemyHealth -= itemDamage;
            if(enemyHealth <= 0){
                alert(`${enemyName} переможений!`);
            break;
            }
        continue; 
        }
        const weaponStats = getWeaponStats(currentWeapon);
        enemyHealth -= weaponStats.damage;
        stamina = Math.max(0, stamina - weaponStats.staminaCost);
        mana = Math.max(0, mana - weaponStats.manaCost);
        alert(`Ви атакуєте ${enemyName} з ${currentWeapon} і наносите ${weaponStats.damage} урону!
${enemyName} має ${enemyHealth} здоров'я
Стаміни: ${stamina}, Мани: ${mana}`);
        if(enemyHealth <= 0){ 
            alert(`${enemyName} переможений!`); 
            break; 
        }
        health -= enemyDamage;
        alert(`${enemyName} атакує вас і наносить ${enemyDamage} урону!
У вас залишилось ${health} здоров'я`);
        if(health <= 0){ 
            alert("Ви програли бій... Спробуйте ще раз."); 
            alive=false; 
            break; 
        }
    }
}
function startGame(){
alive = true;
health = 100;
stamina = 100;
mana = 100;
reputation = 0;
currentWeapon = "";
inventory = [];
alert("Ви просинаєтесь в дивному місці. Вас зустрічає загадковий чоловік.");
while(true){
    name = prompt("Введіть ім'я героя:").trim();
    if(name===""){ 
        alert("Ім'я не може бути порожнім!"); 
        continue; 
    }
    let hasNumber=false;
    for(let i=0;i<name.length;i++){ 
        if(!isNaN(name[i]) && name[i]!==" "){ 
            hasNumber=true; 
            break; 
        } 
    }
    if(hasNumber){ 
        alert("Ім'я не може містити цифри!"); 
        continue; 
    }
    break;
}
alert(`Тебе чекає довга дорога, ${name}, це 0 поверх вежі, тобі потрібно дістатись вершини`);
alert("Ви зайшли на 1 етаж, ви знаходитесь в невеликій кімнатці, де є тільки скриня та вихід з кімнати. ВИ вирішили відкрити скриню");
let startWeapon;
do{
    startWeapon = prompt("В скрині дерев'яний ніж, дерев'яний меч та чарівна палиця, оберіть зброю:").trim();
    if(startWeapon===""){ 
        alert("Ви нічого не ввели, оберіть зброю!"); 
    }
    else if(startWeapon!="Дерев'яний ніж" && startWeapon!="Дерев'яний меч" && startWeapon!="Чарівна палиця"){ 
        alert("Oберіть Дерев'яний ніж/Дерев'яний меч/Чарівна палиця"); 
    }
    else currentWeapon=startWeapon;
}while(currentWeapon==="");
alert(`Ви обрали: ${currentWeapon}`);
alert("Ви вийшли на велику пусту кімнату, але вас зустрів скелет охоронець, ви вступаєте в бій!");
battle("Скелет", 50, 10);
if(!alive) return;
alert("Ви перемогли свого першого ворога! Це був легкий етаж. Ви ступаєте на другий");
alert("Ви бачите кота зі злим поглядом");
let askToPet = prompt("Погладити кота? так/ні:").trim().toLowerCase();
if(askToPet==="так"){
    alert("Котик замуркотів. Злий погляд не значить злий кіт, типічний британець");
    alert("Прийшов старий мужчина, здається він власник кота");
    alert("???: ох уж цей кіт, постійно тікає, стривайте, я вас раніше тут не бачив");
    alert("???: здається ти не знав, що в цій вежі є люди, тебе багато чекає, ось тобі маленький подарунок");
    inventory.push("Зілля відновлення");
    alert("Вам дали зілля відновлення.");
    reputation+=5;
}
else if(askToPet==="ні"){
    alert("Ви вирішили пройти повз, котик супроводжував вас своїм злісним поглядом");
    alert("Ви пройшли повз старого мужчину, виявлється тут є люди");
}
else{
    alert("Ви не задумуючись пройшли повз");
}
alert("Дивина, перед вами велика територія, тут навіть є кілька напіврозвалених домівок");
alert("Дорогу загороджують 2 скелети!");
battle("Скелети", 100, 20);
if(!alive) return;
alert("Після битви ви пішли в це невеличке село");
alert("До вас підбіг житель");
alert("Житель: Невже, новенький в цьому місці! Бачу після битв ти весь поранений, я тобі дозволю перепочити в мене дома");
alert("Ви провели кілька годин в домі місцевого. Ви відновили своє здоров'я і стаміну");
health = 100;
stamina = 100;
let askToHelp = prompt("Не міг би ти розчистити нам шлях? В іншому випадку я вкажу тобі обхідний шлях(так/ні)").trim().toLowerCase();
if(askToHelp==="так"){
    alert("Житель: дякую, надіюсь ти впораєшся! і для цього я подарую тобі обладунок.");
    alert("Так старий і не дуже надійний, але краще ніж нічого");
    alert("Ви одягнули шкіряну броню");
    health=140;
    alert(`У вас тепер ${health} здоров'я`);
}
else{
    reputation-=10;
    alert("Житель: а я гадав хоч ти на це здатен... Пішли за мною");
}
if(reputation>=0){
    alert("Ви підходите до головного переходу на 3 етаж");
    alert("Ви зустрічаєтесь з нечистю, здається він колись був людиною та бійцем, але його душа була зіпсована.");
    battle("Нечесть", 100, 22);
    if(!alive) return;
    reputation+=15;
}
else{
    alert("Ви довго йшли та втомились, але таки перейшли на 3 етаж");
    stamina-=50;
}
alert("Ви ступили на 3 етаж.");
}
startGame();