let audio = new Audio('/assets/sfx/clickSound.mp3')
hearBtnFirst.addEventListener('click', () => {
    if(firstIpt.value !== "" && localStorage.getItem("lang") == "id") {  
        audio.play()
       setTimeout(() => {
        responsiveVoice.speak(
            firstSelect.value == "1" ? 
            firstIpt.value.replace(".", ",") + "°Celcius" : firstSelect.value == "2" ? 
            firstIpt.value.replace(".", ",") + "°Farenheit" : firstSelect.value == "3" ? 
            firstIpt.value.replace(".", ",") + "°Reamur" : firstSelect.value == "4" ? 
            firstIpt.value.replace(".", ",") + "Kelvin" : firstSelect.value == "5" ? 
            firstIpt.value.replace(".", ",") + "°Rankain" : "", 'Indonesian Female')
       }, 1000)
    } else if(firstIpt.value !== "" && localStorage.getItem("lang") == "en") { 
        audio.play() 
       setTimeout(() => {
        responsiveVoice.speak(
            firstSelect.value == "1" ? 
            firstIpt.value.replace(".", ",").replace("-", "minus") + "°Celcius" : firstSelect.value == "2" ? 
            firstIpt.value.replace(".", ",").replace("-", "minus") + "°Farenheit" : firstSelect.value == "3" ? 
            firstIpt.value.replace(".", ",").replace("-", "minus") + "°Reamur" : firstSelect.value == "4" ? 
            firstIpt.value.replace(".", ",").replace("-", "minus") + "Kelvin" : firstSelect.value == "5" ? 
            firstIpt.value.replace(".", ",").replace("-", "minus") + "°Rankine" : "", 'US English Female')
       }, 1000)
    }  else if(firstIpt.value == "" && localStorage.getItem("lang") == "id") {
        AlertHandler("Silahkan Masukkan Angka!", "warning")
    } else {
        AlertHandler("Please Insert the number!", "warning")
    }
})
hearBtnSecond.addEventListener('click', () => {
    if(secondIpt.value !== "" && localStorage.getItem("lang") == "id") {
        audio.play()
        setTimeout(() => {
            responsiveVoice.speak(secondSelect.value == "1" ? 
            secondIpt.value.replace(".", ",") + "°Celcius" : secondSelect.value == "2" ? 
            secondIpt.value.replace(".", ",") + "°Farenheit" : secondSelect.value == "3" ? 
            secondIpt.value.replace(".", ",") + "°Reamur" : secondSelect.value == "4" ? 
            secondIpt.value.replace(".", ",") + "Kelvin" : secondSelect.value == "5" ? 
            secondIpt.value.replace(".", ",") + "°Rankine" : "", 'Indonesian Female')
        }, 1000)
    }else if(secondIpt.value !== "" && localStorage.getItem("lang") == "en") {
        audio.play()
        setTimeout(() => {
            responsiveVoice.speak(secondSelect.value == "1" ? 
            secondIpt.value.replace(".", ",").replace("-", "minus") + "°Celcius" : secondSelect.value == "2" ? 
            secondIpt.value.replace(".", ",").replace("-", "minus") + "°Farenheit" : secondSelect.value == "3" ? 
            secondIpt.value.replace(".", ",").replace("-", "minus") + "°Reamur" : secondSelect.value == "4" ? 
            secondIpt.value.replace(".", ",").replace("-", "minus") + "Kelvin" : secondSelect.value == "5" ? 
            secondIpt.value.replace(".", ",").replace("-", "minus") + "°Rankine" : "", 'US English Female')
        }, 1000)
    } else if(secondIpt.value == "" && localStorage.getItem("lang") == "id") {
        AlertHandler("Silahkan Masukkan Angka!", "warning")
    } else {
        AlertHandler("Please Insert the number!", "warning")
    }
})
