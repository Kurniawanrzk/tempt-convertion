HistoryBtn.addEventListener("click", reloadHistory)
function reloadHistory() {
    if(localStorage.getItem("sidebar") == "false") {
        localStorage.setItem("sidebar", "true")
        Sidebar.style.display = "block"
        TitleSidebar.innerHTML = "History"
        let dataHistory = JSON.parse(localStorage.getItem("history-tempt"))
        dataHistory.shift()
        dataHistory.forEach((data, idx) => {
            ContentSidebar.innerHTML += `
                <div style="display:flex;gap:100px;" class="border border-1 p-1">
                    <div>.${idx + 1} ${data.firstSelect} -> ${data.secondSelect} <br> ${data.main} = ${data.result} </div>
                </div>
            `
        })
    }else {
        localStorage.setItem("sidebar", "false")
       Sidebar.style.display = "none"
       TitleSidebar.innerHTML = ""
       ContentSidebar.innerHTML = ""
       }
}
