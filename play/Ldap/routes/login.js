const express = require("express");
const router = express.Router();
const spg_ldap = require("../utils/spg_ldap");

router.post("/", (req, res) => {
    try {
        const user = req.body.user;
        const pass = req.body.passwd;
        const binddn = spg_ldap.getDN(user);
        spg_ldap.tryBind(binddn, pass, (boool) => {
            if (boool) {
                res.status(200).json({
                    dn: binddn,
                    token: "your_goilo_new_web_token",
                });
            } else {
                res.status(401).json({
                    error: "Invalid Creds",
                    ip: req.client.localAddress,
                    family: req.client.localFamily,
                    port: req.client.localPort,
                });
            }
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});
module.exports = router;
