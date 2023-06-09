"use strict"
class Code {

    parent = null
    domObj = null
    colorArray = null
    visible = true
    isBewerted = false

    constructor(parent) {
        this.parent = parent
        this.domObj = document.createElement("div")
        this.domObj.classList.add("this.domObj")
        this.domObj.controller = this

        let col
        this.colorArray = []
        for (let i = 1; i <= 4; i++) {
            col = new Color(this, i)
            this.domObj.appendChild(col.domObj)
            this.colorArray.push(col)
        }
    }

    shuffle() {
        for (let color of this.colorArray) {
            color.randomize()
        }
    }

    makeVisible(visible) {
        this.visible = visible
        for (let color of this.colorArray) {
            color.updateDisplay(visible)
        }
    }

    toggleVisibility() {
        this.makeVisible(!this.visible)
    }

}

class Master extends Code {
    constructor(parent) {
        super(parent)
        let button
        button = document.createElement("button")
        button.classList.add("neuSpiel")
        button.innerHTML = "Neues\nSpiel"
        button.onclick = parent.newGame
        this.domObj.appendChild(button)
        button = document.createElement("button")
        button.classList.add("visible")
        button.innerText = "Zeig\nher"
        button.addEventListener("click", (e) => {
            e.target.parentElement.code.toggleVisibility()
            if (e.target.innerText == "Zeig\nher") {
                e.target.innerText = "Ver-\nsteck"
            } else {
                e.target.innerText = "Zeig\nher"
            }
        })
        this.domObj.appendChild(button)
        this.shuffle()
        this.makeVisible(false)
    }
}




class Guess extends Code {  // Whole Row
    bewertePegs = []
    constructor(parent) {  // TODO Master verankern für Bewertung
        super(parent)
        let button = document.createElement("button")
        button.classList.add("bewerte")
        button.innerText = "Bewerten"
        button.addEventListener("click", (e) => {
            this.domObj.code.bewerte(e.target.parentElement.code)
        })
        this.domObj.appendChild(button)
        button = document.createElement("button")
        button.classList.add("autoGuess")
        button.innerHTML = "Auto Rate"
        button.addEventListener("click", (e) => { notify("autoTODO", e.target.parentElement) }) // TODO
        this.domObj.appendChild(button)

        let peg
        for (let i = 1; i <= 4; i++) {
            peg = new BewertePeg(this, i)
            this.bewertePegs.push(peg)
            this.domObj.appendChild(peg.domObj)
        }
    }
    isComplete() {   // TODO rename sinnvoll
        let rw = true
        for (let color of this.colorArray) {
            if (!color.isUpdated) { rw = false }
        }
        return rw
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
                guesses.prepend(Factory.getCode())
            } else {
                guesses.prepend(new RowWin().domObj)
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

class BewertePeg {
    parent = null
    domObj = null
    constructor(parent, i) {
        this.parent = parent
        let circ = document.createElement("div")
        circ.classList.add("circle")
        circ.classList.add("bew")
        circ.classList.add(`b${i}`)
        this.domObj = circ
    }
}

class RowWin {
    domObj = null
    constructor() {
        this.domObj = document.createElement("div")
        this.domObj.classList.add("this.domObj")
        let win = document.createElement("div")
        win.classList.add("win")
        win.innerHTML = "Gewonnen!"
        this.domObj = this.domObj
    }
}

