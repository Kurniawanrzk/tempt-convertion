hearBtnFirst.addEventListener('click', () => 
responsiveVoice.speak(
firstSelect.value == "1" ? 
firstIpt.value.replace(".", ",") + "°C" : firstSelect.value == "2" ? 
firstIpt.value.replace(".", ",") + "°F" : firstSelect.value == "3" ? 
firstIpt.value.replace(".", ",") + "°Reamur" : firstSelect.value == "4" ? 
firstIpt.value.replace(".", ",") + "Kelvin" : firstSelect.value == "5" ? 
firstIpt.value.replace(".", ",") + "°Rankine" : "", 'Indonesian Female'))
hearBtnSecond.addEventListener('click', () => 
responsiveVoice.speak(secondSelect.value == "1" ? 
secondIpt.value.replace(".", ",") + "°C" : secondSelect.value == "2" ? 
secondIpt.value.replace(".", ",") + "°F" : secondSelect.value == "3" ? 
secondIpt.value.replace(".", ",") + "°Reamur" : secondSelect.value == "4" ? 
secondIpt.value.replace(".", ",") + "Kelvin" : secondSelect.value == "5" ? 
secondIpt.value.replace(".", ",") + "°Rankine" : "", 'Indonesian Female'))
