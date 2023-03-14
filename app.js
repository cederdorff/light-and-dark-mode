"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listeners
    document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
    const selectedColorMode = this.value;
    console.log(selectedColorMode);
    changeMode(selectedColorMode);
    saveUserColorMode(selectedColorMode);
}

// adds a css class to body based on choosen mode
function changeMode(mode) {
    resetColorMode(); // reset color mode (css classes)

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
