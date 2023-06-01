"use strict"
class Guess {

    /*
    <div id="masterCode" class="row">
        <div id="newGame">
            <button type="button" onclick="newGame()">new<br />Game</button>
        </div>
        <div class="circle" id="as1" onclick="rotateColor(this)"></div>
        <div class="circle" id="as2" onclick="rotateColor(this)"></div>
        <div class="circle" id="as3" onclick="rotateColor(this)"></div>
        <div class="circle" id="as4" onclick="rotateColor(this)"></div>
        <div id="toggleVis">
            <button type="button" onclick="toggleVisibility(this.parentElement.parentElement)">
                toggle<br />Visibility
            </button>
        </div>
    </div>
     */
    parent = undefined

    static getElement (parent) {
        var row = document.createElement("div")    
        row.className = "row"   
    }
}
