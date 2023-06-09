"use strict"
class Main {

    master = null
    guesses = null

    domMaster = null
    domGuessesField = null
    domNotifyBox = null

    constructor(master, guesses, notify) {
        this.domMaster = master
        this.domGuessesField = guesses
        this.domNotifyBox = notify
    }

    newGame() { // TODO reorg callers
        this.initMaster()
        this.initGuesses()
        this.domNotifyBox.value = "Neues Spiel gestartet"
    }

    initGuesses() {
        this.guesses = [new Guess(this)]
        this.domGuessesField.innerHTML = ""
        this.domGuessesField.prepend(this.guesses[0].domObj) // master = false
    }

    initMaster() {
        this.master = new Master(this)
        this.domMaster.innerHTML = ""
        this.domMaster.appendChild(this.master.domObj)
    }

    notify() {
        let t = new Date().toLocaleTimeString()
        for (let i = 0; i < arguments.length; i++) {
            domNotifyBox.value = `${t}: ${arguments[i]}\n` + domNotifyBox.value
        }
    }


}