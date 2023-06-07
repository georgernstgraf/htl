"use strict"

var obj;
var master
var guessRows
var masterRow
var notifyBox


// Hilfsfunktion, damit ich dann mit dem obj in der Konsole herumspielen kann
function capture(par) {
    cl("capture (stored in obj)", par)
    obj = par
}

function notify() {
    let t = new Date().toLocaleTimeString()
    for (let i = 0; i < arguments.length; i++) {
        notifyBox.value = `${t}: ${arguments[i]}\n` + notifyBox.value
    }
    // obj = notifyBox
}

// all - purpose console log (alle argumente)
function cl() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function init() {
    master = document.getElementById("master")
    guessRows = document.getElementById("guesses")
    notifyBox = document.getElementById("notify")
    newGame()
}
// alles Neu machen
function newGame() {
    initMaster()
    initGuesses()
    notifyBox.value = "Neues Spiel gestartet"
}

function initMaster() {
    master.innerHTML = ""
    masterRow = Factory.getCode(true) // master
    master.appendChild(masterRow)
}
function initGuesses() {
    guessRows.innerHTML = ""
    guessRows.prepend(Factory.getCode())
}

