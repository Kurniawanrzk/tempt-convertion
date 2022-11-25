// this variable is to get the symbol of what tempratur type
// We select in the first select 
const getFirstTemptSymb = firstSelect.value == "1" ?
        " °C" : firstSelect.value == "2" ? 
        " °F" : firstSelect.value == "3" ? 
        " °Ré" : firstSelect.value == "4" ?  
        " K" : firstSelect.value == "5" ? 
        " °R" : "",
// this variable is to get the symbol of what tempratur type
// We select in the second select

        getSecondTemptSymb = secondSelect.value == "1" ?
        " °C" : secondSelect.value == "2" ? 
        " °F" : secondSelect.value == "3" ? 
        " °Ré" : secondSelect.value == "4" ?  
        " K" : secondSelect.value == "5" ? 
        " °R" : "",

// this variable is to get the full tempratur ("not the symbol") type
// We select in the first select
        getFirstTempt =  firstSelect.value == "1" ? 
        "Celcius" : firstSelect.value == "2" ? 
        "Farenheit" : firstSelect.value == "3" ? 
        "Reamur" : firstSelect.value == "4" ? 
        "Kelvin" : firstSelect.value == "5" ? 
        "Rankine" : "",

// this variable is to get the full tempratur ("not the symbol") type
// We select in the first selects
        getSecondTempt = secondSelect.value == "1" ? 
        "Celcius" : secondSelect.value == "2" ? 
        "Farenheit" : secondSelect.value == "3" ? 
        "Reamur" : secondSelect.value == "4" ? 
        "Kelvin" : secondSelect.value == "5" ? 
        "Rankine" : ""

// What this load event do is, when user load the page and the localstorage 
// history is not found, it automaticly set in localstorage the history,

// And if the localStorage save not found it automaticly set the localstorage save
// And if it founded, it wont do anything

window.addEventListener("load", () => {
   if(!localStorage.getItem("save-tempt")) {
    localStorage.setItem("save-tempt", JSON.stringify([{ 
        firstSelect:"0",
        secondSelect:"0",
            main:"0", 
            result:"0"
     }]))
   }
   localStorage.setItem("history-tempt", JSON.stringify([{ 
        firstSelect:"0",
        secondSelect:"0",
            main:"0", 
            result:"0"
    }]))
})

// What this code do is, if the user click the save button, it automaticly storing to the localstorage save
SaveBtn.addEventListener('click', () => {
    if(firstIpt.value !== "" && 
    (!JSON.parse(localStorage.getItem("save-tempt")).find(res => res.main === firstIpt.value + getFirstTemptSymb && res.firstSelect == getFirstTempt && res.secondSelect == getSecondTempt))) {
    let saveData = JSON.parse(localStorage.getItem("save-tempt"))    
    saveData.push({
        firstSelect: getFirstTempt,
        secondSelect: getSecondTempt,
            main:firstIpt.value + getFirstTemptSymb, 
            result:secondIpt.value + getSecondTemptSymb, 
        
    })
    localStorage.setItem("save-tempt", JSON.stringify(saveData))
        AlertHandler("Berhasil Di Simpan", "success")
    } else if(firstIpt.value == "") {
       AlertHandler("Silahkan Masukkan Angka!", "warning")
    } else {
       AlertHandler("Konversi Ini Sudah Anda Simpan", "warning")
    }
})

// What this code do is, if the user focusout the input, it automaticly storing to the localstorage history
firstIpt.addEventListener("focusout", () => {
    if(firstIpt.value !== "" //  && (!JSON.parse(localStorage.getItem("history-tempt")).find(res => res.firstIpt === firstIpt.value))
    ) {
    let historyData = JSON.parse(localStorage.getItem("history-tempt"))    
    historyData.push({
        firstSelect: getFirstTempt,
        secondSelect: getSecondTempt,
            main:firstIpt.value + getFirstTemptSymb, 
            result:secondIpt.value + getSecondTemptSymb, 
        
    })
    localStorage.setItem("history-tempt", JSON.stringify(historyData))
}
})