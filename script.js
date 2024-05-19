const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width  = 150;
canvas.height = 150;

ctx.beginPath();
// ctx.arc(75, 70, 55, -Math.PI / 2, Math.PI * 2 , false);
ctx.arc(75, 70, 55, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2) * 1, false);
ctx.strokeStyle = '#EAF0F6';
ctx.lineWidth = 10;
ctx.stroke();

function moveLineCicle(val) {
    ctx.clearRect(0,0,550,400)

    ctx.beginPath();
    ctx.arc(75, 70, 55, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2) * 1, false);
    ctx.strokeStyle = '#EAF0F6';
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(75, 70, 55, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2) * val, false);
    ctx.strokeStyle = '#005CFF';
    ctx.stroke();
}


const input = document.getElementById("circle-input");

function changeInputValue(val) {
    const value = parseInt(input.value, 10) / 100;
    moveLineCicle(value)
}


function hide() {
    const hideInput = document.getElementById("hide__input");

    if (hideInput.checked === true) {
        canvas.classList.add('hide')
    } else {
        canvas.classList.remove('hide')
    }
}


function animateInp() {
    const animateInput = document.getElementById("animate__input");

    if (animateInput.checked === true) {
        canvas.classList.add('rotation')
    } else {
        canvas.classList.remove('rotation')
    }
}