switchTempt.addEventListener('click', () => {
    let firstval = firstSelect.value,
        secondval = secondSelect.value,
        firstiptval = firstIpt.value,
        secondiptval = secondIpt.value

    firstSelect.value = secondval
    secondSelect.value = firstval
    firstIpt.value = secondiptval
    secondIpt.value = firstiptval
    Convertion()
})