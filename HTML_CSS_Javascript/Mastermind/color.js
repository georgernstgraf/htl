"use strict"

// Klasse für EINEN STECKER (PEG)
class Color {

    obj = undefined
    currentValue = undefined
    visible = undefined
    isUpdated = undefined
    domObj = null

    static rgbValues = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#00ffff",
        "#ff00ff"
    ]

    // liefere mir den RGB String für 0 .. 5
    static getRGB(i) {
        return this.rgbValues[i % this.rgbValues.length]
    }

    constructor(parent, num) {
        this.obj = parent
        this.currentValue = 0
        this.visible = true
        this.isUpdated = false
        this.domObj = document.createElement("div")
        this.domObj.obj = this
        this.domObj.classList.add("circle")
        this.domObj.classList.add("peg")
        this.domObj.classList.add(`s${num}`)
        this.domObj.addEventListener("click", (e) => { e.target.obj.rotate() })
    }

    updateDisplay(visible = true) {
        this.visible = visible
        // cl("update", this, visible)
        if (visible) {
            this.domObj.style.backgroundColor = Color.getRGB(this.currentValue)
        } else {
            this.domObj.style.backgroundColor = "#ddd"
        }
    }

    setInt(i) {
        this.currentValue = i;
        this.updateDisplay(true)
        this.isUpdated = true
    }

    randomize() {
        this.currentValue = Math.floor(Math.random() * 6)
        this.updateDisplay(false)
        this.isUpdated = true
    }

    rotate() {
        if (!this.visible) {
            this.obj.parent.notify("Ist unsichtbar -> Keine Änderung")
            return
        }
        if (!this.isUpdated) {
            this.isUpdated = true
        } else {
            this.currentValue = (this.currentValue + 1) % 6
        }
        this.updateDisplay(true)
    }
}