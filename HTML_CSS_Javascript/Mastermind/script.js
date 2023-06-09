"use strict"

var obj
var main

// Hilfsfunktion, damit ich dann mit dem obj in der Konsole herumspielen kann
function capture(par) {
    cl("capture (stored in obj)", par)
    obj = par
}

// all - purpose console log (alle argumente)
function cl() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

/* 
    Jedes Objekt von mir kriegt im Contruktor mich übergeben ???

    Jedes Dom Element kriegt genau einen Controller (Objekte unterschiedlicher Klassen)
        // this.controller
    Jeder Controller kriegt das Dom Element an dem er hängt im Construktor mit und speichert es als
        // this.domObj"
*/

function init() {
    main = new Main(
        document.getElementById("master"),
        document.getElementById("guesses"),
        document.getElementById("notify"))
    main.newGame()
}
