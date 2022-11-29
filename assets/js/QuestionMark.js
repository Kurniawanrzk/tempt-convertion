QuestionBtn.addEventListener("click", clickQuestion)

function clickQuestion() {
   if(Penjelasan.value !== "") {
    document.querySelector(".mascot-gif").src = localStorage.getItem("theme") == "dark" ? "assets/img/Mode-Hitam.gif" : "assets/img/Mode-Putih.gif"
    MascotContainer.style.display = "block"
   setTimeout(() => {
    responsiveVoice.speak(Penjelasan.value,
    localStorage.getItem("lang") == "id" ? 'Indonesian Female' : "US English Female")
   }, 1000)
   setTimeout(() => {
    MascotContainer.style.display = "none"
   }, 20000)
   }
}   