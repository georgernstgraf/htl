const ldap = require("ldapjs");

function getDN(cn) {
    if (cn == undefined || !cn.startsWith("l_")) {
        return undefined;
    }
    return `cn=${cn.slice(
        2
    )},ou=Lehrer,ou=Automatisch gewartete Benutzer,ou=Benutzer,ou=SPG,DC=htl-wien5,dc=schule`;
}
function tryBind(binddn, pass, cb) {
    if (!cb) {
        console.error("No Callback provided");
        return;
    }
    if (!binddn || !pass) {
        cb(false);
        return;
    }
    // console.log(`Trying BIND with CREDS: ${binddn} / ${pass}`);
    const client = ldap.createClient({
        url: "ldaps://ldap.spengergasse.at",
    });
    client.bind(binddn, pass, (err) => {
        // console.log(`RESULT OF BIND with CREDS: ${binddn} / ${pass}`);
        client.unbind();
        if (!err) {
            cb(true);
            return;
        } else {
            cb(false);
            return;
        }
    });
}
module.exports = {
    getDN,
    tryBind,
};
