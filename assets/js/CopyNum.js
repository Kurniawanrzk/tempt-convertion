// THE COPY HANDLER 


// What this line of code do is, when user click the first copy button, it gonna copy
// the number that you input
copyIptFirst.addEventListener('click', () => {
    navigator.clipboard
    .readText()
    .then(paste => {
            firstIpt.value = paste.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0')
            Convertion()
            
        },)              
            
})

// What this line of code do is, when user click the first copy button, it gonna copy
// the result number
copyIptSecond.addEventListener('click', () => {
    if(firstIpt.value !== "") {
        secondIpt.select()
        navigator.clipboard.writeText(secondIpt.value)
        localStorage.getItem("lang") == "id" ? AlertHandler("berhasil di copy", "success") : AlertHandler("copy success!", "success")
    } else {
        localStorage.getItem("lang") == "id" ? AlertHandler("silahkan isi nomor suhu!", "danger") : AlertHandler("please insert the number!", "danger")
    }

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