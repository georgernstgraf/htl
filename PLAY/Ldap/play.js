var jwt = require("jsonwebtoken");
// const { KeyObject, createSecretKey, createPublicKey } = require("crypto");
if (typeof window != "undefined") {
    window.jwt = jwt;
}
const tok = jwt.sign("georg", "graf");
console.log(tok);
