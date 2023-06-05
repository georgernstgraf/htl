"use strict"

// Klasse für EINEN STECKER (PEG)
class ColorRotator {

    parent = undefined
    currentValue = undefined
    visible = undefined
    isUpdated = undefined

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
        this.updated = false
    }

    updateDisplay(visible) {
        this.visible = visible
        // cl("update", this, visible)
        if (visible) {
            this.parent.style.backgroundColor = ColorRotator.getRGB(this.currentValue)
        } else {
            this.parent.style.backgroundColor = "#ddd"
        }
    }

    randomize() {
        this.currentValue = Math.floor(Math.random() * 6)
        this.updateDisplay()
        this.isUpdated = true
    }

    rotate() {
        if (!this.visible) {
            notify("Ist unsichtbar -> Keine Änderung")
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