// THE COPY HANDLER 


// What this line of code do is, when user click the first copy button, it gonna copy
// the number that you input
copyIptFirst.addEventListener('click', () => {
    firstIpt.select()
    navigator.clipboard.writeText(firstIpt.value)
})

// What this line of code do is, when user click the first copy button, it gonna copy
// the result number
copyIptSecond.addEventListener('click', () => {
    secondIpt.select()
    navigator.clipboard.writeText(secondIpt.value)
})