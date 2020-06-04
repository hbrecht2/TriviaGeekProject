window.onload = function(){
    var navIcon = document.getElementById("navIcon")
    navIcon.addEventListener("click", showHiddenNavMenu)
}

//Displays nav menu when user clicks on menu icon
function showHiddenNavMenu() {
    var hiddenNavMenu = document.getElementById("hiddenNavMenu");
    if (hiddenNavMenu.classList.contains("hidden")){
        hiddenNavMenu.classList.remove("hidden")
    } else {
        hiddenNavMenu.classList.add("hidden")
    }
}
