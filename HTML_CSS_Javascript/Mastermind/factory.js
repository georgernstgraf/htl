"use strict"
class Factory {
    /* <div class="zeile">
            <button class="bewerte" onclick="bewerte(this.parentElement)">Bewerten</button>
            <div class="s1 circle" onclick="rotateColor(this)"></div>
            <div class="s2 circle" onclick="rotateColor(this)"></div>
            <div class="s3 circle" onclick="rotateColor(this)"></div>
            <div class="s4 circle" onclick="rotateColor(this)"></div>
            <div class="b1 circle"></div>
            <div class="b2 circle"></div>
            <div class="b3 circle"></div>
            <div class="b4 circle"></div>
        </div> */
    static getRow(master = false) {
        let circ, i
        let zeile = document.createElement("div")
        zeile.classList.add("zeile")
        let button = document.createElement("button")
        button.classList.add("bewerte")
        button.onclick = function () {
            bewerte(this.parentElement)
        }
        button.innerText = "Bewerten"
        zeile.appendChild(button)
        for (i = 1; i <= 4; i++) {
            circ = document.createElement("div")
            circ.classList.add(`s${i}`)
            circ.classList.add("circle")
            circ.onclick = function () { rotateColor(this) }
            circ.colorrotator = new ColorRotator(circ)
            zeile.appendChild(circ)
        }
        for (i = 0; i < 4; i++) {
            circ = document.createElement("div")
            circ.classList.add(`b{i}`)
            circ.classList.add("circle")
            zeile.appendChild(circ)
        }
        return zeile
    }
}