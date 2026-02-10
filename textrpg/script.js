let alive = true;
let name = "";
let health = 100;
let stamina = 100;
let mana = 100;
let reputation = 0;
let currentWeapon = "";
let inventory = [];
let poisonTurns = 0;
let poisonDamage = 0;
let lastSkillDamage = 0;
let skipTurn = false;
let maxHealth = 100;
let maxStamina = 100;
let maxMana = 100;
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
    if(item === "Велике зілля відновлення"){
        health += 50;
    }
    if(item === "Зілля шкоди"){
        damage = 60;
    }
    if(item === "Зілля мани"){
        mana+=50;
    }
    if(item === "Зілля стаміни"){
        stamina+=40;
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
            return 0;
        }
        let check = prompt(`Оберіть річ з інвентарю:${inventory.join(", ")}`);
        if(!check || check.trim() === ""){
            alert("Введіть назву предмета");
            continue;
        }
        const result = useItem(check);
        if(result && result.damage > 0){
            totalDamage += result.damage;
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
    let damage = 0, staminaCost = 0, manaCost = 0, type = "mellee";
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
        type="magic";
    }
    else if(weaponName === "Сталеві ножі"){
        damage=40;
        staminaCost=9;
        manaCost=0;
    }
    else if(weaponName === "Сталевий меч"){
        damage=50;
        staminaCost=20;
        manaCost=0;
    }
    else if(weaponName === "Магічний посох"){
        damage=30;
        staminaCost=5;
        manaCost=13;
        type="magic";
    }
    else if(weaponName === "Ножі смерті"){
        damage=70;
        staminaCost=13;
        manaCost=0;
    }
    else if(weaponName === "Меч берсерка"){
        damage=100;
        staminaCost=35;
        manaCost=0;
    }
    else if(weaponName === "Посох мудреця"){
        damage = 50;
        staminaCost=5;
        manaCost=15;
    }
    return {damage, staminaCost, manaCost, type};
}
const useSkill = function(weapon){
    lastSkillDamage = 0;
    skipTurn = false;
    if(getWeaponStats(weapon).type !== "magic"){
        alert("У цієї зброї немає скілів");
        return;
    }
    let skill = prompt("Оберіть скіл: fireball / poison").toLowerCase();

    if(skill === "fireball"){
        if(mana < 40){
            alert("Недостатньо мани! Пропускаєте хід");
            mana += Math.floor(maxMana * 0.2);
            skipTurn = true;
            return;
        }
        mana -= 40;
        lastSkillDamage = 40;
        alert("Ви кастуєте Fireball! 40 урону");
        return;
    }
    if(skill === "poison"){
        if(mana < 60){
            alert("Недостатньо мани! Пропускаєте хід");
            mana += Math.floor(maxMana * 0.2);
            skipTurn = true;
            return;
        }
        mana -= 60;
        poisonTurns = 3;
        poisonDamage = 20;
        alert("Ви наклали отруту на ворога!");
        return;
    }
    alert("Невідомий скіл");
}
const getStats = function(){
    return [name, health, stamina, mana, reputation];
}
const skipTurnAndRegen = function(resource){
    if(resource === "stamina"){
        const regen = Math.floor(maxStamina * 0.2);
        stamina = Math.min(maxStamina, stamina + regen);
        alert(`Недостатньо стаміни! Пропуск ходу.\nВідновлено ${regen} стаміни`);
    }
    if(resource === "mana"){
        const regen = Math.floor(maxMana * 0.2);
        mana = Math.min(maxMana, mana + regen);
        alert(`Недостатньо мани! Пропуск ходу.\nВідновлено ${regen} мани`);
    }
}
const battle = function(enemyName, enemyHealth, enemyDamage){
    alert(`На вас напав ${enemyName}!`);
    while(health>0 && enemyHealth>0){
        if(poisonTurns > 0){
        enemyHealth -= poisonDamage;
        poisonTurns--;
        alert(`Отрута наносить ${poisonDamage} урону. Залишилось ходів: ${poisonTurns}`);
        }
        let action="";
        while(true){
            action = prompt(`Ваш хід!
атакувати / скіл / інвентар
Статистика: ${getStats().join(", ")}`).trim().toLowerCase();
            if(action==="атакувати" || action==="інвентар" || action==="скіл") break;
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
        if(stamina < weaponStats.staminaCost){
            skipTurnAndRegen("stamina");
            health -= enemyDamage;
            alert(`${enemyName} атакує вас і наносить ${enemyDamage} урону!У вас залишилось ${health} здоров'я`);
        if(health <= 0){
            alert("Ви програли бій... Спробуйте ще раз.");
            alive = false;
            break;
        }
        continue;
        }
        if(action==="скіл"){
    useSkill(currentWeapon);
    enemyHealth -= lastSkillDamage;
    if(skipTurn){
        continue;
    }
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
    continue;
}
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
alert("Ви провели кілька годин в домі місцевого. Ви відновили свої сили");
health = 100;
stamina = 100;
mana = 100;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
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
do{
    newWeapon = prompt("Нова скриня! Оберіть нову зброю: Сталеві ножі/Сталевий меч/Магічний посох").trim();
    if(newWeapon===""){ 
        alert("Ви нічого не ввели, оберіть зброю!"); 
    }
    else if(newWeapon!="Сталеві ножі" && newWeapon!="Сталевий меч" && newWeapon!="Магічний посох"){ 
        alert("Oберіть Сталеві ножі/Сталевий меч/Магічний посох"); 
    }
    else currentWeapon=newWeapon;
}while(newWeapon!="Сталеві ножі" && newWeapon!="Сталевий меч" && newWeapon!="Магічний посох");
alert("Здається тут є магазин, але у вас немає грошей...");
if(reputation>=15){
    alert("Ви вирішили всерівно підійти");
    alert("Продавець: ласкаво просимо, що вас цікавить?");
    alert("Ви пояснили, що у вас немає грошей, але ви вбили нечесть, яка заважала на дорозі сюди.");
    alert("Продавець: це зовсім інша справа! Можете обрати 2 зілля на вибір задарма");
    let choosePotion1 = prompt("Велике зілля відновлення/Зілля шкоди/Зілля мани/Зілля стаміни");
    let choosePotion2 = prompt("Велике зілля відновлення/Зілля шкоди/Зілля мани/Зілля стаміни");
    if(choosePotion1==="Велике зілля відновлення") inventory.push("Велике зілля відновлення");
    if(choosePotion1==="Зілля шкоди") inventory.push("Зілля шкоди");
    if(choosePotion1==="Зілля мани") inventory.push("Зілля мани");
    if(choosePotion1==="Зілля стаміни") inventory.push("Зілля стаміни");
    if(choosePotion2==="Велике зілля відновлення") inventory.push("Велике зілля відновлення");
    if(choosePotion2==="Зілля шкоди") inventory.push("Зілля шкоди");
    if(choosePotion2==="Зілля мани") inventory.push("Зілля мани");
    if(choosePotion2==="Зілля стаміни") inventory.push("Зілля стаміни");
}
else{
    alert("Ви вирішили всерівно підійти");
    alert("Продавець: ласкаво просимо, що вас цікавить?");
    alert("Ви пояснили, що у вас немає грошей, але ви просто хочете вижити.");
    alert("Продавець: Тобі нічого тут шукати. Іди геть.");
}
alert("Ви проходите далі. Вас чекає багато битв");
battle("Вампір", 140, 25);
if(!alive) return;
alert("Це вже вороги по-серйозніше. Після битви ви зупнились біля вогнища щоб відновити сили. Здається через ваш бойовий досвід ваш дух став сильнішим.");
health = 140;
stamina = 120;
mana = 120;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
alert("Час здолати решту ворогів.")
battle("Мутант", 70, 35);
if(!alive) return;
alert("Треба знову перепочити і йти далі.")
health = 140;
stamina = 130;
mana = 130;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
alert("Ви вже біля підйому на 4 етаж. Шлях загороджує сильний противник.")
battle("Вершник без голови", 230, 30);
if(!alive) return;
alert("Після битви з Вершником без голови ви отримали нову броню!");
health = 250;
maxHealth = 250;
alert(`Ваше здоров'я тепер ${health} HP`);
alert("Ви піднялися на 4 етаж, та маєте перемогти демонів")
battle("Демон 1", 80, 15);
if(!alive) return;
alert("Після битви з Демоном 1 ви відновили сили.");
health = 250;
stamina = 130;
mana = 130;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
alert("Ви зустріли Демона 2!");
battle("Демон 2", 100, 20);
if(!alive) return;
alert("Після битви з Демоном 2 ви відновили сили.");
health = 250;
stamina = 130;
mana = 130;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
alert("Ви зустріли Демона 3!");
battle("Демон 3", 120, 25);
if(!alive) return;
alert("Після битви з Демоном 3 ви відновили сили.");
health = 250;
stamina = 140;
mana = 140;
health = maxHealth;
stamina = maxStamina;
mana = maxMana;
alert("Ви піднялись на 5 поверх! Перед вами скриня з новою зброєю.");
let newWeapon5;
do {
    newWeapon5 = prompt("Оберіть нову зброю: Ножі смерті / Меч берсерка / Посох мудреця").trim();
    if(newWeapon5 === ""){
        alert("Ви нічого не ввели, оберіть зброю!");
    }
    else if(newWeapon5 != "Ножі смерті" && newWeapon5 != "Меч берсерка" && newWeapon5 != "Посох мудреця"){
        alert("Oберіть Ножі смерті / Меч берсерка / Посох мудреця");
    }
    else currentWeapon = newWeapon5;
} while(newWeapon5 != "Ножі смерті" && newWeapon5 != "Меч берсерка" && newWeapon5 != "Посох мудреця");
alert(`Ви обрали: ${currentWeapon}`);
alert("Перед вами головний бос — Повелитель Вежі!");
battle("Повелитель Вежі", 500, 50);
if(!alive) return;
alert("Вітаємо! Ви здолали Повелителя Вежі і завершили гру!");
}
startGame();