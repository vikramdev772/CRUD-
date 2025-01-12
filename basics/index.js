
const express = require("express")
const server = express()
require("dotenv").config()
const router=require("./router")
server.use(express.json())
server.use("/api",router)
server.get("/",(req,res)=>res.json({server:"server started"}))
server.listen(process.env.PORT,()=>console.log(`\n\t http://127.0.0.1:${process.env.PORT}\n`));


