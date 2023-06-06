"use strict"
class Code {

    myObj = undefined  // Zeile
    visible = true
    isBewerted = false

    constructor(myObj) {
        this.myObj = myObj
    }

    isComplete() {
        let rw = true
        for (let child of this.myObj.children) {
            if (child.classList.contains("peg") && !child.colorrotator.isUpdated) { rw = false }
        }
        return rw
    }

    getList() {
        let rw = []
        for (let child of this.myObj.children) {
            if (child.classList.contains("peg")) {
                rw.push(child.colorrotator.currentValue)
            }
        }
        return rw
    }

    shuffle() {
        for (let child of this.myObj.children) {
            if (child.classList.contains("peg")) {
                child.colorrotator.randomize()
            }
        }
    }

    makeVisible(bool) {
        // cl("makeVisible", row, bool)
        this.myObj.visible = bool
        for (let child of this.myObj.children) {
            if (child.classList.contains("peg")) {
                child.colorrotator.updateDisplay(bool)
            }
        }
    }

    toggleVisibility() {
        // cl("togglevisibilty", row)
        this.makeVisible(!this.myObj.visible)
    }
    bewerte(guess) {
        let rw, guessArray, i, bewCount
        if (!guess.isComplete()) {
            notify("Code ist nicht fertig, kann nicht bewerten")
            return
        }
        let master = masterRow.code.getList()
        guessArray = guess.getList()
        notify(`master: ${master}`)
        notify(`guessA: ${guessArray}`)
        rw = this.getBewertung(master, guessArray)
        notify(`Bewertung: ${rw[0]} schwarze und ${rw[1]} weisse`)
        bewCount = 1
        for (i = 0; i < rw[0]; i++) {
            guess.myObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#000"
            bewCount++
        }
        for (i = 0; i < rw[1]; i++) {
            guess.myObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#fff"
            bewCount++
        }
        for (; bewCount <= 4; bewCount++) {
            guess.myObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#888"
        }
        if (!this.isBewerted) {
            if (rw[0] < 4) {
                guesses.prepend(Factory.getRow())
            } else {
                guesses.prepend(Factory.getWin())
            }
        } else {
            notify("Ist schon bewertet!")
        }
        this.isBewerted = true
    }
    getBewertung(master, guess) { // master & guess are int[4], return int[2]
        let schwarze = 0, weisse = 0
        // Erst die Anzahl der schwarzen berechnen und sowohl Vorgabe als auch Versuch auf undefined setzen
        for (let i = 0; i < guess.length; i++) {
            if (master[i] == guess[i]) {
                schwarze++;
                master[i] = undefined
                guess[i] = undefined
            }
        }
        // weisse finden
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] == undefined)  // Für den wurde bereits ein schwarzer vergeben
            {
                continue; // i.e. try next peg of guess
            }
            // suche diesen Stecker irgendwo im master
            for (let j = 0; j < guess.length; j++) {
                if (master[j] == guess[i]) {
                    weisse++;
                    guess[i] = undefined // redundant because of the break
                    master[j] = undefined
                    break;  // Falls es noch andere der gleichen Farbe in der Vorgabe gibt, werden diese nicht gezählt
                }
            }
        }
        return [schwarze, weisse]
    }
}
