const progressBar = document.getElementById('progress__bar')

function changeInputValue(val) {
    const style = `
    background:
        radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(#005CFF ${val}%, #EAF0F6 0);
    `
    progressBar.style.cssText = style
}


function hideCheckboxClick(element) {
    element.checked
        ? progressBar.classList.add('hide')
        : progressBar.classList.remove('hide')
}

function animateCheckboxClick(element) {
    element.checked
        ? progressBar.classList.add('rotation')
        : progressBar.classList.remove('rotation')
}