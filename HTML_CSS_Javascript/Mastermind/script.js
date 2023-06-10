"use strict"

var obj
var main

// Hilfsfunktion, damit ich dann mit dem obj in der Konsole herumspielen kann

// all - purpose console log (alle argumente)
function cl() {
    console.log("CL - last is in obj")
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    obj = arguments[arguments.length - 1]
}

/* 
    Jedes Objekt von mir kriegt im Contruktor mich übergeben => this.parent
    Jedes Objekt von mir kriegt das Dom Element an dem es hängt mit => this.domObj    

    Jedes Dom Element kriegt das erzeugende Objekt mit => this.obj
*/

function init() {
    main = new Main(
        document.getElementById("master"),
        document.getElementById("guesses"),
        document.getElementById("notify"))
    main.newGame()
}
