
const sko = document.querySelector("#sko");

const btnBlack = document.querySelector("#btnBlack");
const btnWhite = document.querySelector("#btnWhite");
const btnGray = document.querySelector("#btnGray");
const btnPink = document.querySelector("#btnPink");
const btnColor = document.querySelector("#btnColor");

const tittel = document.querySelector("#tittel");

const logoBlack = document.querySelector("#logoBlack");
const logoWhite = document.querySelector("#logoWhite");
const logoGray = document.querySelector("#logoGray");
const logoPink = document.querySelector("#logoPink");
const logoColor = document.querySelector("#logoColor");

const mainImg1 = document.querySelector("#mainImg1");
const mainImg2 = document.querySelector("#mainImg2");
const mainImg3 = document.querySelector("#mainImg3");
const mainImg4 = document.querySelector("#mainImg4");

const bottom = document.querySelector("#bottom");
const str = bottom.getElementsByClassName("str");

const minModal = document.querySelector("#minModal");
const modalContent = document.querySelector("#modal-content");
const btnKurv = document.querySelector("#btnKurv"); 
const span = document.querySelector("#close");

// En for løkke med en klikk funksjon som bytter mellom hvilken div som er aktiv når en størrelse blir klikket på. 
for (var i = 0; i < str.length; i++) {
    str[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/*** POP UP Handlekurv, og viser hvilken sko som har blitt lagt til i handle kurven***/
btnKurv.onclick = function() {
    minModal.style.display = "block";
    modalContent.innerHTML = valgtSko + " har blitt lagt til i handlevognen";
}


// Legger ned handlekurven når man klikker utenfor rammen
window.onclick = function(event) {
    if (event.target == minModal) {
        minModal.style.display = "none";
    }
}

/************* ANIMASJON FOR SKO UT OG INN ******************/
let valgtSko = "black.png";

function utOgInn(valgtSko, nySko) {
    const keyframesUt = [
        { left: "550px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(10deg)" },
        { left: "550px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(-30deg)" },
        { left: "750px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(10deg)" },
        { left: "1000px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(-30deg)" },
        { left: "1200px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(10deg)" },
        { left: "1500px", backgroundImage: `url("./img/${valgtSko}")`, transform: "rotate(-30deg)" }
    ]

    const settingsUt = {
        duration: 500,
        fill: "forwards"
    }

    const animasjonUt = sko.animate(keyframesUt, settingsUt);
    animasjonUt.onfinish = () => {

        const keyframesInn = [
            { left: "-500px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(-30deg)" },
            { left: "-200px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(0deg)" },
            { left: "0px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(-30deg)" },
            { left: "150px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(0deg)" },
            { left: "300px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(-30deg)" },
            { left: "550px", backgroundImage: `url("./img/${nySko}")`, transform: "rotate(0)" }
        ]

        const settingsInn = {
            duration: 500,
            fill: "forwards"
        }

        const animasjonInn = sko.animate(keyframesInn, settingsInn);

    }  
}

/**************** Endrer bildet til skoen, både på animasjonen og på bildene under **********************/
btnBlack.onclick = () => {
    utOgInn(valgtSko, "black.png");
    valgtSko = "black.png";
    tittel.style.color = "black";
    mainImg1.src = "img/black/black-img1.webp";
    mainImg2.src = "img/black/black-img2.jpg";
    mainImg3.src = "img/black/black-img3.jpg";
    mainImg4.src = "img/black/black-img4.jpg";
}
btnWhite.onclick = () => {
    utOgInn(valgtSko, "white.png");
    valgtSko = "white.png";
    tittel.style.color = "white";
    mainImg1.src = "img/white/white-img1.webp";
    mainImg2.src = "img/white/white-img2.webp";
    mainImg3.src = "img/white/white-img3.webp";
    mainImg4.src = "img/white/white-img4.webp";
}
btnGray.onclick = () => {
    utOgInn(valgtSko, "gray.png");
    valgtSko = "gray.png";
    tittel.style.color = "lightgray";
    mainImg1.src = "img/gray/gray-img1.webp";
    mainImg2.src = "img/gray/gray-img2.webp";
    mainImg3.src = "img/gray/gray-img3.webp";
    mainImg4.src = "img/gray/gray-img4.webp";
}
btnPink.onclick = () => {
    utOgInn(valgtSko, "pink.png");
    valgtSko = "pink.png";
    tittel.style.color = "pink";
    mainImg1.src = "img/pink/pink-img1.webp";
    mainImg2.src = "img/pink/pink-img2.webp";
    mainImg3.src = "img/pink/pink-img3.webp";
    mainImg4.src = "img/pink/pink-img4.webp";
}
btnColor.onclick = () => {
    utOgInn(valgtSko, "color.png");
    valgtSko = "color.png";
    tittel.style.color = "lightblue";
    mainImg1.src = "img/color/color-img1.webp";
    mainImg2.src = "img/color/color-img2.webp";
    mainImg3.src = "img/color/color-img3.webp";
    mainImg4.src = "img/color/color-img4.webp";
}

logoBlack.onclick = () => { 
    valgtSko = '<img src = "./img/black.png" class="logo">';
    mainImg1.src = "img/black/black-img1.webp";
    mainImg2.src = "img/black/black-img2.jpg";
    mainImg3.src = "img/black/black-img3.jpg";
    mainImg4.src = "img/black/black-img4.jpg";
}

logoWhite.onclick = () => { 
    valgtSko = '<img src = "./img/white.png" class="logo">';
    mainImg1.src = "img/white/white-img1.webp";
    mainImg2.src = "img/white/white-img2.webp";
    mainImg3.src = "img/white/white-img3.webp";
    mainImg4.src = "img/white/white-img4.webp";
}
logoGray.onclick = () => { 
    valgtSko = '<img src = "./img/gray.png" class="logo">';
    mainImg1.src = "img/gray/gray-img1.webp";
    mainImg2.src = "img/gray/gray-img2.webp";
    mainImg3.src = "img/gray/gray-img3.webp";
    mainImg4.src = "img/gray/gray-img4.webp";
}
logoPink.onclick = () => { 
    valgtSko = '<img src = "./img/pink.png" class="logo">';
    mainImg1.src = "img/pink/pink-img1.webp";
    mainImg2.src = "img/pink/pink-img2.webp";
    mainImg3.src = "img/pink/pink-img3.webp";
    mainImg4.src = "img/pink/pink-img4.webp";
}
logoColor.onclick = () => { 
    valgtSko = '<img src = "./img/color.png" class="logo">';
    mainImg1.src = "img/color/color-img1.webp";
    mainImg2.src = "img/color/color-img2.webp";
    mainImg3.src = "img/color/color-img3.webp";
    mainImg4.src = "img/color/color-img4.webp";
}

