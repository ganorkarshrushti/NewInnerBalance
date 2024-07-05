const express = require("express");
const cors = require("cors");
const adminLogin = require("./login");
const gemRoute = require("./chatt");

const PORT = process.env.PORT || 5000;
const app = express(); 

app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
  res.send("Hello world")
})
app.use("/login", adminLogin);
app.use("/signup", require("./signup"));
app.use("/journal", require("./journal"));
app.use("/gem", gemRoute); // Mount gem.js router at /gem

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
