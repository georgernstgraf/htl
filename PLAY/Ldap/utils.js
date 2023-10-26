const ldap = require("ldapjs");

function getDN(cn) {
    if (cn == undefined || !cn.startsWith("l_")) {
        return `cn=nosuchuser,ou=Benutzer,ou=SPG,DC=htl-wien5,dc=schule`;
    }
    return `cn=${cn.slice(
        2
    )},ou=Lehrer,ou=Automatisch gewartete Benutzer,ou=Benutzer,ou=SPG,DC=htl-wien5,dc=schule`;
}
function tryBind(user, pass, cb) {
    console.log(`Trying BIND with CREDS: ${user} / ${pass}`);
    const client = ldap.createClient({
        url: "ldaps://ldap.spengergasse.at",
    });
    client.bind(user, pass, (err) => {
        console.log(`RESULT OF BIND with CREDS: ${user} / ${pass}`);
        client.unbind();
        if (err == null) cb(true);
        else cb(false);
    });
}
module.exports = {
    getDN,
    tryBind,
};
