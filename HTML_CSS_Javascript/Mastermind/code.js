"use strict"
class Code {

    parent = null
    domObj = null
    colorArray = null
    visible = true
    isBewerted = false

    constructor(parent) {
        this.parent = parent  // parent = main
        this.domObj = document.createElement("div")
        this.domObj.classList.add("row")
        this.domObj.obj = this

        let col
        this.colorArray = []
        for (let i = 1; i <= 4; i++) {
            col = new Color(this, i)
            this.domObj.appendChild(col.domObj)
            this.colorArray.push(col)
        }
    }

    getPrimitive() {
        let rw = []
        for (let color of this.colorArray) {
            rw.push(color.currentValue)
        }
        return rw
    }

}

class Master extends Code {
    constructor(parent) {  // parent: main!
        super(parent)
        let button
        button = document.createElement("button")
        button.obj = this
        button.classList.add("neuSpiel")
        button.innerHTML = "Neues\nSpiel"
        button.addEventListener("click", (e) => {
            // cl("Neues Spiel // target", e.target)
            // e.target.parentElement.obj.obj.newGame()
            e.target.obj.parent.newGame()
        })
        this.domObj.appendChild(button)
        // Versteck Button
        button = document.createElement("button")
        button.obj = this
        button.classList.add("visible")
        button.innerText = "Zeig\nher"
        button.addEventListener("click", (e) => {
            //cl("zeige // e.target", e.target)
            e.target.obj.toggleVisibility()
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

    getPossibilities() {
        let rw = []
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                for (let k = 0; k < 6; k++) {
                    for (let l = 0; l < 6; l++) {
                        rw.push([i, j, k, l])
                    }
                }
            }
        }
        return rw
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




class Guess extends Code {  // Whole Row
    bewertePegs = []
    possibilitiesInherited = null // array
    constructor(parent, possibilities) {  // TODO Master verankern für Bewertung
        super(parent)
        this.possibilitiesInherited = possibilities
        // Bewerte - Button
        let button = document.createElement("button")
        button.obj = this
        button.classList.add("bewerte")
        button.innerText = "Bewerten"
        button.addEventListener("click", (e) => {
            cl("e.target", e.target)
            e.target.obj.bewerte()
        })
        this.domObj.appendChild(button)

        // auto Rate Button
        button = document.createElement("button")
        button.obj = this
        button.classList.add("autoGuess")
        button.innerHTML = "Auto Rate"
        button.addEventListener("click", (e) => {
            e.target.obj.autoGuess()

        })
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

    bewerte(master = null) {
        let rw, guessArray, bewCount
        if (!this.isComplete()) {
            this.parent.notify("Code ist nicht fertig, kann nicht bewerten")
            return
        }
        if (master == null) {
            master = this.parent.master.getPrimitive()
        }
        guessArray = this.getPrimitive()
        this.parent.notify(`master: ${master}`)
        this.parent.notify(`guessA: ${guessArray}`)
        rw = this.getBewertung(master, guessArray)
        this.parent.notify(`Bewertung: ${rw[0]} schwarze und ${rw[1]} weisse`)
        bewCount = 1
        for (let i = 0; i < rw[0]; i++) {
            this.domObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#000"
            bewCount++
        }
        for (let i = 0; i < rw[1]; i++) {
            this.domObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#fff"
            bewCount++
        }
        for (; bewCount <= 4; bewCount++) {
            this.domObj.getElementsByClassName(`b${bewCount}`)[0].style.backgroundColor = "#888"
        }
        if (!this.isBewerted) {
            if (rw[0] < 4) {
                this.parent.prependGuess() // TODO
            } else {
                this.parent.prependWin()  // TODO
            }
        } else {
            this.parent.notify("Ist schon bewertet!")
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
    autoGuess() {
        let maxDiverstityArray = this.getMaxDiversities(this.possibilitiesInherited)
        let autoGuess = maxDiverstityArray[Math.floor(Math.random() * maxDiverstityArray.length)]
        this.updateSelf(autoGuess)
    }

    updateSelf(guess) {
        for (let i = 0; i < 4; i++) {
            this.colorArray[i].setInt(guess[i])
        }
    }
    getMaxDiversities(arr) {
        let dict = new Map()
        for (let i = 0; i < arr.length; i++) {
            let div = this.getDiversity(arr[i])
            if (!dict.has(div)) {
                dict.set(div, [])
            }
            dict.get(div).push(arr[i])
        }
        let keys = Array.from(dict.keys()).sort()
        return dict.get(keys.pop())
    }
    getDiversity(arr) {
        let symbols = []
        for (let i = 0; i < arr.length; i++) {
            if (!symbols.includes(arr[i])) {
                symbols.push(arr[i])
            }
        }
        return symbols.length
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
    constructor(parent) {
        this.parent = parent
        this.domObj = document.createElement("div")
        this.domObj.classList.add("row")
        let win = document.createElement("div")
        win.classList.add("win")
        win.innerHTML = "Gewonnen!"
        this.domObj.appendChild(win)
    }
}
