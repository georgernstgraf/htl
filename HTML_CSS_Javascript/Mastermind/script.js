var obj;
var masterCode = document.getElementById("masterCode")

function rotateColor(par) {
    par.colorrotator.rotate()
}

function shuffle(row) {
    cl("shuffle", row)
    for (let child of row.children) {
        if (child.classList.contains("circle")) {
            child.colorrotator.randomize()
        }
    }
}

function capture(par) {
    cl("capture (stored in obj)", par)
    obj = par
}

function makeVisible(row, bool) {
    cl("makeVibile", row, bool)
    row.visibility = bool
    for (let child of row.children) {
        if (child.classList.contains("circle")) {
            child.colorrotator.display(bool)
        }
    }
}

function initGuesses() {
    // TODO clear guesses and add one empty guess
}
function toggleVisibility(row) {
    cl("togglevisibilty", row)
    row.visibility = !row.visibility
    makeVisible(row, row.visibility)

}
function ammendCode(row) {
    cl("ammendCode", row)
    row.visibility = true
    for (let child of row.children) {
        if (child.classList.contains("circle") && child.colorrotator == undefined) {
            child.colorrotator = new MasterMindColors(child)
        }
    }
}

function cl() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function newGame() {
    ammendCode(masterCode)
    shuffle(masterCode)
    makeVisible(masterCode, false)
    initGuesses()
}

window.onload = newGame()
