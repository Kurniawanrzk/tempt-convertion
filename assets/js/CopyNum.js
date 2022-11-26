// THE COPY HANDLER 


// What this line of code do is, when user click the first copy button, it gonna copy
// the number that you input
copyIptFirst.addEventListener('click', () => {
    navigator.clipboard
    .readText()
    .then(paste => 
        (
            firstIpt.value = paste.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0')
        ))
})

// What this line of code do is, when user click the first copy button, it gonna copy
// the result number
copyIptSecond.addEventListener('click', () => {
    secondIpt.select()
    navigator.clipboard.writeText(secondIpt.value)
})
CopyResult.addEventListener('click', () => {
    OutputRumus.select()
    navigator.clipboard.writeText(OutputRumus.value)
})

// RESET INPUT

ResetIpt.addEventListener('click', () => {
    firstIpt.value = ""
    secondIpt.value = ""
    OutputRumus.value = ""
})