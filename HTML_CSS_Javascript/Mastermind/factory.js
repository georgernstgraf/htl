"use strict"
class Factory {

    static getRow(master = false) {
        let zeile, button, circ, i
        zeile = document.createElement("div")
        zeile.classList.add("zeile")
        zeile.code = new Code(zeile)
        button = document.createElement("button")
        if (master) {
            button.classList.add("neuSpiel")
            button.innerHTML = "Neues\nSpiel"
            button.onclick = newGame
        }
        else {
            button.classList.add("bewerte")
            button.innerText = "Bewerten"
            button.addEventListener("click", (e) => {
                zeile.code.bewerte(e.target.parentElement.code)
            })
            zeile.appendChild(button)
            button = document.createElement("button")
            button.classList.add("autoGuess")
            button.innerHTML = "Auto Rate"
            button.addEventListener("click", (e) => { notify("autoTODO", e.target.parentElement) }) // TODO
            zeile.appendChild(button)
        }
        zeile.appendChild(button)
        for (i = 1; i <= 4; i++) {
            circ = null
            circ = document.createElement("div")
            circ.classList.add(`s${i}`)
            circ.classList.add("circle")
            circ.classList.add("peg")
            circ.colorrotator = new ColorRotator(circ)
            circ.addEventListener("click", (e) => { e.target.colorrotator.rotate() })
            zeile.appendChild(circ)
            zeile.code.shuffle() // TODO debugging option
            zeile.code.makeVisible(true)
        }
        if (master) {
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
            zeile.appendChild(button)
            zeile.code.shuffle()
            zeile.code.makeVisible(false)

        } else {
            for (i = 1; i <= 4; i++) {
                circ = document.createElement("div")
                circ.classList.add(`b${i}`)
                circ.classList.add("circle")
                circ.classList.add("bew")
                zeile.appendChild(circ)
            }
        }
        return zeile
    }
    static getWin() {
        let zeile, win
        zeile = document.createElement("div")
        zeile.classList.add("zeile")
        win = document.createElement("div")
        win.classList.add("win")
        win.innerHTML = "Gewonnen!"
        zeile.appendChild(win)
        return zeile
    }
}