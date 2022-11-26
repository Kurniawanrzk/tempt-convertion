window.addEventListener("load", () => {
    if(!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark")
    }

    if(localStorage.getItem("theme") === "dark") {
        ThemeSwitch.value = "dark"  
        ThemeSwitch.checked = false
        ThemeDark()
       
    } else {
        ThemeSwitch.value = "light"
        ThemeSwitch.checked = true
        ThemeLight()
    }
})

ThemeSwitch.addEventListener("click", () => {
    if(ThemeSwitch.value == "dark") {
        localStorage.setItem("theme", "light")
        ThemeLight()
        setTimeout(() => {
            window.location.reload()
        }, 140)
    } else {
        localStorage.setItem("theme", "dark")
        ThemeDark()
        setTimeout(() => {
            window.location.reload()
        }, 140)
    }
})

function ThemeDark() {
    document.documentElement.style.setProperty('--background_hitam', '#242424')
    document.documentElement.style.setProperty('--background_hitam_hitam', '#1b1b1b')
    document.documentElement.style.setProperty('--text-color-hitam', '#afafaf')
    document.documentElement.style.setProperty('--text-color-hitam-hover', '#696969')
    document.documentElement.style.setProperty('--highlight-hitam', '#e58c17')
    document.documentElement.style.setProperty('--border-hitam','#070707')
    document.documentElement.style.setProperty('--shadow-hitam',' rgba(0, 0, 0, 0.25)')
}

function ThemeLight() {
    document.documentElement.style.setProperty('--background_hitam', '#fafafa')
    document.documentElement.style.setProperty('--background_hitam_hitam', '#ececec')
    document.documentElement.style.setProperty('--text-color-hitam', '#505050')
    document.documentElement.style.setProperty('--text-color-hitam-hover', '#969696')
    document.documentElement.style.setProperty('--highlight-hitam', '#1A73E8')
    document.documentElement.style.setProperty('--border-hitam','#F8F8F8')
    document.documentElement.style.setProperty('--shadow-hitam',' rgba(0, 0, 0, 0.25)')
}