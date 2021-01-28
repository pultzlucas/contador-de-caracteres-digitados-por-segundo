const oneSecond = 1000
let seconds = 1
let letters = 0
let LPS = 0 //letters per second

function timer() {
    showLPS()
    setTimeout(timer, oneSecond)
}

function updateLPS() {
    LPS = (letters / seconds).toFixed(2)
}

function showLPS() {
    updateLPS()
    console.log(LPS)
    display.textContent = LPS
    letters = 0
}

writeArea.addEventListener('focus', timer)
writeArea.addEventListener('input', () => letters++)

