"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listeners
    document.querySelector("#select-mode").addEventListener("change", modeSelected);

    setUserMode();
}

function setUserMode() {
    const modeFromLocalStorage = readModeFromLocalStorage();
    console.log(modeFromLocalStorage);
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-mode").value = modeFromLocalStorage;
}

function readModeFromLocalStorage() {
    const mode = localStorage.getItem("userMode");
    console.log(mode);
    return mode;
}

function saveModeToLocalStorage(mode) {
    localStorage.setItem("userMode", mode);
}

function modeSelected() {
    const mode = this.value;
    console.log(mode);
    resetMode(); // reset no matter what
    changeMode(mode);
    saveModeToLocalStorage(mode);
}

function changeMode(mode) {
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
