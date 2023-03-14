"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listeners
    document.querySelector("#select-mode").addEventListener("change", modeSelected);
}

function modeSelected() {
    const mode = this.value;
    console.log(mode);
    resetMode(); // reset no matter what

    if (mode === "dark") {
        console.log("Dark Mode");
        document.body.classList.add("dark-mode");
    } else if (mode === "green") {
        console.log("Green Mode");
        document.body.classList.add("green-mode");
    } else if (mode === "yellow") {
        console.log("Yellow Mode");
        document.body.classList.add("yellow-mode");
    }
}

// removes all *-mode classes from body
function resetMode() {
    document.body.classList.remove("dark-mode", "green-mode", "yellow-mode");
}
