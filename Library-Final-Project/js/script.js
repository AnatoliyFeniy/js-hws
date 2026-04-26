const addBtn = document.getElementById("addBtn");
// -----------------------------------список книг
const renderBooks = function(){
    const bcontainer = document.getElementById("booksLst");
    const baseBtn = document.querySelector(".baseBtn");
    bcontainer.innerHTML = "";
    bcontainer.appendChild(baseBtn);
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach((book, index) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="img-wrap">
                <img class="bimg" src="${book.img}" alt="img">
                <div class="card-btns" style="
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    justify-content: flex-end;
                    align-items: flex-end;
                ">
                <button class="editBtn">Редагувати</button>
                <button class="deleteBtn">Видалити</button>
            </div>
        </div>
        <h3 class="btext">${book.title}</h3>
        <p class="btext">Автор: ${book.author}</p>
        <p class="btext">Рік: ${book.year}</p>
        <p class="btext">Видавництво: ${book.publisher}</p>
    `;
    const editBtn = card.querySelector(".editBtn");
    const deleteBtn = card.querySelector(".deleteBtn");
    editBtn.addEventListener("click", () => {
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
            <h2 class="formtitle">Редагувати книгу</h2>
            <div class="bookform">
            <input class="forminpt" type="text" id="bookTitle" value="${book.title}" placeholder="Назва книги">
            <input class="forminpt" type="number" id="bookYear" value="${book.year}" placeholder="Рік">
            <input class="forminpt" type="text" id="bookAuthor" value="${book.author}" placeholder="Автор">
            <input class="forminpt" type="text" id="bookPublisher" value="${book.publisher}" placeholder="Видавництво">
            <input class="forminpt" type="text" id="bookImg" value="${book.img}" placeholder="Посилання на картинку">
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
        const title = document.getElementById("bookTitle").value;
        const year = document.getElementById("bookYear").value;
        const author = document.getElementById("bookAuthor").value;
        const publisher = document.getElementById("bookPublisher").value;
        const img = document.getElementById("bookImg").value;

        if(!title || !year || !author || !publisher || !img){
            alert("Заповніть всі поля!");
            return;
        }

        const books = JSON.parse(localStorage.getItem("books")) || [];
        books[index] = { title, year, author, publisher, img };
        localStorage.setItem("books", JSON.stringify(books));

        document.body.removeChild(modal);
        renderBooks();
    });
});
    deleteBtn.addEventListener("click", () => {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
        card.remove();
    });
    const imgWrap = card.querySelector(".img-wrap");
    const cardBtns = card.querySelector(".card-btns");

    imgWrap.addEventListener("mouseover", function(){
        cardBtns.style.display = "flex";
    });

    imgWrap.addEventListener("mouseout", function(){
        cardBtns.style.display = "none";
    });

    bcontainer.appendChild(card);
});
};
addBtn.addEventListener("click", function(){
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
        border-style: groove;
        border: 2px solid black;
        padding: 25px;
        overflow-y: auto;
        z-index: 1000;
    `;
    modal.innerHTML = `
        <h2 class="formtitle">Додати книгу</h2>
        <div class="bookform">
        <input class="forminpt" type="text" id="bookTitle" placeholder="Назва книги">
        <input class="forminpt" type="number" id="bookYear" placeholder="Рік">
        <input class="forminpt" type="text" id="bookAuthor" placeholder="Автор">
        <input class="forminpt" type="text" id="bookPublisher" placeholder="Видавництво">
        <input class="forminpt" type="text" id="bookImg" placeholder="Посилання на картинку">
        </div>
        <h2 class="formtitle2">Дані користувача</h2>
        <div class="userform">
        <input class="forminpt" type="text" id="userFirstName" placeholder="Ім'я">
        <input class="forminpt" type="text" id="userLastName" placeholder="Прізвище">
        <input class="forminpt" type="number" id="userPhone" placeholder="Номер телефону">
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
    const title = document.getElementById("bookTitle").value;
    const year = document.getElementById("bookYear").value;
    const author = document.getElementById("bookAuthor").value;
    const publisher = document.getElementById("bookPublisher").value;
    const img = document.getElementById("bookImg").value;
    const firstName = document.getElementById("userFirstName").value;
    const lastName = document.getElementById("userLastName").value;
    const phone = document.getElementById("userPhone").value;

    if(!title || !year || !author || !publisher || !img || !firstName || !lastName || !phone){
        alert("Заповніть всі поля!");
        return;
    }

    const book = {
        title, year, author, publisher, img,
    };

    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    document.body.removeChild(modal);
    renderBooks();
    });

});

renderBooks();