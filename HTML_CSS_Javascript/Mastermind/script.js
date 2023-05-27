var obj;
var masterCode = document.getElementById("masterCode")

function rotateColor (par) {
    par.colorrotator.rotate()
}

function refObj (par) {
    obj = par;
}

function ammendCode (div) {
    for (let span of div.children) {
        span.colorrotator = new MyColors(span)
    }
}

window.onload=ammendCode(masterCode)