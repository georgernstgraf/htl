"use strict"
class Code {
    parent = undefined

    constructor(parent) {
        this.parent = parent
    }

    getList() {
        rw = []
        for (let child of this.parent.children) {
            if (child.classList.contains("peg")) {
                rw.push(child.colorrotator.currentValue)
            }
        }
        return rw
    }
}
