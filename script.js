window.onload = function(){
    var navIcon = document.getElementById("navIcon")
    navIcon.addEventListener("click", showHiddenNavMenu())
}

function showHiddenNavMenu() {
    var hiddenNavMenu = document.getElementById("hiddenNavMenu");
    hiddenNavMenu.classList.remove("hidden")
}

