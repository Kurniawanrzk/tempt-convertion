window.addEventListener("load", () => {
   if(!localStorage.getItem("save-tempt")) {
    localStorage.setItem("save-tempt", JSON.stringify([{ 
        firstSelect:"",
        secondSelect:"",
        results: {
            main:"", 
            result:""
        }
     }]))
   }
   localStorage.setItem("history-tempt", JSON.stringify([{ 
        firstSelect:"",
        secondSelect:"",
        results: {
            main:"", 
            result:""
        }
    }]))
})

SaveBtn.addEventListener('click', () => {
    if(firstIpt.value !== "") {
    let saveData = JSON.parse(localStorage.getItem("save-tempt"))    
    saveData.push({
        firstSelect:
        firstSelect.value == "1" ? 
        "Celcius" : firstSelect.value == "2" ? 
        "Farenheit" : firstSelect.value == "3" ? 
        "Reamur" : firstSelect.value == "4" ? 
        "Kelvin" : firstSelect.value == "5" ? 
        "Rankine" : "" ,

        secondSelect:
        secondSelect.value == "1" ? 
        "Celcius" : secondSelect.value == "2" ? 
        "Farenheit" : secondSelect.value == "3" ? 
        "Reamur" : secondSelect.value == "4" ? 
        "Kelvin" : secondSelect.value == "5" ? 
        "Rankine" : "",
        results: {
            main:
        firstSelect.value == "1" ? 
        firstIpt.value + " °C" : firstSelect.value == "2" ? 
        firstIpt.value + " °F" : firstSelect.value == "3" ? 
        firstIpt.value + " °Ré" : firstSelect.value == "4" ? 
        firstIpt.value + " K" : firstSelect.value == "5" ? 
        firstIpt.value + " °R" : "", 
            result:
        secondSelect.value == "1" ? 
        secondIpt.value + " °C" : secondSelect.value == "2" ? 
        secondIpt.value + " °F" : secondSelect.value == "3" ? 
        secondIpt.value + " °Ré" : secondSelect.value == "4" ? 
        secondIpt.value + " K" : secondSelect.value == "5" ? 
        secondIpt.value + " °R" : "", 
        }
    })
    localStorage.setItem("save-tempt", JSON.stringify(saveData))
    }
})

firstIpt.addEventListener("focusout", () => {
    if(firstIpt.value !== "" //  && (!JSON.parse(localStorage.getItem("history-tempt")).find(res => res.firstIpt === firstIpt.value))
    ) {
    let historyData = JSON.parse(localStorage.getItem("history-tempt"))    
    historyData.push({
        firstSelect:
        firstSelect.value == "1" ? 
        "Celcius" : firstSelect.value == "2" ? 
        "Farenheit" : firstSelect.value == "3" ? 
        "Reamur" : firstSelect.value == "4" ? 
        "Kelvin" : firstSelect.value == "5" ? 
        "Rankine" : "" ,

        secondSelect:
        secondSelect.value == "1" ? 
        "Celcius" : secondSelect.value == "2" ? 
        "Farenheit" : secondSelect.value == "3" ? 
        "Reamur" : secondSelect.value == "4" ? 
        "Kelvin" : secondSelect.value == "5" ? 
        "Rankine" : "",
        results: {
            main:
        firstSelect.value == "1" ? 
        firstIpt.value + " °C" : firstSelect.value == "2" ? 
        firstIpt.value + " °F" : firstSelect.value == "3" ? 
        firstIpt.value + " °Ré" : firstSelect.value == "4" ? 
        firstIpt.value + " K" : firstSelect.value == "5" ? 
        firstIpt.value + " °R" : "", 
            result:
        secondSelect.value == "1" ? 
        secondIpt.value + " °C" : secondSelect.value == "2" ? 
        secondIpt.value + " °F" : secondSelect.value == "3" ? 
        secondIpt.value + " °Ré" : secondSelect.value == "4" ? 
        secondIpt.value + " K" : secondSelect.value == "5" ? 
        secondIpt.value + " °R" : "",
        }
    })
    localStorage.setItem("history-tempt", JSON.stringify(historyData))
}
})