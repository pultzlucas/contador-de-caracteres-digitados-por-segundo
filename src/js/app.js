function init() {
    const timer = setInterval(run, 1000)

    let seconds = 1
    let letters = 0
    
    function run() {
        const LPS = letters / seconds
        
        console.log(LPS)
        display.textContent = LPS
        letters = 0
    }
    
    writeArea.addEventListener('input', () => letters++)
    writeArea.addEventListener('blur', () => clearInterval(timer))
}

writeArea.addEventListener('focus', init)

