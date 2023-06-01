"use strict"

var obj;
var masterCode = undefined

function rotateColor(par) {
    par.colorrotator.rotate()
}

function shuffle(row) {
    cl("shuffle", row)
    for (let child of row.children) {
        if (child.classList.contains("circle")) {
            child.colorrotator.randomize()
        }
    }
}

function makeVisible(row, bool) {
    cl("makeVibile", row, bool)
    row.visible = bool
    for (let child of row.children) {
        if (child.classList.contains("circle")) {
            child.colorrotator.setVisible(bool)
        }
    }
}

// Hilfsfunktion, damit ich dann mit dem obj in der Konsole herumspielen kann
function capture(par) {
    cl("capture (stored in obj)", par)
    obj = par
}


function initGuesses() {
    // TODO clear guesses and add one empty guess
}

// onclick des "toggle Visibility" Buttons
function toggleVisibility(row) {
    cl("togglevisibilty", row)
    row.visible = !row.visible
    makeVisible(row, row.visible)
}

// alle "circle" child elemente kriegen den colorrotator angehängt
// die "row" kriegt den boolean "visible"
function ammendCode(row) {
    cl("ammendCode", row)
    row.visible = true
    for (let child of row.children) {
        if (child.classList.contains("circle") && child.colorrotator == undefined) {
            child.colorrotator = new MasterMindColors(child)
        }
    }
}

// all - purpose console log (alle argumente)
function cl() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// alles Neu machen
function newGame() {
    cl("new game called")
    masterCode = document.getElementById("masterCode")
    ammendCode(masterCode)
    shuffle(masterCode)
    makeVisible(masterCode, false)
    initGuesses()
}
