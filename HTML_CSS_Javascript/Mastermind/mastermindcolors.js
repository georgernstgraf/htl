"use strict"
class MasterMindColors {

    parent = undefined
    currentValue = undefined
    visible = undefined

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

    constructor(parent) {  // 
        this.parent = parent
        this.currentValue = 0
        this.visible = true
        //this.updateParent()
    }

    setVisible(bool) {
        this.visible = bool
        this.updateDisplay()
    }

    toggleVisibility() {
        this.visible = !this.visible
        this.updateDisplay()
    }

    updateDisplay() {
        if (this.visible) {
            this.parent.style.backgroundColor = MasterMindColors.getRGB(this.currentValue)
        } else {
            this.parent.style.backgroundColor = "#ddd"
        }
    }

    randomize() {
        this.currentValue = Math.round(Math.random() * 6)
        this.updateDisplay()
    }

    rotate() {
        if (!this.visible) {
            console.log("NOT CHANGING AN INVISIBLE CIRCLE")
            return
        }
        this.currentValue = (this.currentValue + 1) % 6
        this.updateDisplay()
    }

}