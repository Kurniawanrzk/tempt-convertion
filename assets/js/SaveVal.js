window.addEventListener("load", () => {
   if(!localStorage.getItem("save-tempt")) {
    localStorage.setItem("save-tempt", JSON.stringify([{ firstIpt:"", secondIpt:"" }]))
   }
   localStorage.setItem("history-tempt", JSON.stringify([{ firstIpt:"", secondIpt:"" }]))
})

SaveBtn.addEventListener('click', () => {
    if(firstIpt.value !== "") {
    let saveData = JSON.parse(localStorage.getItem("save-tempt"))    
    saveData.push({firstIpt:firstIpt.value, secondIpt:secondIpt.value})
    localStorage.setItem("save-tempt", JSON.stringify(saveData))
    }
})

firstIpt.addEventListener("focusout", () => {
    if(firstIpt.value !== ""
     && (!JSON.parse(localStorage.getItem("history-tempt")).find(res => res.firstIpt === firstIpt.value))) {
    let historyData = JSON.parse(localStorage.getItem("history-tempt"))    
    historyData.push({firstIpt:firstIpt.value, secondIpt:secondIpt.value})
    localStorage.setItem("history-tempt", JSON.stringify(historyData))
}
})