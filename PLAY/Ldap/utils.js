const ldap = require("ldapjs");
const client = ldap.createClient({
    url: "ldaps://ldap.spengergasse.at",
});

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
    client.bind(user, pass, (err) => {
        // console.log("MY MY MY", err); // null bzw. LDAPError
        // console.log("HE HE HE", res); // BindResponse bzw. undefined
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
