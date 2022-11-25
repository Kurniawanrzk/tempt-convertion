let url = new URL((window.location.href).toLowerCase()),
langVal = url.searchParams.get("lang") 

window.addEventListener("load", () => {
    // By Default it gonna set language in indonesia

    // What this if statement mean is, if the localStorage lang not founded, it automaticly 
    // set new localStorage lang
    if(!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "id");
    }

    // What this if statement mean is, if the localStorage Lang value is en / id, it automaticly
    // set the parameter url by what is in the localStorage 
   if(localStorage.getItem("lang") == "id") {
    window.history.replaceState(null, null, "?lang=id");
   } else {
    window.history.replaceState(null, null, "?lang=en");
   }  
   
   changeLanguageHtmlHandler(langVal)

})

// what this code do is, when the user select the lang, it automaticly change the language 
langSelect.addEventListener("change", () => {
    localStorage.setItem("lang", langSelect.value)
    window.history.replaceState(null, null, `?lang=${langSelect.value}`);
    changeLanguageHtmlHandler(langSelect.value)
})

// what this function do is, to change the html element with the language selected
function changeLanguageHtmlHandler(langVal) {
    if(langVal === "id") {
        langSelect.value = "id"
        switchTempt.innerHTML = "Tukar"
    } else{
        langSelect.value = "en"
        switchTempt.innerHTML = "Switch"
    }
}
