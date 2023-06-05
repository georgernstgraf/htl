"use strict"

var obj;
var master
var guesses
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
    guesses = document.getElementById("guesses")
    notifyBox = document.getElementById("notify")
    newGame()
}
// alles Neu machen
function newGame() {
    initGuesses()
    initMaster()
    notifyBox.value = "Neues Spiel gestartet"
}

function initGuesses() {
    guesses.innerHTML = ""
    guesses.prepend(Factory.getRow())
}

function initMaster() {
    master.innerHTML = ""
    masterRow = Factory.getRow(true) // master
    master.appendChild(masterRow)
}