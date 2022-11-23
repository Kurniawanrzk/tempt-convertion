copyIptFirst.addEventListener('click', () => {
    firstIpt.select()
    navigator.clipboard.writeText(firstIpt.value)
})

copyIptSecond.addEventListener('click', () => {
    secondIpt.select()
    navigator.clipboard.writeText(secondIpt.value)
})