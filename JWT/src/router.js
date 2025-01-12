const route=require("express").Router()
const signUp = require("./signup.controller")
const signin = require("./signin.controller")
route.post("/signup",signUp)
route.post("/signin",signin)
module.exports = route;
