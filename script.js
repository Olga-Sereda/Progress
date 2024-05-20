const progressBar = document.getElementById('progress__bar')

function changeInputValue(val) {
    // progressBar.style['background'] = `conic-gradient(#005CFF ${val}%, #EAF0F6 0);`
    // progressBar.style.setProperty('background', `conic-gradient(#005CFF ${val}%, #EAF0F6 0);`)
    // progressBar.style.background = `conic-gradient(#005CFF ${val}%, #EAF0F6 0);`

    const style = `
    background:
        radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(#005CFF ${val}%, #EAF0F6 0);
    `
    progressBar.style.cssText = style
}


function hide() {
    const hideInput = document.getElementById("hide__input");

    if (hideInput.checked === true) {
        progressBar.classList.add('hide')
    } else {
        progressBar.classList.remove('hide')
    }
}


function animateInp() {
    const animateInput = document.getElementById("animate__input");

    if (animateInput.checked === true) {
        progressBar.classList.add('rotation')
    } else {
        progressBar.classList.remove('rotation')
    }
}