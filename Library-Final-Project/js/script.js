const addBtn = document.getElementById("addBtn");
// -----------------------------------список книг
const renderBooks = function(){
    const bcontainer = document.getElementById("booksLst");
    const baseBtn = document.querySelector(".baseBtn");
    bcontainer.innerHTML = "";
    bcontainer.appendChild(baseBtn);
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(book => {
        const card = document.createElement("div");
        card.innerHTML = `
            <img src="${book.img}" alt="img">
            <h3>${book.title}</h3>
            <p>${book.year}</p>
            <p>${book.author}</p>
            <p>${book.publisher}</p>
        `;
        bcontainer.appendChild(card);
    });
};
addBtn.addEventListener("click", function(){
    const modal = document.createElement("div");
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
        <input class="forminpt" type="text" id="userPhone" placeholder="Номер телефону">
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
        const book = {
            title: document.getElementById("bookTitle").value,
            year: document.getElementById("bookYear").value,
            author: document.getElementById("bookAuthor").value,
            publisher: document.getElementById("bookPublisher").value,
            img: document.getElementById("bookImg").value,
        };

        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));

        document.body.removeChild(modal);
        renderBooks();
    });
});

renderBooks();