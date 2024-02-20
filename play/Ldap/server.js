const express = require("express");
const app = express();
app.use(express.json());

const loginRouter = require("./routes/login");
app.use("/login", loginRouter);
app.listen(3000, "schurlibua", (msg) => console.log(msg));
