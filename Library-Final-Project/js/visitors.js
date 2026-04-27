const renderVisitors = function(){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    visitors.forEach((visitor, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${visitor.firstName}</td>
            <td>${visitor.lastName}</td>
            <td>+${visitor.phone}</td>
            <td>
                <button class="vbtn veditBtn">Змінити</button>
                <button class="vbtn vdelBtn">Видалити</button>
            </td>
        `;
        const veditBtn = row.querySelector(".veditBtn");
        const vdelBtn = row.querySelector(".vdelBtn");
        vdelBtn.addEventListener("click", ()=>{
            const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
            visitors.splice(index, 1);
            localStorage.setItem("visitors", JSON.stringify(visitors));
            row.remove();
        });
        veditBtn.addEventListener("click", function(){
            if(document.getElementById("modal")) return;
            const modal = document.createElement("div");
            modal.id = "modal";
            modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 800px;
                height: 950px;
                background: radial-gradient(circle, black -30%, rgba(150, 75, 0, 1) 100%);
                border-radius: 20px;
                border: 2px solid black;
                padding: 25px;
                overflow-y: auto;
                z-index: 1000;
            `;
            modal.innerHTML = `
                <h2 class="vformtitle">Редагувати користувача</h2>
                <div class="userform">
                <input class="forminpt" type="text" id="userFirstName" value="${visitor.firstName}" placeholder="Ім'я">
                <input class="forminpt" type="text" id="userLastName" value="${visitor.lastName}" placeholder="Прізвище">
                <input class="forminpt" type="number" id="userPhone" value="${visitor.phone}" placeholder="Номер телефону">
                </div>
                <div class="fbtns">
                <button class="fbtn" id="saveBtn">Зберегти</button>
                <button class="fbtn2" id="closeBtn">Закрити</button>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById("closeBtn").addEventListener("click", function(){
                document.body.removeChild(modal);
            });

            document.getElementById("saveBtn").addEventListener("click", function(){
                const firstName = document.getElementById("userFirstName").value;
                const lastName = document.getElementById("userLastName").value;
                const phone = document.getElementById("userPhone").value;

                if(!firstName || !lastName || !phone){
                    alert("Заповніть всі поля!");
                    return;
                }
                if(phone < 0 && phone.length < 11){
                    alert("Некоректно записаний телефон")
                    return;
                }

                const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
                visitors[index] = { firstName, lastName, phone };
                localStorage.setItem("visitors", JSON.stringify(visitors));
                document.body.removeChild(modal);
                renderVisitors();
            });
        });
        tbody.appendChild(row);
    });
};

renderVisitors();