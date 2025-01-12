const express = require("express");
const router = require("./router")
const app = express()
const port=4040;
app.use(express.json())
app.use("/api",router)
app.get("/",(req,res)=>{res.json({server: "server started "})})

app.listen(port,()=>{console.log(`\n\t http://127.0.0.1:${port}\n`)});