const utils = require("./utils.js");
require("dotenv").config();

const grafgsec = process.env.grg_tok;
const grafDN = utils.getDN(process.env.grg_uid);

const urxnsec = process.env.urxn_tok;
const urxnDN = utils.getDN("e_urxn");
// console.log(`try: ${grafDN} with ${secret}`);
function cb(user, res) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`${i}: `, arguments[i]);
    }
    if (res) {
        console.log("HURRA");
    } else {
        console.log("OJE");
    }
}
utils.tryBind(urxnDN, urxnsec, cb.bind(null, urxnDN));
utils.tryBind(grafDN, grafgsec, cb.bind(null, grafDN));
