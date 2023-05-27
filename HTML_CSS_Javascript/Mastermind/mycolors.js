class MyColors {
    static rgbValues = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#00ffff",
        "#ff00ff"
    ]
    static getRGB (i) {
        return this.rgbValues [i % this.rgbValues.length] 
    }
    constructor (parent) {  // 
        this.parent = parent
        this.currentValue = 0
        this.updateParent()
    }
    updateParent () {
        this.parent.style.backgroundColor=MyColors.getRGB(this.currentValue)
    }
    
    rotate () {
        this.currentValue = (this.currentValue + 1) % 6
        this.updateParent()
    }    
}