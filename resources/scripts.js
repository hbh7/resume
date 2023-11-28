function expandMenu(menuObj) {
    menuObj.classList.toggle("menu-button-transformed");
    document.getElementById("menu").classList.toggle("opened");

    let contentObj = document.getElementById("menu-content");
    if (contentObj.classList.contains("opened")) {
        contentObj.classList.remove("opened");
    } else {
        // This delay helps avoid weird visual artifacts, and matches with CSS animation timing.
        setTimeout(function() {
            contentObj.classList.add("opened");
        }, 250);
    }
}



