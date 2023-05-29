class MasterMindColors {
    static rgbValues = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#00ffff",
        "#ff00ff"
    ]
    static getRGB(i) {
        return this.rgbValues[i % this.rgbValues.length]
    }
    constructor(parent) {  // 
        this.parent = parent
        this.currentValue = -1
        //this.updateParent()
    }
    display(bool) {
        if (bool) {
            this.parent.style.backgroundColor = MasterMindColors.getRGB(this.currentValue)
        } else {
            this.parent.style.backgroundColor = "#ddd"
        }
    }
    randomize() {
        this.currentValue = Math.round(Math.random() * 6)
        this.display()
    }
    rotate() {
        this.currentValue = (this.currentValue + 1) % 6
        this.display()
    }
}