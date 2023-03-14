"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listener for select on HTML
    document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
    // call detectUserPreference to read from localStorage
    detectUserPreference();
}

// Detect and set previous selected color mode from localStorage
function detectUserPreference() {
    const modeFromLocalStorage = readUserColorMode();
    console.log(modeFromLocalStorage);

    if (modeFromLocalStorage) {
        changeMode(modeFromLocalStorage);
        document.querySelector("#select-color-mode").value = modeFromLocalStorage;
    }
}

// Read and return userColorMode from localStorage
function readUserColorMode() {
    const userColorMode = localStorage.getItem("userColorMode");
    console.log(userColorMode);
    return userColorMode;
}

// Save color color mode to localStorage
function saveUserColorMode(mode) {
    localStorage.setItem("userColorMode", mode);
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
function resetColorMode() {
    document.body.classList.remove("dark-mode", "green-mode", "yellow-mode");
}
