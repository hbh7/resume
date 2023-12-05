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

function setupBackground() {
    const effect = document.querySelector("#background .effect");
    const body = document.querySelector("body");
    body.addEventListener("mousemove", function (event) {
        effect.style.left = `${event.clientX}px`;
        effect.style.top = `${event.clientY}px`;
    });
}


/**
 * Runs when the page is loaded
 */
function start() {
    setupBackground();
}
window.addEventListener ?
    window.addEventListener("load", start,false) :
    window.attachEvent && window.attachEvent("onload", start);


