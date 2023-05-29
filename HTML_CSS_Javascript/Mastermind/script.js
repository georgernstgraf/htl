var obj;
var masterCode = document.getElementById("masterCode")

function rotateColor(par) {
    par.colorrotator.rotate()
}

function shuffle(row) {
    ammendCode(row)
    for (let child of row.children) {
        if (child.classList.contains("circle")) {
            child.colorrotator.randomize()
        }
    }
}

function refObj(par) {
    console.log("refObj -- see \"obj\"")
    console.log(par)
    obj = par;
}

function ammendCode(row) {
    for (let child of row.children) {
        if (child.classList.contains("circle") && child.colorrotator == undefined) {
            child.colorrotator = new MyColors(child)
        }
    }
}

// window.onload = ammendCode(masterCode)