var iconBx = document.querySelectorAll('.iconBx');
var contentBx = document.querySelectorAll('.contentBx');

for (var i=0; i<iconBx.length; i++) {
    iconBx[i].addEventListener('mouseover', function(){
        for (var i=0; i<contentBx.length; i++){
            contentBx[i].className='contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for (var i=0; i<iconBx.length; i++){
            iconBx[i].className='iconBx';
        }
        this.className= 'iconBx active';
    })
}
/*
const texts = ["websites", "illustrations", "pancakes"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();
*/
const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["programmerer", "analyserer", "ser etter jobb!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
})