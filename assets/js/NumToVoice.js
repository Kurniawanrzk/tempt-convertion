hearBtnFirst.addEventListener('click', () => {
    if(firstIpt.value !== "") {  
        responsiveVoice.speak(
            firstSelect.value == "1" ? 
            firstIpt.value.replace(".", ",") + "°C" : firstSelect.value == "2" ? 
            firstIpt.value.replace(".", ",") + "°F" : firstSelect.value == "3" ? 
            firstIpt.value.replace(".", ",") + "°Reamur" : firstSelect.value == "4" ? 
            firstIpt.value.replace(".", ",") + "Kelvin" : firstSelect.value == "5" ? 
            firstIpt.value.replace(".", ",") + "°Rankain" : "", 'Indonesian Female')
    } else {
        AlertHandler("Silahkan Masukkan Angka!", "warning")

    }
})
hearBtnSecond.addEventListener('click', () => {
    if(secondIpt.value !== "") {
        responsiveVoice.speak(secondSelect.value == "1" ? 
            secondIpt.value.replace(".", ",") + "°C" : secondSelect.value == "2" ? 
            secondIpt.value.replace(".", ",") + "°F" : secondSelect.value == "3" ? 
            secondIpt.value.replace(".", ",") + "°Reamur" : secondSelect.value == "4" ? 
            secondIpt.value.replace(".", ",") + "Kelvin" : secondSelect.value == "5" ? 
            secondIpt.value.replace(".", ",") + "°Rankine" : "", 'Indonesian Female')
    } else {
        AlertHandler("Silahkan Masukkan Angka!", "warning")
    }
})
