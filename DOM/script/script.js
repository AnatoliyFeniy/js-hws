const father=document.getElementById("father");
//1
const randomImgSize=function(){
    const images=[
        "./images/photo_2026-03-24_19-47-08.jpg",
        "./images/photo_2026-03-24_19-47-13.jpg",
        "./images/photo_2026-03-24_19-47-17.jpg"
    ];
    const sizes = [400, 500, 600, 700, 800];
    const random = sizes[Math.floor(Math.random() * sizes.length)];
    const randomImg = images[Math.floor(Math.random() * images.length)];
    const img=document.createElement("img");
    img.src=randomImg;
    img.alt="rika";
    img.width=random;
    img.height=random;
    father.appendChild(img);
}
//2
const removeAll=function(){
    father.innerHTML = "";
}
//3
const list=function(){
    const ul=document.createElement("ul");
    const li=document.createElement("li");
    const li2=document.createElement("li");
    const li3=document.createElement("li");
    li.textContent="li text";
    li2.textContent="li text another";
    li3.textContent="li text antoher another";
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    father.appendChild(ul);
}
//4
const colors=function(){
    const h1=document.getElementById("title");
    h1.classList.add("textcolor");
    father.classList.add("bgcolor");
}
//5
const news=document.getElementById("news");
const addNews=function(){
     const card1=document.createElement("div");
    const card2=document.createElement("div");
    const card3=document.createElement("div");
    card1.classList.add("card");
    card2.classList.add("card");
    card3.classList.add("card");
    const img1=document.createElement("img");
    const img2=document.createElement("img");
    const img3=document.createElement("img");
    img1.src="./images/photo_2026-03-24_19-47-08.jpg";
    img2.src="./images/photo_2026-03-24_19-47-13.jpg";
    img3.src="./images/photo_2026-03-24_19-47-17.jpg";
    img1.width=500;
    img1.height=400;
    img1.alt="rika silly";
    img2.width=500;
    img2.height=400;
    img2.alt="rika chilling";
    img3.width=500;
    img3.height=400;
    img3.alt="rika sleeping";
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    p1.textContent="rika silly";
    p2.textContent="rika chilling";
    p3.textContent="rika eeping";
    card1.appendChild(img1);
    card1.appendChild(p1);
    card2.appendChild(img2);
    card2.appendChild(p2);
    card3.appendChild(img3);
    card3.appendChild(p3);
    card1.onclick=()=>card1.remove();
    card2.onclick=()=>card2.remove();
    card3.onclick=()=>card3.remove();
    const cards=[card1,card2,card3];
    const random=cards[Math.floor(Math.random()*cards.length)];
    news.prepend(random);
}