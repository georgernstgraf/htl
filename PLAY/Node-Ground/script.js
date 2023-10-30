const SHA256 = require("sha256-es").default;
const onBrowser = typeof window !== "undefined";
console.log(`Browser: ${onBrowser}`);
if (onBrowser) window.SHA256 = SHA256;
